import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-problem', label: 'The Problem' },
  { href: '/the-solution', label: 'The Solution' },
  { href: '/the-method', label: 'The Method' },
  { href: '/the-economics', label: 'The Economics' },
  { href: '/your-story', label: 'Your Story' },
  { href: '/deal-killers', label: 'Deal Killers' },
  { href: '/assessment', label: 'Free Assessment' },
];

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
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-[#94a3b8] hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/assessment"
          className="px-4 py-2 bg-[#3A7BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
