"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  sellabilityQuestions,
  sellabilityCategoryColors,
  sellabilityCategoryConfig,
  sellabilityTierFeedback,
  getSellabilityTier,
  getCategoryPercentage,
  getPriorityActions,
} from "@/lib/sellability-data";
import {
  trackBSAStart,
  trackBSAComplete,
  trackBSABookCall,
  trackBSACallbackRequest,
} from "@/lib/gtag";

const categoryOrder = [
  "Founder Independence",
  "Systems & Processes",
  "Financial Visibility",
  "Revenue Predictability",
  "Exit Readiness",
] as const;

const ScoreGauge = memo(function ScoreGauge({ score, maxScore, color }: { score: number; maxScore: number; color: string }) {
  const percentage = score / maxScore;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <div className="score-gauge">
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ willChange: 'auto' }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle
          cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset} transform="rotate(-90 50 50)"
          style={{ willChange: 'auto' }}
        />
      </svg>
      <div className="gauge-text">
        <span className="gauge-score">{score}</span>
        <span className="gauge-max">/{maxScore}</span>
      </div>
    </div>
  );
});

export default function SellabilityPage() {
  const [step, setStep] = useState<"intro" | "questions" | "results">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const orientationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleOrientationChange = () => {
      setIsAnimating(false);
      if (orientationTimeoutRef.current) clearTimeout(orientationTimeoutRef.current);
      orientationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
      }, 500);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      if (orientationTimeoutRef.current) clearTimeout(orientationTimeoutRef.current);
    };
  }, []);

  const handleAnswer = useCallback((score: number) => {
    setAnswers({ ...answers, [currentQuestion]: score });
  }, [answers, currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < sellabilityQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = computeScores();
      const totalScore = Object.values(result.scores).reduce((a, b) => a + b, 0);
      const tier = getSellabilityTier(totalScore);
      trackBSAComplete(totalScore, tier);
      setStep("results");
      sendResultsEmail();
    }
  };

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }, [currentQuestion]);

  const handleStart = useCallback(() => {
    if (email && name) {
      trackBSAStart();
      setStep("questions");
    }
  }, [email, name]);

  const handleDevTest = () => {
    const testAnswers: Record<number, number> = {};
    for (let i = 0; i < 20; i++) testAnswers[i] = 1;
    setAnswers(testAnswers);
    if (!email) setEmail("test@example.com");
    if (!name) setName("Test User");
    setStep("results");
    setTimeout(() => sendResultsEmail(), 100);
  };

  const computeScores = () => {
    const fi = sellabilityQuestions.slice(0, 5).reduce((sum, _, i) => sum + (answers[i] || 0), 0);
    const sp = sellabilityQuestions.slice(5, 9).reduce((sum, _, i) => sum + (answers[i + 5] || 0), 0);
    const fv = sellabilityQuestions.slice(9, 13).reduce((sum, _, i) => sum + (answers[i + 9] || 0), 0);
    const rp = sellabilityQuestions.slice(13, 17).reduce((sum, _, i) => sum + (answers[i + 13] || 0), 0);
    const er = sellabilityQuestions.slice(17, 20).reduce((sum, _, i) => sum + (answers[i + 17] || 0), 0);
    return {
      scores: {
        "Founder Independence": fi,
        "Systems & Processes": sp,
        "Financial Visibility": fv,
        "Revenue Predictability": rp,
        "Exit Readiness": er,
      },
      totalScore: fi + sp + fv + rp + er,
    };
  };

  const sendResultsEmail = async () => {
    setIsEmailSending(true);
    const { scores, totalScore } = computeScores();

    try {
      await fetch("/api/sellability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, name, company, answers,
          scores,
          totalScore,
        }),
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Failed to send sellability email:", error);
    } finally {
      setIsEmailSending(false);
    }
  };

  const { scores, totalScore } = computeScores();
  const tierKey = getSellabilityTier(totalScore);
  const tier = sellabilityTierFeedback[tierKey];
  const overallPercentage = Math.round((totalScore / 80) * 100);

  const progress = ((currentQuestion + 1) / sellabilityQuestions.length) * 100;
  const currentCat = sellabilityQuestions[currentQuestion]?.category || "Founder Independence";
  const catColor = sellabilityCategoryColors[currentCat];

  const catFeedbacks = categoryOrder.map((cat) => {
    const score = scores[cat];
    const config = sellabilityCategoryConfig[cat];
    const pct = getCategoryPercentage(score, cat);
    const color = sellabilityCategoryColors[cat]?.hex || "#3B82F6";
    return {
      name: cat,
      score,
      maxScore: config.maxScore,
      percentage: Math.round(pct),
      color,
      riskFlag: pct < 45 ? config.riskFlag : null,
    };
  });

  const riskFlags = catFeedbacks.filter((c) => c.riskFlag);
  const priorityActions = getPriorityActions(scores);

  const overallScoreColor =
    totalScore >= 60 ? "#10b981" : totalScore >= 44 ? "#3b82f6" : totalScore >= 28 ? "#f59e0b" : "#ef4444";

  return (
    <main className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#3A7BFF] text-[10px] tracking-[0.5em] uppercase font-medium mb-4">
            Is Your Business Worth What You Need to Retire?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            <span className="gradient-text">The Retirement Value Gap</span>
          </h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Most owners discover too late that their business is worth far less than they need to retire on. In 5 minutes, find out exactly what is killing your sale value — and what to do about it.
          </p>
        </motion.div>

        {step === "intro" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl border border-white/10 backdrop-blur-sm p-8 md:p-12 glass"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Find Out What Your Business Is Really Worth
            </h2>
            <p className="text-[#94a3b8] text-center mb-8">
              Enter your details below. We will email you a comprehensive report showing your sellability score, the gap between your current value and your retirement needs, and the priority actions to close it.
            </p>

            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-sm text-[#94a3b8] mb-2">Your Name *</label>
                <input
                  type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder-[#64748b] focus:border-[#3A7BFF] focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-2">Email Address *</label>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder-[#64748b] focus:border-[#3A7BFF] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#94a3b8] mb-2">Business Name (optional)</label>
                <input
                  type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder-[#64748b] focus:border-[#3A7BFF] focus:outline-none transition-colors"
                  placeholder="e.g. Acme Ltd"
                />
              </div>

              <motion.button
                onClick={handleStart} disabled={!email || !name}
                className={`w-full mt-6 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                  email && name
                    ? "bg-[#3A7BFF] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3A7BFF]/25"
                    : "bg-[#0f172a]/80 text-[#64748b] cursor-not-allowed"
                }`}
                whileHover={email && name && !isMobile ? { scale: 1.02 } : {}}
                whileTap={email && name && !isMobile ? { scale: 0.98 } : {}}
              >
                Start Assessment
              </motion.button>
            </div>

            <p className="text-[#64748b] text-xs text-center mt-6">
              Your information is confidential and will never be shared.
            </p>

            <button
              onClick={handleDevTest}
              className="mt-4 text-[10px] text-[#64748b] hover:text-[#94a3b8] underline underline-offset-2 transition-colors"
              title="Dev test: Auto-fill all answers with lowest scores (20/80)"
            >
              [Dev] Test with minimum scores →
            </button>
          </motion.div>
        )}

        {step === "questions" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} className="relative"
          >
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-[#64748b] tracking-wider uppercase">
                  Question {currentQuestion + 1} of {sellabilityQuestions.length}
                </span>
                <span className="text-xs text-[#64748b]">{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-1 bg-[#0f172a]/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#3A7BFF] via-emerald-400 to-violet-500"
                  initial={isAnimating ? { width: 0 } : undefined}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: isMobile ? 0.15 : 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={isAnimating ? { opacity: 0, x: 20 } : undefined}
                animate={isAnimating ? { opacity: 1, x: 0 } : undefined}
                exit={isAnimating ? { opacity: 0, x: -20 } : undefined}
                transition={{ duration: isMobile ? 0.15 : 0.3 }}
                className="relative rounded-3xl border border-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden glass"
                style={{
                  background: `linear-gradient(145deg, rgba(15,23,42,0.6) 0%, ${catColor?.accent || "#60a5fa"}08 100%)`,
                }}
              >
                <div className="mb-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase text-white"
                    style={{ background: catColor?.hex || "#3A7BFF" }}
                  >
                    {sellabilityQuestions[currentQuestion].category}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-[#94a3b8] mb-8 leading-relaxed">
                  {sellabilityQuestions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {sellabilityQuestions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group ${
                        answers[currentQuestion] === option.score
                          ? "border-[#3A7BFF] bg-[#3A7BFF]/10"
                          : "border-white/10 hover:border-[#3A7BFF]/30 hover:bg-[#0f172a]/80"
                      }`}
                      whileHover={!isMobile ? { scale: 1.01 } : {}}
                      whileTap={!isMobile ? { scale: 0.99 } : {}}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            answers[currentQuestion] === option.score
                              ? "border-[#3A7BFF] bg-[#3A7BFF]"
                              : "border-white/10 group-hover:border-[#3A7BFF]/30"
                          }`}
                        >
                          {answers[currentQuestion] === option.score && (
                            <motion.svg
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </motion.svg>
                          )}
                        </div>
                        <span className={`text-base ${
                          answers[currentQuestion] === option.score ? "text-white" : "text-[#64748b] group-hover:text-[#94a3b8]"
                        }`}>
                          {option.text}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="relative z-50 flex items-center justify-between mt-10">
                  <button
                    onClick={handlePrevious} disabled={currentQuestion === 0}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                      currentQuestion === 0 ? "opacity-0 pointer-events-none" : "text-[#64748b] hover:text-white hover:bg-[#0f172a]/80"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext} disabled={answers[currentQuestion] === undefined}
                    className={`px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      answers[currentQuestion] !== undefined
                        ? "bg-[#3A7BFF] hover:bg-[#2563eb] text-white shadow-lg shadow-[#3A7BFF]/25"
                        : "bg-[#0f172a]/80 text-[#64748b] cursor-not-allowed"
                    }`}
                  >
                    {currentQuestion === sellabilityQuestions.length - 1 ? "View Results" : "Next Question"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {catFeedbacks.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-xs text-[#64748b]">{cat.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {step === "results" && (
          <motion.div
            ref={printRef}
            initial={isAnimating ? { opacity: 0, scale: 0.95 } : undefined}
            animate={isAnimating ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="relative rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden glass"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-30 no-print"
              style={{ background: "linear-gradient(135deg, #3A7BFF 0%, transparent 60%)" }}
            />

            <div className="print-only scorecard-report">
              <div className="report-cover">
                <div className="cover-accent" />
                <div className="logo">Retire Without Selling.</div>
                <div className="tagline">Stabilise. Systemise. Scale.</div>
                <h1>Business<br />Sellability Assessment</h1>
                <p className="subtitle">A quantified assessment across 20 critical dimensions covering founder independence, systems, financial visibility, revenue predictability, and exit readiness</p>
                <div className="meta">
                  <div className="meta-item">
                    <span className="meta-label">Prepared for</span>
                    <span className="meta-value">{name}</span>
                    {company && <span className="meta-company">{company}</span>}
                  </div>
                  <div className="meta-divider" />
                  <div className="meta-item">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="confidential-stamp">Confidential</div>
              </div>

              <div className="report-summary">
                <div className="section-header">
                  <span className="section-number" style={{fontSize:28,fontWeight:700,color:'#cbd5e1'}}>01</span>
                  <h2>Executive Summary</h2>
                </div>

                <div className="summary-layout">
                  <div className="score-hero">
                    <div className="score-circle-container">
                      <svg className="score-circle-svg" viewBox="0 0 200 200">
                        <circle className="score-circle-bg" cx="100" cy="100" r="90" />
                        <circle className="score-circle-progress" cx="100" cy="100" r="90"
                          strokeDasharray={`${2 * Math.PI * 90}`}
                          strokeDashoffset={`${2 * Math.PI * 90 * (1 - totalScore / 80)}`}
                        />
                      </svg>
                      <div className="score-content">
                        <div className="score-number" style={{fontSize:32}}>{totalScore}<span className="score-divider">/</span>80</div>
                        <div className="score-label">Overall Score</div>
                      </div>
                    </div>
                    <div className="score-assessment" style={{ color: overallScoreColor }}>
                      {tier.title}
                    </div>
                  </div>

                  <div style={{padding:16}}>
                    <h3 style={{fontSize:12,textTransform:'uppercase',letterSpacing:'0.1em',color:'#64748b',marginBottom:16}}>Category Breakdown</h3>
                    {catFeedbacks.map((cat) => (
                      <div key={cat.name} style={{marginBottom:10}}>
                        <div style={{display:'flex',justifyContent:'space-between',fontSize:10,marginBottom:3}}>
                          <span style={{fontWeight:600,color:'#334155'}}>{cat.name}</span>
                          <span style={{fontWeight:700,color:cat.color}}>{cat.score}/{cat.maxScore}</span>
                        </div>
                        <div style={{height:6,background:'#e2e8f0',borderRadius:3,overflow:'hidden'}}>
                          <div style={{height:'100%',width:`${(cat.score/cat.maxScore)*100}%`,background:cat.color,borderRadius:3}} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="key-insight">
                  <div className="insight-label">Key Insight</div>
                  <p className="insight-text">{tier.paragraph}</p>
                </div>

                <div className="category-grid" style={{gridTemplateColumns:'repeat(5,1fr)',gap:8}}>
                  {catFeedbacks.map((cat) => (
                    <div key={cat.name} className="category-card" style={{borderTopColor:cat.color}}>
                      <div className="category-header-row">
                        <h3 style={{fontSize:9}}>{cat.name}</h3>
                      </div>
                      <ScoreGauge score={cat.score} maxScore={cat.maxScore} color={cat.color} />
                      <p className="category-subtitle">{cat.percentage}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {riskFlags.length > 0 && (
                <div className="feedback-section">
                  <div className="feedback-header">
                    <div className="feedback-header-left">
                      <span className="section-number">02</span>
                      <div>
                        <h3>Risk Flags</h3>
                        <span className="feedback-subtitle">Categories scoring below 45%</span>
                      </div>
                    </div>
                  </div>
                  {riskFlags.map((cat) => (
                    <div key={cat.name} className="feedback-item" style={{borderLeft:`4px solid ${cat.color}`,paddingLeft:16,marginBottom:18}}>
                      <div className="fb-label" style={{color:cat.color,fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:6}}>{cat.name}</div>
                      <div className="fb-title" style={{fontSize:15,fontWeight:600,color:'#1e293b',marginBottom:6}}>{cat.riskFlag?.title}</div>
                      <div className="fb-text" style={{fontSize:13,color:'#475569',lineHeight:1.6}}>{cat.riskFlag?.description}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="feedback-section">
                <div className="feedback-header">
                  <div className="feedback-header-left">
                    <span className="section-number">{riskFlags.length > 0 ? "03" : "02"}</span>
                    <div>
                      <h3>Priority Actions</h3>
                      <span className="feedback-subtitle">Weighted towards weakest dimensions</span>
                    </div>
                  </div>
                </div>
                <div className="action-grid">
                  {priorityActions.map((p, i) => (
                    <div key={i} className="action-item">
                      <span className="action-number">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <div style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.05em',color:'#64748b',marginBottom:4}}>{p.category}</div>
                        <span className="action-text">{p.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="report-final">
                <div className="final-content">
                  <div className="final-logo">Retire Without Selling.</div>
                  <h2>Build to Retire</h2>
                  <p className="final-text">{tier.cta} Book a confidential call to review these results with our team and discuss how we can support your exit journey.</p>
                  <div className="final-contact">
                    <p>retirewithoutselling.vercel.app</p>
                    <p>hello@retirewithoutselling.com</p>
                  </div>
                </div>
                <div className="final-footer">
                  <p>The Wellington, High Street, Uttoxeter, England, ST14 7JD</p>
                  <div className="confidential-badge">Confidential — {name}{company ? `, ${company}` : ""}</div>
                </div>
              </div>
            </div>

            <div className="relative p-8 md:p-12 print:p-6">
              <div className="flex flex-wrap justify-center gap-4 mb-8 no-print">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a]/80 hover:bg-[#1e293b]/80 text-white text-sm font-medium rounded-xl transition-all border border-white/10"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                  Print / Save as PDF
                </button>
              </div>

              {emailSent && (
                <motion.div
                  initial={isAnimating ? { opacity: 0, y: -20 } : undefined}
                  animate={isAnimating ? { opacity: 1, y: 0 } : undefined}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-8 flex items-center gap-3 no-print"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-500">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                    Your detailed report has been sent to {email}
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-6"
                  style={{ borderColor: overallScoreColor }}
                >
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-white">{totalScore}</span>
                    <span className="block text-xs text-[#64748b]">of 80</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif"
                  style={{ color: overallScoreColor }}
                >
                  {tier.title}
                </h2>
                <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-4">
                  {tier.paragraph}
                </p>
                <p className="text-sm font-semibold" style={{ color: overallScoreColor }}>
                  {tier.cta}
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-4 mb-10">
                {catFeedbacks.map((cat) => {
                  const pct = (cat.score / cat.maxScore) * 100;
                  return (
                    <div key={cat.name} className="bg-[#0f172a]/80 rounded-2xl p-5 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-[#94a3b8]">{cat.name}</span>
                        <span className="text-base font-bold" style={{ color: cat.color }}>{cat.score}/{cat.maxScore}</span>
                      </div>
                      <div className="h-2 bg-[#1e293b]/60 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full" style={{ backgroundColor: cat.color }}
                          initial={isAnimating ? { width: 0 } : undefined}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.1 : 0.3 }}
                        />
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-[10px] text-[#64748b]">{cat.percentage}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {riskFlags.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Risk Flags
                  </h3>
                  <div className="space-y-4">
                    {riskFlags.map((cat) => (
                      <div key={cat.name} className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs tracking-wider uppercase font-medium" style={{ color: cat.color }}>{cat.name}</span>
                        </div>
                        <p className="text-white font-semibold mb-1">{cat.riskFlag?.title}</p>
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{cat.riskFlag?.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Priority Actions
                </h3>
                <div className="bg-[#0f172a]/80 rounded-2xl p-6 border border-white/10">
                  <div className="space-y-4">
                    {priorityActions.map((p, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3A7BFF] text-white flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <span className="text-[10px] tracking-wider uppercase font-medium text-[#64748b]">{p.category}</span>
                          <p className="text-[#94a3b8] text-sm leading-relaxed">{p.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#3A7BFF]/10 to-emerald-600/10 rounded-2xl p-8 border border-[#3A7BFF]/20 mb-10">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Sellability Summary
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider mb-2">Overall Tier</p>
                    <p className="text-xl font-bold" style={{ color: overallScoreColor }}>
                      {tier.title}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider mb-2">Risk Areas</p>
                    <p className="text-xl font-bold" style={{ color: riskFlags.length > 0 ? "#ef4444" : "#10b981" }}>
                      {riskFlags.length}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#64748b] uppercase tracking-wider mb-2">Priority Actions</p>
                    <p className="text-xl font-bold text-[#3A7BFF]">
                      {priorityActions.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#3A7BFF]/20 to-emerald-600/10 rounded-2xl p-8 border border-[#3A7BFF]/30 no-print">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.cta}</h3>
                    <p className="text-[#94a3b8] text-sm">
                      Book a confidential call to review these results. We can help you assess your exit readiness, structure a partnership, and build the plan to maximise value.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <Link
                      href="/contact"
                      onClick={() => {
                        const result = computeScores();
                        const totalScore = Object.values(result.scores).reduce((a, b) => a + b, 0);
                        trackBSABookCall(getSellabilityTier(totalScore), totalScore);
                      }}
                      className="px-8 py-4 bg-[#3A7BFF] hover:bg-[#2563eb] text-white font-semibold tracking-wide rounded-xl transition-all hover:shadow-xl hover:shadow-[#3A7BFF]/30 text-sm whitespace-nowrap text-center"
                    >
                      Schedule Your Call
                    </Link>
                    <button
                      onClick={() => {
                        const result = computeScores();
                        const totalScore = Object.values(result.scores).reduce((a, b) => a + b, 0);
                        trackBSACallbackRequest(getSellabilityTier(totalScore), totalScore);
                        window.location.href = "mailto:hello@retirewithoutselling.com?subject=Callback Request - BSA Results&body=Please call me to discuss my Business Sellability Assessment results.";
                      }}
                      className="px-8 py-3 bg-[#0f172a]/80 hover:bg-[#1e293b]/80 text-[#94a3b8] font-medium tracking-wide rounded-xl transition-all border border-white/10 text-sm whitespace-nowrap text-center"
                    >
                      Request a Callback
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/10 no-print">
                {["Strictly Confidential", "24hr Response", "No Obligation"].map((label) => (
                  <span key={label} className="flex items-center gap-2 text-xs text-[#64748b] tracking-wider uppercase">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#3A7BFF]">
                      {label === "Strictly Confidential" && <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />}
                      {label === "24hr Response" && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />}
                      {label === "No Obligation" && <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />}
                    </svg>
                    {label}
                  </span>
                ))}
              </div>

              <div className="text-center mt-8 no-print">
                <button
                  onClick={() => { setStep("intro"); setCurrentQuestion(0); setAnswers({}); setEmailSent(false); }}
                  className="text-[#64748b] hover:text-white text-sm transition-colors"
                >
                  Retake Assessment
                </button>
              </div>

              <div className="print-only print-footer">
                <p>
                  <strong>Retire Without Selling</strong> | retirewithoutselling.com | info@regenovate.com<br />
                  The Wellington, High Street, Uttoxeter, England, ST14 7JD<br />
                  This report is confidential and intended solely for {name}{company ? ` at ${company}` : ""}.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
