import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function EditorialContact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>06 / THE NEXT CHAPTER</span>
        <span>LET’S MAKE IT MATTER</span>
      </div>

      {/* INNER CONTACT CALLOUT */}
      <div className="max-w-4xl mx-auto text-center space-y-8 py-8 sm:py-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-stone-light">
          <span className="live-dot" />
          <span>OPEN TO SOFTWARE ENGINEER INTERNSHIPS & MEANINGFUL ROLES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-stone-light leading-[1.1] tracking-tight">
          Something great starts with<br />
          <em className="text-white font-serif italic text-5xl sm:text-7xl lg:text-8xl block mt-2">
            a hello.
          </em>
        </h2>

        <p className="text-stone-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Full-stack development, software engineering internships, or technical collaborations. If our worlds overlap, I’d love to hear from you.
        </p>

        {/* Primary Contact CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-light text-black font-medium text-sm sm:text-base tracking-wide hover:bg-white hover:scale-[1.02] transition-all shadow-xl"
          >
            <span>{personalData.email}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-stone-light hover:bg-white/5 transition-all text-sm font-medium tracking-wide"
          >
            <Linkedin className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-subtle" />
          </a>
        </div>
      </div>

      {/* DIRECT INQUIRY FORM */}
      <div className="max-w-2xl mx-auto mt-8 mb-20 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#080808]">
        <div className="text-xs font-mono text-stone-subtle uppercase tracking-wider mb-6 pb-3 border-b border-white/[0.08]">
          Send a direct note
        </div>

        <form onSubmit={handleSend} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-stone-subtle uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 text-stone-light text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-stone-subtle uppercase mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 text-stone-light text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-stone-subtle uppercase mb-1.5">
              Message / Role Details
            </label>
            <textarea
              rows={3}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your team, challenge, or opportunity..."
              className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 text-stone-light text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white/[0.08] hover:bg-white text-stone-light hover:text-black transition-all text-xs font-mono tracking-widest uppercase font-medium flex items-center justify-center gap-2"
          >
            <span>Open Email Draft</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="pt-12 border-t border-white/[0.08] space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <a
            href="#top"
            className="text-xl sm:text-2xl font-normal text-stone-light hover:text-white transition-colors tracking-tight"
          >
            Misbah Saifi<span className="text-stone-subtle">.</span>
          </a>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-stone-muted">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-light transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-[10px]">↗</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-light transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-[10px]">↗</span>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-stone-light transition-colors flex items-center gap-1"
            >
              <span>Email</span>
              <span className="text-[10px]">↗</span>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="hover:text-stone-light transition-colors flex items-center gap-1"
            >
              <span>{personalData.phone}</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/10 text-stone-muted hover:text-stone-light hover:border-white/20 transition-all self-start sm:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-stone-subtle tracking-wider uppercase border-t border-white/[0.04] pt-6">
          <span>© 2026 MISBAH SAIFI</span>
          <span>BUILT WITH INTENT · ALWAYS EVOLVING</span>
          <span>GHAZIABAD, INDIA ↗ THE WORLD</span>
        </div>
      </footer>
    </section>
  );
}
