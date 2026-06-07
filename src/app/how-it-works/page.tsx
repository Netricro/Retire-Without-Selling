import Link from 'next/link';

export const metadata = {
  title: 'How It Works | Retire Without Selling',
  description: 'The Build to Retire methodology: Stabilise, Systemise, Scale. Three phases to build a business that runs without you and is worth 8-12x profit.',
};

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Method
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Stabilise. Systemise. Scale.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          Three phases to build a business that runs without you and is worth 8-12x profit instead of 1-2x.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="glass rounded-2xl p-8 glow-blue">
            <div className="text-[#3A7BFF] text-5xl font-serif mb-4">01</div>
            <h2 className="text-2xl text-white mb-3">Stabilise</h2>
            <p className="leading-relaxed mb-4">
              Fix the immediate problems. Cash flow, management structure, key person risk. Get the business stable so it can grow without depending on you daily.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Fix cash flow issues</li>
              <li>• Identify key person risks</li>
              <li>• Clarify management roles</li>
              <li>• Stop the bleeding</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 glow-blue">
            <div className="text-[#3A7BFF] text-5xl font-serif mb-4">02</div>
            <h2 className="text-2xl text-white mb-3">Systemise</h2>
            <p className="leading-relaxed mb-4">
              Document the processes. Build the management team. Create systems that work whether you are in the office or on holiday. Transfer the knowledge from your head into the business.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Document all processes</li>
              <li>• Build management team</li>
              <li>• Create dashboards</li>
              <li>• Transfer knowledge</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8 glow-blue">
            <div className="text-[#3A7BFF] text-5xl font-serif mb-4">03</div>
            <h2 className="text-2xl text-white mb-3">Scale</h2>
            <p className="leading-relaxed mb-4">
              Grow the value. Increase profitability. Expand the team. Build a business that runs without you — and is worth 8-12x profit instead of 1-2x.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Grow revenue systematically</li>
              <li>• Improve margins</li>
              <li>• Expand the team</li>
              <li>• Prepare for premium exit</li>
            </ul>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">What Each Phase Looks Like in Practice</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-[#3A7BFF] mb-3">Stabilise (Months 1-6)</h3>
              <p className="mb-3">This is triage. We identify the biggest risks and fix them fast.</p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Cash flow analysis — where is the money going, and why?</li>
                <li>• Management audit — who can actually run things without you?</li>
                <li>• Customer concentration — what happens if your biggest client leaves?</li>
                <li>• Financial clean-up — separate personal from business, clear the books</li>
                <li>• Quick wins — fix the obvious problems that are killing value</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl text-[#3A7BFF] mb-3">Systemise (Months 6-18)</h3>
              <p className="mb-3">This is where the real value is built. Systems are what make a business worth 8-12x instead of 1-2x.</p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Process documentation — every critical workflow written down</li>
                <li>• Management training — your team learns to run the business</li>
                <li>• Financial reporting — monthly dashboards, clear KPIs</li>
                <li>• Customer diversification — reduce dependence on any single client</li>
                <li>• Quality systems — ISO, compliance, repeatable delivery</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl text-[#3A7BFF] mb-3">Scale (Months 18-36)</h3>
              <p className="mb-3">Now the business is ready to grow. We scale what works.</p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Revenue growth — new channels, new markets, new offerings</li>
                <li>• Margin improvement — pricing, cost control, efficiency</li>
                <li>• Team expansion — hire the people needed for the next level</li>
                <li>• Strategic positioning — make the business attractive to premium buyers</li>
                <li>• Exit preparation — if you want to sell, make it irresistible</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-4">The Timeline</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
              <span>Month 1-6</span>
              <span className="text-[#3A7BFF] font-semibold">Stabilise — Stop the bleeding</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
              <span>Month 6-18</span>
              <span className="text-[#3A7BFF] font-semibold">Systemise — Build the machine</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
              <span>Month 18-36</span>
              <span className="text-[#3A7BFF] font-semibold">Scale — Grow the value</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span>Month 36+</span>
              <span className="text-[#3A7BFF] font-semibold">Exit — On your terms</span>
            </div>
          </div>
        </div>
        
        <p>
          Every business is different. Some move faster. Some need more time in stabilisation. The principle is the same: fix the foundation, build the systems, then grow. Skip stabilisation and you build on sand. Skip systemisation and you have no scalable value. Skip scaling and you never reach the premium exit.
        </p>
        
        <div className="flex flex-col items-center gap-6 my-16">
          <Link
            href="/the-economics"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
          >
            See The Economics
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
