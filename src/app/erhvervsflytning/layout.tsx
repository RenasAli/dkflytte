import type { Metadata } from "next";

const CANONICAL = "/erhvervsflytning"; 

export const metadata: Metadata = {
  title:
    "Erhvervsflytning DK Flytte",
  description:
    "Effektiv og sikker erhvervsflytning med minimal nedetid. DK Flytte håndterer kontorer, butikker og lagerfaciliteter – planlægning, pakning, transport og udpakning i København, Nordsjælland og resten af Sjælland.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    title:
      "Erhvervsflytning – effektiv kontorflytning uden nedetid | DK Flytte",
    description:
      "Professionel firmaflytning: kontormøbler, IT-udstyr og arkiv transporteres sikkert. Vi dækker København, Nordsjælland og hele Sjælland – også nationalt og internationalt.",
    url: CANONICAL,
    images: [
      {
        url: "/dkflytte_6.jpg",
        width: 1200,
        height: 630,
        alt: "DK Flytte – Erhvervsflytning og kontorflytning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Erhvervsflytning – kontorflytning uden nedetid | DK Flytte",
    description:
      "Sikker, effektiv erhvervsflytning i København & Sjælland. Planlægning, pakning, transport og udpakning.",
    images: ["/dkflytte_6.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function BusinessMovingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
