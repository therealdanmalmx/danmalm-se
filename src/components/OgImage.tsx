import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Content } from "@/content/content";
import { siteConfig } from "@/site.config";

// Wide link-preview image (LinkedIn, Slack, etc.), rendered once at build time
// and exported as /og/sv.png and /og/en.png.
export const ogSize = { width: 1200, height: 630 };
export const ogPath = (t: Content) => `/og/${t.locale}.png`;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean);

export async function ogImage(t: Content) {
  const photo = await readFile(join(process.cwd(), "public/images/daniel.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const { before, emphasis, after } = t.hero.headline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#0b1326",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 19, letterSpacing: 1.5, color: "#10b981", textTransform: "uppercase" }}>
            {t.role}
          </div>
          <div style={{ marginTop: 24, fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.name}
          </div>
          {/* One span per word so the line wraps cleanly around the highlighted word. */}
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 9, marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "#94a3b8" }}>
            {words(before).map((w, i) => <span key={`b${i}`}>{w}</span>)}
            <span style={{ color: "#10b981" }}>{emphasis}</span>
            {words(after).map((w, i) => <span key={`a${i}`}>{w}</span>)}
          </div>
          <div style={{ marginTop: 40, fontSize: 24, color: "#f8fafc" }}>{new URL(siteConfig.url).host}</div>
        </div>
        <img
          src={photoSrc}
          width={340}
          height={340}
          style={{ borderRadius: 12, objectFit: "cover" }}
          alt=""
        />
      </div>
    ),
    ogSize,
  );
}
