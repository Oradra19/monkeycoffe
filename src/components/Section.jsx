import Container from "./Container";

export default function Section({
  children,
  className = "",
  background = "bg-white",
}) {
  return (
    <section
      className={`
        ${background}
        py-20
        md:py-24
        lg:py-[120px]
      `}
    >
      <Container className={className}>
        {children}
      </Container>
    </section>
  );
}