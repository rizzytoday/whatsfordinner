import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Food Budget in Your 20s: How Much Should You Actually Spend?";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Food Budget in Your 20s: How Much Should You Actually Spend?");
}
