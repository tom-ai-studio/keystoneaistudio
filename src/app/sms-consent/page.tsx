import type { Metadata } from "next";
import SmsConsentForm from "./SmsConsentForm";

export const metadata: Metadata = {
  title: "SMS Consent — Keystone AI Studio",
  description:
    "Provide your consent to receive SMS appointment updates from Keystone AI Studio.",
};

export default function SmsConsentPage() {
  return <SmsConsentForm />;
}
