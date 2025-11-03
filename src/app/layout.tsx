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
  const GTM_ID = "GTM-NDWQDJ4T";
  return (
    <html lang="en">
      <head>
        {/* Consent Mode default  */}
        <Script id="gtm-consent-default" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* GTM */}
        {GTM_ID && (
          <Script id="gtm-base" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        {/* Cookiebot CMP */}
        <Script 
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js" data-cbid="588a22c3-78eb-4d69-abe7-568c80ef1efc"
          data-blockingmode="auto" type="text/javascript"
        >
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}
