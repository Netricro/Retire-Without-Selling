import Link from 'next/link';

export const metadata = {
  title: 'Your Story | Retire Without Selling',
  description: 'I built a profitable business, assumed it was worth what I needed, and the market told me something different. This is how I learned there is a better way.',
};

export default function YourStory() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Your Story
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        I Lived This. Now I Help Others Do It.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          I built a profitable business, assumed it was worth what I needed, and the market told me something different.
        </p>
        
        <p>
          The business was too dependent on me. The systems were in my head. The clients wanted to talk to me, not my team. The market valued what the business could generate without me — a fraction of what I had built.
        </p>
        
        <p>
          I faced a choice: sell for a fraction of what I had built, or find another way. I chose the other way. I partnered with people who understood how to build value, how to systematise, how to create a business that runs without the owner.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">What I Learned</h2>
          <p className="mb-4">
            Since then, I have worked with hundreds of businesses, acquired five, and seen the same pattern everywhere:
          </p>
          <ul className="space-y-3 text-[#94a3b8]">
            <li><strong className="text-white">The businesses that sell for premium multiples</strong> are the ones that run without the owner.</li>
            <li><strong className="text-white">The ones that struggle</strong> are the ones where the owner is the glue holding everything together.</li>
            <li><strong className="text-white">The gap is predictable</strong> — and it is fixable. But only from the inside.</li>
          </ul>
        </div>
        
        <p>
          David Hargraves and I developed the <strong className="text-[#3A7BFF]">Build to Retire</strong> methodology and the <strong className="text-[#3A7BFF]">Partnering for Equity</strong> model to solve this exact problem. We have helped business owners across the UK step back from their businesses, keep their ownership, and retire on the value they actually built.
        </p>
        
        <p>
          The approach is not theoretical. It is built on decades of doing this — buying, building, fixing, and selling businesses. We have made the mistakes. We have learned the lessons. And we have systematised what works.
        </p>
        
        <h2 className="text-3xl text-white mt-12 mb-4">The Mission</h2>
        
        <p>
          Every business owner who has spent decades building something deserves to retire on what it is worth — not what the market happens to pay on the day they decide to sell.
        </p>
        
        <p>
          If you are over 55, if your business is worth less than you need to retire, and if you are not sure what to do next — we can help. It starts with a conversation. No pitch. Just clarity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
          >
            Meet The Team
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
