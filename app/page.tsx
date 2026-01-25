"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureGrid from "@/components/FeatureGrid";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import {
  DashboardIcon,
  WorkflowIcon,
  AnalyticsIcon,
  ReportingIcon,
} from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <Hero bgImage="/images/hero-bg.png">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white mb-6">
            Outcomex AI Agency
          </h1>

          <p className="text-lg text-white/90 mb-8">
            We help NGOs, clinics, school networks, and agribusinesses reduce costs,
            meet compliance, and make better decisions using outcome-driven AI systems.
          </p>

          <a
            href="#cta"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book a Strategy Call
          </a>
        </div>
      </Hero>

      {/* ================= WHAT WE DO ================= */}
      <Section id="what-we-do" title="What We Do" className="bg-gray-50">
        <Reveal>
          <FeatureGrid
            items={[
              { title: "Automate reporting & compliance", icon: ReportingIcon },
              { title: "Predict risks and performance issues", icon: AnalyticsIcon },
              { title: "Optimize operations and workflows", icon: WorkflowIcon },
              { title: "Provide executive-level dashboards", icon: DashboardIcon },
            ]}
          />
        </Reveal>
      </Section>

      {/* ================= WHO WE SERVE ================= */}
      <Section id="who-we-serve" title="Who We Serve" className="bg-gray-50">
        <Reveal>
          <FeatureGrid
            items={[
              { title: "NGOs & Donor-Funded Programs", icon: DashboardIcon },
              { title: "Clinics & Healthcare Networks", icon: WorkflowIcon },
              { title: "School Networks & Education Programs", icon: AnalyticsIcon },
              { title: "Agribusinesses & Cooperatives", icon: ReportingIcon },
            ]}
          />
        </Reveal>
      </Section>

      {/* ================= CORE SOLUTIONS ================= */}
      <Section id="core-solutions" title="Core Solutions" className="bg-gray-50">
        <Reveal>
          <FeatureGrid
            items={[
              { title: "Operational Intelligence Dashboards", icon: DashboardIcon },
              { title: "Automated Reporting & Compliance", icon: ReportingIcon },
              { title: "Predictive Analytics & Forecasting", icon: AnalyticsIcon },
              { title: "Workflow Automation & Optimization", icon: WorkflowIcon },
            ]}
          />
        </Reveal>
      </Section>

      {/* ================= WHO WE ARE ================= */}
      <Section id="about" title="Who We Are" className="bg-white">
        <Reveal>
          <div className="max-w-3xl mx-auto px-6 py-10 space-y-6 text-gray-800">
            <p>
              Outcomex AI Agency is a performance-intelligence partner helping institutions
              make data-driven decisions without complexity.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-black mb-1">
                Our Mission
              </h3>
              <p>
                To turn data into clarity, foresight, and measurable outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-1">
                Our Vision
              </h3>
              <p>
                To become Africa’s most trusted AI outcomes partner for institutions.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
}
