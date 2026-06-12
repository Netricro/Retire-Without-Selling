import Link from 'next/link';
import AnimatedNumber from '@/components/AnimatedNumber';

export const metadata = {
  title: 'Our Story | Retire Without Selling',
  description: 'Ric Wilson lived the Retirement Gap. Now he helps other business owners build value and retire on their own terms.',
};

export default function YourStory() {
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
              Our Story
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              We lived this<br />
              <span className="gradient-text">and we help others.</span>
            </h1>
            <div className="max-w-3xl mx-auto mt-12 p-8 glass rounded-2xl border border-[#3A7BFF]/20">
              <p className="text-lg text-[#94a3b8] leading-relaxed">
                We built profitable businesses, assumed they were worth what we needed, and the market told us something different. The businesses were too dependent on us. The systems were in our heads. The clients wanted to talk to us, not our teams.
              </p>
              <p className="text-lg text-[#94a3b8] leading-relaxed mt-4">
                We faced a choice: sell for a fraction, or find another way. We chose the other way. We partnered with people who understood how to build value, how to systematise, how to create a business that runs without the owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: The Journey */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Journey
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              From Owner-<br />Dependent To Owner-Free
            </h2>
            
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
                <p>
                  We built profitable businesses, assumed they were worth what we needed, and the market told us something different. The businesses were too dependent on us. The systems were in our heads. The clients wanted to talk to us, not our teams.
                </p>
                <p>
                  We faced a choice: sell for a fraction, or find another way. We chose the other way. We partnered with people who understood how to build value, how to systematise, how to create a business that runs without the owner.
                </p>
                <p>
                  Since then, we have worked with hundreds of businesses, acquired five, and seen the same pattern everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: What We Have Built - Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              Track Record
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight text-center">
              What We Have <span className="gradient-text">Built</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
              <div className="animate-fade-in-up animation-delay-100">
                <div className="number-stat">
                  <AnimatedNumber target={500} suffix="+" />
                </div>
                <p className="text-[#94a3b8] mt-4 text-lg">Businesses advised</p>
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <div className="number-stat">
                  <AnimatedNumber target={5} />
                </div>
                <p className="text-[#94a3b8] mt-4 text-lg">Businesses acquired</p>
              </div>
              <div className="animate-fade-in-up animation-delay-300">
                <div className="number-stat flex items-baseline justify-center gap-1">
                  <span>£</span>
                  <AnimatedNumber target={100} suffix="M+" />
                </div>
                <p className="text-[#94a3b8] mt-4 text-lg">Value created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: The Methodology */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Methodology
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Retire Without Selling
            </h2>
            
            <div className="glass rounded-2xl p-8 md:p-12 border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <p className="text-2xl text-white font-light mb-6">
                  We developed the <strong className="text-[#3A7BFF]">Build to Retire</strong> methodology and the <strong className="text-[#3A7BFF]">Partnering for Equity</strong> model to solve this exact problem.
                </p>
                <p className="text-2xl text-white font-semibold mb-6">
                  We have lived it. We have done it. And now we help other owners do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 5: What We Believe */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Principles
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              What We <span className="gradient-text">Believe</span>
            </h2>
            
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-6">
                {[
                  'Every business owner who has spent decades building something deserves to retire on what it is worth',
                  'Selling is not the only way — and often not the best way',
                  'The gap between current value and retirement needs is predictable and fixable',
                  'Building systems and teams is the only sustainable path to value',
                  'You deserve a financially independent retirement. Without selling what you built.',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#3A7BFF]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#3A7BFF] text-sm font-semibold">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-lg text-[#94a3b8] leading-relaxed">{item}</p>
                  </div>
                ))}
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
              See The 5 Deal Killers
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Discover the five hidden factors that destroy business value before any sale — and how to avoid them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/deal-killers"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                See The 5 Deal Killers
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
