"use client";

import Link from "next/link";
import { Logo } from "./ui/Logo";
import { capture } from "@/lib/posthog";

const platformLinks = [
  { href: "/about", label: "About Us" },
];

const resourceLinks = [
  { href: "https://blk-tech-connect.beehiiv.com/", label: "Newsletter", external: true },
  { href: "/help", label: "Help Center" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/blk-tech-connect/", label: "LinkedIn", external: true },
  { href: "https://www.instagram.com/blktechconnect/", label: "Instagram", external: true },
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
  const allLinks = [
    ...platformLinks.map((l) => ({ ...l, external: false })),
    ...resourceLinks.map((l) => ({ ...l, external: false })),
    ...socialLinks,
  ];

  return (
    <footer className="bg-[#0a0a0a]">
      {/* Nav links */}
      <div className="border-y border-white/[0.04] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          <Logo variant="footer" />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {allLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white/70"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/35 transition-colors duration-200 hover:text-white/70"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-[13px] text-white/25">
            © 2026 BLK Tech Connect. All rights reserved.
          </span>
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
