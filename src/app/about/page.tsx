export const metadata = {
  title: 'About Us | Retire Without Selling',
  description: 'Meet the team behind Retire Without Selling. Ric Wilson and David Hargraves have helped hundreds of business owners build value and retire on their own terms.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
        About Us
      </p>
      <h1 className="text-4xl md:text-6xl mb-12 leading-tight">
        The Team Behind<br />Retire Without Selling
      </h1>
      
      <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
        <p className="text-2xl text-white font-light">
          We have done this. We have lived it. And we have systematised what works.
        </p>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">Ric Wilson</h2>
          <p className="mb-4">
            Business owner, investor, and entrepreneur. Built and sold multiple businesses. Lived the reality of the Retirement Value Gap personally. Developed the Build to Retire methodology from decades of experience in buying, fixing, and selling companies.
          </p>
          <p>
            Specialises in business transformation, operational improvement, and building businesses that run without the owner. Has worked with hundreds of businesses across the UK, from startups to companies with £10M+ revenue.
          </p>
        </div>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">David Hargraves</h2>
          <p className="mb-4">
            Chairman of Blue Sky Group. Author of <em>Build to Retire</em> and <em>Partnering for Equity</em>. Has bought, built, and sold dozens of companies. Developed the Partnering for Equity model from real-world deal experience.
          </p>
          <p>
            Expert in business acquisition, equity structuring, and building valuable business groups. Has helped hundreds of owners exit on their own terms without selling to a third party.
          </p>
        </div>
        
        <div className="glass rounded-xl p-8 my-12">
          <h2 className="text-2xl text-white mb-4">What We Believe</h2>
          <ul className="space-y-4 text-[#94a3b8]">
            <li>• Every business owner who has spent decades building something deserves to retire on what it is worth</li>
            <li>• Selling is not the only way — and often not the best way</li>
            <li>• The gap between current value and retirement needs is predictable and fixable</li>
            <li>• Building systems and teams is the only sustainable path to value</li>
            <li>• Partnering for equity aligns incentives and creates win-win outcomes</li>
          </ul>
        </div>
        
        <div className="border-t border-[#1e293b] pt-12">
          <h2 className="text-2xl text-white mb-4">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">500+</div>
              <p className="text-[#94a3b8]">Businesses advised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">5</div>
              <p className="text-[#94a3b8]">Businesses acquired</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-[#3A7BFF] mb-2">£100M+</div>
              <p className="text-[#94a3b8]">Value created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
