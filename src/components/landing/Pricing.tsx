"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import { useT } from "@/lib/i18n/context";

export function Pricing() {
  const { t } = useT();

  const features = [
    t("landing.pricing.features.firstWeekFree"),
    t("landing.pricing.features.sevenDayPlans"),
    t("landing.pricing.features.groceryLists"),
    t("landing.pricing.features.regenerations"),
    t("landing.pricing.features.emailDelivery"),
    t("landing.pricing.features.dietarySupport"),
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 text-center tracking-tight">
          {t("landing.pricing.title")}
        </h2>
        <p className="mt-4 text-stone-500 text-center text-lg max-w-xl mx-auto">
          {t("landing.pricing.subtitle")}
        </p>

        {/* Two compact horizontal cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Monthly */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                {t("landing.pricing.monthly")}
              </h3>
            </div>
            <div className="flex items-baseline gap-1.5 mb-5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">$4.99</span>
              <span className="text-stone-400 text-sm">{t("landing.pricing.perMonth")}</span>
            </div>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/onboarding">
                {t("landing.pricing.tryFreeFirst")}
              </Link>
            </Button>
          </div>

          {/* Yearly */}
          <div className="bg-white rounded-2xl border border-orange-300 shadow-md ring-1 ring-orange-100 p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                {t("landing.pricing.yearly")}
              </h3>
              <span className="bg-orange-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                {t("landing.pricing.save50")}
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-stone-900 tracking-tight">$2.50</span>
              <span className="text-stone-400 text-sm">{t("landing.pricing.perMonth")}</span>
            </div>
            <p className="mt-1 mb-5 text-xs text-stone-400">
              {t("landing.pricing.billedYearly")}
            </p>
            <Button asChild variant="primary" className="w-full">
              <Link href="/onboarding">
                {t("landing.pricing.tryFreeFirst")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Shared features */}
        <div className="mt-8 max-w-2xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 shrink-0 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
