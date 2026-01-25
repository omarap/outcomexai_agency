// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://outcomexai.com",
      lastModified: new Date(),
    },
    {
      url: "https://outcomexai.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://outcomexai.com/services",
      lastModified: new Date(),
    },
  ];
}
