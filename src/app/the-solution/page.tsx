import Link from 'next/link';

export const metadata = {
  title: 'The Solution | Build a Business That Runs Without You',
  description: 'Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement.',
};

export default function TheSolution() {
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
              The Solution
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Build a Business<br />
              That <span className="gradient-text">Runs Without You</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Step away, keep your equity, and continue receiving income throughout retirement.
            </p>
            <div className="max-w-3xl mx-auto mt-12 p-8 glass rounded-2xl border border-[#3A7BFF]/20">
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                Most business owners think the only way to retire is to sell. But selling often means accepting a fraction of what your business is worth, losing future income, and walking away from something you spent decades building.
              </p>
              <p className="text-lg text-[#94a3b8] leading-relaxed mt-4">
                There is a better way. Partner with us to build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement. You keep ownership. We bring the systems, the team, and the expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              How It Works
            </h2>

            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8">
                {[
                  {
                    num: '1',
                    title: 'You Keep Ownership',
                    body: 'Your equity stays yours. You are not selling today. You are building for tomorrow.',
                  },
                  {
                    num: '2',
                    title: 'We Bring Expertise',
                    body: 'Systems, management, operational expertise. We know how to build businesses that run without the owner.',
                  },
                  {
                    num: '3',
                    title: 'Value Grows Together',
                    body: 'We earn equity as the business grows. Both sides benefit from the increased valuation.',
                  },
                  {
                    num: '4',
                    title: 'You Step Back Gradually',
                    body: 'No abrupt exit. Reduce your hours over time. The business generates income while you focus on what matters.',
                  },
                  {
                    num: '5',
                    title: 'Exit On Your Terms',
                    body: 'When the business is worth 8-12x profit, sell to a premium buyer — or keep the income and never exit at all.',
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">{step.num}</div>
                    <div>
                      <h3 className="text-white font-semibold text-xl mb-1">{step.title}</h3>
                      <p className="text-[#94a3b8]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: Traditional Sale vs Partnering */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Comparison
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Traditional Sale vs<br /><span className="gradient-text">Partnering for Equity</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-8 border border-red-500/20">
                <div className="text-red-400 text-sm tracking-wider uppercase font-semibold mb-4">
                  Typical Sale
                </div>
                <ul className="space-y-3 text-[#94a3b8]">
                  {[
                    'Sell for 1-2x profit',
                    'Walk away with less than you need',
                    'Lose all future income',
                    'No control over what happens next',
                    'Often regret the price',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-red-400">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-xl p-8 border border-emerald-500/20">
                <div className="text-emerald-400 text-sm tracking-wider uppercase font-semibold mb-4">
                  Partnering for Equity
                </div>
                <ul className="space-y-3 text-[#94a3b8]">
                  {[
                    'Keep 80% ownership',
                    'Build to 8-12x profit',
                    'Receive ongoing income',
                    'Step back gradually',
                    'Exit on your own terms',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: The Real Question */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="glass rounded-2xl p-8 md:p-12 border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
                  The Shift
                </p>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                  The Real Question<br />Isn't How to Sell
                </h2>
                <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed">
                  <p className="text-2xl text-white font-light">
                    The question is not "how do I sell my business?"
                  </p>
                  <p className="text-2xl text-white font-semibold">
                    The question is "how do I build a business that runs without me, so I can step away, keep my equity, and continue receiving income throughout retirement?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ready to Build a<br />Business That Runs<br /><span className="gradient-text">Without You?</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Discover how partnering for equity can help you step back, keep your income, and exit on your own terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://regenovate.com/bsa"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Book Your Assessment
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                See How It Works
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
