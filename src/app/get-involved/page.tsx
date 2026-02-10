"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { capture } from "@/lib/posthog";

const ways = [
  {
    title: "Join the Community",
    description:
      "Become a member of our Discord community. Access exclusive channels, job listings, mentorship circles, and connect with 750+ Black technologists.",
    cta: "Join Discord",
    href: "https://discord.gg/blktechconnect",
    external: true,
    color: "emerald",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Attend Events",
    description:
      "Join our monthly meetups, panels, workshops, and networking events. All events are free for community members — both in-person and virtual.",
    cta: "View Events",
    href: "/events",
    external: false,
    color: "amber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: "Become a Mentor",
    description:
      "Share your expertise and help the next generation of Black technologists grow. Mentors meet with mentees monthly for career guidance and support.",
    cta: "Apply to Mentor",
    href: "/contact",
    external: false,
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ),
  },
  {
    title: "Speak at an Event",
    description:
      "Have expertise to share? We're always looking for speakers for panels, lightning talks, and workshops. Topics range from technical to career development.",
    cta: "Submit a Talk",
    href: "/contact",
    external: false,
    color: "emerald",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6V2H8" />
        <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
        <path d="M2 12h2" />
        <path d="M9 11v2" />
        <path d="M15 11v2" />
        <path d="M20 12h2" />
      </svg>
    ),
  },
  {
    title: "Partner With Us",
    description:
      "Companies and organizations can partner with BLK Tech Connect to access diverse talent, sponsor events, and support our mission.",
    cta: "Become a Partner",
    href: "/partners",
    external: false,
    color: "amber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    description:
      "Help us run events, moderate the community, create content, and more. Volunteers are the backbone of everything we do.",
    cta: "Get Started",
    href: "/contact",
    external: false,
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-400",
};

export default function GetInvolvedPage() {
  const handleCtaClick = (title: string, cta: string, external: boolean) => {
    capture("get_involved_cta_clicked", {
      card_title: title,
      cta_text: cta,
      is_external: external,
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

    capture("get_involved_newsletter_subscribed", {
      source: "get_involved_page",
      email_provided: !!email,
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Get Involved
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              There&apos;s a place
              <br />
              <span className="text-gradient-muted">for you here.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              Whether you&apos;re a technologist, founder, mentor, or
              partner — join us in building the most impactful ecosystem for
              Black professionals in tech.
            </p>
          </div>
        </section>

        {/* Ways to get involved */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ways.map((way) => (
              <div
                key={way.title}
                className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616]"
              >
                <div
                  className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${colorMap[way.color]}`}
                >
                  {way.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-white">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">
                  {way.description}
                </p>
                <div className="mt-5">
                  {way.external ? (
                    <a
                      href={way.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCtaClick(way.title, way.cta, way.external)}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {way.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={way.href}
                      onClick={() => handleCtaClick(way.title, way.cta, way.external)}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {way.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Stay connected.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/40">
              Get the latest on events, job drops, and community news delivered
              to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-8 flex gap-2">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-lg bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-colors duration-200 hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
