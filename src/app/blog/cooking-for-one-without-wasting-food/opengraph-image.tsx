import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Cooking for One Without Wasting Food (It's Not Just You)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Cooking for One Without Wasting Food (It's Not Just You)");
}
