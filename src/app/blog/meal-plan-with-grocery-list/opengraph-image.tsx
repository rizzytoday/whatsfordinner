import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Plan with Grocery List: The Complete Solution";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Plan with Grocery List: The Complete Solution");
}
