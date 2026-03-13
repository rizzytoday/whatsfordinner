import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Planning for College Students: Dorm + Off-Campus Guide";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Planning for College Students: Dorm + Off-Campus Guide");
}
