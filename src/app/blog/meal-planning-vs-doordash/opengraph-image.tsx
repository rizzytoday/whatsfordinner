import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Planning vs. DoorDash: The $5,000/Year Difference";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Planning vs. DoorDash: The $5,000/Year Difference");
}
