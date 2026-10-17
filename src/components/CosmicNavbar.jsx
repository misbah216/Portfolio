import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Compass, Briefcase, FileText, Send, Volume2, VolumeX } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function CosmicNavbar({ isAudioPlaying, onToggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cosmos', href: '#hero', icon: Sparkles },
    { name: 'Constellation', href: '#skills', icon: Compass },
    { name: 'Missions', href: '#projects', icon: Briefcase },
    { name: 'Logbook', href: '#experience', icon: Terminal },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Comm-Link', href: '#contact', icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 cosmic-glass border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all">
            <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center font-display font-extrabold text-white text-base">
              MS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-wide text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[10px] font-code text-cyan-400/80 tracking-wider">
              CSE '27 • PORTFOLIO
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full cosmic-glass border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400/70" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* RIGHT CONTROLS: AUDIO TOGGLE & RESUME BUTTON */}
        <div className="flex items-center gap-3">
          {/* Cosmic Audio Toggle */}
          <button
            onClick={onToggleAudio}
            title={isAudioPlaying ? 'Mute Cosmic Ambient Sound' : 'Play Cosmic Ambient Sound'}
            className="p-2.5 rounded-xl cosmic-glass border border-white/10 text-cyan-400 hover:text-white hover:border-cyan-400/50 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            {isAudioPlaying ? (
              <div className="relative">
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Quick Resume Link */}
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold text-xs tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl cosmic-glass border border-white/10 text-slate-300"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-cyan-400 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-cyan-400 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-cyan-400 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 cosmic-glass border-b border-cyan-500/20 mt-2 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
