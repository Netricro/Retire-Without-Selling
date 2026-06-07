import Link from 'next/link';

export const metadata = {
  title: 'The Economics | Retire Without Selling',
  description: 'The real numbers: why selling today for 1-2x profit means leaving millions on the table. See how partnering for equity builds 8-12x value over 3-5 years.',
};

export default function TheEconomics() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Economics
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        What Is Your Business Actually Worth?
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The difference between selling today and building value first is measured in millions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl mb-6 text-[#94a3b8]">The Typical Sale</h2>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Current EBIT</span>
                <span className="font-semibold">£500,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Market Multiple</span>
                <span className="font-semibold">1.5x - 2.5x</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Sale Value</span>
                <span className="font-semibold text-red-400">£750K - £1.25M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>What You Need to Retire</span>
                <span className="font-semibold">£2M - £3M</span>
              </div>
              <div className="pt-4 mt-4 border-t-2 border-red-400">
                <div className="flex justify-between items-center">
                  <span className="text-red-400 font-semibold">The Gap</span>
                  <span className="font-semibold text-red-400">£1M - £2.25M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-8 border border-[#3A7BFF]/30">
            <h2 className="text-2xl mb-6 text-[#3A7BFF]">The Partnering Path</h2>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Year 1-2: Systemise & Grow</span>
                <span className="font-semibold">EBIT doubles to £1M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Year 3-5: Scale & Optimise</span>
                <span className="font-semibold">EBIT reaches £2M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Exit Multiple</span>
                <span className="font-semibold">8x - 12x</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                <span>Final Value</span>
                <span className="font-semibold text-[#3A7BFF]">£16M - £24M</span>
              </div>
              <div className="pt-4 mt-4 border-t-2 border-[#3A7BFF]">
                <div className="flex justify-between items-center">
                  <span className="text-[#3A7BFF] font-semibold">Your Share (80%)</span>
                  <span className="font-semibold text-[#3A7BFF]">£12.8M - £19.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-xl">
          Illustrative numbers. Every business is different. The principle is the same: <strong className="text-white">build value first, exit later.</strong>
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">Why the Multiple Increases</h2>
          <div className="space-y-4">
            <p>A business dependent on the owner sells for 1-2x. A business with documented systems, strong management, diversified revenue, and clean financials sells for 8-12x.</p>
            <p>The difference is not magic. It is the work of stabilising, systemising, and scaling.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-[#94a3b8] font-semibold mb-3">1-2x Multiple Business</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li>• Owner-dependent</li>
                  <li>• No documented systems</li>
                  <li>• Concentrated customer base</li>
                  <li>• Poor financial records</li>
                  <li>• No management team</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#3A7BFF] font-semibold mb-3">8-12x Multiple Business</h3>
                <ul className="space-y-2 text-[#94a3b8]">
                  <li>• Runs without owner</li>
                  <li>• Fully documented systems</li>
                  <li>• Diversified customers</li>
                  <li>• Clean, audited financials</li>
                  <li>• Strong management team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-4">The Partner's Role</h2>
          <p className="mb-4">We bring:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Capital</strong> to fund growth</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Expertise</strong> in building systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Management talent</strong> to run the business</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span><strong className="text-white">Network</strong> of potential buyers</span>
            </li>
          </ul>
          <p className="mt-4">In exchange, we earn equity as the value grows. We only win if the business wins. Our incentives are aligned with yours.</p>
        </div>
        
        <div className="flex flex-col items-center gap-6 my-16">
          <Link
            href="/your-story"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
          >
            Read Our Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
