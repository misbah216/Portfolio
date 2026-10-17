import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function KineticSignal3D({ mode = 'build', motionEnabled = true }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const modeRef = useRef(mode);
  const motionRef = useRef(motionEnabled);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    motionRef.current = motionEnabled;
  }, [motionEnabled]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // ROOT GROUP
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. BUILD MODE: Precision Interlocking Geometric Rings
    const ringGroup = new THREE.Group();
    const ringMaterial = new THREE.LineBasicMaterial({
      color: 0xf4f4f0,
      transparent: true,
      opacity: 0.7,
    });
    const accentMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < 4; i++) {
      const radius = 1.3 + i * 0.42;
      const circleGeo = new THREE.BufferGeometry();
      const points = [];
      const segments = 64;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      circleGeo.setFromPoints(points);
      const ringLine = new THREE.Line(circleGeo, i % 2 === 0 ? ringMaterial : accentMaterial);
      ringLine.rotation.x = (i * Math.PI) / 4;
      ringLine.rotation.y = (i * Math.PI) / 6;
      ringGroup.add(ringLine);
    }
    rootGroup.add(ringGroup);

    // Central core octahedron wireframe
    const coreGeo = new THREE.OctahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xf4f4f0,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. MOUSE TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // RESIZE
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth gyro tilt
      targetX += (mouseX * 0.7 - targetX) * 0.08;
      targetY += (mouseY * 0.7 - targetY) * 0.08;

      rootGroup.rotation.y = targetX;
      rootGroup.rotation.x = -targetY;

      if (motionRef.current) {
        // Continuous subtle rotation
        if (modeRef.current === 'build') {
          ringGroup.rotation.z += 0.006;
          coreMesh.rotation.y += 0.009;
          coreMesh.rotation.x += 0.005;
        } else if (modeRef.current === 'architect') {
          ringGroup.rotation.x += 0.01;
          ringGroup.rotation.y += 0.008;
          coreMesh.rotation.z += 0.012;
        } else {
          // Connect / Scale mode
          const scale = 1 + Math.sin(time * 2) * 0.08;
          coreMesh.scale.set(scale, scale, scale);
          ringGroup.rotation.z -= 0.008;
        }
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
      ringMaterial.dispose();
      accentMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[260px] sm:min-h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
}
