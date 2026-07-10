export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1ECE7]">
        <Icon
          size={30}
          strokeWidth={1.8}
          className="text-[#8A5A3C]"
        />
      </div>

      {/* Title */}
      <h3 className="font-heading mt-8 text-[20px] leading-tight text-[#2A1A0B]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body mt-5 max-w-[260px] text-[16px] leading-8 text-[#8B8B8B]">
        {description}
      </p>
    </div>
  );
}