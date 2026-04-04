import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Keystone AI Studio",
  description: "Terms of Service for Keystone AI Studio.",
};

export default function TermsOfServicePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">
          Terms of Service
        </h1>
        <p className="text-secondary font-label text-sm uppercase tracking-wider">
          Last updated: November 2025
        </p>
      </header>

      <div className="prose-keystone">
        <p className="text-lg font-headline italic text-on-surface mb-8">
          Welcome to Keystone AI Studio (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;). By accessing or using our products, AI systems, SMS
          services, or automation tools (collectively, the &ldquo;Services&rdquo;), you
          agree to these Terms of Service (&ldquo;Terms&rdquo;).
        </p>
        <p>
          These Terms apply to all purchases made through Stripe, including
          monthly subscriptions for the SMS Automation System, AI receptionist
          tools, and any other digital services.
        </p>
        <p>
          If you have executed a separate Master Service Agreement (MSA) with
          Keystone AI Studio, the MSA will supersede these Terms in the event of
          any conflict.
        </p>

        <h2>1. Services Provided</h2>
        <p>Keystone AI Studio provides:</p>
        <ul>
          <li>AI-powered SMS shift reminders</li>
          <li>Employee scheduling automation</li>
          <li>Compliance logging</li>
          <li>AI phone receptionist systems</li>
          <li>Additional automation tools and consulting</li>
        </ul>
        <p>Services may update or improve over time.</p>

        <h2>2. Subscriptions &amp; Billing</h2>

        <h3>2.1 Recurring Payments</h3>
        <p>
          When subscribing, you authorize Stripe to automatically charge the
          payment method on file every billing cycle (e.g., monthly).
        </p>

        <h3>2.2 Failed Payments</h3>
        <p>If a payment fails:</p>
        <ul>
          <li>Stripe may automatically retry</li>
          <li>Access to services may be paused until payment succeeds</li>
        </ul>

        <h3>2.3 Cancellation</h3>
        <p>
          You may cancel at any time. Cancellations affect future billing
          cycles &mdash; no refunds are issued for partial or past periods.
        </p>

        <h3>2.4 Price Changes</h3>
        <p>
          Prices may change with advance notice. Existing clients will be
          notified via email at least 30 days prior to any change.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to use our systems for:</p>
        <ul>
          <li>Spam</li>
          <li>Fraud</li>
          <li>Unlawful messaging</li>
          <li>Harassment</li>
          <li>Medical, legal, or financial misinformation</li>
          <li>Violating Twilio or carrier SMS policies</li>
        </ul>
        <p>
          We reserve the right to suspend accounts violating these rules.
        </p>

        <h2>4. Data &amp; Privacy</h2>
        <p>
          We collect only the data necessary to operate our Services. This may
          include:
        </p>
        <ul>
          <li>Phone numbers</li>
          <li>Customer names</li>
          <li>SMS delivery logs</li>
          <li>Business configuration data</li>
          <li>AI-generated conversation logs (for training your agent only)</li>
        </ul>
        <p>
          We do not sell personal data. We do not share SMS opt-in data with
          third parties. For full details, please see our{" "}
          <Link href="/privacy-policy" className="text-primary underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>5. Service Availability</h2>
        <p>
          We aim for high availability but do not guarantee:
        </p>
        <ul>
          <li>Uninterrupted service</li>
          <li>No downtime</li>
          <li>Instant SMS delivery</li>
          <li>Perfect AI output</li>
        </ul>
        <p>AI responses may occasionally contain inaccuracies.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>
            Our liability is capped at the amount you paid in the last 3 months
          </li>
          <li>
            We are not responsible for indirect or incidental damages
          </li>
          <li>You use the Services at your own risk</li>
        </ul>

        <h2>7. Termination</h2>
        <p>We may suspend or terminate access if:</p>
        <ul>
          <li>Billing repeatedly fails</li>
          <li>Illegal or abusive use is detected</li>
          <li>You violate these Terms</li>
        </ul>
        <p>
          Subscriptions may also be terminated if your MSA expires or is
          cancelled.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Commonwealth of Virginia,
          USA.
        </p>

        <h2>9. Trading Bot Terms &amp; Risk Disclaimer</h2>
        <p>
          The following provisions specifically apply to users of Keystone AI
          Analyst (Charlotte) and are incorporated into these Terms of Service.
          Specific risk disclosures for our trading tools (including Charlotte)
          are included in our{" "}
          <Link href="/trading-disclaimer" className="text-primary underline">
            Trading Disclaimer
          </Link>
          .
        </p>

        <h2>10. Related Documents</h2>
        <p>
          For transparency, Keystone AI Studio also publishes the following
          reference templates:
        </p>
        <ul>
          <li>
            <Link
              href="/master-service-agreement"
              className="text-primary underline"
            >
              Master Service Agreement (Template)
            </Link>
          </li>
          <li>
            <Link
              href="/statement-of-work"
              className="text-primary underline"
            >
              Statement of Work (Template)
            </Link>
          </li>
        </ul>
        <p>
          These templates are provided for general informational purposes only.
          For any client, the signed Master Service Agreement (MSA) and
          Statement of Work (SOW) take precedence over any public templates or
          website content.
        </p>

        <h2>11. Contact</h2>
        <p>
          Keystone AI Studio
          <br />
          Email: tom@keystoneaistudio.com
          <br />
          Website: keystoneaistudio.com
        </p>
      </div>
    </article>
  );
}
