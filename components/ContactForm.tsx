"use client";

import { useState } from "react";

interface ContactFormProps {
  formspreeEndpoint: string;
}

export default function ContactForm({ formspreeEndpoint }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

  if (submitted) {
    return (
      <p className="text-center text-green-600 font-medium">
        Thank you! We received your request and will contact you soon.
      </p>
    );
  }

  return (
    <form
      action={formspreeEndpoint}
      method="POST"
      className="grid gap-4"
      onSubmit={() => setSubmitted(true)}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className={inputClass}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className={inputClass}
      />

      <input
        type="text"
        name="organization"
        placeholder="Organization"
        className={inputClass}
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        required
        className={inputClass}
      />

      <button
        type="submit"
        className="bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition font-medium"
      >
        Submit
      </button>
    </form>
  );
}
