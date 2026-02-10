import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | BLK Tech Connect",
  description:
    "Get answers to common questions about BLK Tech Connect, membership, events, the career board, and more.",
};

const faqs = [
  {
    question: "What is BLK Tech Connect?",
    answer:
      "BLK Tech Connect is the premier inclusive ecosystem for Black technologists, founders, and innovators. We provide community, career resources, events, and education to build pathways to economic mobility in the tech industry.",
  },
  {
    question: "How do I join the community?",
    answer:
      "Joining is free! Visit our Get Involved page to sign up for our Discord community, where you'll get access to channels, mentorship opportunities, job listings, and event invitations.",
  },
  {
    question: "Are events free?",
    answer:
      "Yes — all BLK Tech Connect events are free for community members. We host monthly meetups, panels, workshops, and networking events both in-person (Baltimore area) and online.",
  },
  {
    question: "How does the Career Board work?",
    answer:
      "Our Career Board features curated job listings from companies committed to diversity in tech. Listings are updated weekly and include roles across engineering, design, product, and leadership.",
  },
  {
    question: "When is the Academy launching?",
    answer:
      "BLK Tech Connect Academy is scheduled to launch in fall 2026. It will be a tech course marketplace featuring courses in coding, design, and leadership taught by industry professionals. Sign up for notifications on the Academy page.",
  },
  {
    question: "How can I become a partner or sponsor?",
    answer:
      "We partner with companies, organizations, and individuals who share our mission. Visit our Contact page or email partners@blktechconnect.com to discuss partnership opportunities.",
  },
  {
    question: "I'm not in Baltimore. Can I still participate?",
    answer:
      "Absolutely! While we're based in Baltimore, our Discord community and virtual events are open to Black technologists everywhere. We host online panels, workshops, and networking events regularly.",
  },
  {
    question: "How can I volunteer or contribute?",
    answer:
      "We're always looking for mentors, speakers, event organizers, and contributors. Head to the Get Involved page or reach out to us through our Contact page.",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Help Center
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              Find answers to common questions about BLK Tech Connect, events,
              the career board, and more.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/[0.06] bg-[#111111] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616] md:p-6"
                >
                  <h3 className="text-[15px] font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still need help */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/40">
              Can&apos;t find what you&apos;re looking for? Reach out to our
              team directly.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
