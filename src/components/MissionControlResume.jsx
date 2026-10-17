import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Award, FileText, CheckCircle, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData, certificationsData } from '../data/portfolioData';

export default function MissionControlResume() {
  const [activeTab, setActiveTab] = useState('overview');

  const triggerDownloadCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00F0FF', '#8B5CF6', '#38BDF8', '#F59E0B'],
    });
  };

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-glass border border-cyan-500/30 text-cyan-300 text-xs font-code tracking-widest uppercase">
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>MISSION CONTROL DOSSIER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Curriculum <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Vitae & Credentials</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Verified academic performance, full-stack proficiencies, and verified global certifications.
        </p>

        {/* QUICK DOWNLOAD BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={personalData.resumeUrl}
            download="Misbah_Saifi_Resume.pdf"
            onClick={triggerDownloadCelebration}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-600 text-black font-extrabold text-sm tracking-wide flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-black" />
            <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
          </a>

          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl cosmic-glass border border-white/20 text-white font-semibold text-sm tracking-wide flex items-center gap-2 hover:border-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            <span>Open In Full Tab</span>
          </a>
        </div>
      </div>

      {/* DOSSIER CARD */}
      <div className="rounded-3xl cosmic-glass border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.7)]">
        {/* TAB CONTROLS */}
        <div className="flex flex-wrap border-b border-white/10 bg-space-950/60 p-2 gap-2">
          {[
            { id: 'overview', label: 'Candidate Overview', icon: FileText },
            { id: 'education', label: 'Academics & CGPA', icon: GraduationCap },
            { id: 'certifications', label: 'Verified Certifications', icon: Award },
            { id: 'preview', label: 'Interactive PDF Viewer', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-code text-xs sm:text-sm tracking-wide transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT PANELS */}
        <div className="p-6 sm:p-10">
          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    Executive Summary
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Full-Stack Developer (B.Tech CSE, Expected 2027) with strong fundamentals in Data Structures, Algorithms, and Object-Oriented Programming. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js) and Python, with hands-on experience building full-stack applications featuring real-time features, authentication systems, and third-party API integrations, including payment gateway integration.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-2xl bg-space-950/70 border border-white/5">
                  <div className="text-xs font-code text-cyan-400 uppercase tracking-wider">
                    // CORE SPECIFICATIONS
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Target Role:</span>
                      <span className="text-white font-semibold">Software Engineer Intern</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Core Stack:</span>
                      <span className="text-cyan-300 font-code">MERN • Python • Three.js</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Current CGPA:</span>
                      <span className="text-emerald-400 font-bold font-code">8.38 / 10</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-slate-200">Ghaziabad, Uttar Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills & Working Mindset */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-code text-purple-400 uppercase tracking-wider mb-3">
                  // SOFT SKILLS & COLLABORATION
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Problem-Solving', 'Analytical Thinking', 'Team Collaboration', 'Learning Mindset', 'Clean Code Architecture', 'Fast Iteration'].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-code"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. EDUCATION TAB */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-space-950/60 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-code text-xs">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    RKGIT, Ghaziabad
                  </h3>
                  <p className="text-sm text-slate-300">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-xs text-slate-400 font-code">
                    Ghaziabad, Uttar Pradesh • Expected May 2027
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl font-extrabold text-cyan-400 font-code">
                    8.38 <span className="text-sm text-slate-400 font-normal">/ 10</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    Cumulative CGPA
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl cosmic-glass border border-white/5 space-y-3">
                <h4 className="text-sm font-code text-cyan-300 uppercase tracking-wider">
                  Relevant Coursework Completed:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 font-code">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Data Structures & Algos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Object-Oriented Prog (OOPs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Database Management (DBMS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Operating Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Computer Networks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Full-Stack Web Dev</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. CERTIFICATIONS TAB */}
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl cosmic-glass border border-white/10 hover:border-purple-400/50 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-code bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        {cert.badge}
                      </span>
                      <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-code">
                      Issuer: {cert.issuer} • Verification ID: {cert.id}
                    </p>
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 hover:text-cyan-300 pt-3 border-t border-white/5 transition-colors"
                  >
                    <span>VERIFY CREDENTIAL ON COURSERA</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </motion.div>
          )}

          {/* 4. PREVIEW TAB */}
          {activeTab === 'preview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-code text-slate-400 pb-2">
                <span>FILE: Misbah_Saifi_Resume.pdf</span>
                <span className="text-cyan-400">PDF RENDERER ACTIVE</span>
              </div>
              <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-white/10 bg-space-950">
                <iframe
                  src={`${personalData.resumeUrl}#toolbar=0`}
                  title="Misbah Saifi Resume Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
