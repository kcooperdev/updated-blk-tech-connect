import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In The News | BLK Tech Connect",
  description:
    "See where BLK Tech Connect has been featured — press coverage, media appearances, and community highlights.",
};

const pressFeatures = [
  {
    outlet: "Technical.ly",
    title:
      "RealLIST Innovators 2025: Meet 15 technologists driving Maryland's innovations",
    date: "Aug 2025",
    excerpt:
      "Khalif Cooper, Founder and CEO of BLK Tech Connect, was named one of 15 RealLIST Innovators driving Maryland's tech ecosystem — recognized for building community and powering innovation well beyond the tech he builds.",
    href: "https://technical.ly/entrepreneurship/reallist-innovators-2025-maryland/",
    logo: "TL",
  },
  {
    outlet: "WMAR-2 News",
    title:
      "BLK Tech Connect is empowering Black professionals in the Baltimore tech scene",
    date: "2025",
    excerpt:
      "WMAR-2 News covered BLK Tech Connect's sold-out event at FLOCK in Baltimore, featuring a networking happy hour and a panel of Black tech entrepreneurs sharing the key things that took them far in their careers.",
    href: "https://www.wmar2news.com/local/blk-tech-connect-is-empowering-black-professionals-in-the-baltimore-tech-scene",
    logo: "W2",
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Press & Media
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              In the news.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              See where BLK Tech Connect has been featured. From local TV to
              industry publications — our mission is making waves.
            </p>
          </div>
        </section>

        {/* Press features */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {pressFeatures.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/[0.06] bg-[#111111] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616] md:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {/* Outlet badge */}
                    <div className="flex shrink-0 items-center gap-3 sm:w-28">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-[11px] font-bold text-white/50">
                        {item.logo}
                      </div>
                      <div className="sm:hidden">
                        <p className="text-[13px] font-semibold text-white/60">
                          {item.outlet}
                        </p>
                        <p className="text-[11px] text-white/25">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-1 hidden items-center gap-3 sm:flex">
                        <p className="text-[13px] font-semibold text-white/60">
                          {item.outlet}
                        </p>
                        <span className="text-white/10">&middot;</span>
                        <p className="text-[12px] text-white/25">
                          {item.date}
                        </p>
                      </div>
                      <h3 className="text-[15px] font-semibold leading-snug text-white group-hover:text-white/90 md:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/35">
                        {item.excerpt}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/30 transition-colors group-hover:text-white/60">
                        Read article
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Media inquiries CTA */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/[0.06] bg-[#111111] p-8 text-center md:p-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Press & media inquiries
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/40">
                  Writing a story about BLK Tech Connect or want to feature us?
                  We&apos;d love to hear from you. Reach out for interviews,
                  media kits, or press materials.
                </p>
              </div>
              <a
                href="mailto:press@blktechconnect.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                Contact Press Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
