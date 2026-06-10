"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#solution" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group" aria-label="Rodood.ai home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm leading-none">R</span>
          </div>
          <span className="font-bold text-[#0F172A] text-lg tracking-tight group-hover:text-[#2E53EA] transition-colors">
            Rodood.ai
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#2E53EA] rounded-lg hover:bg-[#E9EEFF] transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-[#334155] hover:text-[#2E53EA] transition-colors"
          >
            Login
          </a>
          <a
            href="#cta"
            className="px-4 py-2 rounded-xl bg-[#2E53EA] text-white text-sm font-semibold hover:bg-[#2444C9] transition-all duration-150 shadow-sm shadow-[#2E53EA]/20 hover:shadow-md hover:shadow-[#2E53EA]/25"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#334155] hover:text-[#2E53EA] hover:bg-[#E9EEFF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2.5 text-sm font-medium text-[#334155] hover:text-[#2E53EA] rounded-lg hover:bg-[#E9EEFF] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-[#E2E8F0] mt-2">
            <a
              href="/login"
              className="text-center px-4 py-2.5 text-sm font-medium text-[#334155] border border-[#E2E8F0] rounded-xl hover:bg-[#F8FAFC] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="#cta"
              className="text-center px-4 py-2.5 rounded-xl bg-[#2E53EA] text-white text-sm font-semibold hover:bg-[#2444C9] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
