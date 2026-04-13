import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should I Cook Tonight? — Free Quiz | What's For Dinner",
  description:
    "Take this quick quiz to find out what to cook tonight. Answer 4 simple questions about your mood, time, and dietary needs to get a personalized dinner idea.",
  keywords: [
    "what should I cook tonight",
    "dinner ideas quiz",
    "what to eat tonight",
    "what to cook for dinner",
    "meal idea quiz",
    "quick dinner ideas",
  ],
  alternates: {
    canonical: "https://whatsfordinner.fit/tools/what-to-cook",
  },
  openGraph: {
    title: "What Should I Cook Tonight? — Free Quiz | What's For Dinner",
    description:
      "Answer 4 quick questions and get a personalized dinner recommendation. Free, fast, and fun.",
    url: "https://whatsfordinner.fit/tools/what-to-cook",
    siteName: "What's For Dinner",
    type: "website",
  },
};

export default function WhatToCookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
