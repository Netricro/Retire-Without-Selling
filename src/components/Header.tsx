'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-problem', label: 'The Problem' },
  { href: '/the-solution', label: 'The Solution' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/the-economics', label: 'The Economics' },
  { href: '/your-story', label: 'Your Story' },
  { href: '/deal-killers', label: 'Deal Killers' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <div className="flex items-center gap-3">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm text-[#94a3b8] hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
