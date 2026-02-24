"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { capture } from "@/lib/posthog";

const upcomingEvents = [
  {
    title: "Bots & Bourbon",
    date: "Upcoming",
    time: "6:00 PM – 8:30 PM",
    type: "In-Person",
    location: "Unity Bar & Restaurant, Baltimore",
    description:
      "Come for the bourbon, stay for the clues, and end the night with new connections. Icebreaker puzzles, a talk from AI & Robotics R&D Lead Troi Williams, and open networking over great drinks.",
    rsvpLink: "https://luma.com/xm5xmhma",
  },
  {
    title: "Palava Night #2: Grassroot to Groundbreaker",
    date: "Feb 25, 2026",
    time: "6:30 PM – 8:30 PM",
    type: "In-Person",
    location: "Nola Seafood & Spirits, Baltimore",
    description:
      "In partnership with Palava Hut — community leaders discuss building from the ground up, featuring a fireside chat with Kory Bailey and Jeffrey Scruggs during Black History Month.",
    rsvpLink: "https://luma.com/fhaiqk41",
  },
  {
    title: "Charm City Cowork: Tech Cafe",
    date: "Upcoming",
    time: "11:00 AM – 5:00 PM",
    type: "In-Person",
    location: "1010 St Paul St, Baltimore",
    description:
      "Rooted in Baltimore. Powered by Community. Drop in to cowork, network, and support local Baltimore cafés and spaces during Baltimore Tech Week.",
    rsvpLink: "https://luma.com/pbeegk9h",
  },
  {
    title: "Charm City Cowork: Red Emma's",
    date: "Upcoming",
    time: "TBA",
    type: "In-Person",
    location: "Red Emma's Bookstore Coffeehouse, Baltimore",
    description:
      "Rooted in Baltimore. Powered by Community. Drop in to cowork, network, and support local Baltimore cafés and spaces during Baltimore Tech Week.",
    rsvpLink: "https://luma.com/dcfsuxe2",
  },
  {
    title: "BLK Tech Connect Online Launch",
    date: "Upcoming",
    time: "TBA",
    type: "Online",
    location: "Virtual Event",
    description:
      "The virtual extension of our growing community. Meet new and existing members, hear the vision for the online community, and help shape what comes next.",
    rsvpLink: "https://luma.com/geqbg2j8",
  },
];

export default function EventsPage() {
  const handleRsvpClick = (eventTitle: string, eventType: string) => {
    capture("event_rsvp_clicked", {
      event_title: eventTitle,
      event_type: eventType,
    });
  };

  const handleDiscordJoinClick = () => {
    capture("discord_join_clicked", {
      source: "events_page",
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
              Events
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Learn, connect,
              <br />
              <span className="text-gradient-muted">and grow together.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 md:text-base">
              Monthly online tech events, panels, happy hours, and workshops.
              All free for community members.
            </p>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-xl font-bold text-white md:text-2xl">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-white/[0.06] bg-[#111111] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#161616] md:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                            event.type === "Online"
                              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                              : "border-amber-400/20 bg-amber-400/10 text-amber-400"
                          }`}
                        >
                          {event.type}
                        </span>
                        <h3 className="text-[15px] font-semibold text-white">
                          {event.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-white/40">
                        {event.description}
                      </p>
                      <p className="mt-3 text-[13px] text-white/25">
                        {event.date} · {event.time} · {event.location}
                      </p>
                    </div>
                    <a
                      href={event.rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleRsvpClick(event.title, event.type)}
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-transparent px-5 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-white/5 hover:border-white/30 active:scale-[0.98] sm:self-center"
                    >
                      RSVP
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/50"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All events CTA */}
        <section className="border-t border-white/[0.04] px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Don&apos;t miss out.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/40">
              Join our community to get notified about new events, or browse
              all upcoming events on Luma.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://discord.gg/gWfhQFzbnB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDiscordJoinClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                Join Discord
              </a>
              <a
                href="https://luma.com/calendar/manage/cal-64EiCORm0LBSWtj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 hover:border-white/30 active:scale-[0.98]"
              >
                View All on Luma
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
