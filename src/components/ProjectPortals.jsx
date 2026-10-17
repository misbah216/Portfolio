import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight, X, Shield, Cpu, Zap, CreditCard, Music } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectPortals() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-glass border border-purple-500/30 text-purple-300 text-xs font-code tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>DEEP SPACE MISSIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Production Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Full-stack architectures deployed to the cloud, featuring real-time AI computer vision, payment gateways, and enterprise-grade role security.
        </p>
      </div>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative rounded-3xl cosmic-glass border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]"
          >
            {/* TOP GLOW GRADIENT */}
            <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${project.color} pointer-events-none opacity-60`} />

            {/* CARD CONTENT */}
            <div className="p-6 sm:p-8 relative z-10 space-y-6">
              {/* Category & Action Icons */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-code bg-white/5 border border-white/10 text-cyan-300">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-400/40 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      title="Launch Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-space-950/60 border border-white/5 flex items-center gap-2 text-xs font-code text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-code bg-white/5 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CARD BOTTOM ACTION BAR */}
            <div className="p-6 sm:p-8 pt-0 relative z-10 flex items-center justify-between border-t border-white/5 mt-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-code text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn"
              >
                <span>ARCHITECTURE DEEP DIVE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ARCHITECTURE DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl cosmic-glass border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2">
                <span className="text-xs font-code text-cyan-400 uppercase tracking-widest">
                  // MISSION TELEMETRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-code text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Engineering Highlights & Security
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-space-950/80 border border-white/5 text-xs sm:text-sm text-slate-200 flex items-start gap-3"
                    >
                      <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2">
                <h4 className="text-xs font-code text-slate-400 uppercase tracking-wider">
                  Deployed Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-code text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl cosmic-glass border border-white/20 text-white font-code text-xs flex items-center gap-2 hover:border-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Inspect Source
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold font-code text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-black" />
                    Launch Live Mission
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
