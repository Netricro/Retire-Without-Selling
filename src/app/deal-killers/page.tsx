import Link from 'next/link';

export const metadata = {
  title: '5 Deal Killers | Retire Without Selling',
  description: 'Five things that destroy your business value. Every single one is fixable — but only from the inside.',
};

export default function DealKillers() {
  const dealKillers = [
    {
      number: '01',
      title: 'Key Person Dependency',
      description: 'The business cannot function without the owner. Buyers see this as a massive risk — they are not buying a business, they are buying a job that requires you to keep working.',
      fix: 'Build a management team that can operate without you. Document decisions. Create authority levels. Test by taking time off.',
    },
    {
      number: '02',
      title: 'No Documented Systems',
      description: 'Everything is in the owner\'s head. There are no processes, no procedures, no training materials. The business knowledge is not transferable. A new owner would need to shadow the owner for months to understand how the business works.',
      fix: 'Document every critical process. Use simple checklists and videos. Make the business readable without you present.',
    },
    {
      number: '03',
      title: 'Concentrated Customer Base',
      description: 'One or two customers represent most of the revenue. If they leave, the business collapses. Buyers will discount heavily or walk away entirely because the revenue is fragile.',
      fix: 'Diversify. No single customer over 15% of revenue. Build multiple channels. Create recurring revenue streams.',
    },
    {
      number: '04',
      title: 'Poor Financial Records',
      description: 'The books are a mess. There is no clear separation between personal and business expenses. The true profitability is hidden. A buyer cannot verify what the business actually earns, so they assume the worst.',
      fix: 'Clean the books. Separate personal expenses. Get audited financials. Show clear profitability for 3+ years.',
    },
    {
      number: '05',
      title: 'No Management Team',
      description: 'There is no one who can run the business if the owner steps away. The team is dependent on the owner\'s daily decisions. Without the owner, the business stops.',
      fix: 'Hire or develop people who can lead. Give them real authority. Let them fail safely. Build a team that does not need you.',
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* SECTION 1: Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Deal Killers
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              5 Things That<br />
              <span className="gradient-text">Destroy Your Value</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Every single one is fixable. But only from the inside.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: The 5 Deal Killers */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Diagnostic Framework
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight text-center">
              What Buyers See<br />When They Look Inside
            </h2>

            <div className="space-y-8">
              {dealKillers.map((killer, index) => (
                <div
                  key={killer.number}
                  className="glass rounded-2xl p-8 md:p-10 glow-blue border border-[#3A7BFF]/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="text-[#3A7BFF] text-5xl md:text-6xl font-serif shrink-0 leading-none mt-1">
                      {killer.number}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl text-white mb-4 font-light">
                        {killer.title}
                      </h2>
                      <p className="text-[#94a3b8] leading-relaxed mb-6 text-lg">
                        {killer.description}
                      </p>
                      <div className="glass rounded-xl p-6 border border-[#3A7BFF]/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
                        <div className="pl-4">
                          <p className="text-[#3A7BFF] text-sm tracking-[0.2em] uppercase font-semibold mb-2">
                            How to Fix It
                          </p>
                          <p className="text-[#94a3b8] leading-relaxed">
                            {killer.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: The Good News */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Truth
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight text-center">
              The Good News
            </h2>

            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <p className="text-2xl text-white font-light leading-relaxed mb-6">
                  Every single one of these deal killers is fixable.
                </p>
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">
                  It takes time. It takes effort. But it is the only path to building a business that is worth what you need to retire.
                </p>
                <p className="text-lg text-[#94a3b8] leading-relaxed">
                  The businesses that sell for premium multiples are the ones that have fixed these issues. The ones that struggle are the ones that have not.
                </p>
                <p className="text-xl text-white font-semibold mt-8">
                  The choice is yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Discover Your<br /><span className="gradient-text">Deal Killers</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Most business owners never identify what is silently destroying their value. Find out where you stand before a buyer does.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assessment"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Take the Free Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/the-solution"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Explore the Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
