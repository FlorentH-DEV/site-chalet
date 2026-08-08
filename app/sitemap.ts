import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chaletduhautlanguedoc.com",
      lastModified: new Date(),
    },
    {
      url: "https://chaletduhautlanguedoc.com/chalet",
      lastModified: new Date(),
    },
  ];
}