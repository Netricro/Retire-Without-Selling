// Business Sellability Assessment — Build to Retire
// 5 categories × 20 questions = 80 points maximum

export interface SellabilityQuestion {
  id: string;
  category: string;
  question: string;
  options: { text: string; score: number }[];
}

export interface CategoryConfig {
  maxScore: number;
  riskFlag: { title: string; description: string };
  actions: string[];
}

export interface TierFeedback {
  title: string;
  paragraph: string;
  cta: string;
}

export const sellabilityQuestions: SellabilityQuestion[] = [
  // ── 1. Founder Independence ───────────────────────────────────
  {
    id: "FI1",
    category: "Founder Independence",
    question: "If you stepped away from the business completely for three months, what would happen?",
    options: [
      { text: "It would run normally — the team handles everything", score: 4 },
      { text: "It would slow down but survive", score: 2 },
      { text: "It would struggle significantly", score: 1 },
      { text: "It would stop or collapse without me", score: 0 },
    ],
  },
  {
    id: "FI2",
    category: "Founder Independence",
    question: "Do you have a management layer that makes day-to-day decisions without your input?",
    options: [
      { text: "Yes — they run operations independently; I'm strategic only", score: 4 },
      { text: "Yes — but I'm consulted on most key decisions", score: 2 },
      { text: "Informally — it works but isn't structured", score: 1 },
      { text: "No — decisions flow through me", score: 0 },
    ],
  },
  {
    id: "FI3",
    category: "Founder Independence",
    question: "Do customers buy from the business, or from you personally?",
    options: [
      { text: "Entirely from the business — I'm not in the sales or retention process", score: 4 },
      { text: "Mostly the business, occasionally me", score: 2 },
      { text: "Mix — I'm heavily involved in retention and renewals", score: 1 },
      { text: "Primarily from me — I am the relationship", score: 0 },
    ],
  },
  {
    id: "FI4",
    category: "Founder Independence",
    question: "Is there someone in the business who could step into your role?",
    options: [
      { text: "Yes — a fully groomed successor who is ready now", score: 4 },
      { text: "Yes — with 3–6 months of handover", score: 2 },
      { text: "Possibly, but with significant gaps to fill", score: 1 },
      { text: "No — I'm irreplaceable right now", score: 0 },
    ],
  },
  {
    id: "FI5",
    category: "Founder Independence",
    question: "How many operational decisions per week require your direct involvement?",
    options: [
      { text: "Almost none — the team handles it all", score: 4 },
      { text: "A handful of strategic decisions", score: 2 },
      { text: "Many — I'm pulled into operational issues daily", score: 1 },
      { text: "Nearly everything comes to me", score: 0 },
    ],
  },

  // ── 2. Systems & Processes ────────────────────────────────────
  {
    id: "SP1",
    category: "Systems & Processes",
    question: "Are your core business processes documented in writing?",
    options: [
      { text: "Yes — comprehensive SOPs exist for all key processes", score: 4 },
      { text: "Yes — for most core processes", score: 3 },
      { text: "Some documentation, but patchy and out of date", score: 1 },
      { text: "Mostly in people's heads", score: 0 },
    ],
  },
  {
    id: "SP2",
    category: "Systems & Processes",
    question: "Do you use integrated business management software (CRM, ERP, or similar)?",
    options: [
      { text: "Yes — integrated systems with real-time data and reporting", score: 4 },
      { text: "Yes — CRM and/or accounting software, but not fully integrated", score: 2 },
      { text: "Basic tools only — mainly spreadsheets and email", score: 1 },
      { text: "No — we manage everything manually", score: 0 },
    ],
  },
  {
    id: "SP3",
    category: "Systems & Processes",
    question: "Could a new hire follow your business processes without you personally explaining them?",
    options: [
      { text: "Yes — fully self-service from documented systems and SOPs", score: 4 },
      { text: "Mostly — with some onboarding from the team, not from me", score: 2 },
      { text: "Partially — significant tacit knowledge still required", score: 1 },
      { text: "No — everything requires direct training from me or a key person", score: 0 },
    ],
  },
  {
    id: "SP4",
    category: "Systems & Processes",
    question: "How long would it take to onboard a replacement for the most critical non-founder role?",
    options: [
      { text: "Less than 1 month — it's fully documented", score: 4 },
      { text: "1–3 months", score: 3 },
      { text: "3–6 months", score: 1 },
      { text: "More than 6 months — the knowledge is mostly in one person's head", score: 0 },
    ],
  },

  // ── 3. Financial Visibility ───────────────────────────────────
  {
    id: "FV1",
    category: "Financial Visibility",
    question: "Do you produce monthly management accounts?",
    options: [
      { text: "Yes — detailed P&L, balance sheet, and cash flow every month", score: 4 },
      { text: "Yes — P&L monthly but limited balance sheet or cash detail", score: 2 },
      { text: "Quarterly or periodically", score: 1 },
      { text: "No — I see the financials only at year-end with my accountant", score: 0 },
    ],
  },
  {
    id: "FV2",
    category: "Financial Visibility",
    question: "Do you know your current EBITDA?",
    options: [
      { text: "Yes — I know it to within £10,000 right now", score: 4 },
      { text: "Roughly — within about 20%", score: 2 },
      { text: "I know approximate net profit but not EBITDA", score: 1 },
      { text: "No — I don't track it", score: 0 },
    ],
  },
  {
    id: "FV3",
    category: "Financial Visibility",
    question: "Is there one clear, consistent version of your financial truth — a single source everyone agrees on?",
    options: [
      { text: "Yes — one system, one source of truth, no reconciliation needed", score: 4 },
      { text: "Yes, mostly — minor reconciliation required between systems", score: 2 },
      { text: "Multiple sources — accounts, spreadsheets, director estimates", score: 1 },
      { text: "We regularly disagree internally on the actual numbers", score: 0 },
    ],
  },
  {
    id: "FV4",
    category: "Financial Visibility",
    question: "How quickly could you produce a clean 3-year financial history for a buyer?",
    options: [
      { text: "Within 24 hours — audited accounts are ready", score: 4 },
      { text: "Within a week — filed accounts available", score: 2 },
      { text: "Weeks — some gaps or inconsistencies to work through", score: 1 },
      { text: "Months — it would require significant work to compile", score: 0 },
    ],
  },

  // ── 4. Revenue Predictability ─────────────────────────────────
  {
    id: "RP1",
    category: "Revenue Predictability",
    question: "What proportion of your revenue is recurring or contracted?",
    options: [
      { text: "75%+ is recurring, retainer, or contracted", score: 4 },
      { text: "50–75%", score: 3 },
      { text: "25–50%", score: 1 },
      { text: "Under 25% — mostly project or one-off work", score: 0 },
    ],
  },
  {
    id: "RP2",
    category: "Revenue Predictability",
    question: "What percentage of your revenue comes from your top 3 customers?",
    options: [
      { text: "Under 20% — well diversified", score: 4 },
      { text: "20–40%", score: 3 },
      { text: "40–60% — some concentration risk", score: 1 },
      { text: "Over 60% — heavily concentrated", score: 0 },
    ],
  },
  {
    id: "RP3",
    category: "Revenue Predictability",
    question: "How far ahead can you forecast revenue with reasonable confidence?",
    options: [
      { text: "12 months or more", score: 4 },
      { text: "6–12 months", score: 3 },
      { text: "3–6 months", score: 1 },
      { text: "Less than 3 months", score: 0 },
    ],
  },
  {
    id: "RP4",
    category: "Revenue Predictability",
    question: "Do you have a formal, documented sales process with pipeline tracking?",
    options: [
      { text: "Yes — with pipeline stages, conversion rates, and revenue forecasting", score: 4 },
      { text: "Yes — but tracked informally", score: 2 },
      { text: "No formal process — sales are relationship-driven", score: 1 },
      { text: "No — sales happen reactively when opportunities appear", score: 0 },
    ],
  },

  // ── 5. Exit Readiness ───────────────────────────────────────
  {
    id: "ER1",
    category: "Exit Readiness",
    question: "Have you had a professional business valuation in the last two years?",
    options: [
      { text: "Yes — a formal valuation from an M&A adviser or broker", score: 4 },
      { text: "No, but I have a strong, researched view of the value", score: 2 },
      { text: "I've thought about it but not looked into it formally", score: 1 },
      { text: "No — I have no idea what my business is currently worth", score: 0 },
    ],
  },
  {
    id: "ER2",
    category: "Exit Readiness",
    question: "Is your shareholding and legal structure clean and straightforward for a buyer?",
    options: [
      { text: "Yes — simple, clear shareholding, IP is owned by the company, no disputes", score: 4 },
      { text: "Mostly — minor issues but nothing that would block a sale", score: 2 },
      { text: "Some complexity — multiple shareholders, unclear IP, or outstanding issues", score: 1 },
      { text: "Complex or disputed — it would need significant legal work to resolve", score: 0 },
    ],
  },
  {
    id: "ER3",
    category: "Exit Readiness",
    question: "Do you have a written exit plan with a target timeline and value?",
    options: [
      { text: "Yes — written plan with advisers, target date, and target value", score: 4 },
      { text: "Yes — in my head, with a clear 3–5 year timeline", score: 2 },
      { text: '\"Someday in the next few years\" — but no specifics', score: 1 },
      { text: "No — I haven't seriously planned for it", score: 0 },
    ],
  },
];

