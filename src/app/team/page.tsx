import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | BLK Tech Connect",
  description:
    "Meet the people behind BLK Tech Connect — a team dedicated to building the most impactful ecosystem for Black technologists.",
};

const leadership = [
  {
    name: "Kevin Cooper",
    role: "Founder & CEO",
    bio: "Software engineer and community builder passionate about creating equitable pathways into tech for Black professionals.",
    initials: "KC",
  },
];

const advisors = [
  {
    name: "Advisory Board Member",
    role: "Technology Advisor",
    bio: "Bringing decades of experience in enterprise technology leadership and diversity initiatives.",
    initials: "AB",
  },
  {
    name: "Advisory Board Member",
    role: "Community Advisor",
    bio: "Expertise in community building, nonprofit strategy, and grassroots tech education.",
    initials: "AB",
  },
  {
    name: "Advisory Board Member",
    role: "Partnerships Advisor",
    bio: "Background in corporate partnerships, fundraising, and strategic growth for tech organizations.",
    initials: "AB",
  },
];

function TeamCard({
  name,
  role,
  bio,
  initials,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616]">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06] text-[17px] font-bold text-white/60">
        {initials}
      </div>
      <h3 className="text-[17px] font-semibold text-white">{name}</h3>
      <p className="mt-1 text-[13px] font-medium text-white/30">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/40">{bio}</p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Our Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              The people behind
              <br />
              <span className="text-gradient-muted">the mission.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              A dedicated team building the most impactful ecosystem for Black
              technologists, founders, and creators.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-xl font-bold text-white md:text-2xl">
              Leadership
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {leadership.map((person) => (
                <TeamCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-xl font-bold text-white md:text-2xl">
              Advisory Board
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {advisors.map((person, i) => (
                <TeamCard key={`${person.role}-${i}`} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Join our team.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/40">
              We&apos;re always looking for passionate people to help grow the
              BLK Tech Connect ecosystem. Volunteer, mentor, or collaborate with
              us.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
