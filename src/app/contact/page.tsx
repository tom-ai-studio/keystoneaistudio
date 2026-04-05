import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Keystone AI Studio",
  description:
    "Get in touch with Keystone AI Studio to discuss how AI and automation can transform your business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12">
        <div className="max-w-3xl">
          <span className="font-label uppercase tracking-[0.2em] text-xs text-primary font-semibold mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-tight mb-8">
            Let&rsquo;s define the architecture of your next AI initiative.
          </h1>
          <p className="text-xl font-body text-secondary leading-relaxed max-w-xl">
            Our team is ready to discuss how custom AI workflows can transform
            your business operations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pb-32">
        <div className="space-y-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-headline italic text-on-surface-variant">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-on-surface-variant font-body">
                  tom@keystoneaistudio.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-on-surface-variant font-body">
                  (703) 665-0152
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-tertiary-container/10 p-8 rounded-xl border-l-4 border-primary">
            <h4 className="font-headline text-xl italic text-tertiary mb-4">
              &ldquo;The future of enterprise AI isn&rsquo;t just about speed;
              it&rsquo;s about the nuance of the human-in-the-loop
              workflow.&rdquo;
            </h4>
            <p className="text-sm font-label text-on-tertiary-fixed-variant uppercase tracking-wider">
              &mdash; Tom, Founder
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
