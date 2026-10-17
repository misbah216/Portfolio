import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Award, FileText, CheckCircle2 } from 'lucide-react';
import { personalData, certificationsData } from '../data/portfolioData';

export default function EditorialResume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>05 / CREDENTIALS & DOSSIER</span>
        <span>VERIFIED RECORDS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Actions */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-normal text-stone-light leading-[1.15] tracking-tight">
            Curriculum Vitae.<br />
            <em className="text-white font-serif italic text-4xl sm:text-6xl block mt-1">
              The verified details.
            </em>
          </h2>

          <p className="text-sm sm:text-base text-stone-muted leading-relaxed">
            Download my complete curriculum vitae covering academic coursework, engineering projects, internship experience, and certified credentials.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={personalData.resumeUrl}
              download="Misbah_Saifi_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-light text-black font-medium text-xs sm:text-sm tracking-wide hover:bg-white hover:scale-[1.02] transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-5 py-3.5 rounded-full border border-white/15 text-stone-light hover:bg-white/5 transition-all text-xs font-mono tracking-wider"
            >
              {showPreview ? 'Hide PDF Preview' : 'Preview Document ↗'}
            </button>
          </div>
        </div>

        {/* Right Column: Verified Certifications */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase block border-b border-white/[0.08] pb-3">
            COURSERA VERIFIED CERTIFICATIONS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#090909] flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-subtle">
                      {cert.issuer}
                    </span>
                    <Award className="w-4 h-4 text-stone-light" />
                  </div>
                  <h3 className="text-lg font-normal text-stone-light leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-[11px] font-mono text-stone-muted">
                    Credential ID: {cert.id}
                  </div>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-light hover:text-white pt-2 border-t border-white/[0.06] tracking-wide"
                >
                  <span>Verify Record</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#080808] flex items-center justify-between text-xs text-stone-muted">
            <span className="font-mono text-stone-light">B.Tech CSE Expected May 2027</span>
            <span>RKGIT Ghaziabad · CGPA 8.38/10</span>
          </div>
        </div>
      </div>

      {/* In-Browser PDF Preview if opened */}
      {showPreview && (
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c0c] h-[700px] shadow-2xl">
          <iframe
            src={`${personalData.resumeUrl}#toolbar=0`}
            title="Misbah Saifi Resume Preview"
            className="w-full h-full border-0"
          />
        </div>
      )}
    </section>
  );
}
