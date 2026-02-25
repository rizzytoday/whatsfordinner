"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface FreePlanBannerProps {
  hasDbPlan: boolean;
  hasProfile: boolean;
}

export function FreePlanBanner({ hasDbPlan, hasProfile }: FreePlanBannerProps) {
  const [hasFreePlan, setHasFreePlan] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem("wfd_free_plan");
    if (cached) {
      setHasFreePlan(true);
    }
  }, []);

  // Don't show if user has DB plans or no free plan in localStorage
  if (hasDbPlan || !hasFreePlan) return null;

  return (
    <div className="mb-8 bg-white border border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-stone-800">
          Your free meal plan is ready
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          You generated a free 3-day plan earlier. View it anytime.
        </p>
      </div>
      <Link
        href="/preview"
        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200 whitespace-nowrap"
      >
        View Free Plan
      </Link>
    </div>
  );
}
