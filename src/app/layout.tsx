import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const editorialFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#123D35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanmotion.in"),
  title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
  description: siteConfig.subheadline,
  keywords: [
    "car rental",
    "self drive rental",
    "executive car rental India",
    "premium car hire",
    "urban mobility",
    "Urban Motion",
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.subheadline,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.heroCar.imageSrc,
        width: 1200,
        height: 675,
        alt: siteConfig.heroCar.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.subheadline,
    images: [siteConfig.heroCar.imageSrc],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${editorialFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
