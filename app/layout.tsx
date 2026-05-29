import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito, gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import { siteConfig } from "./data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Gagan Chandra",
    "Backend Engineer",
    "AI Developer",
    "FastAPI",
    "Machine Learning",
    "Software Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    title: siteConfig.title,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@gagannchandra",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
