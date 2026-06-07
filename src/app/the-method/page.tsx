import Link from 'next/link';

export const metadata = {
  title: 'The Method | Retire Without Selling',
  description: 'Stabilise, Systemise, Scale. The three-phase methodology for building a business that runs without you.',
};

export default function TheMethod() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        The Method
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        Stabilise. Systemise. Scale.
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          The three-phase methodology for building a business that runs without you.
        </p>
        
        <div className="space-y-16 mt-16">
          <div className="flex gap-8 items-start">
            <div className="text-[#3A7BFF] text-6xl font-serif shrink-0 leading-none">01</div>
            <div>
              <h2 className="text-3xl text-white mb-4">Stabilise</h2>
              <p className="mb-4">
                Fix the immediate problems. Cash flow, management structure, key person risk. Get the business stable so it can grow without depending on you daily.
              </p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Establish a proper management structure with clear roles</li>
                <li>• Fix cash flow issues and create financial buffers</li>
                <li>• Address key person dependency — what happens if you are not there?</li>
                <li>• Identify and resolve the single points of failure</li>
                <li>• Get the business to a stable baseline before growth</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-8 items-start">
            <div className="text-[#3A7BFF] text-6xl font-serif shrink-0 leading-none">02</div>
            <div>
              <h2 className="text-3xl text-white mb-4">Systemise</h2>
              <p className="mb-4">
                Document the processes. Build the management team. Create systems that work whether you are in the office or on holiday. Transfer the knowledge from your head into the business.
              </p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Document every core process — sales, delivery, finance, operations</li>
                <li>• Build a management team that can run the day-to-day</li>
                <li>• Create training materials so new staff can be onboarded quickly</li>
                <li>• Implement KPIs and dashboards so you can see performance without being involved</li>
                <li>• Build the infrastructure for scalability</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-8 items-start">
            <div className="text-[#3A7BFF] text-6xl font-serif shrink-0 leading-none">03</div>
            <div>
              <h2 className="text-3xl text-white mb-4">Scale</h2>
              <p className="mb-4">
                Grow the value. Increase profitability. Expand the team. Build a business that runs without you — and is worth 8-12x profit instead of 1-2x.
              </p>
              <ul className="space-y-2 text-[#94a3b8]">
                <li>• Grow revenue through repeatable, scalable sales processes</li>
                <li>• Improve margins through operational efficiency</li>
                <li>• Expand the team with people who can grow the business</li>
                <li>• Build strategic value through IP, contracts, and market position</li>
                <li>• Create a business that is genuinely attractive to buyers — even if you never sell</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/the-economics"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3A7BFF] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-all"
          >
            See The Economics
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#3A7BFF]/30 text-white font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-all"
          >
            Take The Free Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
