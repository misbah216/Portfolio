import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { personalData } from '../data/portfolioData';

// Technical Topic Icons Floating in Air
const techIconsLeft = [
  {
    name: 'HTML5',
    color: '#E34F26',
    posClass: 'left-1 sm:-left-8 top-[14%]',
    animClass: 'animate-float-1',
    depth: 28,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#E34F26" />
        <path d="M12 4.5v15.8l4.9-1.2 1.4-14.6H12z" fill="#EF652A" />
        <path d="M7.4 7.2h9.2l-.2 2.2H9.8l.2 2.4h6.2l-.6 6-3.6 1-3.6-1-.2-2.8h2.2l.1 1.4 1.5.4 1.5-.4.2-2.4H7.6l-.2-6.8z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    posClass: 'left-3 sm:-left-16 top-[38%]',
    animClass: 'animate-float-3',
    depth: 42,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6 17.5c1 .6 2.2.9 3.2.3.9-.6 1.1-1.8 1.1-3.2v-5.4H8.4v5.4c0 .8-.1 1.4-.6 1.7-.5.3-1.1.2-1.8-.1v1.3zm7.8-.3c1.2.7 2.6.9 3.8.3 1.1-.6 1.4-1.8 1.4-3 0-2.3-2.1-2.6-3.3-3.2-.8-.4-1.3-.7-1.3-1.4 0-.6.4-1.1 1.2-1.1.7 0 1.5.3 2 .7l.7-1.4c-.8-.5-1.7-.8-2.7-.8-1.7 0-2.8 1.1-2.8 2.6 0 2.2 2.1 2.6 3.3 3.1.8.4 1.3.8 1.3 1.5 0 .8-.6 1.3-1.5 1.3-.9 0-1.8-.4-2.5-.9l-.9 1.4z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    posClass: 'left-1 sm:-left-10 top-[62%]',
    animClass: 'animate-float-2',
    depth: 32,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#38BDF8',
    posClass: 'left-4 sm:-left-18 top-[84%]',
    animClass: 'animate-float-4',
    depth: 45,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-5 .6-5 2.5v2h5v.6H4.8C3.2 7.1 2 8.7 2 11.2s1.4 4.1 3 4.1h1.5v-2c0-1.7 1.5-3.1 3.2-3.1h5V9.6c0-2-2.1-2.6-4.5-2.6h-.3V2.1h2z" fill="#38BDF8" />
        <path d="M12.1 22c3.1 0 5-.6 5-2.5v-2h-5v-.6h7.1c1.6 0 2.8-1.6 2.8-4.1s-1.4-4.1-3-4.1h-1.5v2c0 1.7-1.5 3.1-3.2 3.1h-5v.6c0 2 2.1 2.6 4.5 2.6h.3v4.9h-2z" fill="#FACC15" />
        <circle cx="8.5" cy="4.5" r=".7" fill="#000000" />
        <circle cx="15.5" cy="19.5" r=".7" fill="#000000" />
      </svg>
    ),
  },
];

const techIconsRight = [
  {
    name: 'CSS3',
    color: '#264DE4',
    posClass: 'right-1 sm:-right-8 top-[16%]',
    animClass: 'animate-float-2',
    depth: 30,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" fill="#264DE4" />
        <path d="M12 4.5v15.8l4.9-1.2 1.4-14.6H12z" fill="#2965F1" />
        <path d="M14.8 7.2H7.4l.2 2.2h6.8l-.3 2.4H7.8l.2 2.4h6l-.5 4.8-3.5 1-3.5-1-.2-2h-2l.4 3.8 5.3 1.5 5.3-1.5 1.1-10.9.1-1.2z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#68A063',
    posClass: 'right-3 sm:-right-16 top-[40%]',
    animClass: 'animate-float-4',
    depth: 44,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#0c0c0c" stroke="#68A063" strokeWidth="1.5" />
        <path d="M12 4.5l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5z" fill="#68A063" opacity="0.85" />
        <path d="M12 7l4 2.3v4.6L12 16.2l-4-2.3V9.3L12 7z" fill="#050505" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    posClass: 'right-1 sm:-right-10 top-[64%]',
    animClass: 'animate-float-1',
    depth: 26,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C10 5 6 10 6 14.5c0 4 2.8 7.2 6 7.5 3.2-.3 6-3.5 6-7.5C18 10 14 5 12 2z" fill="#47A248" />
        <path d="M12 2v20c.3 0 .7-.1 1-.2 2.7-.9 5-3.8 5-7.3 0-4.2-3.6-8.8-6-12.5z" fill="#4CAF50" />
        <path d="M12 14v8" stroke="#1B5E20" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    posClass: 'right-4 sm:-right-18 top-[85%]',
    animClass: 'animate-float-3',
    depth: 38,
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M21.6 10.7l-8.3-8.3c-.6-.6-1.5-.6-2.1 0L9.3 4.3l2.8 2.8c.6-.2 1.4 0 1.8.5.5.5.6 1.3.4 1.9l2.7 2.7c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.6-.6-.7-1.5-.4-2.2l-2.5-2.5v4.9c.2.2.4.4.5.7.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7.2-.2.4-.4.7-.5v-4.9c-.3-.1-.5-.3-.7-.5-.6-.6-.7-1.5-.4-2.2L7.9 5.7 2.4 11.2c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l8.8-8.8c.6-.6.6-1.5 0-2.1z" fill="#F05032" />
      </svg>
    ),
  },
];

