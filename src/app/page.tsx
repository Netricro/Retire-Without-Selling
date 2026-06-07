export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              For UK Business Owners 55+
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Retire Without<br />
              <span className="gradient-text">Selling</span> Your<br />
              Business
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              95% of businesses never sell. 96% sell for a fraction of what they are worth.
              There is a better way. Partner for equity. Build value. Step back. Keep ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105"
              >
                Take the Free Assessment
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* The Problem Stats */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="number-stat">95%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">of businesses never sell</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="number-stat">96%</div>
              <p className="text-[#94a3b8] mt-4 text-lg">sell for 20-30% of their true value</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="number-stat">2M</div>
              <p className="text-[#94a3b8] mt-4 text-lg">UK owners retiring over next decade, fewer than 1,000 buyers</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Trap */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-12 leading-tight">
            The Sell-It-and-Be-Done Myth
          </h2>
          <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
            <p>
              You have spent years building your business. It has given you a good life. You put your children through university. You own a nice home. Your staff respect you. Your peers admire you.
            </p>
            <p>
              One day you decide to sell. Not now, but soon. You imagine the sale going through for millions, handing over the keys, and taking a long holiday with your family. Secure for decades, maybe generations.
            </p>
            <p className="text-white text-xl font-semibold">
              This is a fairy tale for most business owners.
            </p>
            <p>
              The market does not care how hard you worked. It values what your business can generate without you. If the systems are in your head, if the clients only want to talk to you, if the team cannot function without your daily involvement — the market sees a business worth a fraction of what you built.
            </p>
            <p>
              The average owner thinks their business is worth 3-5 times profit. The market often pays 1-2 times. That gap — between what you need and what you get — is the <strong className="text-[#3A7BFF]">Retirement Value Gap</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Alternative */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            The Alternative
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-6 leading-tight">
            Partner for Equity.<br />Build Value. Step Back.
          </h2>
          <p className="text-xl text-[#94a3b8] text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Instead of selling for a low multiple today, partner with us to grow your business to its true value. You keep ownership. We bring the systems, the team, and the expertise. When the business runs without you, everyone wins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">01</div>
              <h3 className="text-2xl mb-3">Stabilise</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Fix the immediate problems. Cash flow, management structure, key person risk. Get the business stable so it can grow without depending on you daily.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">02</div>
              <h3 className="text-2xl mb-3">Systemise</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Document the processes. Build the management team. Create systems that work whether you are in the office or on holiday. Transfer the knowledge from your head into the business.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue">
              <div className="text-[#3A7BFF] text-4xl font-serif mb-4">03</div>
              <h3 className="text-2xl mb-3">Scale</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Grow the value. Increase profitability. Expand the team. Build a business that runs without you — and is worth 8-12x profit instead of 1-2x.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The Economics */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            The Economics
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-16 leading-tight">
            What Is Your Business Actually Worth?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl mb-6 text-[#94a3b8]">The Typical Scenario</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Current EBIT</span>
                  <span className="font-semibold">£500,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Market Multiple</span>
                  <span className="font-semibold">1.5x - 2.5x</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Sale Value</span>
                  <span className="font-semibold text-red-400">£750K - £1.25M</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#94a3b8]">What You Need to Retire</span>
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

            <div className="glass rounded-2xl p-8 border border-[#3A7BFF]/30">
              <h3 className="text-2xl mb-6 text-[#3A7BFF]">The Partnering for Equity Path</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Year 1-2: Systemise & Grow</span>
                  <span className="font-semibold">EBIT doubles to £1M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Year 3-5: Scale & Optimise</span>
                  <span className="font-semibold">EBIT reaches £2M</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#1e293b]">
                  <span className="text-[#94a3b8]">Exit Multiple</span>
                  <span className="font-semibold">8x - 12x</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#94a3b8]">Final Value</span>
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

          <p className="text-center text-[#94a3b8] mt-8 text-lg">
            These are illustrative numbers. Every business is different. The principle is the same: 
            <strong className="text-white"> build value first, exit later.</strong>
          </p>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Your Story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-12 leading-tight">
            We Lived This. Now We Help Others Do It.
          </h2>
          <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
            <p>
              I built a profitable business. I assumed it was worth what I needed to retire. The market told me something different. The business was too dependent on me. The systems were in my head. The clients wanted to talk to me, not my team.
            </p>
            <p>
              I faced a choice: sell for a fraction of what I had built, or find another way. I chose the other way. I partnered with people who understood how to build value, how to systematise, how to create a business that runs without the owner.
            </p>
            <p>
              Since then, I have worked with hundreds of businesses, acquired five, and seen the same pattern everywhere. The businesses that sell for premium multiples are the ones that run without the owner. The ones that struggle are the ones where the owner is the glue holding everything together.
            </p>
            <p>
              <strong className="text-white">David Hargraves</strong> and I developed the <strong className="text-[#3A7BFF]">Build to Retire</strong> methodology and the <strong className="text-[#3A7BFF]">Partnering for Equity</strong> model to solve this exact problem. We have helped business owners across the UK step back from their businesses, keep their ownership, and retire on the value they actually built.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* The 5 Deal Killers */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
            The Deal Killers
          </p>
          <h2 className="text-4xl md:text-5xl text-center mb-6 leading-tight">
            5 Things That Destroy<br />Your Business Value
          </h2>
          <p className="text-xl text-[#94a3b8] text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            These are the reasons buyers pay less — or walk away entirely. Every single one is fixable. But only from the inside.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Key Person Dependency",
                desc: "The business cannot function without the owner. Buyers see this as a massive risk — they are not buying a business, they are buying a job that requires you to keep working."
              },
              {
                num: "02",
                title: "No Documented Systems",
                desc: "Everything is in the owner's head. There are no processes, no procedures, no training materials. The business knowledge is not transferable."
              },
              {
                num: "03",
                title: "Concentrated Customer Base",
                desc: "One or two customers represent most of the revenue. If they leave, the business collapses. Buyers will discount heavily or walk away."
              },
              {
                num: "04",
                title: "Poor Financial Records",
                desc: "The books are a mess. There is no clear separation between personal and business expenses. The true profitability is hidden."
              },
              {
                num: "05",
                title: "No Management Team",
                desc: "There is no one who can run the business if the owner steps away. The team is dependent on the owner's daily decisions."
              }
            ].map((item) => (
              <div key={item.num} className="glass rounded-xl p-6 md:p-8 flex gap-6 items-start">
                <div className="text-[#3A7BFF] text-3xl font-serif shrink-0">{item.num}</div>
                <div>
                  <h3 className="text-xl md:text-2xl mb-2">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* CTA Section */}
      <section id="assessment" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Find Out Where You Stand
          </h2>
          <p className="text-xl text-[#94a3b8] mb-10 leading-relaxed">
            Take our free 5-minute Business Sale Assessment. It shows you exactly where your business is today, what the gap is, and what steps to take next. No pitch. Just clarity.
          </p>
          <a
            href="https://regenovate.com/bsa"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
          >
            Take the Free Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-[#94a3b8] mt-6 text-sm">
            Or <a href="mailto:ric@regenovate.com" className="text-[#3A7BFF] hover:underline">email us</a> to book a discovery call
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl">
              <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
            </span>
            <span className="text-[#94a3b8] text-sm">Regenovate</span>
          </div>
          <div className="text-[#94a3b8] text-sm text-center">
            <p>Build to Retire. Partnering for Equity.</p>
          </div>
          <div className="text-[#94a3b8] text-sm">
            <p>© 2026 Regenovate Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
