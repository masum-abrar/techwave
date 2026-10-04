"use client";

import { useEffect, useState } from "react";

/**
 * Opening animation: the TechWave sign "switches on" letter by letter like backlit neon,
 * the halo blooms, CELLULAR settles in, then the screen opens.
 * Timing is pure CSS (starts at first paint, no waiting for JavaScript); this component only
 * removes the finished overlay from the page. Skipped if the device asks for reduced motion.
 */
export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-seen")) { setDone(true); return; }
    const t = setTimeout(() => setDone(true), 5000);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  const letters = (word: string, start: number) =>
    word.split("").map((c, i) => (
      <span key={i} style={{ animationDelay: `${start + i * 0.12}s` }}>{c}</span>
    ));

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-panel intro-top" />
      <div className="intro-panel intro-bottom" />
      <div className="intro-center">
        <span className="intro-halo" />
        <svg className="intro-icon" viewBox="0 0 64 64" width="88" height="88">
          <defs>
            <radialGradient id="intro-ig" cx=".5" cy=".35" r=".7">
              <stop offset="0" stopColor="#14203d" />
              <stop offset="1" stopColor="#05070c" />
            </radialGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#intro-ig)" />
          <rect className="ii-frame" x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="#1f5bff" strokeOpacity=".8" pathLength={1} />
          {/* glyphs span x 11–62, y 20–46 → centred in the 64×64 tile */}
          <g transform="translate(32 32) scale(.84) translate(-36.5 -33)">
            <path className="ii-t" d="M11 20h20v6h-7v20h-6V26h-7z" fill="#2f6bff" />
            <path className="ii-w" d="M31 20h6l3 17 4-17h5l4 17 3-17h6l-6 26h-6l-4-16-4 16h-6z" fill="#fff" />
          </g>
        </svg>
        <div className="intro-word">
          <b>{letters("TECH", 1.0)}</b>
          <span className="intro-wave">{letters("WAVE", 1.5)}</span>
        </div>
        <div className="intro-sub">CELLULAR</div>
        <span className="intro-line" />
      </div>
    </div>
  );
}
