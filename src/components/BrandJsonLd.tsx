export default function BrandJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DK Flytte",
    alternateName: ["DKFlytte", "DK-Flytte"],
    url: "https://dkflytte.dk"
  };
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DK Flytte",
    url: "https://dkflytte.dk",
    logo: "https://dkflytte.dk/logo.png",
    sameAs: [
      // Add when you have it:
      // "https://www.facebook.com/…",
      // "https://www.instagram.com/…",
      // "https://www.linkedin.com/company/…"
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    </>
  );
}