import Link from 'next/link';

export const metadata = {
  title: 'Your Story | Retire Without Selling',
  description: 'Ric Wilson lived the Retirement Value Gap. Now he helps other business owners build value and retire on their own terms.',
};

export default function YourStory() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Our Story
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        I Lived This. Now I Help Others Do It.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p>
          I built a profitable business, assumed it was worth what I needed, and the market told me something different. The business was too dependent on me. The systems were in my head. The clients wanted to talk to me, not my team.
        </p>
        
        <p>
          I faced a choice: sell for a fraction, or find another way. I chose the other way. I partnered with people who understood how to build value, how to systematise, how to create a business that runs without the owner.
        </p>
        
        <p>
          Since then, I have worked with hundreds of businesses, acquired five, and seen the same pattern everywhere. The businesses that sell for premium multiples are the ones that run without the owner. The ones that struggle are the ones where the owner is the glue holding everything together.
        </p>
        
        <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30">
          <h2 className="text-2xl text-white mb-4">What We Have Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">500+</div>
              <p className="text-[#94a3b8]">Businesses advised</p>
            </div>
            <div>
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">5</div>
              <p className="text-[#94a3b8]">Businesses acquired</p>
            </div>
            <div>
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">£100M+</div>
              <p className="text-[#94a3b8]">Value created</p>
            </div>
          </div>
        </div>
        
        <p>
          <strong className="text-white">David Hargraves</strong> and I developed the <strong className="text-[#3A7BFF]">Build to Retire</strong> methodology and the <strong className="text-[#3A7BFF]">Partnering for Equity</strong> model to solve this exact problem. We have lived it. We have done it. And now we help other owners do the same.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">What We Believe</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span>Every business owner who has spent decades building something deserves to retire on what it is worth</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span>Selling is not the only way — and often not the best way</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span>The gap between current value and retirement needs is predictable and fixable</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span>Building systems and teams is the only sustainable path to value</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3A7BFF] shrink-0">•</span>
              <span>Partnering for equity aligns incentives and creates win-win outcomes</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col items-center gap-6 my-16">
          <Link
            href="/deal-killers"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
          >
            See The 5 Deal Killers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
