import { content } from "@/content/content";
import { ogImage } from "@/components/OgImage";

export const dynamic = "force-static";

export function GET() {
  return ogImage(content.sv);
}
