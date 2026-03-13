import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "I Hate Cooking: A Meal Plan for People Who'd Rather Not";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("I Hate Cooking: A Meal Plan for People Who'd Rather Not");
}
