import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";

// ============================================================
// 01. FONTS
// ============================================================

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const aquifer = localFont({
  src: "../fonts/Aquifer.ttf",
  display: "swap",
  variable: "--font-aquifer",
  weight: "400",
  style: "normal",
});

// ============================================================
// 02. SITE CONFIGURATION
// ============================================================

const siteURL = process.env.NEXT_SITE_URL ?? "https://www.ninety4film.com";

const siteName = "Ninety 4 Film";

const siteTitle = "Ninety 4 Film | Film & Television Production";

const siteDescription =
  "Ninety 4 Film is a full-service film and television production company based in Cairo, Egypt. Creative development, production, and post-production.";

const openGraphImage = "/openGraph.png";

// ============================================================
// 03. SEO METADATA
// ============================================================

export const metadata: Metadata = {
  // ----------------------------------------------------------
  // GENERAL
  // ----------------------------------------------------------

  metadataBase: new URL(siteURL),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  applicationName: siteName,

  // ----------------------------------------------------------
  // OPEN GRAPH
  // ----------------------------------------------------------

  openGraph: {
    type: "website",
    locale: "en_US",

    url: siteURL,
    siteName,

    title: siteTitle,
    description: siteDescription,

    images: [
      {
        url: openGraphImage,
        width: 1643,
        height: 784,
        alt: "Ninety 4 Film — Film & Television Production",
        type: "image/png",
      },
    ],
  },

  // ----------------------------------------------------------
  // TWITTER / X
  // ----------------------------------------------------------

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [openGraphImage],
  },

  // ----------------------------------------------------------
  // SEARCH ENGINE INDEXING
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // ADDITIONAL METADATA
  // ----------------------------------------------------------

  category: "Film & Television Production",
};

// ============================================================
// 04. VIEWPORT
// ============================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#611512",
};

// ============================================================
// 05. ROOT LAYOUT
// ============================================================

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${aquifer.variable} h-full`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        {/* Accessibility: Skip Navigation */}
        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:fixed
            focus:top-4
            focus:left-4
            focus:z-50
            focus:bg-primary
            focus:px-4
            focus:py-3
            focus:text-primary-foreground
          "
        >
          Skip to main content
        </a>

        {/* Global Header will be added here */}

        <Header />

        {children}

        {/* Global Footer will be added here */}
      </body>
    </html>
  );
}
