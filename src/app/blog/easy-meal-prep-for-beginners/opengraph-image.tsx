import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Easy Meal Prep for Beginners: 1 Hour, Done for the Week";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Easy Meal Prep for Beginners: 1 Hour, Done for the Week");
}
