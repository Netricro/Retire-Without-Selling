import { NextRequest, NextResponse } from "next/server";
import {
  sellabilityCategoryConfig,
  sellabilityTierFeedback,
  getSellabilityTier,
  getCategoryPercentage,
  getPriorityActions,
} from "@/lib/sellability-data";
import nodemailer from "nodemailer";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || "info@regenovate.com";
const TO_EMAIL = process.env.SELLABILITY_NOTIFICATION_EMAIL || "bsa@regenovate.com";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const USE_SMTP = process.env.USE_SMTP === "true";

interface SellabilityData {
  email: string;
  name: string;
  company?: string;
  answers: Record<number, number>;
  scores: Record<string, number>;
  totalScore: number;
}

const categoryOrder = [
  "Founder Independence",
  "Systems & Processes",
  "Financial Visibility",
  "Revenue Predictability",
  "Exit Readiness",
];

function generateEmailHTML(data: SellabilityData): string {
  const tierKey = getSellabilityTier(data.totalScore);
  const tier = sellabilityTierFeedback[tierKey];
  const percentage = Math.round((data.totalScore / 80) * 100);

  let scoreColor = "#2563eb";
  if (percentage >= 75) scoreColor = "#059669";
  else if (percentage >= 55) scoreColor = "#2563eb";
  else if (percentage >= 35) scoreColor = "#d97706";
  else scoreColor = "#dc2626";

  const categorySections = categoryOrder.map((cat) => {
    const score = data.scores[cat] || 0;
    const max = sellabilityCategoryConfig[cat]?.maxScore || 16;
    const pct = Math.round((score / max) * 100);
    const color = sellabilityCategoryConfig[cat]
      ? { "Founder Independence": "#F59E0B", "Systems & Processes": "#3B82F6", "Financial Visibility": "#10B981", "Revenue Predictability": "#8B5CF6", "Exit Readiness": "#EF4444" }[cat]
      : "#3B82F6";
    const flag = pct < 45 ? sellabilityCategoryConfig[cat]?.riskFlag : null;
    return { name: cat, score, max, pct, color, flag };
  });

  const riskFlags = categorySections.filter((c) => c.flag);
  const priorities = getPriorityActions(data.scores);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Business Sellability Assessment</title>
  <style>
    body { margin:0; padding:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; background:#f8fafc; color:#1e293b; line-height:1.6; }
    .container { max-width:600px; margin:0 auto; background:#fff; }
    .header { background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%); padding:40px 30px; text-align:center; }
    .header h1 { color:#fff; margin:0; font-size:26px; font-weight:600; }
    .header p { color:#94a3b8; margin:8px 0 0; font-size:14px; }
    .content { padding:30px; }
    .score-box { background:#f1f5f9; border-radius:12px; padding:30px; text-align:center; margin-bottom:30px; }
    .score-number { font-size:48px; font-weight:700; color:${scoreColor}; line-height:1; margin-bottom:8px; }
    .score-label { font-size:14px; color:#64748b; margin-bottom:12px; }
    .score-title { font-size:20px; font-weight:600; color:#1e293b; margin-bottom:8px; }
    .score-desc { font-size:14px; color:#64748b; line-height:1.5; }
    .category { margin-bottom:18px; padding:18px; background:#f8fafc; border-radius:8px; border-left:4px solid; }
    .cat-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
    .cat-name { font-weight:600; font-size:15px; color:#1e293b; }
    .cat-score { font-size:17px; font-weight:700; }
    .progress-bar { height:8px; background:#e2e8f0; border-radius:4px; overflow:hidden; }
    .progress-fill { height:100%; border-radius:4px; }
    .risk-flag { background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:14px; margin-top:10px; }
    .risk-flag-title { font-size:13px; font-weight:700; color:#b91c1c; margin-bottom:4px; }
    .risk-flag-text { font-size:12px; color:#7f1d1d; line-height:1.5; }
    .section-title { font-size:18px; font-weight:600; color:#1e293b; margin:28px 0 18px; padding-bottom:10px; border-bottom:2px solid #e2e8f0; }
    .priority-item { display:flex; gap:12px; margin-bottom:14px; padding:14px; background:#f8fafc; border-radius:8px; }
    .priority-number { flex-shrink:0; width:28px; height:28px; background:#1e3a5f; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
    .priority-text { font-size:13px; color:#475569; line-height:1.5; }
    .priority-cat { font-size:11px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:4px; }
    .cta { background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%); padding:30px; text-align:center; border-radius:12px; margin:30px 0; }
    .cta-title { color:#fff; font-size:19px; font-weight:600; margin:0 0 10px; }
    .cta-text { color:rgba(255,255,255,0.9); font-size:13px; margin:0 0 18px; line-height:1.5; }
    .cta-button { display:inline-block; background:#fff; color:#1e3a5f; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:600; font-size:14px; }
    .footer { padding:20px 30px; text-align:center; background:#f1f5f9; }
    .footer-text { color:#64748b; font-size:12px; margin:0; }
    .footer-links { margin-top:10px; }
    .footer-links a { color:#2563eb; text-decoration:none; font-size:12px; margin:0 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Business Sellability Assessment</h1>
      <p>Build to Retire — Regenovate / Retire Without Selling</p>
    </div>
    <div class="content">
      <div class="score-box">
        <div class="score-number">${data.totalScore}/80</div>
        <div class="score-label">${percentage}% Overall</div>
        <div class="score-title">${tier.title}</div>
        <div class="score-desc">${tier.paragraph}</div>
      </div>

      ${categorySections.map((cat) => `
      <div class="category" style="border-left-color:${cat.color}">
        <div class="cat-header">
          <span class="cat-name">${cat.name}</span>
          <span class="cat-score" style="color:${cat.color}">${cat.score}/${cat.max}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${cat.pct}%;background:${cat.color}"></div>
        </div>
        ${cat.flag ? `
        <div class="risk-flag">
          <div class="risk-flag-title">${cat.flag.title}</div>
          <div class="risk-flag-text">${cat.flag.description}</div>
        </div>` : ""}
      </div>
      `).join("")}

      ${riskFlags.length > 0 ? `
      <h2 class="section-title">Risk Flags</h2>
      ${riskFlags.map((cat) => `
      <div class="risk-flag" style="margin-bottom:12px;">
        <div class="risk-flag-title">${cat.flag?.title}</div>
        <div class="risk-flag-text">${cat.flag?.description}</div>
      </div>
      `).join("")}
      ` : ""}

      <h2 class="section-title">Priority Actions</h2>
      ${priorities.map((p, i) => `
      <div class="priority-item">
        <div class="priority-number">${String(i + 1).padStart(2, "0")}</div>
        <div>
          <div class="priority-cat">${p.category}</div>
          <div class="priority-text">${p.action}</div>
        </div>
      </div>
      `).join("")}

      <div class="cta">
        <h3 class="cta-title">${tier.cta}</h3>
        <p class="cta-text">Book a confidential call to review these results with our team and discuss how Regenovate can support your exit or partnership journey.</p>
        <a href="https://www.regenovate.com/contact" class="cta-button">Schedule Your Call</a>
      </div>
    </div>
    <div class="footer">
      <p class="footer-text">Confidential — prepared for ${data.name}${data.company ? `, ${data.company}` : ""}</p>
      <div class="footer-links">
        <a href="https://retirewithoutselling.com">retirewithoutselling.com</a>
        <a href="mailto:info@regenovate.com">info@regenovate.com</a>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmailWithSMTP(data: SellabilityData, html: string): Promise<void> {
  if (!SMTP_USER || !SMTP_PASS) throw new Error("SMTP_USER and SMTP_PASS must be set");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.office365.com",
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { minVersion: "TLSv1.2" },
  });

  await transporter.verify();
  await transporter.sendMail({
    from: `"Regenovate" <${FROM_EMAIL}>`,
    to: [data.email, TO_EMAIL],
    subject: `Business Sellability Score — ${data.totalScore}/80`,
    html,
    text: `Business Sellability Assessment\n\nOverall Score: ${data.totalScore}/80\n\n${categoryOrder.map((cat) => `${cat}: ${data.scores[cat] || 0}/${sellabilityCategoryConfig[cat]?.maxScore || 16}`).join("\n")}\n\nView full report at retirewithoutselling.com`,
  });
}

async function sendEmailWithResend(data: SellabilityData, html: string): Promise<void> {
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Regenovate <${FROM_EMAIL}>`,
      to: [data.email, TO_EMAIL],
      subject: `Business Sellability Score — ${data.totalScore}/80`,
      html,
      text: `Business Sellability Assessment\n\nOverall Score: ${data.totalScore}/80\n\n${categoryOrder.map((cat) => `${cat}: ${data.scores[cat] || 0}/${sellabilityCategoryConfig[cat]?.maxScore || 16}`).join("\n")}`,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: SellabilityData = await req.json();

    if (!body.email || !body.name || !body.answers) {
      return NextResponse.json({ error: "Email, name, and answers are required." }, { status: 400 });
    }

    const html = generateEmailHTML(body);

    try {
      let emailResult: { success: boolean; method: string; error?: string } = { success: false, method: "none" };
      
      if (USE_SMTP && SMTP_USER && SMTP_PASS) {
        await sendEmailWithSMTP(body, html);
        emailResult = { success: true, method: "smtp" };
      } else if (RESEND_API_KEY) {
        await sendEmailWithResend(body, html);
        emailResult = { success: true, method: "resend" };
      } else {
        console.log("Sellability submission (no email configured):", { to: body.email, totalScore: body.totalScore });
        emailResult = { success: false, method: "none", error: "No email provider configured" };
      }
      
      return NextResponse.json({ success: emailResult.success, method: emailResult.method, error: emailResult.error });
    } catch (emailError: any) {
      console.error("Error sending sellability email:", emailError);
      return NextResponse.json({ success: false, error: emailError.message || "Failed to send email" }, { status: 502 });
    }
  } catch (error) {
    console.error("Sellability API error:", error);
    return NextResponse.json({ error: "Failed to process assessment." }, { status: 500 });
  }
}
