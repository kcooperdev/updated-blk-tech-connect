# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your BLK Tech Connect Next.js App Router project. The integration includes client-side analytics initialization using the modern `instrumentation-client.ts` approach (recommended for Next.js 15.3+), a reverse proxy configuration to avoid ad blockers, error tracking via `capture_exceptions`, and custom event tracking across 8 key pages and components to measure user engagement, newsletter subscriptions, contact form submissions, event RSVPs, and community growth.

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `newsletter_subscribed` | User submits newsletter subscription form | `src/app/newsletter/page.tsx` |
| `contact_form_submitted` | User submits the contact form with inquiry | `src/app/contact/page.tsx` |
| `academy_notify_submitted` | User submits email to be notified when Academy launches | `src/app/academy/page.tsx` |
| `event_rsvp_clicked` | User clicks RSVP button to register for an event | `src/app/events/page.tsx` |
| `discord_join_clicked` | User clicks to join the Discord community | `src/app/events/page.tsx` |
| `get_involved_cta_clicked` | User clicks a CTA on the Get Involved page | `src/app/get-involved/page.tsx` |
| `get_involved_newsletter_subscribed` | User submits newsletter form on Get Involved page | `src/app/get-involved/page.tsx` |
| `partner_inquiry_clicked` | User clicks Get in Touch from the Partners page | `src/app/partners/page.tsx` |
| `hero_cta_clicked` | User clicks primary CTA button from homepage hero | `src/components/HeroSection.tsx` |
| `footer_newsletter_subscribed` | User submits newsletter form in the footer | `src/components/Footer.tsx` |

## Configuration Files

| File | Purpose |
|------|---------|
| `instrumentation-client.ts` | PostHog client-side initialization |
| `next.config.ts` | Reverse proxy rewrites for `/ingest` endpoint |
| `.env` | PostHog API key and host configuration |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- **Analytics basics**: [https://us.posthog.com/project/310189/dashboard/1267260](https://us.posthog.com/project/310189/dashboard/1267260)

### Insights
- **Newsletter Subscriptions by Source**: [https://us.posthog.com/project/310189/insights/ncdg3if3](https://us.posthog.com/project/310189/insights/ncdg3if3)
- **Community Engagement**: [https://us.posthog.com/project/310189/insights/I4MLQobF](https://us.posthog.com/project/310189/insights/I4MLQobF)
- **Contact Form Submissions by Subject**: [https://us.posthog.com/project/310189/insights/N4vSw9u2](https://us.posthog.com/project/310189/insights/N4vSw9u2)
- **Homepage to Action Funnel**: [https://us.posthog.com/project/310189/insights/LkcuHDhX](https://us.posthog.com/project/310189/insights/LkcuHDhX)
- **Academy & Partner Interest**: [https://us.posthog.com/project/310189/insights/YiP8XBhH](https://us.posthog.com/project/310189/insights/YiP8XBhH)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