// ── Category colour map ──────────────────────────────────────────
export const sellabilityCategoryColors: Record<string, { accent: string; gradient: string; hex: string }> = {
  "Founder Independence": {
    accent: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    hex: "#F59E0B",
  },
  "Systems & Processes": {
    accent: "#60a5fa",
    gradient: "from-blue-400 to-blue-600",
    hex: "#3B82F6",
  },
  "Financial Visibility": {
    accent: "#34d399",
    gradient: "from-emerald-400 to-teal-500",
    hex: "#10B981",
  },
  "Revenue Predictability": {
    accent: "#a78bfa",
    gradient: "from-violet-400 to-purple-500",
    hex: "#8B5CF6",
  },
  "Exit Readiness": {
    accent: "#f87171",
    gradient: "from-red-400 to-rose-500",
    hex: "#EF4444",
  },
};

// ── Category configuration ─────────────────────────────────────
export const sellabilityCategoryConfig: Record<string, CategoryConfig> = {
  "Founder Independence": {
    maxScore: 20,
    riskFlag: {
      title: "Founder Dependency — Critical Risk",
      description:
        "The business cannot demonstrably operate without you. A buyer is not acquiring an asset — they are acquiring a job. This is the single biggest valuation discount in owner-managed businesses.",
    },
    actions: [
      "Run a structured absence test. Tell the team you're genuinely unavailable for five working days. Document every decision that escalates to you — that list is your risk register.",
      "Identify and start grooming a successor. You don't have to be ready to leave — but a named, developing successor changes how a buyer sees your business immediately.",
      "Audit your customer relationships. List which customers are buying from you personally vs. the business. Begin transitioning at least three to a team member this quarter.",
    ],
  },
  "Systems & Processes": {
    maxScore: 16,
    riskFlag: {
      title: "Systems Maturity — High Risk",
      description:
        "Key processes live in people's heads, not in documented systems. This creates execution risk and integration complexity for any buyer or acquirer.",
    },
    actions: [
      "Document your 10 most critical processes this month. A shared Google Doc is sufficient to start. If it can't be written down, it's a liability in a buyer's due diligence.",
      "Implement a CRM if you don't have one. This is the first thing a buyer checks for pipeline visibility and repeatability. No CRM signals an unstructured business.",
      "Write a 30-day onboarding guide for your most critical non-founder role. If a new hire can't be productive in 30 days from a document, the knowledge is still a personal dependency.",
    ],
  },
  "Financial Visibility": {
    maxScore: 16,
    riskFlag: {
      title: "Financial Visibility — High Risk",
      description:
        'Inconsistent or incomplete financial reporting means a buyer cannot validate your numbers. "Multiple versions of truth" are the fastest route to a discounted or collapsed deal.',
    },
    actions: [
      "Start monthly management accounts immediately. Instruct your accountant to produce P&L accounts monthly from next month onwards. Quarterly is not sufficient for a buyer or investor.",
      "Establish a single source of financial truth. Identify all parallel financial sources — software, spreadsheets, director estimates — and eliminate the duplicates. Multiple versions of truth kill valuations.",
      "Calculate your EBITDA for the last 12 months. This is the number a buyer will apply a multiple to. You must know it cold — and be able to defend every line.",
    ],
  },
  "Revenue Predictability": {
    maxScore: 16,
    riskFlag: {
      title: "Revenue Predictability — High Risk",
      description:
        "High customer concentration or low recurring revenue means a buyer is pricing in significant commercial risk. Without predictable income, premium multiples are not available.",
    },
    actions: [
      "Map your revenue by type. Split all revenue into recurring/contracted vs. project/one-off and track this ratio monthly. The recurring proportion is what buyers pay a premium multiple on.",
      "Address customer concentration now. If any single customer represents more than 20% of revenue, create a written concentration risk plan — and begin diversifying. Buyers will price this heavily.",
      "Introduce one recurring revenue product. A retainer, subscription, or maintenance contract — even a small one — materially changes your buyer risk profile and your own cash flow stability.",
    ],
  },
  "Exit Readiness": {
    maxScore: 12,
    riskFlag: {
      title: "Exit Readiness — Moderate Risk",
      description:
        "Without a valuation, a clean structure, and a defined plan, you are not in a position to run a competitive exit process. Preparation is where exit value is made.",
    },
    actions: [
      "Get an indicative valuation this quarter. Most M&A advisers will provide this as an initial conversation at no cost. You cannot plan an exit without knowing the number — and you may be surprised.",
      "Have a solicitor review your shareholder structure. Issues found during a live deal are expensive and deal-breaking. Issues found now are fixable. Do this before any buyer conversation begins.",
      "Write down your exit target and timeline. Set a specific exit value and a date range. Founders with a written plan achieve measurably better outcomes than those who exit reactively.",
    ],
  },
};

