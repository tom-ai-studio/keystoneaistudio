import type { Metadata } from "next";
import SmsConsentForm from "./SmsConsentForm";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "SMS Consent — Keystone AI Studio",
  description:
    "Provide your consent to receive SMS appointment updates from Keystone AI Studio.",
};

export default async function SmsConsentPage() {
  const { data } = await supabase
    .from("businesses")
    .select("id, name, slug")
    .eq("status", "active")
    .eq("is_enabled", true)
    .eq("sms_consent_enabled", true)
    .order("name", { ascending: true });

  return <SmsConsentForm businesses={data ?? []} />;
}
