import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Kits vs. Meal Planning Apps: The Complete Comparison";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Kits vs. Meal Planning Apps: The Complete Comparison");
}
