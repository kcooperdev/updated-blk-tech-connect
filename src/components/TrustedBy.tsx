"use client";

import { useEffect, useRef } from "react";

const partners = [
  "The Black Founders Table",
  "Adee\u2019s Coffee & Bar",
  "Palava Hut",
  "Tech Caf\u00e9",
  "Baltimore Tech Meetup",
];

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.4;

    function animate() {
      if (!track) return;
      position -= speed;
      // Each "set" is exactly half the track (we rendered 4 copies)
      const singleSetWidth = track.scrollWidth / 4;
      if (Math.abs(position) >= singleSetWidth) {
        position += singleSetWidth;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Quadruple the list for a truly seamless loop with no visible gap
  const repeated = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-black py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="mb-10 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
          Community Partners
        </p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex w-max items-center gap-16 md:gap-20 lg:gap-24 will-change-transform"
        >
          {repeated.map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="whitespace-nowrap text-base font-semibold text-white/40 md:text-lg lg:text-xl select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
