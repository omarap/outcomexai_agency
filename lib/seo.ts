// lib/seo.ts
import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  title: {
    default: "Outcomex AI",
    template: "%s | Outcomex AI",
  },
  description:
    "Outcome-driven AI systems for NGOs, healthcare, education, and agribusiness.",
  metadataBase: new URL("https://outcomexai.com"),
  openGraph: {
    title: "Outcomex AI",
    description:
      "AI systems that deliver measurable operational outcomes for institutions.",
    url: "https://outcomexai.com",
    siteName: "Outcomex AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outcomex AI – Outcome-driven AI systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outcomex AI",
    description:
      "Outcome-driven AI systems that deliver measurable results.",
    images: ["/og-image.png"],
  },
};
