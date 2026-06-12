import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl">
              <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
            </span>
            <span className="text-[#94a3b8] text-sm">Retire Without Selling</span>
          </div>
          <div className="text-[#94a3b8] text-sm">
            <p>Retire Without Selling. Keep your equity. Keep your income.</p>
          </div>
          <div className="text-[#94a3b8] text-sm">
            <a href="mailto:hello@retire-without-selling.com" className="hover:text-white transition-colors">hello@retire-without-selling.com</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 text-[#94a3b8] text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          <span className="hidden md:inline">|</span>
          <span>Company Number: 15339923</span>
        </div>
        <div className="text-center mt-6 text-[#94a3b8] text-xs">
          © 2026 Regenovate Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
