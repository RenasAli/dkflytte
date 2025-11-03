import type { Metadata } from "next";

const CANONICAL = "/about";

export const metadata: Metadata = {
  title: "Om DK Flytte – professionelt flyttefirma i København & Sjælland",
  description:
    "Lær DK Flytte at kende: værdier, vision og teamet bag. Vi leverer tryg privatflytning, erhvervsflytning, express og opbevaring i København, Nordsjælland og resten af Sjælland.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    title: "Om DK Flytte – dit flyttefirma",
    description:
      "Punktlighed, kvalitet og tryghed. Mød holdet, se vores værdier og hvorfor kunder vælger os.",
    url: CANONICAL,
    images: [
      {
        url: "/dkflytte_3.jpg",
        width: 1200,
        height: 630,
        alt: "DK Flytte – Om os",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om DK Flytte – professionelt flyttefirma",
    description:
      "Vores historie, værdier og kvalitetssikring. Privatflytning, erhvervsflytning, express og opbevaring.",
    images: ["/dkflytte_3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
