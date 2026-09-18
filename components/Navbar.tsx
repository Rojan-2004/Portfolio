'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#faedcd] py-5 ${
        scrolled ? 'shadow-sm border-b border-[#3a2e2a]/20' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="text-xl sm:text-2xl font-extrabold text-[#3a2e2a] tracking-tight group-hover:text-[#b08968] transition-colors font-primary">
            Rojan Mainali
          </span>
          <span className="text-xs text-[#3a2e2a] font-normal hidden sm:inline font-primary">
            / Web & Mobile App Developer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5 text-sm font-primary text-[#3a2e2a]">
            {navItems.map((item, index) => (
              <li key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className={`hover:text-[#b08968] transition-colors ${
                    index !== navItems.length - 1 ? 'border-r border-[#3a2e2a] pr-5' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Rojan_Mainali_Resume.pdf"
            download="Rojan_Mainali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#3a2e2a] border border-[#3a2e2a] hover:bg-[#3a2e2a] hover:text-[#faedcd] transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faedcd] border-b border-[#3a2e2a] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#3a2e2a] border-b border-[#3a2e2a]/10 hover:text-[#b08968]"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Rojan_Mainali_Resume.pdf"
            download="Rojan_Mainali_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-[#3a2e2a] text-[#faedcd] font-medium text-sm mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}


