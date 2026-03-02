function LogoIcon({ size = 80 }) {
  return (
    <svg
      viewBox="0 0 420 95"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2d7a71" />
          <stop offset="100%" stopColor="#4a82c7" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="75"
        fontFamily="Nunito, Arial, sans-serif"
        fontSize="80"
        fontWeight="900"
        fill="url(#moodGradient)"
      >
        MoodPad
      </text>
    </svg>
  );
}

export default LogoIcon;
