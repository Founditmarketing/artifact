import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";

const SITE = "https://artifactsselfstorage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, priority: 1.0, changeFrequency: "monthly" },
    {
      url: `${SITE}/size-guide`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE}/reserve`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    ...LOCATIONS.map((loc) => ({
      url: `${SITE}/locations/${loc.slug}`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
  ];
}
