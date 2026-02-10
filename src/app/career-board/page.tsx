import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Board | BLK Tech Connect",
  description:
    "Find your next role. Curated job listings from companies committed to diversity in tech.",
};

const jobs = [
  {
    title: "Senior Product Designer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    tags: ["Design", "UX", "Remote"],
  },
  {
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "Baltimore, MD",
    type: "Full-time",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Remote",
    type: "Full-time",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    title: "Data Analyst",
    company: "DataDriven",
    location: "Washington, D.C.",
    type: "Full-time",
    tags: ["Python", "SQL", "Analytics"],
  },
  {
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Remote",
    type: "Contract",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Product Manager",
    company: "InnovateCo",
    location: "Baltimore, MD",
    type: "Full-time",
    tags: ["Strategy", "Agile", "B2B"],
  },
];

export default function CareerBoardPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Career Board
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find your next
              <br />
              <span className="text-gradient-muted">opportunity.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              Curated job listings from top tech companies committed to
              diversity. Updated weekly.
            </p>
          </div>
        </section>

        {/* Job listings */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-3">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="group rounded-2xl border border-white/[0.06] bg-[#111111] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616] md:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                        <h3 className="text-[15px] font-semibold text-white">
                          {job.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 pl-[18px] text-sm text-white/40">
                        {job.company} · {job.location} · {job.type}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-[18px] sm:pl-0">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-white/30">
                More listings added weekly. Join our Discord to get notified.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
