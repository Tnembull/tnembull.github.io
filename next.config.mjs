import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // generate static HTML ke folder `out`
  output: "export",

  // routing statis GitHub Pages lebih stabil dengan trailing slash
  trailingSlash: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,

  // ⚠ Redirects tidak didukung di static export (akan diabaikan).
  // Kalau butuh redirect, buat /index.html dengan meta refresh manual di repo Pages.
  // redirects: async () => [...],

  images: {
    // Next/Image optimization dimatikan saat export
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media.dev.to", pathname: "/**" },
      { protocol: "https", hostname: "dev-to-uploads.s3.amazonaws.com", pathname: "/**" },
      { protocol: "https", hostname: "media2.dev.to", pathname: "/**" },
      { protocol: "https", hostname: "media.geeksforgeeks.org", pathname: "/**" },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

const withMDX = createMDX({
  options: { remarkPlugins: [remarkGfm] },
});

export default withMDX(nextConfig);
