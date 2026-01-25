// app/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-4 text-neutral-600">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          aria-label="Try again"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
