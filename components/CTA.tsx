"use client";

import ContactForm from "./ContactForm";

export default function CTA() {
  // Your Formspree endpoint
  const formspreeEndpoint = "https://formspree.io/f/xpqponvz";

  return (
    <section id="cta" className="bg-blue-50 py-16">
      <div className="max-w-2xl mx-auto p-8 rounded-xl bg-white shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-black">
          Book a Free Assessment
        </h2>
        <p className="text-lg font-medium text-gray-700 text-center">
          Fill out the form below and our team will contact you for a free assessment.
        </p>
        <ContactForm formspreeEndpoint={formspreeEndpoint} />
      </div>
    </section>
  );
}
