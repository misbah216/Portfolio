import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import KineticSignal3D from './KineticSignal3D';

export default function EditorialAbout({ motionEnabled }) {
  const [activePerspective, setActivePerspective] = useState('build');

  const perspectives = {
    build: {
      label: 'Build',
      centerLabel: 'STRUCTURE',
      title: 'Give an idea structure.',
      description: 'Products and interfaces that connect real needs to resilient, production-ready MERN software.',
      linkText: 'Explore the code',
      href: '#work',
    },
    architect: {
      label: 'Architect',
      centerLabel: 'ALGORITHMS',
      title: 'Solve for scale and clarity.',
      description: 'Strong fundamentals in Data Structures, Algorithms, OOPs, DBMS, and secure role-based access architectures.',
      linkText: 'View technical expertise',
      href: '#expertise',
    },
    connect: {
      label: 'Connect',
      centerLabel: 'INTEGRATION',
      title: 'Bridge AI and modern capability.',
      description: 'Integrating MediaPipe AI facial computer vision, Razorpay payment checkouts, and cloud deployment pipelines.',
      linkText: 'Read about the projects',
      href: '#work',
    },
  };

  const current = perspectives[activePerspective];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>01 / THE PERSON BEHIND THE WORK</span>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      {/* ABOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-normal text-stone-light leading-[1.15] tracking-tight">
            Code is the starting point.<br />
            Architecture is the craft.<br />
            <em className="text-white font-serif italic text-4xl sm:text-6xl block mt-1">
              Real impact is the point.
            </em>
          </h2>

          <p className="text-lg text-stone-light font-normal leading-relaxed">
            I connect full-stack software development, clean data structures, and intuitive product design.
          </p>

          <p className="text-stone-muted text-sm sm:text-base leading-relaxed">
            Currently pursuing my B.Tech in Computer Science & Engineering (CGPA 8.38/10) at RKGIT Ghaziabad and training in Cohort 2.0 at <strong className="text-stone-light font-medium">Sheryians Coding School</strong>, I build web applications with the MERN stack and Python. From real-time emotion-detection AI with Razorpay payments to enterprise management systems, I enjoy turning complex challenges into clean, maintainable software.
          </p>

          {/* Identity Notes */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/[0.08] text-[11px] font-mono tracking-widest text-stone-subtle uppercase">
            <span>ENGINEERING MIND.</span>
            <span>BUILDER’S AMBITION.</span>
            <span>CONTINUOUS LEARNER.</span>
          </div>
        </div>

        {/* Right Interactive Signal Explorer */}
        <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-[#090909] p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Signal Topline */}
          <div className="flex items-center justify-between text-[11px] font-mono text-stone-subtle tracking-wider uppercase border-b border-white/[0.08] pb-4">
            <span>THREE DISCIPLINES. ONE PERSPECTIVE.</span>
            <span>
              {activePerspective === 'build' ? '01 / 03' : activePerspective === 'architect' ? '02 / 03' : '03 / 03'}
            </span>
          </div>

          {/* 3D Kinetic Canvas Display */}
          <div className="relative w-full h-64 sm:h-72 rounded-xl bg-[#060606] border border-white/[0.06] overflow-hidden flex items-center justify-center">
            <KineticSignal3D mode={activePerspective} motionEnabled={motionEnabled} />
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-subtle tracking-widest uppercase">
              {current.centerLabel}
            </div>
          </div>

          {/* Perspective Selector Buttons */}
          <div className="flex items-center gap-2 pt-2" role="group" aria-label="Explore disciplines">
            {['build', 'architect', 'connect'].map((key) => {
              const isActive = activePerspective === key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePerspective(key)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-light text-black font-semibold'
                      : 'border border-white/10 text-stone-muted hover:text-stone-light hover:border-white/20'
                  }`}
                >
                  <span>{perspectives[key].label}</span>
                  <span className="text-[10px]">↗</span>
                </button>
              );
            })}
          </div>

          {/* Story Callout */}
          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <h3 className="text-lg font-medium text-stone-light">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-muted leading-relaxed">
              {current.description}
            </p>
            <a
              href={current.href}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-light hover:text-white pt-1 tracking-wide underline underline-offset-4 decoration-stone-subtle"
            >
              <span>{current.linkText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
