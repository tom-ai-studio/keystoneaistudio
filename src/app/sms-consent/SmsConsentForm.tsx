"use client";

import { useState } from "react";
import Link from "next/link";

export default function SmsConsentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/maqllnqy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    if (res.ok) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-surface-container-low p-12 md:p-16 rounded-xl">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-headline text-on-surface mb-4">
              Consent Submitted
            </h1>
            <p className="text-secondary font-body text-lg max-w-md mx-auto mb-8">
              Thank you. Your SMS consent has been recorded successfully.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-label text-sm font-bold uppercase tracking-widest shadow-lg hover:opacity-90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-headline text-on-surface mb-4 leading-tight">
            SMS Consent
          </h1>
          <p className="text-secondary font-body text-lg max-w-lg">
            Please provide your details and consent to receive updates regarding
            your account and services.
          </p>
        </div>

        {/* Form */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2"
                  id="firstName"
                  name="firstName"
                  required
                  type="text"
                  autoComplete="given-name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2"
                  id="lastName"
                  name="lastName"
                  required
                  type="text"
                  autoComplete="family-name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  required
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="business"
                >
                  Select Business
                </label>
                <select
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2 appearance-none cursor-pointer"
                  id="business"
                  name="business"
                  required
                  defaultValue=""
                >
                  <option disabled value="">
                    Choose a business
                  </option>
                  <option value="studio_alpha">Studio Alpha Operations</option>
                  <option value="keystone_logistics">
                    Keystone Logistics
                  </option>
                  <option value="strategic_ai">Strategic AI Partners</option>
                </select>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center h-6">
                  <input
                    className="h-5 w-5 rounded-lg border-outline-variant text-primary focus:ring-primary"
                    id="consent"
                    name="consent"
                    type="checkbox"
                    value="yes"
                  />
                </div>
                <label
                  className="text-on-surface font-body text-sm leading-relaxed"
                  htmlFor="consent"
                >
                  I agree to receive appointment confirmations, booking
                  reminders, and service update text messages from the selected
                  business via Keystone AI Studio.
                </label>
              </div>
            </div>

            {/* Disclosure */}
            <div className="bg-surface-container-highest p-6 rounded-lg">
              <p className="text-on-surface-variant font-body text-sm leading-relaxed italic opacity-80">
                Message frequency varies. Message and data rates may apply.
                Reply STOP to unsubscribe. Reply HELP for assistance.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-sm font-bold uppercase tracking-widest shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center md:text-left space-y-2">
          <p className="text-secondary font-body text-xs leading-relaxed max-w-lg">
            By submitting this form, you acknowledge that you have read and
            understood our{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="text-primary underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
