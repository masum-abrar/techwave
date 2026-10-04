type Props = { variant?: "dark" | "light"; size?: "sm" | "md" | "lg" };

/** TechWave Cellular wordmark, modelled on the shop's backlit sign: blue TECH, white WAVE, CELLULAR beneath. */
export default function Logo({ size = "md" }: Props) {
  return (
    <span className={`logo logo-${size}`} aria-label="TechWave Cellular">
      <span className="logo-wm" aria-hidden="true">
        <b>TECH</b>
        <span>WAVE</span>
      </span>
      <span className="logo-sub" aria-hidden="true">CELLULAR</span>
    </span>
  );
}

/** Compact monogram (used in small spaces like the chat avatar). */
export function LogoMark({ size = 42 }: { size?: number }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size, fontSize: size * 0.36 }} aria-hidden="true">
      <b>T</b>W
    </span>
  );
}
