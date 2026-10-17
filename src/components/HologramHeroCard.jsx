import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Terminal, Download, ArrowUpRight, Code2, Cpu, Globe } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function HologramHeroCard({ onWarpToggle, isWarping }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 14;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 pt-8 pb-16">
      {/* LEFT: TEXT CONTENT & MISSION BADGES */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="flex-1 text-left space-y-6 z-10"
      >
        {/* TOP STATUS PILL */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full cosmic-glass border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-code tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personalData.status}</span>
        </div>

        {/* MAIN HERO HEADLINE */}
        <div className="space-y-2">
          <div className="text-sm font-code text-cyan-400/80 tracking-widest uppercase">
            // COSMIC ENGINEER & ARCHITECT
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-display">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
              {personalData.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-medium">
            {personalData.title}
          </p>
        </div>

        {/* BIO */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
          {personalData.bio}
        </p>

        {/* STATS BENTO ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl cosmic-glass border border-white/5 hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-cyan-400 font-bold text-base sm:text-lg font-code">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-black" />
              Explore Missions
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <a
            href={personalData.resumeUrl}
            download="Misbah_Saifi_Resume.pdf"
            className="px-6 py-3.5 rounded-xl cosmic-glass border border-purple-500/40 text-purple-300 hover:text-white hover:border-purple-400 font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-purple-400" />
            Get Resume
          </a>

          <button
            onClick={onWarpToggle}
            className={`px-4 py-3.5 rounded-xl font-code text-xs tracking-wider border transition-all duration-300 flex items-center gap-2 ${
              isWarping
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                : 'cosmic-glass border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isWarping ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'}`} />
            {isWarping ? 'HYPERSPACE ACTIVE' : 'WARP SPEED'}
          </button>
        </div>
      </motion.div>

      {/* RIGHT: 3D HOLOGRAPHIC AVATAR CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="w-full max-w-sm lg:max-w-md perspective-1000 z-10"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="relative group rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.18)]"
        >
          {/* Card Frame Interior */}
          <div className="relative rounded-[22px] overflow-hidden bg-space-900/90 border border-white/10 backdrop-blur-xl p-4 sm:p-6">
            {/* SCI-FI HUD CORNER ACCENTS */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

            {/* TOP HUD BAR */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 font-code text-[11px] text-cyan-400/80">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                PILOT_ID: MS_2027
              </span>
              <span>COORD: 28.6692° N / 77.4538° E</span>
            </div>

            {/* AVATAR IMAGE CONTAINER WITH HOLOGRAPHIC EFFECT */}
            <div className="relative my-4 rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-space-800 to-space-950 border border-white/10">
              <img
                src={personalData.photoUrl}
                alt={personalData.name}
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Holographic Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,240,255,0.06)_50%)] bg-[length:100%_4px] opacity-70" />

              {/* Dynamic Glare Reflection */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.35), transparent 70%)`,
                }}
              />

              {/* Bottom Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-space-950 via-space-950/60 to-transparent" />

              {/* FLOATING HUD BADGES OVER PHOTO */}
                <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-code font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  B.Tech CSE '27 (CGPA 8.38)
                </div>
              </div>
            </div>

            {/* PILOT FOOTER INFO */}
            <div className="pt-2 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-lg tracking-wide">
                  {personalData.name}
                </h3>
                <p className="text-xs text-slate-400 font-code">
                  Ghaziabad, Uttar Pradesh, IN
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-400/30 text-purple-300 font-code">
                  CGPA 8.38
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
