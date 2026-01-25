// app/services/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import {
  ChartBarIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  ShoppingCartIcon,
  ServerIcon,
  ClipboardIcon, // <- corrected
  CogIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Services | Outcomex AI",
  description:
    "Outcome-driven AI solutions for NGOs, healthcare, education, and agribusiness.",
};

export default function ServicesPage() {
  return (
    <>
      <Section id="ngos" title="NGOs">
        <FeatureGrid
          items={[
            { title: "Impact dashboards", icon: ChartBarIcon },
            { title: "Automated M&E reporting", icon: ClipboardIcon }, // <- corrected
            { title: "Funding risk alerts", icon: CurrencyDollarIcon },
          ]}
        />
      </Section>

      <Section id="healthcare" title="Healthcare">
        <FeatureGrid
          items={[
            { title: "Patient flow optimization", icon: UserGroupIcon },
            { title: "Inventory forecasting", icon: ServerIcon },
            { title: "Revenue intelligence", icon: CurrencyDollarIcon },
          ]}
        />
      </Section>

      <Section id="schools" title="Schools">
        <FeatureGrid
          items={[
            { title: "Student performance forecasting", icon: AcademicCapIcon },
            { title: "Dropout risk detection", icon: PresentationChartLineIcon },
            { title: "Donor & board reporting", icon: DocumentChartBarIcon },
          ]}
        />
      </Section>

      <Section id="agribusiness" title="Agribusiness">
        <FeatureGrid
          items={[
            { title: "Yield & price forecasting", icon: ChartBarIcon },
            { title: "Loss prediction", icon: ShoppingCartIcon },
            { title: "Market intelligence dashboards", icon: CogIcon },
          ]}
        />
      </Section>
    </>
  );
}
