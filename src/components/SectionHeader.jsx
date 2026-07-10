export default function SectionHeader({
  label,
  title,
  description,
  center = false,
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={center ? "mx-auto text-center" : ""}>
      {label && (
        <p className="font-body text-[14px] font-semibold uppercase tracking-[0.2em] text-[#E58B57]">
          {label}
        </p>
      )}

      <h2
        className={`font-heading mt-4 text-4xl leading-tight text-[#2A1A0B] md:text-5xl lg:text-[58px] ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`font-body mt-6 max-w-[680px] text-[16px] leading-8 text-[#8B8B8B] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}