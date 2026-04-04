import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Service Agreement — Keystone AI Studio",
  description:
    "Master Service Agreement template for Keystone AI Studio.",
};

export default function MasterServiceAgreementPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">
          Master Service Agreement
        </h1>
        <p className="text-secondary font-label text-sm uppercase tracking-wider">
          Template Only &middot; Last Updated: November 2025
        </p>
      </header>

      <div className="bg-surface-container-low p-8 rounded-xl mb-12">
        <p className="text-on-surface-variant font-body text-sm leading-relaxed">
          This page provides a generic Master Service Agreement (MSA) template
          used by Keystone AI Studio for reference and transparency. This
          template is NOT a contract. For any client, only a separately signed
          and executed Master Service Agreement (MSA) and Statement of Work
          (SOW) are legally binding. In the event of any conflict between this
          template and a signed MSA/SOW, the signed version controls.
        </p>
      </div>

      <div className="prose-keystone">
        <h2>1. Introduction</h2>
        <p>
          This Master Service Agreement (&ldquo;MSA&rdquo;) outlines the general terms and
          conditions under which Keystone AI Studio provides automation, AI, and
          digital services to business clients.
        </p>
        <p>
          This public MSA template is provided for transparency and reference.
          If Keystone AI Studio and a client sign a customized MSA or SOW, that
          signed version overrides this template.
        </p>

        <h2>2. Scope of Services</h2>
        <p>
          Keystone AI Studio may provide services including, but not limited to:
        </p>
        <ul>
          <li>SMS automation systems</li>
          <li>AI phone receptionist/voice agents</li>
          <li>Scheduling portals and workforce automations</li>
          <li>Workflow automation (n8n, Zapier, API integrations)</li>
          <li>Cloud-hosted web portals</li>
          <li>Custom software development</li>
          <li>AI and natural language processing services</li>
        </ul>
        <p>
          Specific deliverables, timelines, and pricing will be defined in
          individual Statements of Work (SOWs).
        </p>

        <h2>3. Fees &amp; Payments</h2>
        <ul>
          <li>Fees will be defined in the applicable SOW.</li>
          <li>Setup fees are typically due before work begins.</li>
          <li>
            Monthly recurring fees are due on the 1st of each month unless
            stated otherwise.
          </li>
          <li>Late payments may result in suspension of services.</li>
          <li>
            All fees paid are non-refundable unless otherwise stated.
          </li>
        </ul>

        <h2>4. Term &amp; Termination</h2>
        <ul>
          <li>This MSA remains in effect until terminated in writing.</li>
          <li>
            Either party may terminate with 30 days&rsquo; written notice.
          </li>
          <li>Termination of this MSA terminates all active SOWs.</li>
          <li>
            Upon termination, Client must pay all outstanding fees.
          </li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          Keystone AI Studio&rsquo;s aggregate liability under this MSA and all SOWs
          is limited to the fees paid in the last 12 months.
        </p>
        <p>Keystone AI Studio is not liable for:</p>
        <ul>
          <li>Lost profits</li>
          <li>Loss of business</li>
          <li>Downtime</li>
          <li>Delayed SMS messages</li>
          <li>Third-party service failures</li>
          <li>AI inaccuracies or &ldquo;hallucinations&rdquo;</li>
        </ul>

        <h2>6. No HIPAA / No PHI</h2>
        <p>
          Keystone AI Studio is not a HIPAA Business Associate. Clients must not
          transmit or store Protected Health Information (PHI) using Keystone AI
          Studio&rsquo;s services.
        </p>

        <h2>7. Third-Party Dependencies</h2>
        <p>
          Services rely on third parties such as Twilio, Vapi, OpenAI, or other
          carriers/providers. Keystone AI Studio is not responsible for:
        </p>
        <ul>
          <li>Carrier filtering</li>
          <li>Undelivered SMS messages</li>
          <li>Outages</li>
          <li>Internet or platform instability</li>
          <li>API changes by third-party vendors</li>
        </ul>

        <h2>8. Data Retention</h2>
        <ul>
          <li>Data export is available upon request.</li>
          <li>
            Data is retained for 90 days after termination unless otherwise
            stated.
          </li>
          <li>
            Services are not intended for long-term archival or compliance
            storage.
          </li>
        </ul>

        <h2>9. Intellectual Property</h2>
        <p>
          All software, scripts, automations, workflows, and configurations
          created by Keystone AI Studio remain the intellectual property of
          Keystone AI Studio unless explicitly assigned in an SOW.
        </p>
        <p>
          Clients receive a license to use the deliverables while actively
          paying for the service.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          This MSA is governed by the laws of the Commonwealth of Virginia.
        </p>

        <h2>11. Conflict Control</h2>
        <p>
          If a client signs a customized MSA or SOW, the signed version
          supersedes this public template.
        </p>
      </div>
    </article>
  );
}
