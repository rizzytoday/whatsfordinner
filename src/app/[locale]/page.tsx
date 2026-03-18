import { LandingPage } from "@/components/landing/LandingPage";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export default function LocaleHome() {
  return <LandingPage />;
}
