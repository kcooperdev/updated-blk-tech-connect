import { AlertBanner } from "./AlertBanner";
import Button from "./ui/Button";

// Sparkle / diamond icon matching the screenshots
const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-36 lg:pt-32">
      {/* Radial glow behind hero text */}
      <div className="hero-glow" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <AlertBanner text="Applications coming soon fall '26" />

          <h1 className="mt-10 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Bridging the
            <br />
            <span className="text-gradient-muted">tech diversity gap.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 sm:text-base md:text-lg md:leading-relaxed">
            BLK Tech Connect is the premier inclusive ecosystem for Black
            technologists, founders, and innovators. We build pathways to
            economic mobility through enterprise connections.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="primary"
              icon={<SparkleIcon />}
              iconPosition="left"
              as="a"
              href="/get-involved"
              className="px-7 py-3"
            >
              Get Involved
            </Button>
            <Button
              variant="secondary"
              as="a"
              href="/partners"
              className="px-7 py-3"
            >
              Explore Partners
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
