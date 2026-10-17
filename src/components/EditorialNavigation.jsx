import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Pause, Menu, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function EditorialNavigation({ motionEnabled, onToggleMotion }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Academics', href: '#academics' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <>
      {/* Top Thin Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-stone-light/80 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Motion Toggle Button on the side like Sarthak's */}
      <button
        onClick={onToggleMotion}
        className="fixed top-24 right-4 sm:right-8 z-40 px-3 py-1.5 rounded-full editorial-glass text-[11px] font-mono tracking-wider text-stone-muted hover:text-stone-light transition-all flex items-center gap-2 border border-white/10"
        title="Toggle animations"
      >
        {motionEnabled ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
        <span>MOTION {motionEnabled ? 'ON' : 'OFF'}</span>
      </button>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 editorial-glass border-b border-white/[0.08]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* WORDMARK */}
          <a
            href="#top"
            className="text-base sm:text-lg font-medium tracking-tight text-stone-light hover:text-white transition-colors flex items-center gap-2.5"
          >
            <span className="font-sans font-semibold tracking-normal">{personalData.name}</span>
          </a>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-stone-muted tracking-wide font-normal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-stone-light transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-stone-light hover:bg-white hover:text-black hover:border-white transition-all text-xs font-medium tracking-wider"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full border border-white/20 text-xs text-stone-light"
            >
              Let’s talk ↗
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-muted hover:text-stone-light"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 editorial-glass border-b border-white/10 mt-2 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-stone-muted hover:text-stone-light py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
