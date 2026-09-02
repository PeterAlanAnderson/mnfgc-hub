import { communityRegions } from "@/lib/communities";
import CommunityCard from "@/components/CommunityCard";

export default function CommunitySections() {
  const localRegions = communityRegions.filter((region) => region.kind === "local");
  const serverRegions = communityRegions.filter((region) => region.kind === "server");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
          Play offline
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Local communities
        </h2>
        <p className="mt-4 text-zinc-300">
          Find an in-person scene, then show up. Weeklies, monthlies, and
          majors first — Discord servers are listed at the bottom if you need
          a way in.
        </p>
      </div>

      <nav
        aria-label="Community regions"
        className="mt-8 flex flex-wrap gap-2"
      >
        {communityRegions.map((region) => (
          <a
            key={region.id}
            href={`#${region.id}`}
            className={
              region.kind === "local"
                ? "rounded-full border border-red-500/40 bg-red-600/15 px-4 py-1.5 text-sm font-semibold text-white transition hover:border-red-400 hover:bg-red-600/25"
                : "rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-zinc-400 transition hover:border-white/30 hover:text-zinc-200"
            }
          >
            {region.navLabel}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-16">
        {localRegions.map((region) => (
          <section key={region.id} id={region.id} className="scroll-mt-24">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white">
              {region.title}
            </h3>
            <p className="mt-2 max-w-2xl text-zinc-300">{region.blurb}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {region.communities.map((community) => (
                <CommunityCard key={community.slug} community={community} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {serverRegions.map((region) => (
        <section
          key={region.id}
          id={region.id}
          className="mt-20 scroll-mt-24 border-t border-white/10 pt-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Online
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-zinc-200">
            {region.title}
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-500">{region.blurb}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {region.communities.map((community) => (
              <CommunityCard
                key={community.slug}
                community={community}
                variant="server"
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
