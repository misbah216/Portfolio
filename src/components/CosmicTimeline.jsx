import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function CosmicTimeline() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-glass border border-cyan-500/30 text-cyan-300 text-xs font-code tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>MISSION CHRONOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Journey & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Milestones across software engineering internships, advanced Sheryians training, and computer science academics.
        </p>
      </div>

      {/* TIMELINE TRACK */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
        {experienceData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Glowing Orbit Beacon Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-space-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Timeline Card */}
            <div className="p-6 sm:p-8 rounded-2xl cosmic-glass border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="px-3 py-1 rounded-md text-xs font-code bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                  {item.badge}
                </span>
                <span className="text-xs font-code text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400/80" />
                  {item.period}
                </span>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-purple-300 mt-1">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-code bg-white/5 text-cyan-200/90 border border-white/5"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
