import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "5 Cheap Alternatives to Meal Kits in 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("5 Cheap Alternatives to Meal Kits in 2026");
}
