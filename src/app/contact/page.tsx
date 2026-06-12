import Link from 'next/link';

export const metadata = {
  title: 'Contact | Retire Without Selling',
  description: 'Get in touch. Book a discovery call. Or just ask a question. No pitch, no pressure.',
};

export default function Contact() {
  return (
    <div className="flex flex-col flex-1">
      {/* SECTION 1: Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a1d2e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3A7BFF] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3A7BFF] rounded-full blur-[100px] opacity-10" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Let&apos;s Talk
            </h1>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              No pitch, no pressure. Just a conversation about where you are and what options exist.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 2: Contact Cards */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight text-center">
              Two Ways to<br /><span className="gradient-text">Start a Conversation</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Book a Discovery Call */}
              <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20 flex flex-col">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#3A7BFF]/20 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#3A7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4">Book a Discovery Call</h3>
                  <p className="text-lg text-[#94a3b8] leading-relaxed">
                    30 minutes. We listen to your situation, explain the options, and see if there is a fit. No obligation either way.
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href="mailto:hello@retire-without-selling.com?subject=Discovery%20Call%20Request"
                    className="inline-flex items-center justify-center w-full px-8 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
                  >
                    Request a Call
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Email Us */}
              <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20 flex flex-col">
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-[#3A7BFF]/20 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#3A7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-4">Email Us</h3>
                  <p className="text-lg text-[#94a3b8] leading-relaxed">
                    Prefer to write? Send us an email. We read every one and respond within 24 hours.
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href="mailto:hello@retire-without-selling.com"
                    className="inline-flex items-center justify-center w-full px-8 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
                  >
                    hello@retire-without-selling.com
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 3: What Happens Next */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6 text-center">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight text-center">
              What Happens<br />Next
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 text-center animate-fade-in-up animation-delay-100">
                <div className="number-stat mb-6">1</div>
                <h3 className="text-2xl md:text-3xl mb-4">You Reach Out</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed">
                  Email or take the free assessment. Whatever feels right.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 text-center animate-fade-in-up animation-delay-200">
                <div className="number-stat mb-6">2</div>
                <h3 className="text-2xl md:text-3xl mb-4">We Have a Conversation</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed">
                  We listen to your situation and see if there is a fit.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="glass rounded-2xl p-8 md:p-10 border border-[#3A7BFF]/20 text-center animate-fade-in-up animation-delay-300">
                <div className="number-stat mb-6">3</div>
                <h3 className="text-2xl md:text-3xl mb-4">You Decide</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed">
                  No pressure. No hard sell. You decide if and when to move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* SECTION 4: Final CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7BFF]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ready to Explore<br />Your Options?
            </h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-12">
              Most business owners never explore the alternative to selling. A short conversation could change everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@retire-without-selling.com?subject=Discovery%20Call%20Request"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3A7BFF] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
              >
                Request a Discovery Call
              </a>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#3A7BFF]/30 text-white text-lg font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all duration-300"
              >
                Take the Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
