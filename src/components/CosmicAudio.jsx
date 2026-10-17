import { useEffect, useRef } from 'react';

export default function useCosmicAudio(isPlaying) {
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        if (!audioCtxRef.current) {
          const ctx = new AudioContext();
          audioCtxRef.current = ctx;

          // Master Gain
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
          masterGain.connect(ctx.destination);
          masterGainRef.current = masterGain;

          // Low-pass Filter for space ambiance
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(220, ctx.currentTime);
          filter.Q.setValueAtTime(3, ctx.currentTime);
          filter.connect(masterGain);
          filterRef.current = filter;

          // Oscillator 1: Deep root note (A1 ~ 55Hz)
          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(55, ctx.currentTime);
          osc1.connect(filter);
          osc1.start();
          osc1Ref.current = osc1;

          // Oscillator 2: Fifth harmonic (E2 ~ 82.4Hz) with slight detune
          const osc2 = ctx.createOscillator();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(82.4, ctx.currentTime);
          osc2.detune.setValueAtTime(6, ctx.currentTime);

          const osc2Gain = ctx.createGain();
          osc2Gain.gain.setValueAtTime(0.35, ctx.currentTime);
          osc2.connect(osc2Gain);
          osc2Gain.connect(filter);
          osc2.start();
          osc2Ref.current = osc2;
        }

        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        // Fade in
        if (masterGainRef.current) {
          masterGainRef.current.gain.linearRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 2);
        }
      } catch (err) {
        console.warn('Cosmic Audio context error:', err);
      }
    } else {
      // Fade out
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
      }
    }
  }, [isPlaying]);

  return null;
}
