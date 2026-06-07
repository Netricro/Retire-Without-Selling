import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl">
            <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
          </span>
          <span className="text-[#94a3b8] text-sm hidden sm:block">Retire Without Selling</span>
        </Link>
        <a
          href="https://regenovate.com/bsa"
          className="px-5 py-2 bg-[#3A7BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
        >
          Free Assessment
        </a>
      </div>
    </header>
  );
}
