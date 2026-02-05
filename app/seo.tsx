import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Outcomex AI | Outcome-Driven AI Systems",
    template: "%s | Outcomex AI",
  },

  description:
    "Outcomex AI helps NGOs, healthcare providers, education networks, and agribusinesses reduce costs, improve compliance, and make data-driven decisions using outcome-driven AI systems.",

  keywords: [
    "Outcomex AI",
    "AI consulting",
    "Outcome-driven AI",
    "AI for NGOs",
    "AI for healthcare",
    "AI for education",
    "AI for agribusiness",
    "Operational intelligence",
    "Predictive analytics",
    "Workflow automation",
  ],

  authors: [{ name: "Outcomex AI" }],
  creator: "Outcomex AI",

  openGraph: {
    title: "Outcomex AI | Outcome-Driven AI Systems",
    description:
      "A performance-intelligence partner helping institutions turn data into clarity, foresight, and measurable outcomes.",
    url: "https://outcomexai.com/",
    siteName: "Outcomex AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outcomex AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outcomex AI | Outcome-Driven AI Systems",
    description:
      "Outcome-driven AI systems for NGOs, healthcare, education, and agribusiness.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://outcomexai.com/"),
};
