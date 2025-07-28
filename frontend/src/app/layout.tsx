import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import PageTransition from '@/components/PageTransition';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamattri.vercel.app"),
  title: "Shubham Attri — Systems / Unfiltered",
  description: "I build systems that don't break. Technical Lead, Investment Banking. Data, infra, and API specialist. Writing, reflecting, and building in public.",
  openGraph: {
    title: "Shubham Attri — Systems / Unfiltered",
    description: "I build systems that don't break. Technical Lead, Investment Banking. Data, infra, and API specialist. Writing, reflecting, and building in public.",
    url: "/",
    siteName: "Shubham Attri",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Shubham Attri OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Attri — Systems / Unfiltered",
    description: "I build systems that don't break. Technical Lead, Investment Banking. Data, infra, and API specialist. Writing, reflecting, and building in public.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Shubham Attri OG Image",
      },
    ],
    creator: "@shubhamattri"
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
