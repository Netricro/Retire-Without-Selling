import Link from 'next/link';

export const metadata = {
  title: 'Resources | Retire Without Selling',
  description: 'Free guides, assessments, and tools to help you understand the Retirement Value Gap and explore the Partnering for Equity path.',
};

const resources = [
  {
    title: "Free Business Sale Assessment",
    description: "5-minute assessment showing your business's current sale-readiness, the gap between current value and retirement needs, and specific recommendations.",
    action: "Take Assessment",
    href: "https://regenovate.com/bsa",
    external: true
  },
  {
    title: "Build to Retire Book",
    description: "David Hargraves' comprehensive guide to building a business that funds your retirement without having to sell it. The complete methodology.",
    action: "Learn More",
    href: "/build-to-retire-book",
    external: false
  },
  {
    title: "Partnering for Equity Guide",
    description: "How to acquire equity in established businesses, build a valuable group, and exit to private equity within 5 years. For investors and acquirers.",
    action: "Learn More",
    href: "/partnering-for-equity-guide",
    external: false
  },
  {
    title: "The 5 Deal Killers Checklist",
    description: "A downloadable checklist of the five things that destroy business value — and how to fix them. Use this to audit your own business.",
    action: "Download PDF",
    href: "/deal-killers-checklist",
    external: false
  },
  {
    title: "Retirement Value Gap Calculator",
    description: "Calculate the gap between what your business is worth today and what you need to retire. Simple inputs, clear outputs.",
    action: "Coming Soon",
    href: "#",
    external: false
  }
];

export default function Resources() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Resources
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Tools & Guides
      </h1>
      
      <p className="text-xl text-[#94a3b8] mb-16 max-w-3xl">
        Free resources to help you understand the Retirement Value Gap and explore the Partnering for Equity path.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource) => (
          <div key={resource.title} className="glass rounded-xl p-8 flex flex-col">
            <h2 className="text-2xl text-white mb-3">{resource.title}</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-6 flex-1">{resource.description}</p>
            {resource.href === '#' ? (
              <span className="inline-flex items-center text-[#94a3b8] text-sm">
                Coming Soon
              </span>
            ) : resource.external ? (
              <a
                href={resource.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
              >
                {resource.action}
              </a>
            ) : (
              <Link
                href={resource.href}
                className="inline-flex items-center justify-center px-6 py-3 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
              >
                {resource.action}
              </Link>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 glass rounded-xl p-8 border border-[#3A7BFF]/30">
        <h2 className="text-2xl text-white mb-4">Want Something Specific?</h2>
        <p className="text-[#94a3b8] mb-6">
          If there is a resource you need that we do not have, let us know. We are building this library based on what owners actually ask for.
        </p>
        <a
          href="mailto:ric@regenovate.com?subject=Resource%20Request"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
        >
          Request a Resource
        </a>
      </div>
    </div>
  );
}
