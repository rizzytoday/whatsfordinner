"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function RedeemFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const codeFromUrl = searchParams.get("code") || "";

  const [code, setCode] = useState(codeFromUrl);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [needsAuth, setNeedsAuth] = useState(false);

  async function redeem(promoCode: string) {
    if (!promoCode.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/promo/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promoCode.trim() }),
      });
      const data = await res.json();

      if (res.status === 401) {
        // Store code so it survives the signup/login → onboarding flow
        localStorage.setItem("wfd_promo_code", promoCode.trim());
        setNeedsAuth(true);
        setStatus("idle");
        return;
      }

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "You're in! 1 month free.");
      } else {
        setStatus("error");
        setMessage(data.error || "This code didn't work.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  // Auto-redeem if code is in URL
  useEffect(() => {
    if (codeFromUrl) {
      redeem(codeFromUrl);
    }
  }, [codeFromUrl]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    redeem(code);
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-6">
          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-3xl leading-none" style={{ filter: "brightness(0) invert(1)" }}>🍴</span>
          </div>
        </Link>

        {/* No code in URL and not awaiting auth — show input form */}
        {!codeFromUrl && !needsAuth && status !== "success" && status !== "error" && (
          <>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              Redeem a promo code
            </h1>
            <p className="text-sm text-stone-500 mb-6">
              Enter your code below to activate your free month.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="e.g. FRIEND-ABC123"
                className="w-full px-4 py-3 text-center text-lg font-mono tracking-wider border border-stone-200 rounded-xl bg-white text-stone-800 placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-200"
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="submit"
                disabled={!code.trim() || status === "loading"}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Activating...
                  </>
                ) : (
                  "Redeem Code"
                )}
              </button>
            </form>
            <p className="mt-6 text-xs text-stone-400">
              Don&apos;t have a code?{" "}
              <Link href="/onboarding" className="text-orange-500 hover:text-orange-600 transition-colors">
                Try a free plan instead
              </Link>
            </p>
          </>
        )}

        {/* Code in URL — needs auth */}
        {needsAuth && (
          <>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              You&apos;ve been invited!
            </h1>
            <p className="text-sm text-stone-500 mb-1">
              A friend gave you 1 month of free meal plans.
            </p>
            <p className="text-xs text-stone-400 mb-4">
              What&apos;s For Dinner sends you personalized weekly meal plans and grocery lists — so you never have to think about what to eat.
            </p>
            <div className="inline-block px-4 py-2 bg-stone-50 rounded-lg mb-6">
              <code className="text-sm font-mono text-stone-700">{code}</code>
            </div>
            <p className="text-xs text-stone-400 mb-6">
              Create an account, then we&apos;ll activate your free month.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href={`/signup?code=${encodeURIComponent(code)}&redirect=/onboarding`}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
              >
                Create Account — Free
              </Link>
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("wfd_promo_code", code.trim());
                  window.location.href = `/login?redirect=/onboarding`;
                }}
                className="text-sm text-stone-500 hover:text-orange-500 transition-colors duration-200"
              >
                Already have an account? Sign in
              </button>
            </div>
          </>
        )}

        {/* Loading (only for URL-based codes) */}
        {codeFromUrl && status === "loading" && !needsAuth && (
          <>
            <div className="w-6 h-6 border-2 border-orange-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-stone-500">Activating your code...</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              You&apos;re in!
            </h1>
            <p className="text-sm text-stone-500 mb-6">{message}</p>
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
            >
              Set Up Your Preferences
            </Link>
            <Link
              href="/dashboard"
              className="block mt-3 text-sm text-stone-500 hover:text-orange-500 transition-colors duration-200"
            >
              Skip to dashboard
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-stone-800 mb-2">
              Code didn&apos;t work
            </h1>
            <p className="text-sm text-stone-500 mb-6">{message}</p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setMessage("");
                  setCode("");
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow-sm transition-all duration-200"
              >
                Try Another Code
              </button>
              <Link
                href="/"
                className="text-sm text-stone-500 hover:text-orange-500 transition-colors duration-200"
              >
                Back to home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function RedeemPage() {
  return (
    <Suspense>
      <RedeemFlow />
    </Suspense>
  );
}
