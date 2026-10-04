"use client";

import { useEffect, useState } from "react";

/** Cycles through words with a slide-up animation. */
export default function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span className="rotator" aria-live="polite">
      {/* invisible longest word reserves the width so the line never jumps */}
      <span className="rotator-sizer" aria-hidden="true">{words.reduce((a, b) => (b.length > a.length ? b : a))}</span>
      <span key={i} className="rotator-word">{words[i]}</span>
    </span>
  );
}
