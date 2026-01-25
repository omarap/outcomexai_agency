// app/about/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About | Outcomex AI",
  description:
    "Learn about Outcomex AI’s mission, vision, and approach to outcome-driven AI systems.",
};

export default function AboutPage() {
  return (
    <>
      <Section id="who-we-are" title="Who We Are">
        <p className="max-w-3xl text-neutral-700">
          Outcomex AI is a performance-intelligence partner helping institutions
          make data-driven decisions without complexity.
        </p>
      </Section>

      <Section id="our-mission" title="Our Mission">
        <p className="max-w-3xl text-neutral-700">
          To turn data into clarity, foresight, and measurable outcomes.
        </p>
      </Section>

      <Section id="our-vision" title="Our Vision">
        <p className="max-w-3xl text-neutral-700">
          To become Africa’s most trusted AI outcomes partner for institutions.
        </p>
      </Section>
    </>
  );
}
