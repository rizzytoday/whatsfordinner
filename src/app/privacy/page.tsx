import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <nav className="max-w-3xl mx-auto px-6 py-6">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-orange-500 transition-colors"
        >
          &larr; Back to home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <h1 className="text-3xl font-bold text-stone-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-stone prose-sm max-w-none space-y-6 text-stone-600">
          <p>
            <strong>Last updated:</strong> February 2026
          </p>

          <h2 className="text-lg font-semibold text-stone-800">
            What we collect
          </h2>
          <p>
            When you use What&apos;s For Dinner, we collect your email address,
            meal preferences (dietary restrictions, household size, budget), and
            payment information processed securely through Lemon Squeezy. We
            also collect basic usage data to improve the service.
          </p>

          <h2 className="text-lg font-semibold text-stone-800">
            How we use it
          </h2>
          <p>
            Your preferences are used exclusively to generate personalized meal
            plans. Your email is used to deliver meal plans and important account
            updates. We do not sell, share, or trade your personal information
            with third parties for marketing purposes.
          </p>

          <h2 className="text-lg font-semibold text-stone-800">
            Data storage
          </h2>
          <p>
            Your data is stored securely on Supabase (hosted on AWS). Payment
            processing is handled by Lemon Squeezy — we never store your credit
            card details directly.
          </p>

          <h2 className="text-lg font-semibold text-stone-800">Cookies</h2>
          <p>
            We use essential cookies for authentication and language preferences.
            No third-party tracking cookies are used.
          </p>

          <h2 className="text-lg font-semibold text-stone-800">
            Your rights
          </h2>
          <p>
            You can delete your account and all associated data at any time from
            your dashboard, or by contacting us at{" "}
            <a
              href="mailto:hello@whatsfordinner.fit"
              className="text-orange-500 hover:text-orange-600"
            >
              hello@whatsfordinner.fit
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-stone-800">Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a
              href="mailto:hello@whatsfordinner.fit"
              className="text-orange-500 hover:text-orange-600"
            >
              hello@whatsfordinner.fit
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
