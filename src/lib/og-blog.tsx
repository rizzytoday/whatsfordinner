import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function generateBlogOG(title: string) {
  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const interExtraBold = await readFile(join(process.cwd(), "public", "Inter-ExtraBold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFBF5",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "3px dashed #FDBA74",
            borderRadius: 20,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1C1917",
              fontFamily: "Georgia, serif",
            }}
          >
            {"What's For Dinner"}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#FFF7ED",
              color: "#EA580C",
              fontSize: 14,
              fontWeight: 700,
              padding: "6px 20px",
              borderRadius: 50,
              display: "flex",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Blog
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter",
              fontSize: title.length > 40 ? 48 : 56,
              fontWeight: 800,
              color: "#0C0A09",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              display: "flex",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 52,
            right: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#F97316",
              display: "flex",
            }}
          >
            whatsfordinner.fit
          </span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: "Inter",
          data: interExtraBold,
          weight: 800 as const,
          style: "normal" as const,
        },
      ],
    },
  );
}
