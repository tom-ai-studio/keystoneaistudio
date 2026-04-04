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
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        {/* Left: Info */}
        <div className="lg:col-span-5 space-y-16">
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
              &mdash; Thomas Keystone, Founder
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-16 rounded-xl relative">
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0px_20px_40px_rgba(27,28,26,0.03)]">
            <form
              action="https://formspree.io/f/tom@keystoneaistudio.com"
              method="POST"
              className="space-y-10"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-secondary block mb-2 transition-colors group-focus-within:text-primary"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary transition-all font-body py-2 px-0 text-on-surface"
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                  />
                </div>
                <div className="group relative">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-secondary block mb-2 transition-colors group-focus-within:text-primary"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary transition-all font-body py-2 px-0 text-on-surface"
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-secondary block mb-2 transition-colors group-focus-within:text-primary"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary transition-all font-body py-2 px-0 text-on-surface"
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="group relative">
                  <label className="font-label text-xs uppercase tracking-widest text-secondary block mb-2">
                    Interest Area
                  </label>
                  <select
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary transition-all font-body py-2 px-0 text-on-surface cursor-pointer"
                    name="interest"
                  >
                    <option value="consultancy">AI Consultancy</option>
                    <option value="custom-dev">Custom Automation</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="group relative">
                <label
                  className="font-label text-xs uppercase tracking-widest text-secondary block mb-2 transition-colors group-focus-within:text-primary"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-primary transition-all font-body py-2 px-0 text-on-surface resize-none"
                  id="message"
                  name="message"
                  required
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label uppercase tracking-[0.15em] text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
