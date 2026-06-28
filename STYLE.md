# Retire Without Selling — Style Guide

Quick reference for anyone editing this site. Copy patterns, don't invent new ones.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4 (with `@import "tailwindcss"` and `@theme inline`)
- DM Serif Display (headings) + Inter (body)

## Colours

| Role | Hex | Tailwind class | Usage |
|------|-----|----------------|-------|
| Brand blue | `#3A7BFF` | `text-[#3A7BFF]` `bg-[#3A7BFF]` | Primary buttons, links, accents, numbers |
| Brand blue hover | `#2563eb` | `hover:bg-[#2563eb]` | Button hover state |
| Dark navy | `#0B0F1A` | `bg-[#0B0F1A]` | Default page background |
| Surface | `#111827` | — | Glass panel backgrounds |
| Muted text | `#94a3b8` | `text-[#94a3b8]` | Body text, secondary labels, nav items |
| Border | `#1e293b` | `border-[#1e293b]` | Footer dividers, subtle borders |
| White | `#ffffff` | `text-white` | Headings, primary text on dark |
| Emerald | `#34d399` | `text-emerald-400` | Checkmarks, success indicators |

### Light Theme Overrides
- Background: `#f8fafc`
- Text: `#0f172a`
- Brand blue stays `#3A7BFF`, gradient shifts to `#2563eb` → `#3b82f6`

### Midnight Theme Overrides
- Background: `#030610` (deeper than dark)
- Body text: `#94a3b8` (muted)
- Headings: `#cbd5e1` (soft white)
- Glass/borders/glows: ~30% dimmer than dark

## Typography

| Element | Font | Size | Weight | Tracking | Line Height |
|---------|------|------|--------|----------|-------------|
| H1 (hero) | DM Serif | `text-5xl` → `md:text-7xl` → `lg:text-8xl` | 400 | `-0.02em` | `leading-[0.95]` |
| H2 (section) | DM Serif | `text-4xl` → `md:text-5xl` → `lg:text-6xl` | 400 | `-0.02em` | `leading-tight` |
| H3 (card) | DM Serif | `text-2xl` | 400 | — | — |
| Body | Inter | `text-lg` / `text-xl` / `text-2xl` | 400 | — | `leading-relaxed` |
| Label | Inter | `text-sm` | 600 (semibold) | `tracking-[0.25em]` | `uppercase` |
| Nav | Inter | `text-sm` | 400 / 600 (active) | — | — |
| Button | Inter | `text-sm` / `text-lg` | 600 (semibold) | — | — |

## Spacing

- Section vertical padding: `py-24`
- Section horizontal padding: `px-6`
- Max content width: `max-w-5xl` / `max-w-6xl` / `max-w-7xl` (header)
- Content gap between sections: `section-divider` (see Components)
- Card internal padding: `p-8` → `md:p-12`
- Grid gap: `gap-8` / `gap-12`

## Layout Patterns

### Page Structure
```
<body className="min-h-full flex flex-col pt-16">
  <Header />          <!-- fixed, h-16, z-50 -->
  <main className="flex-1">
    <!-- sections -->
  </main>
  <Footer />
</body>
```

### Section Wrapper
```tsx
<section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <!-- content -->
  </div>
</section>
```

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
  <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
    <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
  </div>
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <!-- content with animate-fade-in-up -->
  </div>
</section>
```

## Components

### Primary Button (CTA)
```tsx
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3A7BFF]/20">
  Button Text
</a>
```

### Secondary Button (Outline)
```tsx
<Link className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300">
  Button Text
</Link>
```

### Glass Card
```tsx
<div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
  <!-- content -->
</div>
```

### Section Label
```tsx
<p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
  The Problem
</p>
```

### Checklist Item
```tsx
<div className="flex items-center gap-3">
  <span className="text-emerald-400 text-xl">✓</span>
  <span className="text-white">Item text</span>
</div>
```

### Section Divider
```tsx
<div className="section-divider max-w-4xl mx-auto" />
```

### Number Stat
```tsx
<div className="number-stat">
  <AnimatedNumber target={75} suffix="%" />
</div>
```

### Method Card (3-column grid)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
    <div className="text-[#3A7BFF] text-5xl font-serif mb-4">01</div>
    <h3 className="text-2xl text-white mb-3">Stabilise</h3>
    <p className="text-[#94a3b8] leading-relaxed">Description...</p>
  </div>
</div>
```

## CSS Utility Classes (globals.css)

| Class | What it does |
|-------|--------------|
| `.gradient-text` | Blue gradient text (brand blue to lighter blue) |
| `.glass` | Semi-transparent backdrop-blur panel with subtle border |
| `.glow-blue` | Soft blue box shadow (0 0 40px rgba(58,123,255,0.15)) |
| `.section-divider` | Horizontal gradient line (transparent → blue → transparent) |
| `.number-stat` | Large serif gradient number with animated shimmer |
| `.animate-fade-in-up` | Fade in + slide up (0.8s) |
| `.animate-fade-in` | Simple fade in (0.6s) |
| `.animation-delay-100` to `500` | Stagger delays for grid items |

## Animation

Default entrance: `animate-fade-in-up` on the section content wrapper.

Staggered grid items: add `animation-delay-100`, `animation-delay-200`, `animation-delay-300` to siblings.

## Responsive Breakpoints

Use Tailwind defaults: `sm:`, `md:`, `lg:`

Common patterns:
- `text-5xl md:text-7xl lg:text-8xl` (hero headings)
- `grid-cols-1 md:grid-cols-3` (cards)
- `flex-col sm:flex-row` (button groups)
- `hidden sm:block` / `hidden lg:flex` (responsive nav)

## Theme System

Three themes toggled via `<ThemeProvider>` (localStorage key: `rws-theme`).

```tsx
const { theme, cycle, setTheme } = useTheme();
// theme: 'dark' | 'light' | 'midnight'
// cycle() rotates through all three
```

CSS overrides use `html[data-theme="X"]` selectors. Always add new theme-aware rules to all three theme blocks if they affect visual appearance.

## Header

- Fixed position, `z-50`, glass background
- Logo: `R.` in serif (blue R, white dot) + "Retire Without Selling" text
- Nav: "The Solution" dropdown + "Our Story" + "Contact Us"
- Right side: Theme toggle (desktop), Contact button (outline), Free Assessment (solid), Hamburger (mobile)
- Mobile menu: full dropdown below header with nested solution links + theme toggle

## Footer

- Border top `border-[#1e293b]`, `py-12 px-6`
- Three rows: logo/tagline | links | copyright
- Links: Privacy, Terms, Cookies, Recruitment, Company Number

## Don'ts

- Don't introduce new colour families. Stick to brand blue, navy, white, muted gray, emerald.
- Don't use arbitrary border-radius values. Use `rounded-lg` (buttons), `rounded-2xl` (cards), `rounded-full` (decorative).
- Don't add new font families. Only DM Serif Display and Inter.
- Don't skip `max-w-X mx-auto` on sections. Content must be centred.
- Don't forget `relative z-10` on hero content when using absolute background layers.
- Don't use `!important` in CSS unless inside theme override blocks (those are already established).
- Don't use `em` dashes. The user hates them.
