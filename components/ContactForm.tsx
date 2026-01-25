"use client";

import { useState } from "react";

interface ContactFormProps {
  formspreeEndpoint: string;
}

export default function ContactForm({ formspreeEndpoint }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p className="text-center text-green-600 font-medium">
      Thank you! We received your request and will contact you soon.
    </p>
  ) : (
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
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
      >
        Submit
      </button>
    </form>
  );
}
