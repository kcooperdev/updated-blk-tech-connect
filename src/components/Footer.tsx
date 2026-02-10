import Link from "next/link";
import { Logo } from "./ui/Logo";

const platformLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/help", label: "Help Center" },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
  { href: "https://instagram.com", label: "Instagram", external: true },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[13px] font-semibold text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      {/* Newsletter + Nav links */}
      <div className="border-y border-white/[0.04] px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Newsletter */}
            <div className="max-w-sm">
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
                Stay in the loop.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/40">
                Get the latest on events, job drops, and tech news curated for
                the culture.
              </p>
              <form className="mt-6 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-colors duration-200 hover:bg-white/90 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12">
              <LinkColumn title="Platform" links={platformLinks} />
              <LinkColumn title="Resources" links={resourceLinks} />
              <LinkColumn title="Social" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo variant="footer" />
            <span className="text-[13px] text-white/25">
              © 2026 BLK Tech Connect. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[13px] text-white/25 transition-colors duration-200 hover:text-white/50"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-white/25 transition-colors duration-200 hover:text-white/50"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
