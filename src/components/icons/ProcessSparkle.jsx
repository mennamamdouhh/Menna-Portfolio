export default function ProcessSparkle({ color = "#F2F2F2", size = 20 }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 20 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10"
        y1="0"
        x2="10"
        y2="40"
        stroke={color}
        strokeWidth="1"
        opacity="0.7"
      />

      <path
        d="M10 11L12 17L18 20L12 22L10 29L8 22L2 20L8 17L10 11Z"
        fill={color}
      />
    </svg>
  );
}