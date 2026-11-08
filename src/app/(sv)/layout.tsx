import { content } from "@/content/content";
import { Document, pageMetadata } from "@/components/Document";
import "../globals.css";

export const metadata = pageMetadata(content.sv);

// Visitors whose browser doesn't ask for Swedish are sent from "/" to "/en/" by
// Caddy on the server (see deploy/Caddyfile.snippet), before this page loads.
export default function SwedishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Document t={content.sv}>{children}</Document>;
}
