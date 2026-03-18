import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "How to Start Meal Planning (Even If You've Failed Before)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("How to Start Meal Planning (Even If You've Failed Before)");
}
