interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center mb-12">
        {title}
      </h2>

      {/* Content */}
      <div className="px-6">
        {children}
      </div>
    </section>
  );
}
