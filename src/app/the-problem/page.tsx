import Link from 'next/link';

export const metadata = {
  title: 'The Problem | Retire Without Selling',
  description: '95% of businesses never sell. 96% sell for a fraction of their worth. The Retirement Value Gap is the difference between what your business is worth and what you need to retire.',
};

export default function TheProblem() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Problem
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        The Retirement Value Gap
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The difference between what your business is worth and what you need to retire.
        </p>
        
        <p>
          For most UK business owners over 55, it is £1 million or more. And they do not discover it until they try to sell.
        </p>
        
        <p>
          You have spent years building your business. It has given you a good life. You put your children through university. You own a nice home. Your staff respect you. Your peers admire you.
        </p>
        
        <p>
          One day you decide to sell. Not now, but soon. You imagine the sale going through for millions, handing over the keys, and taking a long holiday with your family. Secure for decades, maybe generations.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">This is a fairy tale for most business owners.</h2>
          <ul className="space-y-4 text-[#94a3b8]">
            <li><strong className="text-white">95%</strong> of businesses never sell</li>
            <li><strong className="text-white">96%</strong> of those that do sell go for 20-30% of their true value</li>
            <li><strong className="text-white">2 million</strong> UK owners retiring over the next decade, fewer than 1,000 buyers</li>
          </ul>
        </div>
        
        <p>
          The market does not care how hard you worked. It values what your business can generate without you. If the systems are in your head, if the clients only want to talk to you, if the team cannot function without your daily involvement — the market sees a business worth a fraction of what you built.
        </p>
        
        <p>
          The average owner thinks their business is worth 3-5 times profit. The market often pays 1-2 times. That gap — between what you need and what you get — is the <strong className="text-[#3A7BFF]">Retirement Value Gap</strong>.
        </p>
        
        <p>
          Most discover it too late. They have already mentally retired. They have already spent the money in their head. Then the offer comes in, and the reality hits: years of work, valued at a fraction of what they imagined.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/the-solution"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
          >
            See The Solution
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
          >
            Take The Free Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
