import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Keystone AI Studio",
  description: "Privacy Policy for Keystone AI Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">
          Privacy Policy
        </h1>
        <p className="text-secondary font-label text-sm uppercase tracking-wider">
          Last updated: November 2025
        </p>
      </header>

      <div className="prose-keystone">
        <p className="text-lg font-headline italic text-on-surface mb-8">
          Keystone AI Studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting
          your privacy. This Privacy Policy explains what information we
          collect, how we use it, and how we secure it.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Customer-Provided Information</h3>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone number</li>
          <li>Business information</li>
          <li>Shift schedules and employee data (for automation tools)</li>
        </ul>

        <h3>1.2 Automatically Collected Information</h3>
        <ul>
          <li>SMS delivery logs</li>
          <li>Call logs (for AI receptionist services)</li>
          <li>Browser/device information</li>
          <li>Stripe payment identification numbers (never full card numbers)</li>
        </ul>

        <h3>1.3 SMS Opt-In Data (Twilio A2P Compliance)</h3>
        <p>We collect:</p>
        <ul>
          <li>Phone number</li>
          <li>Opt-in consent</li>
          <li>Keyword responses (e.g., START, STOP)</li>
        </ul>
        <p>We do not share or sell SMS opt-in data.</p>

        <h2>2. How We Use Information</h2>
        <ul>
          <li>Deliver AI and automation services</li>
          <li>Send SMS notifications and reminders</li>
          <li>Improve accuracy of AI responses</li>
          <li>Troubleshoot issues</li>
          <li>Process payments through Stripe</li>
          <li>Maintain compliance with carrier regulations</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell personal data. We only share information with:
        </p>
        <ul>
          <li>Subcontractors assisting us in customer support</li>
          <li>
            Technical service providers (e.g., Twilio, Vapi, Stripe)
          </li>
        </ul>
        <p>
          All subcontractors are bound by confidentiality and data protection
          obligations.
        </p>

        <h2>4. Data Security</h2>
        <p>We use industry-standard security measures:</p>
        <ul>
          <li>TLS encryption</li>
          <li>Limited internal access</li>
          <li>Secure authentication</li>
          <li>Encrypted storage</li>
        </ul>
        <p>
          No system is 100% secure, but we take reasonable steps to protect
          your data.
        </p>

        <h2>5. Your Rights</h2>
        <p>You may request:</p>
        <ul>
          <li>To view your data</li>
          <li>To correct your data</li>
          <li>To delete your data (within legal/technical limits)</li>
          <li>To stop SMS messages at any time by replying STOP</li>
        </ul>

        <h2>6. Cookies</h2>
        <p>Our website may use cookies for:</p>
        <ul>
          <li>Analytics</li>
          <li>Improving user experience</li>
          <li>Security</li>
        </ul>
        <p>You can disable cookies in your browser.</p>

        <h2>7. Changes</h2>
        <p>
          We may update this policy. Updates will be posted on this page.
        </p>

        <h2>8. Contact</h2>
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
