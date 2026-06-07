import Link from 'next/link';

export const metadata = {
  title: 'The Economics | Retire Without Selling',
  description: 'What is your business actually worth? Compare the typical sale scenario with the Partnering for Equity path.',
};

export default function TheEconomics() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Economics
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        What Is Your Business Actually Worth?
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The numbers tell the story. Here is what the typical sale looks like versus the Partnering for Equity path.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl mb-6 text-[#94a3b8]">The Typical Scenario</h2>
            <div className="space-y-4">
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
              <div className="flex justify-between items-center py-3">
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
            <h2 className="text-2xl mb-6 text-[#3A7BFF]">The Partnering for Equity Path</h2>
            <div className="space-y-4">
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
              <div className="flex justify-between items-center py-3">
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
        
        <p className="text-center mt-8">
          These are illustrative numbers. Every business is different. The principle is the same: <strong className="text-white">build value first, exit later.</strong>
        </p>
        
        <div className="glass rounded-xl p-8 mt-12">
          <h2 className="text-2xl text-white mb-4">Why the Multiple Increases</h2>
          <p className="mb-4">
            A business that depends on the owner sells for 1-2x profit. A business that runs without the owner sells for 8-12x. The difference is not just growth — it is transferability.
          </p>
          <p className="mb-4">
            Buyers pay premiums for businesses that:
          </p>
          <ul className="space-y-2 text-[#94a3b8]">
            <li>• Have documented systems and processes</li>
            <li>• Have a management team that operates independently</li>
            <li>• Have diversified revenue and customer base</li>
            <li>• Have clean financials and transparent reporting</li>
            <li>• Can grow without the founder's daily involvement</li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
          >
            Take The Free Assessment
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
