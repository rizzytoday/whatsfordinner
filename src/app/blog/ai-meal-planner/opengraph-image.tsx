import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "AI Meal Planner: How It Works and Why It's Better";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("AI Meal Planner: How It Works and Why It's Better");
}
