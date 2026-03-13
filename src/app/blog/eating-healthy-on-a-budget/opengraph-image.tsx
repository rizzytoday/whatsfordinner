import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Eating Healthy on a Budget: $50/Week, No Sad Salads";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Eating Healthy on a Budget: $50/Week, No Sad Salads");
}
