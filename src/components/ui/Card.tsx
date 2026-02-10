import { type ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.06] bg-[#111111] p-6 md:p-8 transition-colors duration-300 hover:border-white/[0.1] hover:bg-[#161616] ${className}`}
    >
      {children}
    </div>
  );
}

export interface CardIconProps {
  children: ReactNode;
  className?: string;
}

export function CardIcon({ children, className = "" }: CardIconProps) {
  return (
    <div
      className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-white/80 ${className}`}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3
      className={`text-[17px] font-semibold text-white mb-2 leading-snug ${className}`}
    >
      {children}
    </h3>
  );
}

export interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-sm text-white/50 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`mt-auto pt-6 ${className}`}>{children}</div>;
}