// ── Overall tier feedback ─────────────────────────────────────
export const sellabilityTierFeedback: Record<string, TierFeedback> = {
  "investment-ready": {
    title: "Investment-Ready",
    paragraph:
      "Your business is genuinely well-positioned for sale. You've built a management structure that can operate without you, your financials are visible, and you have a clear sense of where you're heading. The question now isn't whether you can sell — it's how to maximise the multiple. The gap between a good exit and a great one is usually a system, not effort: crossing EBITDA thresholds, consolidating back-office costs, and ensuring your story is told in buyer language rather than founder language.",
    cta: "Now let's maximise your exit multiple.",
  },
  "good-foundation": {
    title: "Good Foundation",
    paragraph:
      "There is real value here — but a buyer will find the weak spots and discount accordingly. The foundation is solid, but two or three structural gaps are likely costing you a meaningful difference on your exit price. The good news: gaps found now are fixable in 12–18 months. The same gaps found during a live deal become price chips that a buyer uses against you. Address them on your terms, not theirs.",
    cta: "Close the gaps before a buyer finds them.",
  },
  "significant-gaps": {
    title: "Significant Gaps",
    paragraph:
      'Your business has real sellability risk. There are structural issues that a serious buyer will use to heavily discount your asking price — or walk away entirely. This doesn\'t mean the business isn\'t valuable. It means it isn\'t currently packaged in a way that a buyer can price with confidence. "You\'re not selling what the business does — you\'re selling how it runs." The priority actions below will have the highest impact on your exit position.',
    cta: "Don't sell a struggling asset. Build one worth buying.",
  },
  "not-yet-sellable": {
    title: "Not Yet Sellable",
    paragraph:
      "Right now this business isn't sellable — not because it lacks potential, but because of how it's structured. The business runs on you, the financials don't tell a clear story, and a buyer has no evidence that the operation can survive a change of ownership. That's a fixable problem. The Build to Retire programme exists specifically for this position: founders with good businesses that are currently unsellable because of structure, not substance.",
    cta: "This is exactly what Build to Retire was written for.",
  },
};

