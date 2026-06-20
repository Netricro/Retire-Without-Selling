import Link from 'next/link';
import AnimatedNumber from '@/components/AnimatedNumber';

export const metadata = {
  title: 'Build a Business That Runs Without You | Retire Without Selling',
  description: 'Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement.',
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Retire Without<br />
              <span className="gradient-text">Selling</span> Your<br />
              Business
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Take the Free 5-Min Assessment
              </a>
              <Link
                href="/the-problem"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="number-stat">
                <AnimatedNumber target={75} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">drop in income after selling their business</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="number-stat">
                <AnimatedNumber target={95} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">of businesses don't sell and are simply closed down</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="number-stat">
                <AnimatedNumber target={76} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">of business sellers deeply regret selling</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Problem Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight text-center">
              The Retirement<br />Gap
            </h2>
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
                <p className="text-2xl text-white font-light text-center">
                  The difference between your active business income and your future passive income
                </p>
                <p className="text-center">
                  Over 97% of those selling their business suffer a 78%-85% drop in income unnecessarily. Most discover the gap too late—after they've already sold their greatest income-producing asset.
                </p>
                <div className="text-center pt-8 border-t border-white/10">
                  <p className="text-xl text-white font-semibold">
                    The real goal isn't to sell. It's to maintain your income without the responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/the-problem"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Solution Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight text-center">
              Build a Business That<br />Runs Without You
            </h2>
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
                <p className="text-2xl text-white font-light text-center">
                  Step away, keep your equity, and continue receiving income throughout retirement.
                </p>
                <p className="text-center">
                  We partner with you to build the systems, the team, and the structure that makes it possible. You keep ownership. We bring the expertise. When the business no longer depends on you, everyone wins.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl">✓</span>
                    <span className="text-white">Keep your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl">✓</span>
                    <span className="text-white">Keep receiving income</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl">✓</span>
                    <span className="text-white">Step away without selling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl">✓</span>
                    <span className="text-white">Retire on your terms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/the-solution"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Method Preview */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Method
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
              Stabilise. Systemise. Scale.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-[#3A7BFF] text-5xl font-serif mb-4">01</div>
                <h3 className="text-2xl text-white mb-3">Stabilise</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Fix cash flow, management structure, and key person risk. Get the business stable so it can grow without depending on you daily.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-[#3A7BFF] text-5xl font-serif mb-4">02</div>
                <h3 className="text-2xl text-white mb-3">Systemise</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Document processes. Build the management team. Create systems that work whether you are in the office or on holiday.
                </p>
              </div>
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-[#3A7BFF] text-5xl font-serif mb-4">03</div>
                <h3 className="text-2xl text-white mb-3">Scale</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Grow the value. Increase profitability. Build a business that runs without you — So that you can Retire Without Selling! 😎
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                See The Full Method
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A7BFF]/5 via-transparent to-[#3A7BFF]/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ready to Step Away and Keep Your Equity?
            </h2>
            <p className="text-xl text-[#94a3b8] mb-10 leading-relaxed">
              Take our free 5-minute Business Sale Assessment. No pitch. Just clarity.
            </p>
            <a
              href="/assessment"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
            >
              Take the Free 5-Min Assessment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-[#94a3b8] mt-6 text-sm">
              Or <a href="mailto:hello@retirewithoutselling.com" className="text-[#3A7BFF] hover:underline">email us</a> to book a discovery call
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
