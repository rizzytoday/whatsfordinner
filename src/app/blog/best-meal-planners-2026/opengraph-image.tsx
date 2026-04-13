import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "7 Best Meal Planners in 2026 (Tested & Compared)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("7 Best Meal Planners in 2026 (Tested & Compared)");
}
