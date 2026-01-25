export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Outcomex AI",
  url: "https://outcomex.ai",
  description:
    "Outcomex AI delivers outcome-driven AI systems for NGOs, healthcare, education, and agribusiness.",
  sameAs: [],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outcome-Driven AI Systems",
  provider: {
    "@type": "Organization",
    name: "Outcomex AI",
  },
  areaServed: "Africa",
  serviceType: [
    "Operational Intelligence Dashboards",
    "Automated Reporting & Compliance",
    "Predictive Analytics",
    "Workflow Automation",
  ],
};
