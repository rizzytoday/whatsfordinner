import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "10 Ways to Upgrade Instant Ramen Into a Real Meal";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("10 Ways to Upgrade Instant Ramen Into a Real Meal");
}
