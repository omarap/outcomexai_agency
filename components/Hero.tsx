// components/Hero.tsx
import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
  bgImage?: string;
}

export default function Hero({ children, bgImage }: HeroProps) {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-blue-900"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
