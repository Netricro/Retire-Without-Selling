import Link from 'next/link';

export const metadata = {
  title: 'The Problem | Retire Without Selling',
  description: 'The Retirement Gap: the difference between what your business is worth and what you need to retire. Most UK owners discover it too late.',
};

export default function TheProblem() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Problem
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              The Retirement Gap
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              The difference between your active business income and your future passive income
            </p>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Over 97% of those selling their business suffer a 78%-85% drop in income unnecessarily.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Hard Numbers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="number-stat">83%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">The average reduction in income after a sale</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="number-stat">75%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">Owners deeply regret selling their business</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="number-stat">68%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">of businesses fail within 12 months of being sold</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        
        <p>
          You imagine selling for £millions, you hand over the keys and take a long well deserved holiday with your family. You believe you are now going to be financially secure for the next 30+ years. Maybe even generations.
        </p>
        
        <p className="text-white text-xl font-semibold">
          Sadly, that is seldom what happens
        </p>
        
        <p>
          For 98% of sellers this is a fairytale. After they sell their business, even if they invest 100% of the money with a financial advisor, the income from their investments is typically 78% to 89% LESS than their income from their business. And to make matters worse, inflation reduces this even further.
        </p>
        
        <p>
          This is called the <strong className="text-[#3A7BFF]">Retirement Gap</strong>
        </p>
        
        <p>
          But there is a better way that helps you retain or even improve your income level you enjoyed when you owned the business without all the responsibilities.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">Why The Retirement Gap Happens</h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            The Retirement Gap happens when you are forced to sell prematurely, leaving the business half-built and its true potential unrealized.
          </p>
        </div>
        
        <p>
          Most business owners don't discover their Retirement Gap until it's too late.
        </p>
        
        <p>
          By then, they've already mentally sold the business. They've started making plans, spending some of the proceeds in their head, and looking forward to life after work. Then their financial adviser shows them what their investment income is actually going to be.
        </p>
        
        <p className="text-white text-xl font-semibold">
          That's when reality hits.
        </p>
        
        <p>
          They realise they've sold the greatest income-producing asset they'll ever own, only to replace it with an investment return that's a fraction of the income they were taking from the business.
        </p>
        
        <p className="text-white text-xl font-semibold">
          The regret can be profound.
        </p>
        
        <p>
          The good news is that the Retirement Gap is predictable—and it's fixable.
        </p>
        
        <p className="text-white text-xl font-semibold">
          Instead of selling your income, we help you keep it.
        </p>
        
        <p>
          Within months, our team can put the right structure, systems and leadership in place so your management team runs the business without you. Your income then comes from dividends rather than day-to-day involvement, and in many cases those dividends match or exceed the income you were taking when you were running the business yourself.
        </p>
        
        <p>
          That's how you close the Retirement Gap—and create a future where your income continues to grow, even after you've stepped back.
        </p>
        
        <div className="flex flex-col items-center gap-6 my-16">
          <Link
            href="/the-solution"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
          >
            See The Solution
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
