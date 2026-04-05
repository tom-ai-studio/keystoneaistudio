"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/sms-consent", label: "SMS Consent" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/statement-of-work", label: "Statement of Work" },
  { href: "/master-service-agreement", label: "Master Service Agreement" },
  { href: "/trading-disclaimer", label: "Trading Disclaimer" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header bg-surface/80">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-headline text-on-surface"
        >
          Keystone AI Studio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-label uppercase tracking-wider transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-surface/95 glass-header border-t border-outline-variant/15 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-label uppercase tracking-wider py-2 ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-secondary hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
