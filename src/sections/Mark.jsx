import { Star } from "lucide-react";

import Container from "@/components/Container";
import Section from "@/components/Section";

export default function Mark() {
  return (
    <Section background="bg-white">
      <Container className="flex flex-col items-center gap-12 text-center">
        {/* Stars */}
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="#E76F1D"
              stroke="#E76F1D"
            />
          ))}
        </div>

        {/* Content */}
        <div className="space-y-5">
          <h2 className="font-heading text-4xl leading-tight text-[#2A1A0B] md:text-5xl lg:text-[58px]">
            Loved by Coffee Lovers & Creatives
          </h2>

          <p className="font-body text-[15px] text-[#8B8B8B] md:text-[16px]">
            Top-rated hangout spot in the city
          </p>
        </div>
      </Container>
    </Section>
  );
}