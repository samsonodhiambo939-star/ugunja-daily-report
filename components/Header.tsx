"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Breaking", href: "#breaking" },
  { label: "Politics", href: "#politics" },
  { label: "Sports", href: "#sports" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Community", href: "#community" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-xl font-bold leading-tight">UGUNJA DAILY</h1>
            <p className="text-[10px] text-brand-gold tracking-widest uppercase hidden sm:block">
              The Voice of Ugunja &amp; Ugenya
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
