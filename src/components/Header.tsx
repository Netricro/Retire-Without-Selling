'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme, type Theme } from '@/components/ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-problem', label: 'The Problem' },
  { href: '/the-solution', label: 'The Solution' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/the-economics', label: 'The Economics' },
  { href: '/your-story', label: 'Our Story' },
  { href: '/deal-killers', label: 'Deal Killers' },
  { href: '/contact', label: 'Contact Us' },
];

const THEME_LABELS: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  midnight: "Midnight",
};

const THEME_NEXT: Record<Theme, Theme> = {
  dark: "light",
  light: "midnight",
  midnight: "dark",
};

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'light') return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
  if (theme === 'midnight') return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
  // dark
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, cycle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl">
            <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
          </span>
          <span className="text-[#94a3b8] text-sm hidden sm:block">Retire Without Selling</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle — desktop */}
          <button
            onClick={cycle}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium tracking-wide text-[#94a3b8] border border-[#3A7BFF]/20 hover:bg-[#3A7BFF]/10 hover:text-white transition-all"
            aria-label="Switch theme"
            title={`Next: ${THEME_LABELS[THEME_NEXT[theme]]}`}
          >
            <ThemeIcon theme={theme} />
            <span>{THEME_LABELS[theme]}</span>
          </button>

          <a
            href="/contact"
            className="px-4 sm:px-5 py-2 border border-[#3A7BFF]/30 text-white text-sm font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-colors"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Contact</span>
          </a>
          <a
            href="https://regenovate.com/bsa"
            className="px-4 sm:px-5 py-2 bg-[#3A7BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
          >
            <span className="hidden sm:inline">Free Assessment</span>
            <span className="sm:hidden">Assessment</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#94a3b8] hover:text-white rounded-md hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => cycle()}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm rounded-md text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
            >
              <ThemeIcon theme={theme} />
              <span>Theme: {THEME_LABELS[theme]} (tap to switch)</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
