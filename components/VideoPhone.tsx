"use client";

import { useRef, useState } from "react";
import Icon from "./Icon";

/** The store video (vertical) playing inside an iPhone-style frame. Muted autoplay loop; tap for sound. */
export default function VideoPhone({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play();
  };

  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <span className="phone-island" />
        <video
          ref={ref}
          src="/video/store.mp4"
          poster="/video/store-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video of TechWave Cellular's iPhone stock and store in Deira"
        />
        <button className="phone-sound" onClick={toggle} aria-label={muted ? "Turn sound on" : "Mute"}>
          <Icon name={muted ? "mute" : "sound"} size={18} />
          <span>{muted ? "Tap for sound" : "Sound on"}</span>
        </button>
        <span className="phone-live"><i /> Real stock · Deira</span>
      </div>
    </div>
  );
}
