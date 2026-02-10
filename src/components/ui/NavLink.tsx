import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm text-white/60 hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
