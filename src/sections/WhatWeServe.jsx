import {
  Coffee,
  Wifi,
  Heart,
  Clock3,
} from "lucide-react";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

const services = [
  {
    icon: Coffee,
    title: "Crafted Beverages",
    description:
      "Every drink is meticulously crafted by our expert baristas using premium beans",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    description:
      "Fast WiFi, comfortable seating, and the perfect ambiance for productivity",
  },
  {
    icon: Heart,
    title: "All-Day Dining",
    description:
      "From breakfast pastries to evening treats, we've got you covered",
  },
  {
    icon: Clock3,
    title: "Open Late",
    description:
      "Extended hours to accommodate your schedule and lifestyle",
  },
];

export default function WhatWeServe() {
  return (
    <Section
      background="bg-[#F8F7F3]"
      className="flex flex-col gap-12"
    >
      <SectionHeader
        center
        label="WHAT WE SERVE"
        title="More Than Coffee"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <FeatureCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}