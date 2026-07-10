export default function PrimaryButton({
  children,
  className = "",
}) {
  return (
    <button
      className={`
        rounded-full
        bg-[#8B4513]
        px-8
        py-3
        font-body
        text-sm
        font-medium
        text-white
        transition
        hover:bg-[#6F3710]
        ${className}
      `}
    >
      {children}
    </button>
  );
}