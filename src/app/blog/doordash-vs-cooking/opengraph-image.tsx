import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "DoorDash vs. Cooking: You're Spending $6,000/Year on Delivery";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("DoorDash vs. Cooking: You're Spending $6,000/Year on Delivery");
}
