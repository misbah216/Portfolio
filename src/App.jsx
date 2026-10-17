import React, { useState } from 'react';
import EditorialBackdrop from './components/EditorialBackdrop';
import EditorialNavigation from './components/EditorialNavigation';
import EditorialHero from './components/EditorialHero';
import EditorialProofStrip from './components/EditorialProofStrip';
import EditorialAbout from './components/EditorialAbout';
import EditorialWork from './components/EditorialWork';
import EditorialExpertise from './components/EditorialExpertise';
import EditorialJourney from './components/EditorialJourney';
import EditorialResume from './components/EditorialResume';
import EditorialContact from './components/EditorialContact';

export default function App() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  const toggleMotion = () => {
    setMotionEnabled((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f4f4f0] antialiased selection:bg-[#f4f4f0] selection:text-black">
      {/* 1. Subtle Engineering Grid & Ambient Light */}
      <EditorialBackdrop />

      {/* 2. Glass Navigation with Scroll Progress & Motion Toggle */}
      <EditorialNavigation
        motionEnabled={motionEnabled}
        onToggleMotion={toggleMotion}
      />

      {/* 3. Main Narrative Chapters */}
      <main id="main" className="relative z-10">
        {/* Chapter 00: Hero Presence */}
        <EditorialHero motionEnabled={motionEnabled} />

        {/* Proof Strip */}
        <EditorialProofStrip />

        {/* Chapter 01: The Person Behind the Work + 3D Kinetic Sculpture */}
        <EditorialAbout motionEnabled={motionEnabled} />

        {/* Chapter 02: Selected Work in Browser Frames */}
        <EditorialWork />

        {/* Chapter 03: How I Think & Work */}
        <EditorialExpertise />

        {/* Chapter 04: The Journey & Milestones */}
        <EditorialJourney />

        {/* Chapter 05: Resume & Verified Credentials */}
        <EditorialResume />

        {/* Chapter 06: Contact & Next Chapter */}
        <EditorialContact />
      </main>
    </div>
  );
}
