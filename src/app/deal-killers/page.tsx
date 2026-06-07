import Link from 'next/link';

export const metadata = {
  title: '5 Deal Killers | Retire Without Selling',
  description: 'Five things that destroy your business value. Every single one is fixable — but only from the inside.',
};

export default function DealKillers() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Deal Killers
      </p>
      <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
        5 Things That Destroy Your Business Value
      </h1>
      <p className="text-xl text-[#94a3b8] mb-16">
        Every single one is fixable. But only from the inside.
      </p>

      <div className="space-y-6">
        <div className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
          <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">01</div>
          <div>
            <h2 className="text-2xl text-white mb-2">Key Person Dependency</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              The business cannot function without the owner. Buyers see this as a massive risk — they are not buying a business, they are buying a job that requires you to keep working.
            </p>
            <div className="bg-[#0B0F1A] rounded-lg p-4">
              <p className="text-[#3A7BFF] text-sm font-semibold mb-1">How to Fix It</p>
              <p className="text-[#94a3b8] text-sm">Build a management team that can operate without you. Document decisions. Create authority levels. Test by taking time off.</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
          <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">02</div>
          <div>
            <h2 className="text-2xl text-white mb-2">No Documented Systems</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Everything is in the owner's head. There are no processes, no procedures, no training materials. The business knowledge is not transferable. A new owner would need to shadow the owner for months to understand how the business works.
            </p>
            <div className="bg-[#0B0F1A] rounded-lg p-4">
              <p className="text-[#3A7BFF] text-sm font-semibold mb-1">How to Fix It</p>
              <p className="text-[#94a3b8] text-sm">Document every critical process. Use simple checklists and videos. Make the business readable without you present.</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
          <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">03</div>
          <div>
            <h2 className="text-2xl text-white mb-2">Concentrated Customer Base</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              One or two customers represent most of the revenue. If they leave, the business collapses. Buyers will discount heavily or walk away entirely because the revenue is fragile.
            </p>
            <div className="bg-[#0B0F1A] rounded-lg p-4">
              <p className="text-[#3A7BFF] text-sm font-semibold mb-1">How to Fix It</p>
              <p className="text-[#94a3b8] text-sm">Diversify. No single customer over 15% of revenue. Build multiple channels. Create recurring revenue streams.</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
          <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">04</div>
          <div>
            <h2 className="text-2xl text-white mb-2">Poor Financial Records</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              The books are a mess. There is no clear separation between personal and business expenses. The true profitability is hidden. A buyer cannot verify what the business actually earns, so they assume the worst.
            </p>
            <div className="bg-[#0B0F1A] rounded-lg p-4">
              <p className="text-[#3A7BFF] text-sm font-semibold mb-1">How to Fix It</p>
              <p className="text-[#94a3b8] text-sm">Clean the books. Separate personal expenses. Get audited financials. Show clear profitability for 3+ years.</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
          <div className="text-[#3A7BFF] text-4xl font-serif shrink-0">05</div>
          <div>
            <h2 className="text-2xl text-white mb-2">No Management Team</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              There is no one who can run the business if the owner steps away. The team is dependent on the owner's daily decisions. Without the owner, the business stops.
            </p>
            <div className="bg-[#0B0F1A] rounded-lg p-4">
              <p className="text-[#3A7BFF] text-sm font-semibold mb-1">How to Fix It</p>
              <p className="text-[#94a3b8] text-sm">Hire or develop people who can lead. Give them real authority. Let them fail safely. Build a team that does not need you.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-8 my-16 border border-[#3A7BFF]/30">
        <h2 className="text-2xl text-white mb-4">The Good News</h2>
        <p className="text-[#94a3b8] mb-4">
          Every single one of these deal killers is fixable. It takes time. It takes effort. But it is the only path to building a business that is worth what you need to retire.
        </p>
        <p className="text-[#94a3b8]">
          The businesses that sell for premium multiples are the ones that have fixed these issues. The ones that struggle are the ones that have not. The choice is yours.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 my-16">
        <a
          href="https://regenovate.com/bsa"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105"
        >
          Take the Free Assessment
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
