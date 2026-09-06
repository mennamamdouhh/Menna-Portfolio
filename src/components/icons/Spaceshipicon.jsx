import { useId } from "react";

/**
 * Reusable spaceship illustration.
 * Usage: <SpaceshipIcon size={64} /> or <SpaceshipIcon size={20} className="..." />
 */
export default function SpaceshipIcon({ size = 48, className = "", ...props }) {
  const uid = useId();
  const bodyGradientId = `ship-body-${uid}`;
  const glassGradientId = `ship-glass-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={bodyGradientId} x1="8" y1="10" x2="56" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4c83ff" />
          <stop offset="100%" stopColor="#003cff" />
        </linearGradient>
        <linearGradient id={glassGradientId} x1="20" y1="6" x2="44" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#4c83ff" />
        </linearGradient>
      </defs>

      {/* hull */}
      <path
        d="M32 6C24 6 18 16 16 28C14 30 12 34 12 38C12 40.2 13.8 42 16 42H48C50.2 42 52 40.2 52 38C52 34 50 30 48 28C46 16 40 6 32 6Z"
        fill={`url(#${bodyGradientId})`}
        stroke="#0a1224"
        strokeWidth="1.5"
      />

      {/* cockpit glass */}
      <ellipse cx="32" cy="24" rx="10" ry="12" fill={`url(#${glassGradientId})`} stroke="#0a1224" strokeWidth="1.5" />
      <ellipse cx="28.5" cy="19" rx="2.6" ry="4" fill="#ffffff" opacity="0.55" />

      {/* fins */}
      <path d="M16 34C10 34 5 39 4 46C9 44 14 41 17 38Z" fill="#145cff" stroke="#0a1224" strokeWidth="1.5" />
      <path d="M48 34C54 34 59 39 60 46C55 44 50 41 47 38Z" fill="#145cff" stroke="#0a1224" strokeWidth="1.5" />

      {/* base rim */}
      <rect x="14" y="42" width="36" height="6" rx="3" fill="#060b18" stroke="#0a1224" strokeWidth="1.5" />

      {/* thruster flame */}
      <path
        d="M26 48C26 48 24 54 28 58C29 55 30 54 32 54C34 54 35 55 36 58C40 54 38 48 38 48Z"
        fill="#4c83ff"
        opacity="0.85"
      />

      {/* portholes */}
      <circle cx="20" cy="34" r="1.6" fill="#0a1224" opacity="0.6" />
      <circle cx="44" cy="34" r="1.6" fill="#0a1224" opacity="0.6" />
    </svg>
  );
}