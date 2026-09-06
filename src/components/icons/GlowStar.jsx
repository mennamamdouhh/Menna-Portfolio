export default function GlowStar({
  color = "#003CFF",
  size = 40
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="starGlow">
          <stop
            offset="0%"
            stopColor="#FFFFFF"
            stopOpacity="1"
          />

          <stop
            offset="35%"
            stopColor={color}
            stopOpacity="1"
          />

          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <path
        d="
          M20 0
          L22 15
          L28 4
          L24 17
          L40 20
          L24 22
          L36 28
          L23 24
          L20 40
          L18 24
          L4 36
          L17 23
          L0 20
          L17 18
          L4 12
          L18 17
          Z
        "
        fill={`url(#starGlow)`}
      />

      <circle
        cx="20"
        cy="20"
        r="5"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}