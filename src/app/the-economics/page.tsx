import Link from 'next/link';
import RetirementGapCalculator from '@/components/RetirementGapCalculator';

export const metadata = {
  title: 'The Economics | Retire Without Selling',
  description: 'The real numbers: why selling today for 1-2x profit means leaving millions on the table. See how partnering for equity builds 8-12x value over 3-5 years.',
};

export default function TheEconomics() {
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
              The Economics
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              What Is Your Business<br />
              <span className="gradient-text">Actually Worth?</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              The difference between selling today and building value first is measured in millions.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: The Calculator */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Numbers
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight text-center">
              See What Selling<br />
              <span className="gradient-text">Really Costs You</span>
            </h2>
            <RetirementGapCalculator />
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: The Partner's Role */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Partnership
            </p>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              The Partner's<br />
              <span className="gradient-text">Role</span>
            </h2>
            
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <p className="text-xl text-[#94a3b8] mb-8">We bring:</p>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <span className="text-[#3A7BFF] text-2xl font-serif shrink-0">•</span>
                    <span className="text-lg text-[#94a3b8]"><strong className="text-white">Capital</strong> to fund growth</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#3A7BFF] text-2xl font-serif shrink-0">•</span>
                    <span className="text-lg text-[#94a3b8]"><strong className="text-white">Expertise</strong> in building systems</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#3A7BFF] text-2xl font-serif shrink-0">•</span>
                    <span className="text-lg text-[#94a3b8]"><strong className="text-white">Management talent</strong> to run the business</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-[#3A7BFF] text-2xl font-serif shrink-0">•</span>
                    <span className="text-lg text-[#94a3b8]"><strong className="text-white">Network</strong> of potential buyers</span>
                  </li>
                </ul>
                <p className="mt-10 text-lg text-[#94a3b8] leading-relaxed">
                  In exchange, we earn equity as the value grows. We only win if the business wins. Our incentives are aligned with yours.
                </p>
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
              Read Our<br />
              <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              See how the partnership model works in practice and what it could mean for your business.
            </p>
            <Link
              href="/your-story"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-xl hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
            >
              Read Our Story
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
