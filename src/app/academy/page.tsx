"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Button from "@/components/ui/Button";
import { capture } from "@/lib/posthog";

const plannedCourses = [
  {
    title: "Web Development Fundamentals",
    description: "HTML, CSS, JavaScript — from zero to building real projects.",
    category: "Coding",
  },
  {
    title: "UI/UX Design for Beginners",
    description:
      "Learn design thinking, Figma, and how to build beautiful user experiences.",
    category: "Design",
  },
  {
    title: "Python for Data Science",
    description:
      "Data analysis, visualization, and machine learning fundamentals.",
    category: "Coding",
  },
  {
    title: "Building Your Personal Brand",
    description:
      "Stand out in tech. LinkedIn, portfolio, public speaking, and networking strategies.",
    category: "Leadership",
  },
  {
    title: "React & Next.js Masterclass",
    description: "Build modern web apps with React, Next.js, and Tailwind CSS.",
    category: "Coding",
  },
  {
    title: "Tech Leadership & Management",
    description:
      "From IC to manager. Communication, strategy, and team building for new leaders.",
    category: "Leadership",
  },
];

const categoryColors: Record<string, string> = {
  Coding: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  Design: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  Leadership: "border-amber-400/20 bg-amber-400/10 text-amber-400",
};

export default function AcademyPage() {
  const handleNotifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

    capture("academy_notify_submitted", {
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
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Coming Soon
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              BLK Tech Connect
              <br />
              <span className="text-gradient-muted">Academy.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base md:leading-relaxed">
              A tech course marketplace for creators. Curated courses in coding,
              design, and leadership — taught by industry professionals who look
              like you.
            </p>
            <div className="mt-10">
              <Button
                variant="primary"
                as="a"
                href="#notify"
                className="px-7 py-3"
              >
                Get Notified at Launch
              </Button>
            </div>
          </div>
        </section>

        {/* Planned courses */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
              Planned Courses
            </h2>
            <p className="mb-8 text-sm text-white/35">
              Here&apos;s a preview of what we&apos;re building. Course lineup
              may change before launch.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {plannedCourses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-2xl border border-white/[0.06] bg-[#111111] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616]"
                >
                  <span
                    className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${categoryColors[course.category]}`}
                  >
                    {course.category}
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notify form */}
        <section
          id="notify"
          className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24"
        >
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Be the first to know.
            </h2>
            <p className="mt-2 text-[14px] text-white/40">
              Drop your email and we&apos;ll notify you when the Academy
              launches this fall.
            </p>
            <form onSubmit={handleNotifySubmit} className="mt-8 flex gap-2">
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
                Notify Me
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
