"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/context";

interface FastingToggleProps {
  initialFast: string | null;
}

export function FastingToggle({ initialFast }: FastingToggleProps) {
  const { t } = useT();
  const [active, setActive] = useState(!!initialFast);
  const [saving, setSaving] = useState(false);

  async function toggle() {
    const newValue = active ? null : "ramadan";
    setActive(!active);
    setSaving(true);

    try {
      await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active_fast: newValue }),
      });
    } catch {
      setActive(active); // revert on error
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-2xl border border-stone-100 bg-white p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-stone-800">
            {t("dashboard.ramadanTitle")}
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            {t("dashboard.ramadanDesc")}
          </p>
        </div>
        <button
          type="button"
          onClick={toggle}
          disabled={saving}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
            active ? "bg-orange-500" : "bg-stone-200"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
              active ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
      {active && (
        <p className="text-xs text-orange-600 bg-orange-50 rounded-lg px-3 py-2">
          {t("dashboard.ramadanActive")}
        </p>
      )}
    </div>
  );
}
