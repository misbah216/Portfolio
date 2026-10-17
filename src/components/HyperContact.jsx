import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Check, Copy, Terminal, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function HyperContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage({ type: 'error', text: 'ERR_EMPTY_FIELDS: Please fill in all signal coordinates.' });
      return;
    }

    setStatusMessage({ type: 'loading', text: 'TRANSMITTING_PACKET_THROUGH_SUBSPACE...' });

    setTimeout(() => {
      setStatusMessage({
        type: 'success',
        text: 'PACKET_RECEIVED: Transmission dispatched to Misbah Saifi! Opening mail client...',
      });
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });

      // Also trigger mailto fallback
      const subject = encodeURIComponent(`Portfolio Comm-Link from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* SECTION HEADER */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-glass border border-cyan-500/30 text-cyan-300 text-xs font-code tracking-widest uppercase">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>QUANTUM COMM-LINK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Initiate <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transmission</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Open to Software Engineer Intern opportunities, collaborative engineering projects, and full-stack challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* LEFT: DIRECT CONTACT BEACONS */}
        <div className="lg:col-span-2 space-y-4">
          {/* EMAIL CARD */}
          <div className="p-6 rounded-2xl cosmic-glass border border-white/10 hover:border-cyan-400/40 transition-all space-y-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-code text-slate-400">DIRECT DISPATCH</div>
                  <div className="text-sm font-semibold text-white">Email Address</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalData.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href={`mailto:${personalData.email}`}
              className="text-xs sm:text-sm font-code text-cyan-300 hover:underline block truncate"
            >
              {personalData.email}
            </a>
          </div>

          {/* PHONE CARD */}
          <div className="p-6 rounded-2xl cosmic-glass border border-white/10 hover:border-purple-400/40 transition-all space-y-3 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-code text-slate-400">SECURE FREQUENCY</div>
                  <div className="text-sm font-semibold text-white">Voice & WhatsApp</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-300 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href={`tel:${personalData.phone}`}
              className="text-xs sm:text-sm font-code text-purple-300 hover:underline block"
            >
              {personalData.phone}
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="p-6 rounded-2xl cosmic-glass border border-white/10 space-y-4">
            <div className="text-xs font-code text-slate-400 uppercase tracking-wider">
              // EXTERNAL PROTOCOLS
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-2.5 text-xs font-code"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 text-slate-200 hover:text-purple-300 transition-all flex items-center gap-2.5 text-xs font-code"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs font-code text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personalData.location}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: SCI-FI SUB-SPACE TRANSMISSION CONSOLE */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl cosmic-glass border border-cyan-500/30 p-6 sm:p-8 space-y-5 shadow-[0_0_40px_rgba(0,240,255,0.1)] relative"
          >
            {/* Terminal Top Accent */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-code text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                TERMINAL STATUS: READY_TO_TRANSMIT
              </span>
              <span>PORT: 8080 (TLS)</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-code text-cyan-300 uppercase tracking-wider mb-2">
                  Sender Identity [Name]
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-code text-cyan-300 uppercase tracking-wider mb-2">
                  Return Frequency [Email]
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-code text-cyan-300 uppercase tracking-wider mb-2">
                  Encrypted Payload [Message]
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your role, opportunity, or collaboration concept..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-all resize-none"
                />
              </div>
            </div>

            {/* Status Feedback Message */}
            {statusMessage && (
              <div
                className={`p-3 rounded-xl font-code text-xs ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : statusMessage.type === 'error'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Send Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-600 text-black font-extrabold text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Dispatch Sub-Space Signal</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
