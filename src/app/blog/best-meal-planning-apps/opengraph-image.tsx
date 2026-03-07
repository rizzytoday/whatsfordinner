import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "10 Best Meal Planning Apps in 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("10 Best Meal Planning Apps in 2026");
}
