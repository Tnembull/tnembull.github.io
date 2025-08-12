// app/layout.tsx
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ---- SEO METADATA (final) ----
const TITLE = `${DATA.name}`;
const SITE_NAME = `${DATA.name}'s Portfolio`;
const DESCRIPTION =
  `Portofolio ${DATA.name} (Bulin) — Backend & Fullstack Developer di Bandar Lampung. Berpengalaman membangun aplikasi modern dengan Next.js, TypeScript, PostgreSQL, dan Docker.`;
const OG_IMAGE = `${DATA.url}/og.png`; // pastikan min. 1200x630

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Bulin",
    "Muhammad Nur Ashiddiqi",
    "Backend Developer",
    "Fullstack Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Nur Ashiddiqi (Bulin)", url: DATA.url }],
  creator: "Muhammad Nur Ashiddiqi (Bulin)",
  publisher: "Muhammad Nur Ashiddiqi (Bulin)",
  alternates: { canonical: DATA.url },

  openGraph: {
    type: "website",
    url: DATA.url,
    title: TITLE,
    siteName: SITE_NAME,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Portfolio Preview`,
      },
    ],
    locale: "id_ID", // ganti ke "id_ID" kalau konten full Bahasa Indonesia
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@bulin_dev", // ganti ke handle X kamu jika berbeda
  },

  icons: { icon: "/me.png", apple: "/me.png" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    alternateName: DATA.nickname,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Newus Teknologi",
      url: "https://newus.id",
    },
    sameAs: [
      DATA.contact.social?.GitHub?.url,
      DATA.contact.social?.LinkedIn?.url,
      DATA.contact.social?.Instagram?.url,
      `mailto:${DATA.contact.email}`,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandar Lampung",
      addressCountry: "ID",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: DATA.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${DATA.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="u7rTjfDkd2ZmGu2ltE7v_PXoWUQhvAlliC9G0-nKXdI" />
        <meta name="color-scheme" content="dark light" />
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Analytics />
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
