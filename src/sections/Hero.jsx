import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[904px] overflow-hidden">

      {/* Background */}
      <Image
        src="/images/hero/hero.webp"
        alt="Monkey Coffee"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-20">
        <div className="flex max-w-[1536px] flex-col items-center gap-12 text-center">

          <div className="space-y-6">

            <h1 className="font-heading text-[68px] leading-[1.1] text-white">
              Find Your Coffee, Bar &
              <br />
              Dining Escape
            </h1>

            <p className="font-body text-[24px] text-white/90">
              A cozy space to sip, work, and connect.
            </p>

          </div>

          <button className="rounded-full bg-white px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-wide text-[#2A1A0B] transition hover:bg-[#F3F3F3]">
            CHECK OUR MENUS
          </button>

        </div>
      </div>

    </section>
  );
}