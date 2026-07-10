import Image from "next/image";

export default function MenuCard({
  category,
  title,
  description,
  image,
}) {
  return (
    <article>
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Category */}
      <p className="font-body mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E58B57]">
        {category}
      </p>

      {/* Title */}
      <h3 className="font-heading mt-2 text-[28px] leading-none text-[#2A1A0B]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body mt-3 text-[15px] leading-7 text-[#8B8B8B]">
        {description}
      </p>
    </article>
  );
}