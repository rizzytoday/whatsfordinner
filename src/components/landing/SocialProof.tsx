"use client";

import { useT } from "@/lib/i18n/context";

interface TestimonialProps {
  quote: string;
  author: string;
}

function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <div className="text-center px-2">
      <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-2 text-xs text-stone-400 font-medium">— {author}</p>
    </div>
  );
}

export function SocialProof() {
  const { t } = useT();

  const testimonials: TestimonialProps[] = [
    { quote: t("landing.social.quote1"), author: t("landing.social.quote1Author") },
    { quote: t("landing.social.quote2"), author: t("landing.social.quote2Author") },
    { quote: t("landing.social.quote3"), author: t("landing.social.quote3Author") },
  ];

  return (
    <section className="py-16 sm:py-20 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
