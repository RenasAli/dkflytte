// server component (ingen "use client")
import type { Metadata } from "next";

const CANONICAL = "/kontakt";

export const metadata: Metadata = {
  title: "Kontakt DK Flytte",
  description:
    "Kontakt DK Flytte for privatflytning, erhvervsflytning, express transport og opbevaring. Hurtig respons 24/7. Vi dækker København, Nordsjælland og resten af Sjælland.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    title: "Kontakt DK Flytte – dit flyttefirma på Sjælland",
    description:
      "Ring eller skriv for et skræddersyet tilbud. Professionel flytteservice for private og erhverv.",
    url: CANONICAL,
    images: [
      {
        url: "/dkflytte_3.jpg",
        width: 1200,
        height: 630,
        alt: "DK Flytte – Kontakt os",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt DK Flytte – få et tilbud",
    description:
      "Kontakt os for privat- og erhvervsflytning i København, Nordsjælland og Sjælland.",
    images: ["/dkflytte_3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
