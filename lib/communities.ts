export type Community = {
  slug: string;
  name: string;
  city: string;
  /** Filename inside `public/logos/`. Cards fall back to initials until the file exists. */
  logoFile: string;
  /** Use `light` for logos designed on a white background. */
  logoWell?: "dark" | "light";
  website?: string;
  discord?: string;
  /** Overrides the default city + Minnesota logo alt text. */
  logoAlt?: string;
};

export type CommunityRegion = {
  id: string;
  title: string;
  navLabel: string;
  blurb: string;
  kind: "local" | "server";
  communities: Community[];
};

export function communityLogoAlt(community: Community): string {
  return (
    community.logoAlt ??
    `${community.name} logo, ${community.city}, Minnesota fighting game community`
  );
}

export const communityRegions: CommunityRegion[] = [
  {
    id: "twin-cities",
    title: "Minnesota Twin Cities locals",
    navLabel: "Twin Cities",
    blurb:
      "Weekly in-person fighting game events in Minneapolis and Saint Paul, Minnesota. Show up, play, and meet the scene.",
    kind: "local",
    communities: [
      {
        slug: "runthemix",
        name: "RunTheMix",
        city: "Minneapolis / Saint Paul",
        logoFile: "rtm_logo.png",
        website: "https://www.runthemix.com",
        discord: "https://discord.gg/suwunWB8Sf",
      },
      {
        slug: "the-good-fight",
        name: "The Good Fight",
        city: "Minneapolis",
        logoFile: "the-good-fight.png",
        discord: "https://discord.gg/lcl",
      },
      {
        slug: "retro-black-sheep",
        name: "Retro Black Sheep",
        city: "Twin Cities",
        logoFile: "retro-black-sheep.png",
        discord: "https://discord.gg/ZSqCjj9dyX",
      },
    ],
  },
  {
    id: "greater-minnesota",
    title: "Greater Minnesota Local Communities",
    navLabel: "Greater Minnesota",
    blurb:
      "In-person Minnesota fighting game locals beyond the metro — St. Cloud, Fargo–Moorhead, and more. Travel for a weekly or a monthly and you’ll have a bracket waiting.",
    kind: "local",
    communities: [
      {
        slug: "fargo-fgc",
        name: "Fargo FGC",
        city: "Fargo / Moorhead",
        logoFile: "fargo_fgc_white_bg.png",
        logoWell: "light",
        website: "https://www.fargofgc.com",
        discord: "https://discord.gg/URYy7pjugG",
      },
      {
        slug: "st-cloud-fgc",
        name: "St Cloud FGC",
        city: "St. Cloud",
        logoFile: "st-cloud-fgc.webp",
        discord: "https://discord.com/invite/dcVhkRYFJK",
      },
    ],
  },
  {
    id: "discord-servers",
    title: "Minnesota Discord servers",
    navLabel: "Discord Servers",
    blurb:
      "Discord servers meeting your scene, netplay, and finding a local. Use these to get plugged in, then go play offline.",
    kind: "server",
    communities: [
      {
        slug: "mnfgc",
        name: "Minnesota FGC",
        city: "Statewide",
        logoFile: "mnfgc_pfp.png",
        logoAlt:
          "Minnesota Fighting Game Community (MNFGC) logo: orange Minnesota silhouette and MNFGC text on a starry sky",
        discord: "https://discord.gg/Drcx8rhwuY",
      },
      {
        slug: "mn-tekken",
        name: "Minnesota Tekken",
        city: "Statewide",
        logoFile: "mntekken-icon-1024.png",
        logoAlt:
          "Minnesota Tekken logo: Minnesota silhouette with the Tekken wordmark on a textured blue background",
        discord: "https://discord.gg/j7JXnDVpfB",
      },
      {
        slug: "port-powerup-duluth",
        name: "Port Powerup: Duluth",
        city: "Duluth",
        logoFile: "port-powerup-duluth.png",
        discord: "https://discord.gg/vWjMBWb6nW",
      },
      {
        slug: "duluth-superior-fgc",
        name: "Duluth / Superior FGC",
        city: "Duluth / Superior",
        logoFile: "duluth-superior-fgc.png",
        discord: "https://discord.gg/2Gvasts5FW",
      },
    ],
  },
];
