// server component (ingen "use client")
import type { Metadata } from "next";

const CANONICAL = "/pricing"; // skift til "/priser" hvis det er din URL

export const metadata: Metadata = {
  title: "Flyttepriser – gennemsigtige timepriser & pakker | DK Flytte",
  description:
    "Se flyttepriser og pakker til privat- og erhvervsflytning. Gennemsigtig afregning pr. time (min. 2 timer), ekstra services som tunge løft, flyttekasser, handyman og slutrengøring. København, Nordsjælland & Sjælland.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "flyttepriser",
    "flyttefirma priser",
    "timepris flytning",
    "privatflytning pris",
    "erhvervsflytning pris",
    "tunge løft gebyr",
    "flyttekasser",
    "handyman",
    "slutrengøring",
    "København",
    "Nordsjælland",
    "Sjælland",
  ],
  openGraph: {
    type: "website",
    title: "Flyttepriser – gennemsigtige timepriser & pakker | DK Flytte",
    description:
      "Få overblik over priser og ekstra services: tunge løft, flyttekasser, handyman og slutrengøring. Afregning pr. time (min. 2 timer).",
    url: CANONICAL,
    images: [
      {
        url: "/dkflytte_3.jpg",
        width: 1200,
        height: 630,
        alt: "DK Flytte – Priser og flyttepakker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyttepriser – gennemsigtige timepriser & pakker | DK Flytte",
    description:
      "Timepriser, pakker og ekstra services til privat- og erhvervsflytning i København & Sjælland.",
    images: ["/dkflytte_3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
