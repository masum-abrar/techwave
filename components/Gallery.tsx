"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery } from "@/lib/site";
import Icon from "./Icon";

export default function Gallery() {
  const [broken, setBroken] = useState<Set<string>>(new Set());
  const items = useMemo(() => gallery.filter((g) => !broken.has(g.src)), [broken]);
  const [i, setI] = useState<number | null>(null);
  const n = items.length;

  // Balance the grid (4 columns, tall photos take 2 cells) so there's no ragged last row.
  const tallCount = items.filter((g) => g.tall).length;
  const normals = items.filter((g) => !g.tall).map((g) => g.src);
  const extra = (4 - ((tallCount * 2 + normals.length) % 4)) % 4;
  const wide = new Set(normals.length >= extra ? normals.slice(0, extra) : []);
  const gridStyle = normals.length === 0 ? { gridTemplateColumns: `repeat(${Math.min(n, 5)}, 1fr)` } : undefined;
  const move = useCallback((d: number) => setI((c) => (c === null ? c : (c + d + n) % n)), [n]);

  const markBroken = (src: string) => setBroken((b) => new Set(b).add(src));

  // Images that failed before React hydrated never fire onError — catch them here.
  useEffect(() => {
    document.querySelectorAll<HTMLImageElement>(".gallery img").forEach((img) => {
      if (img.complete && img.naturalWidth === 0) markBroken(img.getAttribute("src") || "");
    });
  }, []);

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [i, move]);

  return (
    <>
      <div className={`gallery ${gridStyle ? "gallery-flat" : ""}`} style={gridStyle}>
        {items.map((g, idx) => (
          <button key={g.src} className={`g-item ${g.tall ? "g-tall" : ""} ${wide.has(g.src) ? "g-wide" : ""}`} onClick={() => setI(idx)} aria-label={`Open photo: ${g.alt}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => markBroken(g.src)}
              onLoad={(e) => { if (e.currentTarget.naturalWidth < 2) markBroken(g.src); }}
            />
            <span className="g-zoom">View</span>
          </button>
        ))}
      </div>
      {i !== null && items[i] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setI(null)}>
          <button className="lb-close" aria-label="Close" onClick={() => setI(null)}>
            <Icon name="close" />
          </button>
          <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); move(-1); }}>
            <Icon name="back" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[i].full} alt={items[i].alt} referrerPolicy="no-referrer" onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); move(1); }}>
            <Icon name="chevron" />
          </button>
          <span className="lb-count">{i + 1} / {n}</span>
        </div>
      )}
    </>
  );
}
