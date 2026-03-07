import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "How to Save Money on Groceries with Meal Planning";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("How to Save Money on Groceries with Meal Planning");
}
