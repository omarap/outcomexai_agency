// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-neutral-600">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          aria-label="Return to homepage"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
