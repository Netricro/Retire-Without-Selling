import Link from 'next/link';

export const metadata = {
  title: 'How It Works | Retire Without Selling',
  description: 'The Build to Retire methodology: Stabilise, Systemise, Scale. Three phases to build a business that runs without you and is worth 8-12x profit.',
};

export default function HowItWorks() {
  return (
    <div className="flex flex-col flex-1">
      {/* SECTION 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Method
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Stabilise.<br />
              Systemise.<br />
              <span className="gradient-text">Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              These are the three phases we implement in your business to make sure it runs without you and provides you an income forever.
            </p>
            <div className="max-w-2xl mx-auto mt-12 p-8 glass rounded-2xl border border-[#3A7BFF]/20">
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                Every business is different. Some move faster. Some need more time in stabilisation. The principle stays the same: we fix the foundation, build the systems, then grow the value.
              </p>
              <ul className="mt-6 space-y-3 text-lg text-white font-semibold leading-relaxed list-disc pl-5 text-left">
                <li>Skip stabilisation and it falls apart.</li>
                <li>Skip systemisation and you're still the bottleneck.</li>
                <li>Skip scaling and it never generates the income that lets you walk away.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: Three Phases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up text-center mb-16">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Phases
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              We Build it so you<br />can retire on your terms.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="glass rounded-2xl p-8 md:p-10 glow-blue border border-[#3A7BFF]/20 h-full flex flex-col">
                <div className="text-[#3A7BFF] text-6xl md:text-7xl font-serif mb-6 leading-none">01</div>
                <h3 className="text-2xl md:text-3xl text-white mb-4">Stabilise</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-6 flex-grow">
                  Fix the immediate problems. Cash flow, management structure, key person risk. Get the business stable so it can grow without depending on you daily.
                </p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Fix cash flow issues</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Identify key person risks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Clarify management roles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Stop the bleeding</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="glass rounded-2xl p-8 md:p-10 glow-blue border border-[#3A7BFF]/20 h-full flex flex-col">
                <div className="text-[#3A7BFF] text-6xl md:text-7xl font-serif mb-6 leading-none">02</div>
                <h3 className="text-2xl md:text-3xl text-white mb-4">Systemise</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-6 flex-grow">
                  Document the processes. Build the management team. Create systems that work whether you are in the office or on holiday. Transfer the knowledge from your head into the business.
                </p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Document all processes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Build management team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Create dashboards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Transfer knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <div className="glass rounded-2xl p-8 md:p-10 glow-blue border border-[#3A7BFF]/20 h-full flex flex-col">
                <div className="text-[#3A7BFF] text-6xl md:text-7xl font-serif mb-6 leading-none">03</div>
                <h3 className="text-2xl md:text-3xl text-white mb-4">Scale</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-6 flex-grow">
                  Grow the value. Increase profitability. Expand the team. Build a business that runs without you — So that you can Retire Without Selling! 😎
                </p>
                <ul className="space-y-3 text-[#94a3b8]">
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Grow revenue systematically</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Improve margins</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Expand the team</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#3A7BFF]">—</span>
                    <span>Step back and keep the income</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: What Each Phase Looks Like */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              In Practice
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              What Each Phase<br />Looks Like
            </h2>

            <div className="space-y-12">
              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
                <div className="pl-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#3A7BFF] text-4xl font-serif">01</span>
                    <h3 className="text-2xl md:text-3xl text-white">Stabilise (Months 1-6)</h3>
                  </div>
                  <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                    This is triage. We identify the biggest risks and fix them fast.
                  </p>
                  <ul className="space-y-3 text-[#94a3b8]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Cash flow analysis — where is the money going, and why?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Management audit — who can actually run things without you?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Customer concentration — what happens if your biggest client leaves?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Financial clean-up — separate personal from business, clear the books</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Quick wins — fix the obvious problems that are killing value</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
                <div className="pl-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#3A7BFF] text-4xl font-serif">02</span>
                    <h3 className="text-2xl md:text-3xl text-white">Systemise (Months 6-18)</h3>
                  </div>
                  <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                    This is where the real value is built. Systems are what make a business worth 8-12x instead of 1-2x.
                  </p>
                  <ul className="space-y-3 text-[#94a3b8]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Process documentation — every critical workflow written down</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Management training — your team learns to run the business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Financial reporting — monthly dashboards, clear KPIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Customer diversification — reduce dependence on any single client</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Quality systems — ISO, compliance, repeatable delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
                <div className="pl-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#3A7BFF] text-4xl font-serif">03</span>
                    <h3 className="text-2xl md:text-3xl text-white">Scale (Months 18-36)</h3>
                  </div>
                  <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                    Now the business is ready to grow. We scale what works.
                  </p>
                  <ul className="space-y-3 text-[#94a3b8]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Revenue growth — new channels, new markets, new offerings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Margin improvement — pricing, cost control, efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Team expansion — hire the people needed for the next level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Strategic positioning — make the business attractive to premium buyers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A7BFF] mt-1">—</span>
                      <span>Exit preparation — if you want to sell, make it irresistible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Timeline
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              The Roadmap To<br />Your Exit
            </h2>

            <div className="glass rounded-2xl p-8 md:p-10 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 border-b border-[#1e293b]">
                  <span className="text-white text-lg font-semibold mb-2 md:mb-0">Month 1-6</span>
                  <span className="text-[#3A7BFF] font-semibold text-lg">Stabilise — Stop the bleeding</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 border-b border-[#1e293b]">
                  <span className="text-white text-lg font-semibold mb-2 md:mb-0">Month 6-18</span>
                  <span className="text-[#3A7BFF] font-semibold text-lg">Systemise — Build the machine</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 border-b border-[#1e293b]">
                  <span className="text-white text-lg font-semibold mb-2 md:mb-0">Month 18-36</span>
                  <span className="text-[#3A7BFF] font-semibold text-lg">Scale — Grow the value</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6">
                  <span className="text-white text-lg font-semibold mb-2 md:mb-0">Month 36+</span>
                  <span className="text-[#3A7BFF] font-semibold text-lg">Enjoy your retirement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 5: Final CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Next Step
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              See The<br /><span className="gradient-text">Economics</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Understand how the Retire Without Selling model transforms your business value — and your retirement income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/the-economics"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                See The Economics
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
