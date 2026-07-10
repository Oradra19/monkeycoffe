import Image from "next/image";

export default function GalleryImage({
  src,
  alt,
  height = "",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${height} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}