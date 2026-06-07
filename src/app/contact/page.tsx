export const metadata = {
  title: 'Contact | Retire Without Selling',
  description: 'Get in touch. Book a discovery call. Or just ask a question. No pitch, no pressure.',
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Contact
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Let's Talk
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          No pitch, no pressure. Just a conversation about where you are and what options exist.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="glass rounded-xl p-8">
            <h2 className="text-xl text-white mb-4">Book a Discovery Call</h2>
            <p className="mb-6">
              30 minutes. We listen to your situation, explain the options, and see if there is a fit. No obligation either way.
            </p>
            <a
              href="mailto:ric@regenovate.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
            >
              Request a Call
            </a>
          </div>
          
          <div className="glass rounded-xl p-8">
            <h2 className="text-xl text-white mb-4">Email Us</h2>
            <p className="mb-6">
              Prefer to write? Send us an email. We read every one and respond within 24 hours.
            </p>
            <a
              href="mailto:ric@regenovate.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
            >
              ric@regenovate.com
            </a>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">What Happens Next</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">1</div>
              <div>
                <h3 className="text-white font-semibold mb-1">You Reach Out</h3>
                <p className="text-[#94a3b8]">Email or take the free assessment. Whatever feels right.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">2</div>
              <div>
                <h3 className="text-white font-semibold mb-1">We Have a Conversation</h3>
                <p className="text-[#94a3b8]">We listen to your situation and see if there is a fit.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">3</div>
              <div>
                <h3 className="text-white font-semibold mb-1">You Decide</h3>
                <p className="text-[#94a3b8]">No pressure. No hard sell. You decide if and when to move forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
