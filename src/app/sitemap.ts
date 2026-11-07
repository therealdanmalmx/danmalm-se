import type { MetadataRoute } from "next";
import { content } from "@/content/content";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

// Both language versions, each listing the other as an alternate.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    sv: new URL(content.sv.path, siteConfig.url).href,
    en: new URL(content.en.path, siteConfig.url).href,
  };
  return Object.values(languages).map((url) => ({
    url,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
