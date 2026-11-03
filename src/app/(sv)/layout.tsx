import { content } from "@/content/content";
import { Document, pageMetadata } from "@/components/Document";
import "../globals.css";

export const metadata = pageMetadata(content.sv);

// First visit to "/" from a browser that doesn't prefer Swedish goes to the English
// page. Skipped once the visitor has picked a language, and for crawlers.
const redirectScript = `(function(){
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved || location.pathname !== "/") return;
  if (/bot|crawl|spider|slurp|preview|facebookexternalhit/i.test(navigator.userAgent)) return;
  var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  var swedish = langs.some(function (l) { return /^sv\\b/i.test(l); });
  if (!swedish) location.replace("/en/" + location.hash);
})();`;

export default function SwedishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Document t={content.sv} head={<script dangerouslySetInnerHTML={{ __html: redirectScript }} />}>
      {children}
    </Document>
  );
}
