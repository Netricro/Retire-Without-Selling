export const metadata = {
  title: 'Free Assessment | Retire Without Selling',
  description: 'Take our free 5-minute Business Sale Assessment. Shows you exactly where your business stands, what the gap is, and what steps to take next.',
};

export default function Assessment() {
  return (
    <div className="flex flex-col flex-1">
      {/* SECTION 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Free Assessment
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Find Out Where<br />
              <span className="gradient-text">You Stand</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Take our free 5-minute Business Sale Assessment. It shows you exactly where your business is today, what the gap is, and what steps to take next.
            </p>
            <p className="text-lg text-[#94a3b8]/70 max-w-2xl mx-auto leading-relaxed">
              No pitch. Just clarity.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: What You Get */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Your Report
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              What You Get
            </h2>

            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3A7BFF]" />
              <div className="pl-6">
                <div className="space-y-6">
                  {[
                    {
                      title: 'A clear picture of your business\'s current sale-readiness',
                      desc: 'Understand exactly how attractive your business looks to buyers right now.',
                    },
                    {
                      title: 'An estimate of the gap between your current value and your retirement needs',
                      desc: 'See the difference between what your business is worth and what you need to retire comfortably.',
                    },
                    {
                      title: 'Specific recommendations for the highest-impact improvements',
                      desc: 'Prioritised actions that will increase your business value the fastest.',
                    },
                    {
                      title: 'No obligation, no sales call, no spam',
                      desc: 'Your results are yours alone. No follow-up pressure.',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl bg-[#3A7BFF]/5 border border-[#3A7BFF]/10 hover:border-[#3A7BFF]/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3A7BFF]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-[#3A7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg text-white font-semibold leading-relaxed">
                          {item.title}
                        </p>
                        <p className="text-[#94a3b8] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A7BFF]/5 via-transparent to-[#3A7BFF]/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Start The Free<br /><span className="gradient-text">Assessment</span>
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-12">
              Takes 5 minutes. Instant results. No email required unless you want to save your report.
            </p>
            <a
              href="https://regenovate.com/bsa"
              className="inline-flex items-center justify-center px-12 py-6 bg-[#3A7BFF] text-white text-xl font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
            >
              Start The Free Assessment
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: Prefer to Talk First? */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Alternative
            </p>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Prefer to Talk First?
            </h2>

            <div className="glass rounded-2xl p-8 md:p-12 border border-[#3A7BFF]/20">
              <p className="text-xl text-[#94a3b8] leading-relaxed mb-8">
                If you would rather have a conversation before taking the assessment, book a discovery call. No pitch, no pressure. Just a conversation about where you are and what options exist.
              </p>
              <a
                href="mailto:hello@retire-without-selling.com?subject=Discovery%20Call%20Request"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
