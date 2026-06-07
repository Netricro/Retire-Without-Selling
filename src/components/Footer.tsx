import Link from 'next/link';

const footerLinks = [
  {
    title: 'Learn',
    links: [
      { href: '/the-problem', label: 'The Problem' },
      { href: '/the-solution', label: 'The Solution' },
      { href: '/the-method', label: 'The Method' },
      { href: '/the-economics', label: 'The Economics' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/your-story', label: 'Your Story' },
      { href: '/deal-killers', label: 'Deal Killers' },
      { href: '/about', label: 'About Us' },
    ],
  },
  {
    title: 'Action',
    links: [
      { href: '/assessment', label: 'Free Assessment' },
      { href: '/contact', label: 'Contact' },
      { href: '/blog', label: 'Blog' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl">
                <span className="text-[#3A7BFF]">R</span><span className="text-white">.</span>
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Build to Retire. Partnering for Equity. Helping UK business owners step back without selling.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94a3b8] text-sm">
            © 2026 Regenovate Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:ric@regenovate.com" className="text-[#94a3b8] text-sm hover:text-white transition-colors">
              ric@regenovate.com
            </a>
            <a href="https://regenovate.com" className="text-[#3A7BFF] text-sm hover:text-white transition-colors">
              regenovate.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
