import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/site.config";
import { content, type Content } from "@/content/content";
import { ogPath, ogSize } from "@/components/OgImage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export function pageMetadata(t: Content): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: t.path,
      languages: { sv: content.sv.path, en: content.en.path, "x-default": content.en.path },
    },
    openGraph: {
      type: "profile",
      locale: t.locale === "sv" ? "sv_SE" : "en_GB",
      url: t.path,
      title: siteConfig.name,
      description: t.meta.description,
      images: [{ url: ogPath(t), ...ogSize, alt: t.meta.title }],
    },
    twitter: { card: "summary_large_image" },
  };
}

// schema.org Person data, so search engines can tie the page to the name,
// role, location and profiles.
function personJsonLd(t: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: t.role.split(" · ")[0],
    description: t.meta.description,
    url: new URL(t.path, siteConfig.url).href,
    image: new URL("/images/daniel.jpg", siteConfig.url).href,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone.href,
    address: { "@type": "PostalAddress", addressLocality: "Borås", addressCountry: "SE" },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [...t.skills.daily, ...t.skills.experienced].map((s) => s.name),
    knowsLanguage: t.languages.map((l) => l.name),
  };
}

// Shared <html>/<body> for the Swedish and English root layouts.
export function Document({
  t,
  head,
  children,
}: {
  t: Content;
  head?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang={t.locale}>
      {/* A plain <head> is correct in an App Router root layout; the rule targets next/head. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {head}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(t)).replace(/</g, "\\u003c") }}
        />
        <link rel="preconnect" href="https://app.analyzati.com" />
        {/* Analyzati page analytics */}
        <script
          data-host="https://app.analyzati.com"
          data-dnt="false"
          src="https://app.analyzati.com/js/script.js?v=1793189645"
          id="ZwSg9rf6GA"
          async
          defer
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
