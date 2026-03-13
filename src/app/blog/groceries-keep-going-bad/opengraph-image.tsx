import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Why Your Groceries Keep Going Bad (The Fix Is Simple)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Why Your Groceries Keep Going Bad (The Fix Is Simple)");
}
