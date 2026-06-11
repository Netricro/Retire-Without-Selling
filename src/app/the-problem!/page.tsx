import Link from 'next/link';
import AnimatedNumber from '@/components/AnimatedNumber';
import RetirementGapCalculator from '@/components/RetirementGapCalculator';

export const metadata = {
  title: 'The Retirement Gap | Retire Without Selling',
  description: 'The hidden financial trap that destroys the retirement plans of most business owners. Discover why selling your greatest income-producing asset can dramatically reduce your income for life.',
};

export default function TheProblemNew() {
  return (
    <div className="flex flex-col flex-1">
      {/* SECTION 1: Hero - The Retirement Gap */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Hidden Financial Trap
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              The Retirement<br />
              <span className="gradient-text">Gap</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              The hidden financial trap that destroys the retirement plans of most business owners
            </p>
            <div className="max-w-2xl mx-auto mt-12 p-8 glass rounded-2xl border border-[#3A7BFF]/20">
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                Most business owners believe selling their company will secure their future.
              </p>
              <p className="text-lg text-[#94a3b8] leading-relaxed mt-4">
                In reality, many discover too late that selling their greatest income-producing asset can dramatically reduce their income for the rest of their lives.
              </p>
            </div>
            {/* Visual Gap Illustration */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="flex items-end justify-between gap-4 h-48 md:h-64">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-[#3A7BFF]/30 rounded-t-lg h-48 md:h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-serif text-[#3A7BFF]">£500K</div>
                      <div className="text-sm text-[#94a3b8] mt-2">Business Income</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#3A7BFF]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-[#3A7BFF]/10 rounded-t-lg h-12 md:h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-serif text-[#94a3b8]">£75K</div>
                      <div className="text-sm text-[#94a3b8] mt-2">Investment Income</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-block px-6 py-3 bg-[#3A7BFF]/20 rounded-lg border border-[#3A7BFF]/30">
                  <span className="text-[#3A7BFF] font-semibold">The Gap: £425K per year — Forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: The £300,000 Mistake */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Scenario
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              The £425,000<br />Mistake
            </h2>
            
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8">
                <div className="text-center pb-8 border-b border-white/10">
                  <p className="text-xl text-[#94a3b8] leading-relaxed">
                    Imagine your business generates <span className="text-white font-semibold">£500,000 per year</span>.
                  </p>
                  <p className="text-xl text-[#94a3b8] leading-relaxed mt-4">
                    After years of hard work you sell it for <span className="text-white font-semibold">£1.5 million</span>.
                  </p>
                  <p className="text-xl text-white font-semibold mt-6">
                    Sounds like success.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-[#94a3b8] leading-relaxed">
                    But after fees, taxes and sensible investment returns, your £1.5 million may only generate
                  </p>
                  <p className="text-5xl md:text-6xl font-serif text-[#3A7BFF] my-6">
                    £75,000
                  </p>
                  <p className="text-lg text-[#94a3b8] leading-relaxed">
                    per year.
                  </p>
                </div>
                
                <div className="text-center pt-8 border-t border-white/10">
                  <p className="text-xl text-white font-semibold">
                    You haven't secured your future.
                  </p>
                  <p className="text-2xl md:text-3xl font-serif text-[#3A7BFF] mt-4">
                    You've taken a £425,000 annual pay cut.
                  </p>
                  <p className="text-xl text-white font-semibold mt-4">
                    Forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: Statistics */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="number-stat">
                <AnimatedNumber target={83} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">Average reduction in income after a sale</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="number-stat">
                <AnimatedNumber target={75} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">Owners regret selling their business</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="number-stat">
                <AnimatedNumber target={68} suffix="%" />
              </div>
              <p className="text-[#94a3b8] mt-4 text-lg">Businesses fail within 12 months after being sold</p>
            </div>
          </div>
          <p className="text-center text-[#94a3b8]/60 text-sm mt-16">
            Source: Industry research and exit planning studies
          </p>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: The Biggest Lie */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="glass rounded-2xl p-8 md:p-12 border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
                  The Truth About Exit Planning
                </p>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                  The Biggest Lie In<br />Exit Planning
                </h2>
                <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed">
                  <p className="text-2xl text-white font-light">
                    Most owners believe the goal is to sell their business.
                  </p>
                  <p className="text-2xl text-white font-semibold">
                    It isn't.
                  </p>
                  <p>
                    The real goal is to maintain or improve your income after you've stepped away.
                  </p>
                  <p className="text-white font-semibold">
                    For many owners, selling achieves the exact opposite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 5: Why The Retirement Gap Happens */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Cause
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Why The Retirement<br />Gap Happens
            </h2>
            
            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p>
                The Retirement Gap exists because business owners exchange a high-performing income-producing asset for lower-yield investments.
              </p>
              <p>
                The problem is made worse when the business depends heavily on the owner.
              </p>
              <p>
                If circumstances force a sale before the business can operate independently, the financial consequences can be severe.
              </p>
            </div>
            
            {/* Comparison Visual */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-8 border border-red-500/20">
                <div className="text-red-400 text-sm tracking-wider uppercase font-semibold mb-4">
                  The Wrong Path
                </div>
                <div className="space-y-3 text-[#94a3b8]">
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">✗</span>
                    <span>Owner-dependent business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">↓</span>
                    <span>Forced sale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">↓</span>
                    <span>Reduced income</span>
                  </div>
                </div>
              </div>
              <div className="glass rounded-xl p-8 border border-emerald-500/20">
                <div className="text-emerald-400 text-sm tracking-wider uppercase font-semibold mb-4">
                  The Right Path
                </div>
                <div className="space-y-3 text-[#94a3b8]">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Independent business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">↑</span>
                    <span>Dividend income</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">↑</span>
                    <span>Wealth growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 6: Time Is Not On Your Side */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Urgency
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Time Is Not On<br />Your Side
            </h2>
            
            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p>
                Every year you remain the key person in your business, your options become more limited.
              </p>
            </div>
            
            {/* Timeline / Risk Factors */}
            <div className="mt-12 space-y-4">
              {[
                'A health issue.',
                'Burnout.',
                'Market changes.',
                'Family circumstances.',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#3A7BFF]" />
                  <span className="text-[#94a3b8] text-lg">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-8 glass rounded-xl border border-[#3A7BFF]/20">
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                Suddenly the business must be sold rather than being sold by choice.
              </p>
              <p className="text-xl text-white font-semibold mt-4">
                That's when the Retirement Gap becomes unavoidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 7: Don't Sell Your Income. Keep It. */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A7BFF]/5 via-transparent to-[#3A7BFF]/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              Don't Sell Your<br />Income. <span className="gradient-text">Keep It.</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Most exit strategies focus on selling your business. We focus on making your business work without you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Keep the income', icon: '✓' },
                { label: 'Lose the responsibility', icon: '✓' },
                { label: 'Retain the asset', icon: '✓' },
                { label: 'Continue building wealth', icon: '✓' },
              ].map((item, index) => (
                <div key={index} className="glass rounded-xl p-6 flex items-center gap-4 border border-[#3A7BFF]/20">
                  <span className="text-emerald-400 text-xl">{item.icon}</span>
                  <span className="text-white font-semibold text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 8: Retirement Gap Calculator */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Calculator
            </p>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Retirement Gap<br />Calculator
            </h2>
            <p className="text-xl text-[#94a3b8] mb-12 leading-relaxed">
              See what selling your business could really cost you
            </p>
            
            <RetirementGapCalculator />
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 9: Close The Retirement Gap */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Close The<br />Retirement Gap
            </h2>
            
            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p>
                Within months, we help business owners build the systems, structure and leadership required for the business to operate without them.
              </p>
              <p>
                Instead of selling your income, you retain it.
              </p>
              <p>
                Instead of relying on investment returns, you continue receiving dividends from a business that works without your daily involvement.
              </p>
              <p className="text-white font-semibold">
                In many cases, owners maintain or exceed their previous income while dramatically reducing their responsibilities.
              </p>
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
              Discover Your<br />Retirement Gap
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-4">
              Most business owners never calculate the true cost of selling their business.
            </p>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Find out where you stand before it's too late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://regenovate.com/bsa"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Book Your Retirement Gap Assessment
              </a>
              <Link
                href="/the-solution"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Calculate My Retirement Gap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
