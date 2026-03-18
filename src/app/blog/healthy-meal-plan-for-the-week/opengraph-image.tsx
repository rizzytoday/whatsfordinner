import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Healthy Meal Plan for the Week: Balanced, Simple, Under 30 Minutes");
}
