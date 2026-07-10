import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import GalleryImage from "@/components/GalleryImage";

const images = [
  "/images/ambience/ambience_1.webp",
  "/images/ambience/ambience_2.webp",
  "/images/ambience/ambience_3.webp",
  "/images/ambience/ambience_4.webp",
  "/images/ambience/ambience_5.webp",
  "/images/ambience/ambience_6.webp",
];

export default function Ambience() {
  return (
    <Section background="bg-[#F8F7F3]">
      <div className="flex flex-col gap-12">
        <SectionHeader
          label="AMBIENCE"
          title="Where Moments Happen"
          description="A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration."
        />

        <div>
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="col-span-8">
              <GalleryImage
                src={images[0]}
                alt="Ambience 1"
                height="h-[720px]"
              />
            </div>

            <div className="col-span-4 flex flex-col gap-4">
              <GalleryImage
                src={images[1]}
                alt="Ambience 2"
                height="h-[352px]"
              />

              <GalleryImage
                src={images[2]}
                alt="Ambience 3"
                height="h-[352px]"
              />
            </div>

            <div className="col-span-12 mt-4 grid grid-cols-3 gap-4">
              <GalleryImage
                src={images[3]}
                alt="Ambience 4"
                height="h-[250px]"
              />

              <GalleryImage
                src={images[4]}
                alt="Ambience 5"
                height="h-[250px]"
              />

              <GalleryImage
                src={images[5]}
                alt="Ambience 6"
                height="h-[250px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
            {images.map((image, index) => (
              <GalleryImage
                key={index}
                src={image}
                alt={`Ambience ${index + 1}`}
                height="aspect-[4/5]"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}