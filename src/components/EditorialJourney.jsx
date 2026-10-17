import React from 'react';

export default function EditorialJourney() {
  const milestones = [
    {
      year: '2023',
      headline: 'The Academic Foundation.',
      description: 'Began B.Tech in Computer Science & Engineering at RKGIT Ghaziabad. Built an outstanding cumulative CGPA of 8.38/10 with an emphasis on Data Structures, Algorithms, OOPs, DBMS, Operating Systems, and Networks.',
    },
    {
      year: '2025',
      headline: 'Cohort 2.0 at Sheryians.',
      description: 'Enrolled in Sheryians Coding School’s flagship Web Development Cohort. Immersed in modern full-stack development (MERN), interactive animations, authentication mechanics, REST design, and Generative AI.',
    },
    {
      year: '2026',
      headline: 'Full-Stack Development Intern.',
      description: 'Interned at Codveda Technologies, building production-ready applications, implementing security features, and engineering scalable, maintainable full-stack systems alongside senior engineers.',
    },
    {
      year: 'TODAY',
      headline: 'Connecting the whole picture.',
      description: 'Building production-deployed applications like Moodify and PrabandhPro, refining problem-solving abilities, and seeking Software Engineer Intern roles to deliver real-world engineering impact.',
    },
  ];

  return (
    <section id="academics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* SECTION LABEL */}
      <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/[0.08] text-[11px] font-mono text-stone-subtle tracking-wider uppercase">
        <span>04 / STILL BECOMING</span>
        <span>A JOURNEY IN MOTION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column Heading */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-normal text-stone-light leading-[1.15] tracking-tight">
            Started with curiosity.<br />
            <em className="text-white font-serif italic text-4xl sm:text-6xl block mt-1">
              Learned by building.
            </em>
          </h2>
          <p className="text-stone-muted text-sm sm:text-base leading-relaxed">
            The progression from first lines of C and Python to architecting real-world applications and studying at Sheryians.
          </p>
        </div>

        {/* Right Column Timeline */}
        <div className="lg:col-span-7 space-y-12 border-l border-white/[0.08] pl-6 sm:pl-10 relative">
          {milestones.map((item, idx) => (
            <article key={idx} className="relative space-y-2 group">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-2.5 h-2.5 rounded-full bg-stone-light border border-black group-hover:scale-125 transition-transform" />

              <span className="text-xs font-mono tracking-widest text-stone-subtle uppercase block">
                {item.year}
              </span>

              <h3 className="text-xl sm:text-2xl font-normal text-stone-light">
                {item.headline}
              </h3>

              <p className="text-sm sm:text-base text-stone-muted leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
