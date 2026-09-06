export default function SectionSymbol({
  color = "#003CFF",
  size = 28
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1L18 6L14 11L10 6L14 1Z"
        fill={color}
      />

      <path
        d="M7 7L12 12L9 18L2 22L1 16L4 10L7 7Z"
        fill={color}
      />

      <path
        d="M21 7L24 10L27 16L26 22L19 18L16 12L21 7Z"
        fill={color}
      />

      <path
        d="M12 12L14 10L16 12L14 16L12 12Z"
        fill={color}
      />
    </svg>
  );
}