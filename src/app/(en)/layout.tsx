import { content } from "@/content/content";
import { Document, pageMetadata } from "@/components/Document";
import "../globals.css";

export const metadata = pageMetadata(content.en);

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Document t={content.en}>{children}</Document>;
}
