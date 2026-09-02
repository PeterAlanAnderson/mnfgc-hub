import { SITE_URL } from "@/lib/site";

export const MIXFEST_URL = "https://www.start.gg/tournament/midwest-mixfest-26";
export const MIXFEST_INFO_URL = "https://www.runthemix.com/mixfest";

export const mixfestJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Minnesota FGC Hub",
      url: SITE_URL,
      description: "Find Minnesota fighting game communities, locals, and events.",
    },
    {
      "@type": "Event",
      name: "Midwest Mixfest 2026",
      description:
        "The largest fighting game tournament in the upper Midwest. Three days of brackets, side events, and community in Saint Paul, Minnesota.",
      startDate: "2026-11-13",
      endDate: "2026-11-15",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      url: MIXFEST_URL,
      image: `${SITE_URL}/logos/mixfest26_bg.webp`,
      location: {
        "@type": "Place",
        name: "DoubleTree Downtown Saint Paul",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Saint Paul",
          addressRegion: "MN",
          addressCountry: "US",
        },
      },
    },
  ],
};
