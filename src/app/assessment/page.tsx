export const metadata = {
  title: 'Free Assessment | Retire Without Selling',
  description: 'Take our free 5-minute Business Sale Assessment. Shows you exactly where your business stands, what the gap is, and what steps to take next.',
};

export default function Assessment() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        Free Assessment
      </p>
      <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
        Find Out Where You Stand
      </h1>
      
      <p className="text-xl text-[#94a3b8] mb-12 leading-relaxed">
        Take our free 5-minute Business Sale Assessment. It shows you exactly where your business is today, what the gap is, and what steps to take next. No pitch. Just clarity.
      </p>
      
      <div className="glass rounded-xl p-8 my-12 border border-[#3A7BFF]/30 text-left">
        <h2 className="text-2xl text-white mb-4">What You Get</h2>
        <ul className="space-y-4 text-[#94a3b8]">
          <li className="flex items-start gap-3">
            <span className="text-[#3A7BFF] text-xl mt-0.5">✓</span>
            <span>A clear picture of your business's current sale-readiness</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3A7BFF] text-xl mt-0.5">✓</span>
            <span>An estimate of the gap between your current value and your retirement needs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3A7BFF] text-xl mt-0.5">✓</span>
            <span>Specific recommendations for the highest-impact improvements</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3A7BFF] text-xl mt-0.5">✓</span>
            <span>No obligation, no sales call, no spam</span>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col items-center gap-6 my-16">
        <a
          href="https://regenovate.com/bsa"
          className="inline-flex items-center justify-center px-12 py-6 bg-[#3A7BFF] text-white text-xl font-semibold rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3A7BFF]/20"
        >
          Start The Free Assessment
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <p className="text-sm text-[#94a3b8]">
          Takes 5 minutes. Instant results. No email required unless you want to save your report.
        </p>
      </div>
      
      <div className="border-t border-[#1e293b] pt-12">
        <h2 className="text-2xl text-white mb-4">Prefer to Talk First?</h2>
        <p className="text-[#94a3b8] mb-6">
          If you would rather have a conversation before taking the assessment, book a discovery call. No pitch, no pressure. Just a conversation about where you are and what options exist.
        </p>
        <a
          href="mailto:ric@regenovate.com?subject=Discovery%20Call%20Request"
          className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
        >
          Book a Discovery Call
        </a>
      </div>
    </div>
  );
}
