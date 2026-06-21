# Retire Without Selling

A Next.js site for the **Retire Without Selling** methodology — helping owner-operators exit their business without a traditional sale.

## What it is

This is the public-facing web property for a business transition methodology:
- **The Problem** — why selling is harder than owners think
- **The Solution** — the "earn-in" partnership model (stabilise, systemise, scale)
- **The Economics** — how the 20% equity stake works
- **Deal Killers** — common mistakes that wreck exits
- **Assessment** — a sellability score tool (API route: `/api/sellability`)
- **Join** — consultant recruitment for delivery partners

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static export (`dist/`)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/the-problem` | Pain point for owner-operators |
| `/the-solution` | The partnership methodology |
| `/how-it-works` | Process overview |
| `/the-economics` | Equity and financial structure |
| `/your-story` | Case studies / social proof |
| `/deal-killers` | Common pitfalls |
| `/assessment` | Sellability score tool |
| `/join` | Consultant recruitment |
| `/contact` | Enquiries |

## Development

```bash
npm install
npm run dev
```

Static build:
```bash
npm run build
```

Output goes to `dist/`.

## Notes

- This is a **branded vertical** of the Regenovate methodology (Stabilise, Systemise, Scale).
- White-label versions can be spun up for niche/geography-specific consultants (e.g. `retire-without-selling.com/engineering-nw`).
- See `AGENTS.md` for agent coding rules.
