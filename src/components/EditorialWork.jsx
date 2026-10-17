import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function EditorialWork() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>02 / SELECTED WORK</span>
        <span>BUILT. TESTED. PUT INTO THE WORLD.</span>
      </div>

      {/* EDITORIAL HEADING */}
      <div className="space-y-4 mb-16 max-w-2xl">
        <h2 className="text-3xl sm:text-5xl font-normal text-stone-light leading-[1.15] tracking-tight">
          Ideas are a start.<br />
          <em className="text-white font-serif italic text-4xl sm:text-6xl block mt-1">
            This is the work.
          </em>
        </h2>
        <p className="text-stone-muted text-sm sm:text-base leading-relaxed">
          From real-time computer vision models to enterprise management systems. A few production-grade applications I’ve built and deployed.
        </p>
      </div>

      {/* WORK GALLERY */}
      <div className="space-y-20">
        {/* PIECE 01: MOODIFY */}
        <article className="group space-y-6">
          {/* BROWSER WINDOW FRAME */}
          <div className="rounded-2xl border border-white/[0.12] bg-[#0c0c0c] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/25">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080808] border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-stone-light flex items-center gap-2">
                <span>moodify-nine-lilac.vercel.app</span>
                <span className="text-[10px] text-stone-subtle">↗</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Visual Canvas Representation */}
            <div className="relative p-6 sm:p-12 bg-gradient-to-br from-[#121212] via-[#090909] to-[#050505] min-h-[300px] sm:min-h-[380px] flex flex-col justify-between overflow-hidden">
              {/* Subtle background abstract geometry */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

              {/* Artifact Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-stone-light text-xs font-mono">
                  AI VISION & FULL-STACK MERN
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  LIVE ON VERCEL
                </span>
              </div>

              {/* Feature Highlights Grid within Browser */}
              <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">01 / VISION MODEL</div>
                  <div className="text-sm font-medium text-stone-light">MediaPipe AI Face Detection</div>
                  <div className="text-[11px] text-stone-muted">Real-time webcam emotion mapping with zero latency</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">02 / MONETIZATION</div>
                  <div className="text-sm font-medium text-stone-light">Razorpay Payment Gateway</div>
                  <div className="text-[11px] text-stone-muted">Cryptographic signature verification for premium tiers</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">03 / PERSISTENCE</div>
                  <div className="text-sm font-medium text-stone-light">MongoDB Case-Insensitive</div>
                  <div className="text-[11px] text-stone-muted">JWT auth with timestamped mood journal history</div>
                </div>
              </div>

              {/* Bottom Tagline within Canvas */}
              <div className="flex items-center justify-between text-xs font-mono text-stone-subtle pt-4 border-t border-white/[0.06] relative z-10">
                <span>REACT · MEDIAPIPE · NODE.JS · EXPRESS · MONGODB · RAZORPAY</span>
                <span className="hidden sm:inline">PROD V1.0</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL CAPTION ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
            <div className="lg:col-span-1 text-3xl sm:text-4xl font-sans text-stone-subtle font-light">
              01
            </div>

            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase">
                AI Vision & Emotion Recommendation Platform
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-stone-light">
                Moodify - AI Mood-Based Music Recommendation
              </h3>
              <p className="text-sm sm:text-base text-stone-muted leading-relaxed">
                A full-stack MERN platform that uses real-time webcam facial expression analysis via MediaPipe AI to identify user emotional states and auto-play matched curated playlists. Features JWT authentication, favorites management, timestamped mood journaling, and Razorpay Checkout to unlock premium audio tiers with backend verification.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2.5 sm:items-end">
              <a
                href="https://moodify-nine-lilac.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-light text-black font-medium text-xs tracking-wider hover:bg-white transition-all w-fit"
              >
                <span>Launch Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/misbah216/Moodify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-muted hover:text-stone-light transition-colors py-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code ↗</span>
              </a>
            </div>
          </div>
        </article>

        {/* PIECE 02: PRABANDH PRO */}
        <article className="group space-y-6 pt-12 border-t border-white/[0.08]">
          {/* BROWSER WINDOW FRAME */}
          <div className="rounded-2xl border border-white/[0.12] bg-[#0c0c0c] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/25">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080808] border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-stone-light flex items-center gap-2">
                <span>employee-management-system-clbz.onrender.com</span>
                <span className="text-[10px] text-stone-subtle">↗</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Visual Canvas Representation */}
            <div className="relative p-6 sm:p-12 bg-gradient-to-br from-[#121212] via-[#090909] to-[#050505] min-h-[300px] sm:min-h-[380px] flex flex-col justify-between overflow-hidden">
              {/* Subtle background abstract geometry */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

              {/* Artifact Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-stone-light text-xs font-mono">
                  ENTERPRISE APPLICATION ARCHITECTURE
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  DEPLOYED ON RENDER
                </span>
              </div>

              {/* Feature Highlights Grid within Browser */}
              <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">01 / ACCESS CONTROL</div>
                  <div className="text-sm font-medium text-stone-light">Role-Based Auth (RBAC)</div>
                  <div className="text-[11px] text-stone-muted">Admin dashboard with secure JWT & bcrypt password hashing</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">02 / CREDENTIAL RECOVERY</div>
                  <div className="text-sm font-medium text-stone-light">Email OTP Verification</div>
                  <div className="text-[11px] text-stone-muted">Automated OTP dispatch service for secure password reset</div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm space-y-1">
                  <div className="text-xs font-mono text-stone-subtle uppercase">03 / PAYROLL ENGINE</div>
                  <div className="text-sm font-medium text-stone-light">Real-Time Compensation</div>
                  <div className="text-[11px] text-stone-muted">Full CRUD operations, salary calculation, and employee records</div>
                </div>
              </div>

              {/* Bottom Tagline within Canvas */}
              <div className="flex items-center justify-between text-xs font-mono text-stone-subtle pt-4 border-t border-white/[0.06] relative z-10">
                <span>REACT · NODE.JS · EXPRESS · MONGODB · MONGOOSE · REST APIS</span>
                <span className="hidden sm:inline">RENDER CLOUD</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL CAPTION ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
            <div className="lg:col-span-1 text-3xl sm:text-4xl font-sans text-stone-subtle font-light">
              02
            </div>

            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase">
                Enterprise Operations & Human Resource Management
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-stone-light">
                PrabandhPro - Employee Management System
              </h3>
              <p className="text-sm sm:text-base text-stone-muted leading-relaxed">
                A production-grade full-stack employee administration system built with the MERN stack. Designed with role-based access control, admin security guards, bcrypt credential encryption, and an automated email OTP forgot password reset workflow. Includes dynamic compensation computation and a responsive UI with dark/light themes.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2.5 sm:items-end">
              <a
                href="https://employee-management-system-clbz.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-light text-black font-medium text-xs tracking-wider hover:bg-white transition-all w-fit"
              >
                <span>Launch Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/misbah216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-muted hover:text-stone-light transition-colors py-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Profile ↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
