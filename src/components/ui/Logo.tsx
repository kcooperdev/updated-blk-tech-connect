import Link from "next/link";

export interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "footer";
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
  const btBadge = (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[11px] font-bold tracking-tight text-white">
      BT
    </div>
  );

  if (variant === "icon") {
    return (
      <Link
        href="/"
        className={`flex items-center ${className}`}
        aria-label="BLK Tech Connect homepage"
      >
        {btBadge}
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href="/"
        className={`flex items-center ${className}`}
        aria-label="BLK Tech Connect homepage"
      >
        {btBadge}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="BLK Tech Connect homepage"
    >
      {btBadge}
      <span className="text-[15px] font-semibold tracking-tight text-white">
        BLK Tech Connect
      </span>
    </Link>
  );
}
