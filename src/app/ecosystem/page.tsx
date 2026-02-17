import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem | BLK Tech Connect",
  description:
    "Explore the BLK Tech Connect ecosystem — community and events all in one platform.",
};

const pillars = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community",
    description:
      "750+ members in Baltimore and beyond. Discord channels, mentorship circles, peer-to-peer learning, and exclusive resources for Black technologists.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    title: "Events",
    description:
      "Monthly online tech events, panels, happy hours, and workshops. Connect with industry leaders and grow your network.",
  },
];

const values = [
  {
    title: "Access",
    description:
      "We remove barriers to entry in tech by providing free and low-cost resources, mentorship, and community support.",
  },
  {
    title: "Representation",
    description:
      "We amplify Black voices in technology and create spaces where our community can thrive and lead.",
  },
  {
    title: "Economic Mobility",
    description:
      "We build direct pathways from community to career, connecting talent with opportunity at every stage.",
  },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Our Ecosystem
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Everything you need,
              <br />
              <span className="text-gradient-muted">one platform.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              BLK Tech Connect is building the most comprehensive ecosystem for
              Black technologists, founders, and creators in Baltimore and
              beyond.
            </p>
          </div>
        </section>

        {/* Pillars grid */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:gap-5">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="flex flex-col">
                <CardIcon>{pillar.icon}</CardIcon>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-2xl font-bold tracking-tight text-white md:text-3xl">
              What drives us.
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="mb-2 text-[17px] font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/40">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
