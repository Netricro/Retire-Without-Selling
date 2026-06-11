import Link from 'next/link';

export const metadata = {
  title: 'The Problem | Retire Without Selling',
  description: 'The Retirement Value Gap: the difference between what your business is worth and what you need to retire. Most UK owners discover it too late.',
};

export default function TheProblem() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Problem
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        The Retirement Value Gap
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The difference between your Business Earnings NOW and Your Investment Income after selling.
        </p>
        
        <p>
          For most UK business owners, this gap is £1 million or more. And they do not discover it until they try to sell.
        </p>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-6">The Hard Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">95%</div>
              <p className="text-[#94a3b8]">of businesses put up for sale never sell</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">96%</div>
              <p className="text-[#94a3b8]">that do sell go for 20-30% of true value</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-[#3A7BFF] mb-2">3x</div>
              <p className="text-[#94a3b8]">valuation gap between expectation and reality</p>
            </div>
          </div>
        </div>
        
        <p>
          You imagine selling for millions, handing over the keys, and taking a long holiday with your family. Secure for decades, maybe generations.
        </p>
        
        <p className="text-white text-xl font-semibold">
          This is a fairy tale for most business owners.
        </p>
        
        <p>
          The market does not care how hard you worked. It values what your business can generate <strong className="text-white">without you</strong>. If the systems are in your head, the clients only want you, and the team cannot function without your daily involvement — the market sees a business worth a fraction of what you built.
        </p>
        
        <p>
          The average owner thinks their business is worth 3-5 times profit. The market often pays 1-2 times. That gap is the <strong className="text-[#3A7BFF]">Retirement Value Gap</strong>.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">Why It Happens</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Key person dependency</strong> — the business cannot function without the owner</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">No documented systems</strong> — everything is in the owner's head</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Concentrated customer base</strong> — one or two customers represent most revenue</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Poor financial records</strong> — the true profitability is hidden or unclear</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">No management team</strong> — the team cannot operate without the owner's daily decisions</span>
            </li>
          </ul>
        </div>
        
        <p>
          Most discover it too late. They have already mentally retired. They have already spent the money in their head. Then the offer comes in, and the reality hits: years of work, valued at a fraction of what they imagined.
        </p>
        
        <p>
          The good news: the gap is predictable. And it is fixable. But not by selling today. By building value first, then exiting on your own terms — or never exiting at all.
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
