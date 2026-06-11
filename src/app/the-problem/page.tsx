import Link from 'next/link';

export const metadata = {
  title: 'The Problem | Retire Without Selling',
  description: 'The Retirement Gap: the difference between what your business is worth and what you need to retire. Most UK owners discover it too late.',
};

export default function TheProblem() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Problem
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        The Retirement Gap
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The difference between your active business income and your future passive income
        </p>
        
        <p>
          Over 97% of those selling their business suffer a 78%-85% drop in income unnecessarily.
        </p>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-6">The Hard Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">83%</div>
              <p className="text-[#94a3b8]">The average reduction in income after a sale</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">75%</div>
              <p className="text-[#94a3b8]">Owners deeply regret selling their business</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">68%</div>
              <p className="text-[#94a3b8]">of businesses fail within 12 months of being sold</p>
            </div>
          </div>
        </div>
        
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
