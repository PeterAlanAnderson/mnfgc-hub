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
};

export type CommunityRegion = {
  id: string;
  title: string;
  navLabel: string;
  blurb: string;
  kind: "local" | "server";
  communities: Community[];
};

export const communityRegions: CommunityRegion[] = [
  {
    id: "twin-cities",
    title: "Twin Cities",
    navLabel: "Twin Cities",
    blurb:
      "Weekly in-person events in Minneapolis and Saint Paul. Show up, play, and meet the scene.",
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
    ],
  },
  {
    id: "greater-minnesota",
    title: "Greater Minnesota Local Communities",
    navLabel: "Greater Minnesota",
    blurb:
      "In-person locals beyond the metro. Travel for a weekly or a monthly and you’ll have a bracket waiting.",
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
    ],
  },
  {
    id: "discord-servers",
    title: "Discord Servers",
    navLabel: "Discord Servers",
    blurb:
      "Discord servers meeting your scene, netplay, and finding a local. Use these to get plugged in, then go play offline.",
    kind: "server",
    communities: [
      {
        slug: "mnfgc",
        name: "Minnesota FGC",
        city: "Statewide",
        logoFile: "mnfgc.png",
        discord: "https://discord.gg/Drcx8rhwuY",
      },
      {
        slug: "mn-tekken",
        name: "MN Tekken",
        city: "Statewide",
        logoFile: "mn-tekken.png",
        discord: "https://discord.gg/j7JXnDVpfB",
      },
      {
        slug: "port-powerup-duluth",
        name: "Port Powerup: Duluth",
        city: "Duluth",
        logoFile: "port-powerup-duluth.png",
        discord: "https://discord.gg/vWjMBWb6nW",
      },
    ],
  },
];
