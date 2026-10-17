import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function EditorialProofStrip() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808]" aria-label="Academic and Technical Highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
        {/* Stat 1: CGPA */}
        <div className="py-8 sm:py-10 sm:px-6 first:pl-0">
          <div className="text-3xl sm:text-4xl font-normal text-stone-light tracking-tight font-sans">
            8.38<span className="text-stone-subtle text-xl sm:text-2xl font-light"> / 10</span>
          </div>
          <p className="text-xs text-stone-muted mt-2 font-normal leading-relaxed">
            Cumulative CGPA in B.Tech Computer Science & Engineering at RKGIT Ghaziabad
          </p>
        </div>

        {/* Stat 2: Sheryians */}
        <div className="py-8 sm:py-10 sm:px-6">
          <div className="text-3xl sm:text-4xl font-normal text-stone-light tracking-tight font-sans">
            Cohort 2.0<span className="text-stone-subtle text-xl sm:text-2xl font-light"></span>
          </div>
          <p className="text-xs text-stone-muted mt-2 font-normal leading-relaxed">
            Web Development & Full-Stack Training at Sheryians Coding School
          </p>
        </div>

        {/* Stat 3: Production Code */}
        <div className="py-8 sm:py-10 sm:px-6">
          <div className="text-3xl sm:text-4xl font-normal text-stone-light tracking-tight font-sans">
            MERN<span className="text-stone-subtle text-xl sm:text-2xl font-light"> + AI</span>
          </div>
          <p className="text-xs text-stone-muted mt-2 font-normal leading-relaxed">
            Full-stack production applications with MediaPipe AI & Razorpay integration
          </p>
        </div>

        {/* Stat 4: Action Link */}
        <a
          href="#work"
          className="py-8 sm:py-10 sm:px-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors"
        >
          <div className="text-xs font-mono tracking-widest text-stone-light uppercase leading-relaxed">
            THE WORK.<br />
            THE REAL-WORLD CODE.
          </div>
          <ArrowUpRight className="w-6 h-6 text-stone-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
