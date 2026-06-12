'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme, type Theme } from '@/components/ThemeProvider';

const solutionLinks = [
  { href: '/the-problem', label: 'The Problem' },
  { href: '/the-solution', label: 'The Solution' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/the-economics', label: 'The Economics' },
  { href: '/deal-killers', label: 'Deal Killers' },
];

const topLinks = [
  { href: '/your-story', label: 'Our Story' },
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

function NavLink({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 text-sm rounded-md transition-colors ${
        isActive
          ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
          : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const pathname = usePathname();
  const { theme, cycle } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setSolutionOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isSolutionActive = solutionLinks.some(link => pathname === link.href);

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
          {/* The Solution Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionOpen(!solutionOpen)}
              className={`px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-1 ${
                isSolutionActive
                  ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
                  : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
              }`}
            >
              The Solution
              <svg
                className={`w-3 h-3 transition-transform ${solutionOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 glass rounded-lg border border-white/10 shadow-xl py-2 z-50">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === link.href
                        ? 'text-[#3A7BFF] font-semibold'
                        : 'text-[#94a3b8] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {topLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
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
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 border border-[#3A7BFF]/30 text-white text-sm font-semibold rounded-lg hover:bg-[#3A7BFF]/10 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="https://regenovate.com/bsa"
            className="px-4 sm:px-5 py-2 bg-[#3A7BFF] text-white text-sm font-semibold rounded-lg hover:bg-[#2563eb] transition-colors"
          >
            <span className="hidden sm:inline">Free Assessment</span>
            <span className="sm:hidden">Free</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#94a3b8] hover:text-white rounded-md hover:bg-white/5 transition-colors touch-manipulation"
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

      {/* Mobile Navigation Menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          style={{ top: '64px' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu content */}
          <nav className="relative bg-[#0B0F1A] border-b border-white/10 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {/* Mobile: The Solution dropdown */}
              <button
                onClick={() => setSolutionOpen(!solutionOpen)}
                className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-md transition-colors ${
                  isSolutionActive
                    ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>The Solution</span>
                <svg
                  className={`w-4 h-4 transition-transform ${solutionOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionOpen && (
                <div className="pl-4 space-y-1 border-l border-white/10 ml-4">
                  {solutionLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-sm rounded-md transition-colors ${
                        pathname === link.href
                          ? 'text-[#3A7BFF] font-semibold'
                          : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {topLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-[#3A7BFF] bg-[#3A7BFF]/10 font-semibold'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => cycle()}
                className="flex items-center gap-2 w-full px-4 py-3 text-sm rounded-md text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
              >
                <ThemeIcon theme={theme} />
                <span>Theme: {THEME_LABELS[theme]} (tap to switch)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
