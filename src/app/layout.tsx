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

const TITLE = `${DATA.name}`;
const SITE_NAME = `${DATA.name} Portfolio`;
const DESCRIPTION =
  `Portofolio ${DATA.name} (Bulin) - Backend Developer di Bandar Lampung. ExpressJs, NodeJs, TypeScript, PostgreSQL untuk pengembangan aplikasi modern.`;
const OG_IMAGE = `${DATA.url}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Bulin",
    "Tnembull",
    "Tnembull Developer",
    "Bulin Developer",
    "Bulin Portfolio",
    "Tnembull Portfolio",
    "Bulin Dev",
    "Muhammad Nur Ashiddiqi",
    "BackEnd Developer",
    "FrontEnd Developer",
    "FullStack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Back-end Developer",
    "Front-end Developer",
    "Full-stack Developer",
    "Next.js",
    "Express.js",
    "Prisma",
    "Tailwind CSS",
    "Squelize",
    "Django",
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
    locale: "id_ID", 
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@tnembull",
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
    jobTitle: "Backend Developer",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
