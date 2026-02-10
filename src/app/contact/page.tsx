"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { capture } from "@/lib/posthog";

const contactOptions = [
  {
    title: "General Inquiries",
    description: "Have a question about BLK Tech Connect? We'd love to hear from you.",
    email: "hello@blktechconnect.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: "Partnerships & Sponsorships",
    description: "Interested in partnering with us or sponsoring an event? Let's talk.",
    email: "partners@blktechconnect.com",
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
    title: "Media & Press",
    description: "For press inquiries, interviews, or media kit requests.",
    email: "press@blktechconnect.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement)?.value;

    capture("contact_form_submitted", {
      subject: subject || "not_selected",
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
          <div className="hero-glow" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s connect.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              Whether you want to partner, volunteer, or just say hello — we&apos;d
              love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact options */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-white/[0.06] bg-[#111111] p-6 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616]"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-white/80">
                  {option.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-white">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.email}`}
                  className="mt-4 inline-block text-[13px] font-medium text-white/60 underline decoration-white/10 underline-offset-4 transition-colors hover:text-white hover:decoration-white/30"
                >
                  {option.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Send us a message.
            </h2>
            <p className="mb-8 text-[14px] text-white/40">
              Fill out the form below and we&apos;ll get back to you within 48
              hours.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-[13px] font-medium text-white/50"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-[13px] font-medium text-white/50"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[13px] font-medium text-white/50"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-[13px] font-medium text-white/50"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white/50 focus:border-white/20 focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[13px] font-medium text-white/50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:border-white/20 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