// ── Helpers ────────────────────────────────────────────────────
export function getSellabilityTier(totalScore: number): keyof typeof sellabilityTierFeedback {
  const percentage = (totalScore / 80) * 100;
  if (percentage >= 75) return "investment-ready";
  if (percentage >= 55) return "good-foundation";
  if (percentage >= 35) return "significant-gaps";
  return "not-yet-sellable";
}

export function getCategoryPercentage(score: number, category: string): number {
  const max = sellabilityCategoryConfig[category]?.maxScore || 16;
  return (score / max) * 100;
}

export function getWeakestCategories(
  scores: Record<string, number>
): { category: string; percentage: number }[] {
  const entries = Object.entries(scores).map(([cat, score]) => ({
    category: cat,
    percentage: getCategoryPercentage(score, cat),
  }));
  entries.sort((a, b) => a.percentage - b.percentage);
  return entries;
}

export function getPriorityActions(scores: Record<string, number>): { category: string; action: string }[] {
  const sorted = getWeakestCategories(scores);
  const actions: { category: string; action: string }[] = [];

  for (const entry of sorted) {
    const catActions = sellabilityCategoryConfig[entry.category]?.actions || [];
    for (const action of catActions) {
      if (actions.length >= 6) break;
      actions.push({ category: entry.category, action });
    }
    if (actions.length >= 6) break;
  }

  return actions;
}
