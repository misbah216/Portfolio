import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function EditorialExpertise() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const disciplines = [
    {
      number: '01',
      category: 'FULL-STACK ENGINEERING',
      headline: 'Build with durability.',
      description: 'I architect responsive, production-ready web applications using the MERN stack and Python. From performant client-side state management and component architecture in React to resilient RESTful microservices with Express and Node.js.',
      strengths: 'JavaScript (ES6+) · React.js · Node.js · Express.js · MongoDB · Mongoose · REST APIs · Tailwind CSS · Python',
      step1: 'Understand the user need & data flow',
      step2: 'Structure clean schema & REST contracts',
      step3: 'Build reactive UI and secure endpoints',
    },
    {
      number: '02',
      category: 'CORE CS & ALGORITHMS',
      headline: 'Think with algorithmic rigor.',
      description: 'Backed by academic excellence at RKGIT (CGPA 8.38/10), I approach software through fundamental computer science principles: optimal time/space complexity, object-oriented design patterns, database indexing, and network protocols.',
      strengths: 'Data Structures · Algorithms · Object-Oriented Programming (OOP) · DBMS & SQL · Operating Systems · Computer Networks · C Language',
      step1: 'Analyze problem constraints & edge cases',
      step2: 'Select optimal data structure & pattern',
      step3: 'Optimize time and memory efficiency',
    },
    {
      number: '03',
      category: 'AI & PAYMENT INTEGRATIONS',
      headline: 'Connect modern capabilities.',
      description: 'Bridging specialized technologies into cohesive software products. Practical experience implementing real-time webcam facial analysis via MediaPipe AI vision, Razorpay payment checkouts with cryptographic verification, and cloud hosting.',
      strengths: 'MediaPipe AI Vision · Razorpay Gateway · JWT Auth & bcrypt · Postman · Git & GitHub · Vercel · Render',
      step1: 'Integrate third-party API or AI model',
      step2: 'Implement cryptographic security & guards',
      step3: 'Deploy with continuous delivery to cloud',
    },
  ];

  const current = disciplines[expandedIndex];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>03 / HOW I THINK & WORK</span>
        <span>DEPTH MEETS PERSPECTIVE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Thinking Path */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-normal text-stone-light leading-[1.15] tracking-tight">
              How I work.<br />
              <em className="text-white font-serif italic text-4xl sm:text-6xl block mt-1">
                From idea to impact.
              </em>
            </h2>
            <p className="text-sm text-stone-muted leading-relaxed">
              Choose a discipline. Follow the engineering thought process.
            </p>
          </div>

          {/* Thinking Steps Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#090909] p-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase block border-b border-white/[0.08] pb-3">
              {current.category}
            </span>

            <ol className="space-y-4">
              <li className="flex items-start gap-4 text-xs sm:text-sm text-stone-light">
                <span className="font-mono text-stone-subtle text-xs">01</span>
                <span>{current.step1}</span>
              </li>
              <li className="flex items-start gap-4 text-xs sm:text-sm text-stone-light">
                <span className="font-mono text-stone-subtle text-xs">02</span>
                <span>{current.step2}</span>
              </li>
              <li className="flex items-start gap-4 text-xs sm:text-sm text-stone-light">
                <span className="font-mono text-stone-subtle text-xs">03</span>
                <span>{current.step3}</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Column: Accordion of Disciplines */}
        <div className="lg:col-span-7 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {disciplines.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <article key={item.number} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => setExpandedIndex(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 group"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase block">
                      {item.number} / {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-stone-light group-hover:text-white transition-colors">
                      {item.headline}
                    </h3>
                  </div>

                  <span className="p-2 rounded-full border border-white/10 text-stone-muted group-hover:text-white group-hover:border-white/25 transition-colors">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="pt-6 space-y-4 text-sm text-stone-muted leading-relaxed">
                    <p>{item.description}</p>
                    <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-xs font-mono text-stone-light">
                      <span className="text-stone-subtle uppercase block mb-1">Demonstrated Capabilities:</span>
                      {item.strengths}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
