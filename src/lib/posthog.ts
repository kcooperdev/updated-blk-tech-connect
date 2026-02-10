import posthog from "posthog-js";

/**
 * Safely capture a PostHog event.
 * Guards against posthog not being initialized (e.g. during SSR or
 * when the env key is missing).
 */
export function capture(
  eventName: string,
  properties?: Record<string, unknown>,
) {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.capture(eventName, properties);
  }
}
