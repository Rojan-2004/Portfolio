'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#faedcd] border-t border-[#3a2e2a]/10 text-center space-y-6 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Social Connect Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Rojan-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fefae0] border border-[#3a2e2a]/30 text-[#3a2e2a] hover:text-[#b08968] hover:border-[#b08968] transition-all shadow-sm"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rojan-mainali-470598269/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fefae0] border border-[#3a2e2a]/30 text-[#3a2e2a] hover:text-[#b08968] hover:border-[#b08968] transition-all shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/9779841994110"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#fefae0] border border-[#3a2e2a]/30 text-[#3a2e2a] hover:text-[#b08968] hover:border-[#b08968] transition-all shadow-sm"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="mailto:rojanm1000@gmail.com"
            className="p-2.5 rounded-full bg-[#fefae0] border border-[#3a2e2a]/30 text-[#3a2e2a] hover:text-[#b08968] hover:border-[#b08968] transition-all shadow-sm"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm font-medium text-[#3a2e2a] font-secondary">
          &copy; {new Date().getFullYear()} · Designed & Built by <span className="font-bold text-[#3a2e2a] font-primary">Rojan Mainali</span>
        </p>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-md bg-[#3a2e2a] text-[#faedcd] shadow-md hover:bg-[#b08968] transition-all z-50 border border-[#3a2e2a]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}


