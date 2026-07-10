import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import MenuCard from "@/components/MenuCard";

const menu = [
  {
    category: "COFFEE",
    title: "Classic Espresso",
    description:
      "Rich, bold, and perfectly balanced single-origin espresso",
    image: "/images/signature/signature_1.webp",
  },
  {
    category: "COFFEE",
    title: "Signature Latte",
    description:
      "Smooth espresso with velvety steamed milk and latte art",
    image: "/images/signature/signature_2.webp",
  },
  {
    category: "COFFEE",
    title: "Artisan Cappuccino",
    description:
      "Perfect harmony of espresso, steamed milk, and foam",
    image: "/images/signature/signature_3.webp",
  },
  {
    category: "SIGNATURE",
    title: "Cold Brew Delight",
    description:
      "Smooth, naturally sweet cold-brewed for 24 hours",
    image: "/images/signature/signature_4.webp",
  },
  {
    category: "SIGNATURE",
    title: "Vanilla Bean Latte",
    description:
      "House-made vanilla bean syrup with premium espresso",
    image: "/images/signature/signature_5.webp",
  },
  {
    category: "NON-COFFEE",
    title: "Mocha Indulgence",
    description:
      "Rich chocolate with steamed milk and whipped cream",
    image: "/images/signature/signature_1.webp",
  },
];

export default function Signature() {
  return (
    <Section background="bg-white">
      <div className="flex flex-col gap-12">

        <SectionHeader
          center
          label="OUR CRAFT"
          title="Highlighted Signature"
          description="From classic espresso to signature blends, each cup tells a story"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {menu.map((item) => (
            <MenuCard
              key={item.title}
              category={item.category}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <PrimaryButton className="px-8 py-3">
            Explore Full Menu
          </PrimaryButton>
        </div>

      </div>
    </Section>
  );
}