export default function Centerpiece3DPortrait({ motionEnabled = true }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Canvas effect behind portrait
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const width = canvas.clientWidth || 450;
    const height = canvas.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Delicate 3D geometric halo rings behind head
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0xf4f4f0,
      transparent: true,
      opacity: 0.22,
    });

    const accentMaterial = new THREE.LineBasicMaterial({
      color: 0xa1a1aa,
      transparent: true,
      opacity: 0.12,
    });

    for (let i = 0; i < 3; i++) {
      const radius = 1.35 + i * 0.45;
      const circleGeo = new THREE.BufferGeometry();
      const points = [];
      const segments = 80;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      circleGeo.setFromPoints(points);
      const ring = new THREE.Line(circleGeo, i === 0 ? ringMaterial : accentMaterial);
      ring.rotation.x = 0.8 + i * 0.35;
      ring.rotation.y = i * 0.4;
      ringGroup.add(ring);
    }

    // Subtle starlight micro-particles orbiting behind
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 1.6 + Math.random() * 1.4;
      const angle = Math.random() * Math.PI * 2;
      particlePositions[i] = Math.cos(angle) * r;
      particlePositions[i + 1] = (Math.random() - 0.5) * 2.8;
      particlePositions[i + 2] = Math.sin(angle) * r * 0.6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf4f4f0,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    ringGroup.add(particles);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      if (motionEnabled) {
        ringGroup.rotation.y = time * 0.12;
        ringGroup.rotation.x = Math.sin(time * 0.2) * 0.15;
      }
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      ringMaterial.dispose();
      accentMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [motionEnabled]);

  const handleMouseMove = (e) => {
    if (!motionEnabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl sm:max-w-3xl mx-auto flex items-center justify-center my-4 py-2"
    >
      {/* 1. Behind: Three.js 3D Kinetic Orbital Depth Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Interactive Ambient Radial Light that tracks cursor */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: `calc(50% + ${mousePos.x * 60}px - 160px)`,
          top: `calc(50% + ${mousePos.y * 50}px - 160px)`,
          background: 'radial-gradient(circle, rgba(244,244,240,0.14) 0%, rgba(161,161,170,0.05) 50%, transparent 70%)',
        }}
      />

      {/* 3. Left Side: Floating Technical Icons in the Air */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 pointer-events-none z-20">
        {techIconsLeft.map((item) => (
          <div
            key={item.name}
            className={`absolute ${item.posClass} pointer-events-auto`}
            style={{
              transform: motionEnabled
                ? `translate3d(${mousePos.x * -(item.depth * 0.4)}px, ${mousePos.y * -(item.depth * 0.35)}px, ${item.depth}px)`
                : 'none',
              transition: 'transform 0.22s ease-out',
            }}
          >
            <div className={`${item.animClass} group relative`}>
              {/* Floating Glass Icon Badge */}
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0c0c0c]/85 border border-white/10 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
                title={item.name}
              >
                {item.svg}
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded bg-black/90 border border-white/10 text-[10px] font-mono text-stone-light whitespace-nowrap shadow-lg">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Centerpiece Portrait with 3D Tilt & Parallax Depth */}
      <div
        className="relative w-64 sm:w-80 md:w-92 aspect-[3/4] z-10 flex items-end justify-center"
        style={{
          transform: motionEnabled
            ? `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg) scale3d(1.02, 1.02, 1.02)`
            : 'none',
          transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Seamless Cutout Portrait (Zero Box Borders) */}
        <img
          src="/formal-signal.jpg"
          alt={personalData.name}
          className="w-full h-full object-contain object-bottom filter contrast-105 brightness-105 pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
        />

        {/* Bottom smooth dark vignette fade into #050505 */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#050505]/40 to-transparent pointer-events-none" />
      </div>

      {/* 5. Right Side: Floating Technical Icons in the Air */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 pointer-events-none z-20">
        {techIconsRight.map((item) => (
          <div
            key={item.name}
            className={`absolute ${item.posClass} pointer-events-auto`}
            style={{
              transform: motionEnabled
                ? `translate3d(${mousePos.x * -(item.depth * 0.4)}px, ${mousePos.y * -(item.depth * 0.35)}px, ${item.depth}px)`
                : 'none',
              transition: 'transform 0.22s ease-out',
            }}
          >
            <div className={`${item.animClass} group relative`}>
              {/* Floating Glass Icon Badge */}
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0c0c0c]/85 border border-white/10 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
                title={item.name}
              >
                {item.svg}
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2 py-0.5 rounded bg-black/90 border border-white/10 text-[10px] font-mono text-stone-light whitespace-nowrap shadow-lg">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
