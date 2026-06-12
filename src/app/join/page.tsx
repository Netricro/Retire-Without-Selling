import Link from 'next/link';

export const metadata = {
  title: 'Recruitment | Retire Without Selling',
  description: 'Join our consultant network. Start earning immediately with our toolkit, training, and white-label resources. Built for experienced operators who want to help business owners retire without selling.',
};

export default function Join() {
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
              Consultant Network
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Start Earning.<br />
              <span className="gradient-text">Acquire Later.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Most consultants spend 12 to 18 months trying to find a business to acquire before they earn a penny. There is a better way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@retire-without-selling.com?subject=Consultant Network Enquiry"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Join the Network
              </a>
              <Link
                href="#what-you-get"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                See What You Get
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: The Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Trap
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              The Traditional Path<br />Is Backwards
            </h2>
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
                <p>
                  You join a network, get some training, and then spend months — sometimes over a year — searching for the right business to acquire. No income. No momentum. Just promises and pipeline.
                </p>
                <p>
                  By the time you find something, your savings are depleted, your confidence is shaken, and you have forgotten half of what you learned.
                </p>
                <p className="text-white font-semibold">
                  It does not have to work this way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: The Solution */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Alternative
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              Start Billing.<br />Build Your Practice.<br /><span className="gradient-text">Acquire When You Are Ready.</span>
            </h2>
            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p>
                We have built the toolkit, the methodology, and the brand. You bring the experience, the credibility, and the work ethic. Together, we help business owners retire without selling — and you start earning from day one.
              </p>
              <p>
                This is not about waiting for the perfect deal. This is about using what you already know to generate income while you build toward acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: What You Get */}
      <section id="what-you-get" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up text-center mb-16">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Package
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Everything You Need<br /><span className="gradient-text">To Start Now</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">01</div>
              <h3 className="text-2xl text-white mb-3">White-Label Books</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                Two professionally written books: "Partnering for Equity" and "Build to Retire". Customise with your name and publish as your own. Instant credibility.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">02</div>
              <h3 className="text-2xl text-white mb-3">Bespoke Website</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                A branded version of this site, tailored to your niche and geography. Example: <em>retire-without-selling.com/engineering-nw</em>. Looks like you built it.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">03</div>
              <h3 className="text-2xl text-white mb-3">Assessment Portal</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                Full access to the Regenovate portal. Run ASSESS, LEAD, INSPIRE, GROW, NURTURE, and BUILD assessments with your clients. Track progress. Deliver insights.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">04</div>
              <h3 className="text-2xl text-white mb-3">ERP Referrals</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                Earn referral fees from ERP implementations through our sister company. No technical expertise required. An additional income stream from day one.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">05</div>
              <h3 className="text-2xl text-white mb-3">Training & Support</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                Learn the methodology, the delivery model, and the client conversation. Ongoing support from people who have done this hundreds of times.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10 h-full flex flex-col">
              <div className="text-[#3A7BFF] text-5xl font-serif mb-4">06</div>
              <h3 className="text-2xl text-white mb-3">NetSuite Certification</h3>
              <p className="text-[#94a3b8] leading-relaxed flex-grow">
                Optional path to NetSuite certification. Not required, but if you choose to qualify, you can earn consultant fees directly. Extra cash, extra credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 5: Who This Is For */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Right Fit
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              Built For People<br />Who Have <span className="gradient-text">Been There</span>
            </h2>
            <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
              <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed">
                <p>
                  This is not for beginners. We are looking for experienced operators who have built, run, or advised businesses. People who understand what it takes to stabilise, systemise, and scale.
                </p>
                <p>
                  Harbour Club members are our first port of call — because they are the right size, shape, and colour. Credible, capable, and already thinking about the next chapter.
                </p>
                <p className="text-white font-semibold">
                  If you have operated at scale and want to help others do the same, we should talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 6: Revenue Streams */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up text-center mb-16">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              The Economics
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Multiple Ways<br /><span className="gradient-text">To Earn</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-5xl font-serif text-[#3A7BFF] mb-4">£</div>
                <h3 className="text-2xl text-white mb-3">Consulting Fees</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Deliver the Retire Without Selling methodology to business owners. Bill for assessments, workshops, and ongoing advisory.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-5xl font-serif text-[#3A7BFF] mb-4">%</div>
                <h3 className="text-2xl text-white mb-3">ERP Referrals</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Refer clients to our sister company for NetSuite implementation. Earn referral fees without lifting a technical finger.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="glass rounded-2xl p-8 glow-blue border border-[#3A7BFF]/10">
                <div className="text-5xl font-serif text-[#3A7BFF] mb-4">∞</div>
                <h3 className="text-2xl text-white mb-3">Equity Partnerships</h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  Over time, partner with the right business owners for equity. Build long-term income alongside your consulting practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 7: Final CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A7BFF]/5 via-transparent to-[#3A7BFF]/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ready to Start<br />Earning Now?
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Do not wait 18 months to find the perfect business. Start building your practice today, acquire when you are ready, and help owners retire without selling along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@retire-without-selling.com?subject=Consultant Network Application"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Apply to Join the Network
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
