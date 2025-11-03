// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // vigtig ved static export
export const revalidate = false;       // ingen ISR

const BASE = "https://dkflytte.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(); // build-time
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/erhvervsflytning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privatflytning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/om-os`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/priser`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}