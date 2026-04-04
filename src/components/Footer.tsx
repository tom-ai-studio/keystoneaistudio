import Link from "next/link";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/statement-of-work", label: "Statement of Work" },
  { href: "/master-service-agreement", label: "Master Service Agreement" },
  { href: "/trading-disclaimer", label: "Trading Disclaimer" },
  { href: "/sms-consent", label: "SMS Consent" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-8 py-12 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <span className="font-headline text-on-surface text-xl">
            Keystone AI Studio
          </span>
          <p className="text-secondary text-sm mt-2">
            &copy; Keystone AI Studio
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors text-sm font-body"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
