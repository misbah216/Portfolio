import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Centerpiece3DPortrait from './Centerpiece3DPortrait';

export default function EditorialHero({ motionEnabled }) {
  const transitionConfig = motionEnabled
    ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    : { duration: 0 };

  return (
    <section
      id="top"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 1. HERO TOPLINE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4 text-[11px] sm:text-xs font-mono tracking-wider text-stone-muted">
        <div className="flex items-center gap-2">
          <span className="live-dot" />
          <span className="text-stone-light">FULL-STACK DEVELOPER · PROBLEM SOLVER · BUILDER</span>
        </div>
        <div>BASED IN GHAZIABAD, INDIA · THINKING BEYOND</div>
      </div>

      {/* 2. HERO CENTERED MAIN CONTENT */}
      <div className="flex flex-col items-center text-center my-auto py-6 sm:py-10 space-y-4">
        {/* Kicker */}
        <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase block">
          A HUMAN PERSPECTIVE ON TECHNOLOGY
        </span>

        {/* Monumental Headline */}
        <motion.h1
          initial={motionEnabled ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionConfig}
          className="text-5xl sm:text-7xl lg:text-9xl font-normal tracking-tight text-stone-light leading-[1.05]"
        >
          Misbah{' '}
          <em className="text-white not-italic font-serif italic font-normal tracking-normal">
            Saifi
          </em>
        </motion.h1>

        {/* 3D Centerpiece Portrait with Interactive Depth */}
        <Centerpiece3DPortrait motionEnabled={motionEnabled} />

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-muted max-w-xl mx-auto font-normal leading-relaxed pt-2">
          I build full-stack web applications, solve complex problems with clean algorithms, and turn ideas into production software.
        </p>

        {/* Centered Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-light text-black font-medium text-xs sm:text-sm tracking-wide hover:bg-white hover:scale-[1.02] transition-all shadow-xl"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border border-white/15 text-stone-light hover:bg-white/5 transition-all text-xs sm:text-sm font-medium tracking-wide"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-stone-subtle" />
          </a>
        </div>
      </div>

      {/* 3. HERO BOTTOM BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-4 text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <a href="#about" className="hover:text-stone-light transition-colors flex items-center gap-2">
          <span className="w-6 h-[1px] bg-stone-subtle inline-block" />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3 h-3" />
        </a>

        <div>TRAINED AT SHERYIANS CODING SCHOOL · COHORT 2.0</div>
        <div className="text-stone-muted">01 - PRESENCE ↗</div>
      </div>
    </section>
  );
}
