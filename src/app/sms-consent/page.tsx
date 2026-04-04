import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Consent — Keystone AI Studio",
  description:
    "Provide your consent to receive SMS appointment updates from Keystone AI Studio.",
};

export default function SmsConsentPage() {
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

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2"
                  id="first_name"
                  name="first_name"
                  required
                  type="text"
                  autoComplete="given-name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-label text-xs uppercase tracking-wider text-secondary"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="editorial-input py-2 text-on-surface font-body border-0 border-b-2"
                  id="last_name"
                  name="last_name"
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
                >
                  <option disabled value="" selected>
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
                    required
                    type="checkbox"
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
                className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-sm font-bold uppercase tracking-widest shadow-lg hover:opacity-90 transition-all"
                type="submit"
              >
                Submit
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
