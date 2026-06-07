import Link from 'next/link';

export const metadata = {
  title: 'Blog | Retire Without Selling',
  description: 'Articles, insights, and practical advice for business owners who want to retire without selling.',
};

const posts = [
  {
    title: "The Retirement Value Gap: Why Most Business Owners Never Retire",
    excerpt: "95% of businesses never sell. 96% sell for a fraction of their worth. The gap between what you need and what you get is predictable — and fixable.",
    date: "2026-06-01",
    slug: "retirement-value-gap",
    category: "The Problem"
  },
  {
    title: "Why Selling Is Not the Only Way to Exit",
    excerpt: "Business owners assume selling is the only option. But partnering for equity, building value, and stepping back can be far more lucrative — and far less risky.",
    date: "2026-05-28",
    slug: "selling-is-not-the-only-way",
    category: "The Solution"
  },
  {
    title: "5 Signs Your Business Is Too Dependent On You",
    excerpt: "If your business cannot function without you for a month, it is not a business — it is a job. Here are the five warning signs and what to do about them.",
    date: "2026-05-20",
    slug: "business-dependent-on-you",
    category: "Deal Killers"
  },
  {
    title: "How to Build a Management Team That Can Run Without You",
    excerpt: "The single biggest factor in business value is whether the team can operate independently. Here is how to build that capability.",
    date: "2026-05-15",
    slug: "build-management-team",
    category: "The Method"
  },
  {
    title: "The Economics of Partnering for Equity: A Real Example",
    excerpt: "A £500K EBIT business sells for £1M today. But with the Partnering for Equity path, the same owner could walk away with £15M. Here is how the numbers work.",
    date: "2026-05-10",
    slug: "partnering-for-equity-economics",
    category: "The Economics"
  }
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Blog
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Insights & Advice
      </h1>
      
      <p className="text-xl text-[#94a3b8] mb-16 max-w-3xl">
        Practical advice for business owners who want to retire without selling. No fluff. No jargon. Just what works.
      </p>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="glass rounded-xl p-8 hover:border-[#3A7BFF]/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#3A7BFF] text-sm font-semibold uppercase tracking-wider">{post.category}</span>
              <span className="text-[#94a3b8] text-sm">{post.date}</span>
            </div>
            <h2 className="text-2xl text-white mb-3 hover:text-[#3A7BFF] transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-[#94a3b8] mb-4">
          More articles coming soon. Want to be notified?
        </p>
        <a
          href="mailto:ric@regenovate.com?subject=Blog%20Notification%20Request"
          className="inline-flex items-center justify-center px-6 py-3 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
        >
          Notify Me
        </a>
      </div>
    </div>
  );
}
