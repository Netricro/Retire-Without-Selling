import Link from 'next/link';

export const metadata = {
  title: 'Deal Killers | Retire Without Selling',
  description: '5 things that destroy your business value. Every single one is fixable. But only from the inside.',
};

const dealKillers = [
  {
    num: "01",
    title: "Key Person Dependency",
    desc: "The business cannot function without the owner. Buyers see this as a massive risk — they are not buying a business, they are buying a job that requires you to keep working. Without you, revenue drops, relationships break, and the team flounders.",
    fix: "Build a management team that can operate independently. Document decision-making authority. Create a transition plan where the owner is absent for increasing periods."
  },
  {
    num: "02",
    title: "No Documented Systems",
    desc: "Everything is in the owner's head. There are no processes, no procedures, no training materials. The business knowledge is not transferable. A new owner has to shadow the founder for months to understand how anything works.",
    fix: "Document every core process. Create standard operating procedures. Build training materials. Make the business readable without the founder present."
  },
  {
    num: "03",
    title: "Concentrated Customer Base",
    desc: "One or two customers represent most of the revenue. If they leave, the business collapses. Buyers will discount heavily or walk away entirely. No buyer wants a business where 60% of revenue depends on one relationship.",
    fix: "Diversify the customer base. Reduce dependency on any single client. Build contractual relationships rather than handshake deals. Create recurring revenue streams."
  },
  {
    num: "04",
    title: "Poor Financial Records",
    desc: "The books are a mess. There is no clear separation between personal and business expenses. The true profitability is hidden. Buyers cannot verify what the business actually earns, so they assume the worst.",
    fix: "Clean up the financials. Separate personal and business expenses. Get audited or at least reviewed accounts. Show three years of clean, verifiable numbers."
  },
  {
    num: "05",
    title: "No Management Team",
    desc: "There is no one who can run the business if the owner steps away. The team is dependent on the owner's daily decisions. Every problem escalates to the founder. No one has the authority or capability to act independently.",
    fix: "Hire or develop a management team. Delegate real authority. Build accountability structures. Create a culture where decisions are made at the right level, not just at the top."
  }
];

export default function DealKillers() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Deal Killers
      </p>
      <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
        5 Things That Destroy Your Business Value
      </h1>
      <p className="text-xl text-[#94a3b8] mb-16 max-w-3xl">
        These are the reasons buyers pay less — or walk away entirely. Every single one is fixable. But only from the inside.
      </p>
      
      <div className="space-y-8">
        {dealKillers.map((item) => (
          <div key={item.num} className="glass rounded-xl p-8 flex gap-6 items-start">
            <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">{item.num}</div>
            <div>
              <h2 className="text-2xl text-white mb-3">{item.title}</h2>
              <p className="text-[#94a3b8] leading-relaxed mb-4">{item.desc}</p>
              <div className="border-l-2 border-[#3A7BFF] pl-4">
                <p className="text-sm text-[#3A7BFF] font-semibold mb-1">HOW TO FIX IT</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass rounded-xl p-8 mt-12 border border-[#3A7BFF]/30">
        <h2 className="text-2xl text-white mb-4">The Good News</h2>
        <p className="text-[#94a3b8] leading-relaxed mb-6">
          Every one of these deal killers is fixable. But they require work from the inside. You cannot slap a coat of paint on a business with broken foundations and expect a buyer to pay a premium.
        </p>
        <p className="text-[#94a3b8] leading-relaxed">
          The businesses that sell for 8-12x profit have spent years fixing these issues. They have built systems, teams, and structures that make the business valuable independent of the owner. That is what we help you do.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Link
          href="/assessment"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
        >
          Take The Free Assessment
        </Link>
        <Link
          href="/the-method"
          className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
        >
          See The Method
        </Link>
      </div>
    </div>
  );
}
