import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { AnimatedBackground } from "@/components/animations/animated-background";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#081021",
};

export const metadata: Metadata = {
  title: "ARTIST PROMO MUSIC | Music Promotion Services by Eight Mike",
  description: "Professional music promotion services to help artists gain visibility on streaming platforms. Get your music featured on curated playlists and reach new listeners.",
  keywords: ["music promotion", "artist promotion", "spotify playlist", "music marketing", "playlist placement", "music curator", "eight mike"],
  creator: "Eight Mike",
  publisher: "Artist Promo Music",
  authors: [{ name: "Eight Mike", url: "https://www.instagram.com/eight_mike_music_promo" }],
  applicationName: "Artist Promo Music",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://artistpromomusic.com",
    siteName: "Artist Promo Music",
    title: "ARTIST PROMO MUSIC | Music Promotion Services by Eight Mike",
    description: "Professional music promotion services to help artists gain visibility on streaming platforms. Get your music featured on curated playlists and reach new listeners.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artist Promo Music - Promote your music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTIST PROMO MUSIC | Music Promotion Services by Eight Mike",
    description: "Professional music promotion services to help artists gain visibility on streaming platforms. Get your music featured on curated playlists and reach new listeners.",
    images: ["/twitter-image.jpg"],
    creator: "@eight_mike_music_promo",
  },
  alternates: {
    canonical: "https://artistpromomusic.com",
  },
  metadataBase: new URL("https://artistpromomusic.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Google Ads Tag via next/script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16988432997"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16988432997');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <AnimatedBackground variant="gradient" intensity="medium" interactive={false} />
        <div className="relative flex min-h-screen flex-col bg-transparent">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
