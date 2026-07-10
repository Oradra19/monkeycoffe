import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label="Monkey Coffee">
          <Image
            src="/logo.svg"
            alt="Monkey Coffee"
            width={72}
            height={72}
            priority
          />
        </Link>

        {/* CTA */}
        <PrimaryButton>
          Visit Us
        </PrimaryButton>

      </Container>
    </header>
  );
}