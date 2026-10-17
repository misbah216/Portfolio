import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function CosmicGalaxy({ warpActive = false }) {
  const mountRef = useRef(null);
  const [isWarping, setIsWarping] = useState(warpActive);

  useEffect(() => {
    setIsWarping(warpActive);
  }, [warpActive]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#030712', 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 250;
    camera.position.y = 40;

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. SPIRAL GALAXY PARTICLES
    const parameters = {
      count: 6500,
      size: 1.4,
      radius: 380,
      branches: 4,
      spin: 1.2,
      randomness: 0.45,
      power: 3.5,
      insideColor: '#00F0FF',
      outsideColor: '#8B5CF6',
    };

    let geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const originalPositions = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Position
      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin * 0.01;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius * 0.4;
      const randomZ = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      // Color interpolation
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      // Add slight white starlight spark
      if (Math.random() > 0.88) {
        mixedColor.add(new THREE.Color('#ffffff'));
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture creation via programmatic canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(0,240,255,0.8)');
    grad.addColorStop(0.6, 'rgba(139,92,246,0.3)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const starTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: starTexture,
      transparent: true,
    });

    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);

    // 2. CENTRAL BLACK HOLE / EVENT HORIZON GLOW SPHERE
    const coreGeo = new THREE.SphereGeometry(18, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x01030a,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Glowing accretion ring
    const ringGeo = new THREE.RingGeometry(20, 36, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    scene.add(ringMesh);

    // Secondary glowing outer cosmic dust ring
    const outerRingGeo = new THREE.RingGeometry(38, 55, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const outerRingMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRingMesh.rotation.x = Math.PI / 2.1;
    scene.add(outerRingMesh);

    // Mouse Tracking with smooth interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      targetX += (mouseX * 40 - targetX) * 0.05;
      targetY += (mouseY * 25 - targetY) * 0.05;

      camera.position.x = targetX;
      camera.position.y = 40 + targetY;
      camera.lookAt(0, 0, 0);

      // Galaxy rotation
      const spinSpeed = warpActive ? 0.015 : 0.0018;
      galaxy.rotation.y = elapsedTime * spinSpeed;

      // Event horizon rings pulse and rotate
      ringMesh.rotation.z = -elapsedTime * 0.4;
      outerRingMesh.rotation.z = elapsedTime * 0.25;

      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Warp speed stretch effect
      if (warpActive) {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 80, 0.08);
      } else {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 250, 0.04);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, [warpActive]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.92 }}
    />
  );
}
