import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Cpu, Layers, Database, Code2, Globe, Shield, Terminal, Zap } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function OrbitalSkills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-glass border border-cyan-500/30 text-cyan-300 text-xs font-code tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL CONSTELLATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Cosmic Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          A gravitational system of modern full-stack development, creative 3D engineering, and deep computer science fundamentals.
        </p>
      </div>

      {/* ORBIT CATEGORY TABS */}
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
        {skillsData.map((cat, idx) => {
          const isActive = activeCategory === idx;
          return (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`relative px-4 sm:px-5 py-2.5 rounded-xl font-code text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'cosmic-glass border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              } border`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span>{cat.category}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                {cat.orbit}
              </span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE ORBIT CONSTELLATION DISPLAY */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl cosmic-glass border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between"
            >
              {/* Corner Sci-Fi bracket */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/50 group-hover:border-cyan-300 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-space-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span
                    className="text-xs font-code px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: `${skillsData[activeCategory].color}40`,
                      color: skillsData[activeCategory].color,
                      backgroundColor: `${skillsData[activeCategory].color}15`,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 font-code mt-1">
                  Active in production stack & core projects
                </p>
              </div>

              {/* Progress Bar Aura */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="h-1.5 w-full bg-space-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skillsData[activeCategory].color}, #00F0FF)`,
                      boxShadow: `0 0 10px ${skillsData[activeCategory].color}`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CORE CS & ARCHITECTURE RADAR HIGHLIGHT */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl cosmic-glass border border-cyan-500/20 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-code text-cyan-400 uppercase tracking-widest">
              // FOUNDATIONAL ARCHITECTURE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Data Structures, Algorithms & Full-Stack Systems
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Trained in Sheryians Coding School Cohort 2.0 with rigorous problem solving, clean system design, and production deployment across MERN & Python.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['DSA', 'OOPs', 'DBMS', 'OS', 'Networks', 'MERN', 'REST APIs', 'Razorpay'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-code text-cyan-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
