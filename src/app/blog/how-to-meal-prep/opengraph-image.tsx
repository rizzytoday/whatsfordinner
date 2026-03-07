import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "How to Meal Prep for the Week in Under 2 Hours";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("How to Meal Prep for the Week in Under 2 Hours");
}
