import Link from 'next/link';

export const metadata = {
  title: 'The Solution | Retire Without Selling',
  description: 'Partner for equity. Build value. Step back. Keep ownership. Retire Without Selling your business.',
};

export default function TheSolution() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Solution
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        Partner for Equity.<br />Build Value. Step Back.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          Instead of selling for a low multiple today, partner with us to grow your business to its true value.
        </p>
        
        <p>
          You keep ownership. We bring the systems, the team, and the expertise. When the business runs without you, everyone wins.
        </p>
        
        <h2 className="text-3xl text-white mt-12 mb-6">What Partnering for Equity Means</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl text-white mb-3">You Keep Ownership</h3>
            <p className="text-[#94a3b8]">You do not sell your business. You retain your equity. You keep the upside when the value increases.</p>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl text-white mb-3">We Build Systems</h3>
            <p className="text-[#94a3b8]">We install the management, the processes, the documentation that makes your business run without you.</p>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl text-white mb-3">You Step Back</h3>
            <p className="text-[#94a3b8]">Gradually reduce your involvement. The business generates income while you focus on what matters to you.</p>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl text-white mb-3">We Share the Upside</h3>
            <p className="text-[#94a3b8]">We earn equity as the value grows. You keep the majority. Both sides benefit from the increased valuation.</p>
          </div>
        </div>
        
        <h2 className="text-3xl text-white mt-12 mb-6">The Alternative to Selling</h2>
        
        <p>
          Selling is not the only way to retire. In fact, for most business owners, selling is the worst option. You get a low multiple, you lose control, and you watch someone else run your business into the ground.
        </p>
        
        <p>
          Partnering for equity is the alternative. You keep your business. You keep your legacy. You keep the income. And when the business is worth 8-12x profit instead of 1-2x, you can exit on your own terms — or never exit at all.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/the-method"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
          >
            See How It Works
          </Link>
          <Link
            href="/the-economics"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
          >
            See The Economics
          </Link>
        </div>
      </div>
    </div>
  );
}
