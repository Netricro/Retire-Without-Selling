import Link from 'next/link';

export const metadata = {
  title: 'The Solution | Retire Without Selling',
  description: 'Partnering for equity: keep ownership, build value, step back. A better path than selling for a fraction today.',
};

export default function TheSolution() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Solution
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Partner for Equity.<br />Build Value. Step Back.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          Instead of selling for a low multiple today, partner with us to grow your business to its true value.
        </p>
        
        <p>
          You keep ownership. We bring the systems, the team, and the expertise. When the business runs without you, everyone wins.
        </p>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">1</div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">You Keep Ownership</h3>
                <p>Your equity stays yours. You are not selling today. You are building for tomorrow.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">2</div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">We Bring Expertise</h3>
                <p>Systems, management, operational expertise. We know how to build businesses that run without the owner.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">3</div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">Value Grows Together</h3>
                <p>We earn equity as the business grows. Both sides benefit from the increased valuation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">4</div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">You Step Back Gradually</h3>
                <p>No abrupt exit. Reduce your hours over time. The business generates income while you focus on what matters.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-3xl shrink-0">5</div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-1">Exit On Your Terms</h3>
                <p>When the business is worth 8-12x profit, sell to a premium buyer — or keep the income and never exit at all.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">The Traditional Sale vs Partnering for Equity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#94a3b8] font-semibold mb-3">Typical Sale</h3>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Sell for 1-2x profit</li>
                <li>• Walk away with less than you need</li>
                <li>• Lose all future income</li>
                <li>• No control over what happens next</li>
                <li>• Often regret the price</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#3A7BFF] font-semibold mb-3">Partnering for Equity</h3>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Keep 80% ownership</li>
                <li>• Build to 8-12x profit</li>
                <li>• Receive ongoing income</li>
                <li>• Step back gradually</li>
                <li>• Exit on your own terms</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p>
          The question is not "how do I sell my business?" The question is "how do I retire on what my business is worth?" Selling is one answer. Building value and keeping ownership is another. For most owners, it is the better answer.
        </p>
        
        <div className="flex flex-col items-center gap-6 my-16">
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
          >
            See How It Works
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
