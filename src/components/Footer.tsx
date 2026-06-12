import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl">
            <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
          </span>
          <span className="text-[#94a3b8] text-sm">Retire Without Selling</span>
        </div>
        <div className="text-[#94a3b8] text-sm">
          <p>Build to Retire. Partnering for Equity.</p>
        </div>
        <div className="text-[#94a3b8] text-sm">
          <a href="mailto:hello@retire-without-selling.com" className="hover:text-white transition-colors">hello@retire-without-selling.com</a>
        </div>
      </div>
      <div className="text-center mt-8 text-[#94a3b8] text-xs">
        © 2026 Regenovate Limited
      </div>
    </footer>
  );
}
