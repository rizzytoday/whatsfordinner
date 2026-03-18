import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "What Should I Make for Dinner? 20 Ideas Based on What You Have";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("What Should I Make for Dinner? 20 Ideas Based on What You Have");
}
