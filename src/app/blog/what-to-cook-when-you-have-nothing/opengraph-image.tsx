import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "What to Cook When You Have Nothing (You Probably Have More Than You Think)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("What to Cook When You Have Nothing (You Probably Have More Than You Think)");
}
