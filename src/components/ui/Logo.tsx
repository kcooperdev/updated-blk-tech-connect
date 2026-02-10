import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "footer";
}

const logoSizes = {
  full: { width: 140, height: 128 },
  icon: { width: 88, height: 80 },
  footer: { width: 77, height: 70 },
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  const { width, height } = logoSizes[variant];

  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="BLK Tech Connect homepage"
    >
      <Image
        src="/logo.png"
        alt="BLK Tech Connect"
        width={width}
        height={height}
        className="object-contain"
        priority
        unoptimized
      />
    </Link>
  );
}
