import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Your First Grocery List: The New Apartment Starter Kit";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Your First Grocery List: The New Apartment Starter Kit");
}
