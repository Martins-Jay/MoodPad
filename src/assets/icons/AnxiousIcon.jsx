export function AnxiousIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Smooth symmetrical heart */}
      <path d="M12 21C12 21 4 13.5 4 8.5 4 5 7 2.5 12 6 17 2.5 20 5 20 8.5 20 13.5 12 21 12 21Z" />
      {/* Zigzag line for anxious emotion */}
      <path d="M5 12h2l1.5-3 3 6 2-3h2.5" />
    </svg>
  );
}



export default AnxiousIcon;
