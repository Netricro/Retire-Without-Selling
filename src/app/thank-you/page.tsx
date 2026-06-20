export const metadata = {
  title: 'Thank You | Retire Without Selling',
  description: 'Thank you for taking the assessment. Here is what happens next.',
};

export default function ThankYou() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="text-[#3A7BFF] text-6xl mb-8">✓</div>
      <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
        Thank You
      </h1>
      <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
        You have taken the first step. Your assessment results show exactly where your business stands and what the gap is.
      </p>
      
      <div className="glass rounded-xl p-8 my-12 text-left">
        <h2 className="text-2xl text-white mb-4">What Happens Next</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">1</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Review Your Results</h3>
              <p className="text-[#94a3b8]">Check your email for the full assessment report with specific recommendations.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">2</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Book a Free Call (Optional)</h3>
              <p className="text-[#94a3b8]">If you want to discuss your results and explore options, book a 30-minute discovery call. No pitch, no pressure.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-[#3A7BFF] font-serif text-2xl shrink-0">3</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Take Your Time</h3>
              <p className="text-[#94a3b8]">There is no rush. The assessment is yours to keep. When you are ready, we are here.</p>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="mailto:hello@retirewithoutselling.com?subject=Discovery%20Call%20Request"
        className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
      >
        Book a Discovery Call
      </a>
      
      <p className="mt-8">
        <a href="/" className="text-[#3A7BFF] hover:text-white transition-colors">
          ← Back to home
        </a>
      </p>
    </div>
  );
}
