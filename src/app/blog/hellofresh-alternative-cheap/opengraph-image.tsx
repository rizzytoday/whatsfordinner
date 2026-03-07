import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "The Best Cheap Alternative to HelloFresh";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("The Best Cheap Alternative to HelloFresh");
}
