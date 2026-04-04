import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statement of Work — Keystone AI Studio",
  description: "Statement of Work template for Keystone AI Studio.",
};

export default function StatementOfWorkPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">
          Statement of Work
        </h1>
        <p className="text-secondary font-label text-sm uppercase tracking-wider">
          For informational and reference purposes only &middot; Last Updated:
          November 2025
        </p>
      </header>

      <div className="prose-keystone">
        <h2>1. Introduction</h2>
        <p>
          This Statement of Work (&ldquo;SOW&rdquo;) describes the structure under which
          Keystone AI Studio delivers service engagements.
        </p>
        <p>
          This is a generic template for reference. Any signed client-specific
          SOW overrides this template. Pricing below is placeholder only and
          does NOT reflect any actual client engagement.
        </p>

        <h2>2. Service Overview</h2>
        <p>Keystone AI Studio offers services including:</p>
        <ul>
          <li>SMS automation and notification systems</li>
          <li>Voice AI receptionist systems</li>
          <li>Employee scheduling portals</li>
          <li>Custom RAG/AI knowledge base systems</li>
          <li>Workflow automation</li>
          <li>White-label customer communication platforms</li>
        </ul>
        <p>Each SOW will specify which service(s) apply.</p>

        <h2>3. Deliverables (Example Categories Only)</h2>
        <p>A typical SOW may include:</p>

        <h3>Phase 1 &mdash; Implementation</h3>
        <ul>
          <li>System configuration</li>
          <li>Data import (employees, schedules, business profile)</li>
          <li>UI onboarding</li>
          <li>Testing and validation</li>
          <li>A2P compliance setup (if applicable)</li>
        </ul>

        <h3>Phase 2 &mdash; Ongoing Services</h3>
        <ul>
          <li>Hosting and maintenance</li>
          <li>Support and updates</li>
          <li>Message delivery</li>
          <li>Performance monitoring</li>
          <li>Audit logs and message history</li>
        </ul>

        <h2>4. Pricing (Template Only)</h2>
        <p>Each SOW will define:</p>
        <ul>
          <li>One-time setup fee</li>
          <li>Monthly recurring subscription</li>
          <li>Optional add-ons</li>
          <li>Payment schedule</li>
          <li>Additional hourly or custom fees (if applicable)</li>
        </ul>
        <p>No pricing in this template applies to any client.</p>

        <h2>5. Timeline</h2>
        <p>A generic timeline may include:</p>
        <ul>
          <li>Setup: 3&ndash;10 business days</li>
          <li>Testing: 2&ndash;4 business days</li>
          <li>Go-Live: 1 business day</li>
        </ul>
        <p>Specific timelines will appear only in the signed SOW.</p>

        <h2>6. Client Responsibilities</h2>
        <p>Clients are typically responsible for:</p>
        <ul>
          <li>Providing accurate data</li>
          <li>Obtaining employee SMS consent</li>
          <li>Updating schedules</li>
          <li>Reviewing system outputs</li>
          <li>Maintaining internet access</li>
          <li>Following all applicable laws (TCPA, etc.)</li>
        </ul>

        <h2>7. Data &amp; Audit</h2>
        <ul>
          <li>Message logs retained for operational use only</li>
          <li>Not a long-term archival system</li>
          <li>
            Client responsible for exporting any data needed for regulatory or
            payroll requirements
          </li>
        </ul>

        <h2>8. Term &amp; Renewal</h2>
        <p>Each signed SOW defines its:</p>
        <ul>
          <li>Start date</li>
          <li>Renewal structure</li>
          <li>Termination process</li>
          <li>Payment schedule</li>
        </ul>
        <p>
          Termination of an individual SOW does not terminate the MSA (unless
          explicitly stated).
        </p>

        <h2>9. Conflict Control</h2>
        <p>
          If a client signs a customized SOW, the signed version supersedes this
          public template.
        </p>
      </div>
    </article>
  );
}
