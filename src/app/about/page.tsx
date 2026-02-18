import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Stat } from "@/components/ui/Stat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BLK Tech Connect",
  description:
    "BLK Tech Connect is the premier inclusive ecosystem for Black technologists, founders, and innovators in Baltimore and beyond.",
};

const stats = [
  { value: "750+", label: "Community Members" },
  { value: "50+", label: "Events Hosted" },
  { value: "30+", label: "Partner Companies" },
  { value: "100+", label: "Jobs Filled" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              About Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Bridging the
              <br />
              <span className="text-gradient-muted">tech diversity gap.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base md:leading-relaxed">
              BLK Tech Connect is the premier inclusive ecosystem for Black
              technologists, founders, and innovators. Based in Baltimore, we
              build pathways to economic mobility through enterprise connections,
              community support, and education.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Our Mission
            </h2>
            <div className="space-y-6 text-[15px] leading-relaxed text-white/50 md:text-base md:leading-relaxed">
              <p>
                We believe that talent is equally distributed, but opportunity is
                not. BLK Tech Connect exists to change that equation — creating
                direct pathways between Black professionals and the tech
                industry&apos;s most impactful opportunities.
              </p>
              <p>
                Through our community platform, career board, events, and
                upcoming academy, we provide the resources, connections, and
                support that Black technologists need to thrive. Whether
                you&apos;re a first-time coder, a seasoned engineer, or a
                founder building your next venture — you belong here.
              </p>
              <p>
                We&apos;re not just building a network. We&apos;re building an
                ecosystem that drives real economic mobility for our community.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
