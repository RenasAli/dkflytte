import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dkflytte.dk"),
  title: {
    default: "DK Flytte",
    template: "%s",
  },
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  description: "Pålideligt flyttefirma for privat- og erhvervsflytning.",
  openGraph: {
    siteName: "DK Flytte",
    type: "website",
    locale: "da_DK",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = "GTM-NDWQDJ4T";

  return (
    <html lang="da">
      <head>
        {/* Cookiebot skal først når du bruger blockingmode=auto */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="588a22c3-78eb-4d69-abe7-568c80ef1efc"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />

        {/* Consent Mode default (ok at beholde) */}
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
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
