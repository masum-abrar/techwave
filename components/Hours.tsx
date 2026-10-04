"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

const fmt = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const ap = h >= 12 ? "pm" : "am";
  const hh = h % 12 || 12;
  return m ? `${hh}:${String(m).padStart(2, "0")}${ap}` : `${hh}${ap}`;
};

function dubaiNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dubai",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { day: get("weekday"), minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
}

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export function useOpenStatus() {
  const [state, setState] = useState<{ open: boolean; label: string; today: string } | null>(null);
  useEffect(() => {
    const tick = () => {
      const { day, minutes } = dubaiNow();
      const today = hours.find((h) => h.day === day);
      const sessions = today?.sessions ?? [];
      const current = sessions.find(([a, b]) => minutes >= toMin(a) && minutes < toMin(b));
      if (current) {
        setState({ open: true, label: `Open now · until ${fmt(current[1])}`, today: day });
        return;
      }
      const next = sessions.find(([a]) => minutes < toMin(a));
      setState({
        open: false,
        label: next ? `Closed · opens at ${fmt(next[0])}` : "Closed · opens Mon–Sat at 12pm",
        today: day,
      });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return state;
}

export function OpenBadge({ light = false }: { light?: boolean }) {
  const s = useOpenStatus();
  if (!s) return <span className={`status ${light ? "status-light" : ""}`}>&nbsp;</span>;
  return (
    <span className={`status ${s.open ? "is-open" : "is-closed"} ${light ? "status-light" : ""}`}>
      <i /> {s.label}
    </span>
  );
}

export default function Hours() {
  const s = useOpenStatus();
  return (
    <div className="hours-card">
      <div className="hours-head">
        <h3>Business Hours</h3>
        <OpenBadge />
      </div>
      <ul className="hours-list">
        {hours.map((h) => (
          <li key={h.day} className={s?.today === h.day ? "today" : ""}>
            <span>{h.day}</span>
            <span>
              {h.sessions.length
                ? h.sessions.map(([a, b]) => `${fmt(a)} – ${fmt(b)}`).join("  ·  ")
                : "Not listed"}
            </span>
          </li>
        ))}
      </ul>
      <p className="hours-note">All times are Dubai time (GST). You can contact us anytime during the day with your query.</p>
    </div>
  );
}
