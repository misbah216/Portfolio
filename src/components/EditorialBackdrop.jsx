import React, { useEffect, useState } from 'react';

export default function EditorialBackdrop() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle Fine Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#f4f4f0 1px, transparent 1px), linear-gradient(90deg, #f4f4f0 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gentle Atmospheric Glow that subtly follows the mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-all duration-700 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: 'radial-gradient(circle, rgba(244,244,240,0.12) 0%, rgba(120,120,120,0.05) 50%, transparent 70%)',
        }}
      />

      {/* Static corner vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/60 to-[#050505]" />
    </div>
  );
}
