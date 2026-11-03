import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emits en/index.html, so Caddy serves /en/ without extra rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
