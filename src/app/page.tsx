import Link from 'next/link';

export const metadata = {
  title: 'Retire Without Selling Your Business | Build to Retire',
  description: 'Most UK business owners over 55 will never retire on what their business is worth. 95% never sell. 96% sell for a fraction. There is a better way: partner for equity, build value, step back, keep ownership.',
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              For UK Business Owners 55+
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Retire Without<br />
              <span className="gradient-text">Selling</span> Your<br />
              Business
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              95% of businesses never sell. 96% sell for a fraction of what they are worth.
              There is a better way. Partner for equity. Build value. Step back. Keep ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://regenovate.com/bsa"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105"
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

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="number-stat">95%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">of businesses never sell</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="number-stat">96%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">sell for 20-30% of true value</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="number-stat">2M</div>
              <p className="text-[#94a3b8] mt-4 text-lg">UK owners retiring, &lt;1,000 buyers</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Problem Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            The Retirement Value Gap
          </h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-3xl mx-auto leading-relaxed">
            The difference between what your business is worth and what you need to retire. For most UK business owners over 55, it is £1 million or more. And they do not discover it until they try to sell.
          </p>
          <Link
            href="/the-problem"
            className="inline-flex items-center text-[#3A7BFF] font-semibold hover:text-white transition-colors"
          >
            Read More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Solution Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
            The Solution
          </p>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Partner for Equity.<br />Build Value. Step Back.
          </h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-3xl mx-auto leading-relaxed">
            Instead of selling for a low multiple today, partner with us to grow your business to its true value. You keep ownership. We bring the systems, the team, and the expertise.
          </p>
          <Link
            href="/the-solution"
            className="inline-flex items-center text-[#3A7BFF] font-semibold hover:text-white transition-colors"
          >
            Read More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Method Preview */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            The Method
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-16 leading-tight">
            Stabilise. Systemise. Scale.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">01</div>
              <h3 className="text-2xl mb-3">Stabilise</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Fix cash flow, management structure, and key person risk. Get the business stable so it can grow without depending on you daily.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">02</div>
              <h3 className="text-2xl mb-3">Systemise</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Document processes. Build the management team. Create systems that work whether you are in the office or on holiday.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">03</div>
              <h3 className="text-2xl mb-3">Scale</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Grow the value. Increase profitability. Build a business that runs without you and is worth 8-12x profit instead of 1-2x.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-[#3A7BFF] font-semibold hover:text-white transition-colors"
            >
              See The Full Method
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Find Out Where You Stand
          </h2>
          <p className="text-xl text-[#94a3b8] mb-10 leading-relaxed">
            Take our free 5-minute Business Sale Assessment. No pitch. Just clarity.
          </p>
          <a
            href="https://regenovate.com/bsa"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
          >
            Take the Free 5-Min Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-[#94a3b8] mt-6 text-sm">
            Or <a href="mailto:ric@regenovate.com" className="text-[#3A7BFF] hover:underline">email us</a> to book a discovery call
          </p>
        </div>
      </section>
    </div>
  );
}
