import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const MomenTenangAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Soft stream / tea whisking white/pink noise simulation
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filter for warm gentle flow
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 2.5;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(450, ctx.currentTime);

      noiseSource.connect(lowpass);
      lowpass.connect(masterGain);
      noiseSource.start();

      // 2. Periodic gentle singing bowl / zen chime
      const playGentleChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const chimeCtx = audioCtxRef.current;
        const osc = chimeCtx.createOscillator();
        const chimeGain = chimeCtx.createGain();

        // Pentatonic peaceful frequency ~528Hz or 432Hz
        const freqs = [432, 540, 648];
        const freq = freqs[Math.floor(Math.random() * freqs.length)];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, chimeCtx.currentTime);

        chimeGain.gain.setValueAtTime(0.001, chimeCtx.currentTime);
        chimeGain.gain.linearRampToValueAtTime(0.035, chimeCtx.currentTime + 0.2);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, chimeCtx.currentTime + 3.5);

        osc.connect(chimeGain);
        chimeGain.connect(masterGain);

        osc.start(chimeCtx.currentTime);
        osc.stop(chimeCtx.currentTime + 3.6);
      };

      playGentleChime();
      timerRef.current = window.setInterval(playGentleChime, 8000);
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAmbientSound = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        if (gainNodeRef.current) {
          gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
          setTimeout(() => {
            audioCtxRef.current?.close();
            audioCtxRef.current = null;
          }, 500);
        } else {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
      } catch {
        audioCtxRef.current = null;
      }
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Heningkan suara momen tenang' : 'Putar suasana hening / momen tenang'}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
        isPlaying
          ? 'bg-[#DCFBDF] text-[#146720] border-[#37A53D] shadow-sm'
          : 'bg-white/80 text-[#696C6F] border-[#DDE0E3] hover:text-[#16191B] hover:bg-white'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#146720] animate-pulse" />
          <span className="whitespace-nowrap">Momen Tenang Aktif</span>
        </>
      ) : (
        <>
          <Sparkles className="w-3.5 h-3.5 text-[#37A53D]" />
          <span className="whitespace-nowrap">Suasana Tenang</span>
        </>
      )}
    </button>
  );
};
