import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Planning vs. Meal Prep: You Need Both (But Start Here)";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Planning vs. Meal Prep: You Need Both (But Start Here)");
}
