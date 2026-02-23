function EditIcon({ size = 45 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M15.232 5.232l3.536 3.536M16.768 4.768a2 2 0 112.828 2.828L7 20.172H3v-4l13.768-13.404z"
      />
    </svg>
  );
}

export default EditIcon;
