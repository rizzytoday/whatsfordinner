import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "AI vs. Traditional Meal Planning: The 2026 Comparison";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("AI vs. Traditional Meal Planning: The 2026 Comparison");
}
