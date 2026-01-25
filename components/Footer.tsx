export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-6 mt-8">
      <div className="mx-auto max-w-7xl text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Outcomex AI. All rights reserved.
      </div>
    </footer>
  );
}
