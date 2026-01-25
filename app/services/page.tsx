// app/services/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Services | Outcomex AI",
  description:
    "Outcome-driven AI solutions for NGOs, healthcare, education, and agribusiness.",
};

export default function ServicesPage() {
  return (
    <>
      <Section title="NGOs">
        <FeatureGrid
          items={[
            "Impact dashboards",
            "Automated M&E reporting",
            "Funding risk alerts",
          ]}
        />
      </Section>

      <Section title="Healthcare">
        <FeatureGrid
          items={[
            "Patient flow optimization",
            "Inventory forecasting",
            "Revenue intelligence",
          ]}
        />
      </Section>

      <Section title="Schools">
        <FeatureGrid
          items={[
            "Student performance forecasting",
            "Dropout risk detection",
            "Donor & board reporting",
          ]}
        />
      </Section>

      <Section title="Agribusiness">
        <FeatureGrid
          items={[
            "Yield & price forecasting",
            "Loss prediction",
            "Market intelligence dashboards",
          ]}
        />
      </Section>
    </>
  );
}
