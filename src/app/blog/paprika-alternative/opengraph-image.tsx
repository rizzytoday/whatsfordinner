import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "The Best Paprika Alternative in 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("The Best Paprika Alternative in 2026");
}
