import Link from "next/link";

import Container from "@/components/Container";

const menuLinks = [
  {
    title: "Our Signatures",
    href: "#",
  },
  {
    title: "Non Coffee",
    href: "#",
  },
  {
    title: "Food",
    href: "#",
  },
  {
    title: "Pastry",
    href: "#",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "Facebook",
    href: "#",
  },
  {
    title: "Whatsapp",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A1A0B] py-[120px] text-white">
      <Container className="flex flex-col gap-12">

        {/* Top */}
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-start">

          {/* Brand */}
          <div className="max-w-[460px]">
            <h2 className="font-heading text-[56px] leading-none font-medium">
              Monkey Coffee
            </h2>

            <p className="font-body mt-4 text-[16px] leading-7 text-white/70">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-24 lg:gap-36">

            {/* Menu */}
            <div>
              <h3 className="font-body mb-6 text-[13px] font-semibold uppercase tracking-[0.15em]">
                MENU
              </h3>

              <ul className="space-y-3">
                {menuLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="font-body text-[15px] text-white/75 transition hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-body mb-6 text-[13px] font-semibold uppercase tracking-[0.15em]">
                CONNECT
              </h3>

              <ul className="space-y-3">
                {socialLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="font-body text-[15px] text-white/75 transition hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom */}
        <p className="font-body text-[14px] text-white/60">
          © 2026 Monkey Coffee. All rights reserved.
        </p>

      </Container>
    </footer>
  );
}