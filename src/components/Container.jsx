export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        mx-auto
        max-w-[1536px]
        px-6
        md:px-10
        lg:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}