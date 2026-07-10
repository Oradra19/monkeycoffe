import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUs() {
  return (
    <Section
      background="bg-[#F8F7F3]"
      className="flex flex-col items-center"
    >
      <SectionHeader
        center
        label="ABOUT US"
        title={
          <>
            A place to connect, relax,
            <br />
            and create moments.
          </>
        }
        description="At Monkey Coffee Coffee, we believe every cup is an invitation to slow down and savor life's simple pleasures. Whether you're meeting a friend, working on your next big idea, or simply enjoying a quiet moment alone, our doors are open to those who appreciate the art of a well-crafted brew and the warmth of genuine community."
      />
    </Section>
  );
}