import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dkflytte.dk"),
  title: {
    default: "DK Flytte – Flyttefirma i København & Sjælland",
    template: "%s | DK Flytte"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description: "Pålideligt flyttefirma for privat- og erhvervsflytning.",
  openGraph: {
    siteName: "DK Flytte",
    type: "website",
    locale: "da_DK"
  },
  alternates: {
    canonical: "/"
  },
  robots: { index: true, follow: true }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cookiebot CMP */}
        <Script 
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js" data-cbid="588a22c3-78eb-4d69-abe7-568c80ef1efc"
          data-blockingmode="auto" type="text/javascript"
        ></Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}
