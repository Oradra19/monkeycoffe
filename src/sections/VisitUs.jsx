import Image from "next/image";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import GalleryImage from "@/components/GalleryImage";
import InfoItem from "@/components/InfoItem";

export default function VisitUs() {
  return (
    <Section background="bg-white">
      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">

        {/* Left */}
        <div className="max-w-[420px]">

          <SectionHeader
            label="VISIT US"
            title="Come say hello!"
            titleClassName="leading-[1.15]"
          />

          <div className="mt-20 space-y-14">

            <InfoItem title="ADDRESS">
              <>
                Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip,
                <br />
                Kec. Pontianak Kota, Kota Pontianak,
                Kalimantan Barat
                <br />
                78117
              </>
            </InfoItem>

            <InfoItem title="HOURS">
              Everyday: 06:00 AM - 02:00 AM
            </InfoItem>

            <InfoItem title="CONTACT">
              +62 812 3456 7890
            </InfoItem>

          </div>

        </div>

        {/* Right */}
        <div className="w-full max-w-[540px]">
          <GalleryImage
            src="/images/visitus/visitus.webp"
            alt="Visit Us"
            height="h-[420px] md:h-[550px] lg:h-[715px]"
            className="rounded-[24px]"
          />
        </div>

      </div>
    </Section>
  );
}