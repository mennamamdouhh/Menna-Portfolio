export default function Crosshair({
  color = "#9098AE",
  size = 48
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke={color}
        strokeWidth="1"
      />

      <circle
        cx="24"
        cy="24"
        r="4"
        stroke={color}
        strokeWidth="1"
      />

      <circle
        cx="24"
        cy="24"
        r="1.5"
        fill={color}
      />

      <line
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        stroke={color}
        strokeWidth="1"
        opacity="0.7"
      />

      <line
        x1="0"
        y1="24"
        x2="48"
        y2="24"
        stroke={color}
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}