import Image from "next/image";

const MIXFEST_URL = "https://www.start.gg/tournament/midwest-mixfest-26";
const MIXFEST_INFO_URL = "https://www.runthemix.com/mixfest";

export default function MixfestBanner() {
  return (
    <section
      aria-label="Midwest Mixfest 2026"
      className="relative isolate overflow-hidden border-b border-white/10 bg-zinc-950"
    >
      <Image
        src="/logos/mixfest26_bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-[center_22%] blur-[3px] scale-105"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/50 to-zinc-950/35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-red-950/20"
      />

      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[34rem] sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
          Featured event
        </p>
        <h1 className="sr-only">Midwest Mixfest</h1>
        <Image
          src="/logos/MixfestLogoGen2Block_White.png"
          alt="Midwest Mixfest"
          width={4064}
          height={1871}
          priority
          className="mt-4 h-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
        <p className="mt-6 max-w-xl text-lg text-zinc-100 sm:text-xl">
          The largest fighting game tournament in the upper Midwest. Three days
          of brackets, side events, and community in Saint Paul.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          Nov 13–15, 2026 · DoubleTree Downtown Saint Paul
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={MIXFEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Register on Start.gg
          </a>
          <a
            href={MIXFEST_INFO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
          >
            Event details
          </a>
        </div>
      </div>
    </section>
  );
}
