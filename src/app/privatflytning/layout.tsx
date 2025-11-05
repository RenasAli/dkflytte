import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatflytning DK Flytte",
  description:
    "Skal du flytte i nyt hjem? DK Flytte gør privatflytning enkel, sikker og problemfri – pakning, transport, udpakning, tunge løft, dør-til-dør og møbelopbevaring i København, Nordsjælland og Sjælland.",
  alternates: { canonical: "/privatflytning" },
  openGraph: {
    type: "website",
    title: "Privatflytning – tryg og effektiv flytteservice | DK Flytte",
    description:
      "Professionel privatflytning med pakning, transport, udpakning, tunge løft og opbevaring. Vi dækker København, Nordsjælland og Sjælland.",
    url: "/privatflytning",
    images: [{ url: "/dkflytte_3.jpg", width: 1200, height: 630, alt: "DK Flytte – Privatflytning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privatflytning – tryg og effektiv flytteservice | DK Flytte",
    description: "Enkel, sikker og problemfri privatflytning i København & Sjælland.",
    images: ["/dkflytte_3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function PrivateMovingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
