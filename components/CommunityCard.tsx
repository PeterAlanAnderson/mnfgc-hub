import type { Community } from "@/lib/communities";
import OrgLogo from "@/components/OrgLogo";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M19.27 5.33A16.8 16.8 0 0 0 14.89 4l-.23.42a15.4 15.4 0 0 1 3.66 1.18 15.3 15.3 0 0 0-13.64 0A15.4 15.4 0 0 1 8.34 4.4L8.11 4a16.8 16.8 0 0 0-4.38 1.33C1.24 9.47.5 13.5.76 17.47A16.9 16.9 0 0 0 6 20l.9-1.2a11 11 0 0 1-1.7-.82l.42-.33a12.1 12.1 0 0 0 10.76 0l.42.33a11 11 0 0 1-1.7.82L18 20a16.9 16.9 0 0 0 5.24-2.53c.4-4.5-.55-8.5-3.97-12.14ZM8.62 15.1c-1.04 0-1.9-1-1.9-2.2s.84-2.2 1.9-2.2 1.92 1 1.9 2.2-.84 2.2-1.9 2.2Zm6.76 0c-1.04 0-1.9-1-1.9-2.2s.84-2.2 1.9-2.2 1.92 1 1.9 2.2-.86 2.2-1.9 2.2Z" />
    </svg>
  );
}

export default function CommunityCard({
  community,
  variant = "local",
}: {
  community: Community;
  variant?: "local" | "server";
}) {
  return (
    <article
      className={
        variant === "local"
          ? "flex flex-col rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          : "flex flex-col rounded-2xl border border-white/5 bg-zinc-950/60 p-5"
      }
    >
      <p
        className={
          variant === "local"
            ? "text-xs font-semibold uppercase tracking-[0.22em] text-amber-300"
            : "text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500"
        }
      >
        {variant === "server" ? "Discord server" : community.city}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div
          className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 ${
            community.logoWell === "light" ? "bg-white" : "bg-zinc-950"
          }`}
        >
          <OrgLogo name={community.name} logoFile={community.logoFile} />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight text-white">
          {community.name}
        </h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {community.website && (
          <a
            href={community.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
          >
            <GlobeIcon />
            Website
          </a>
        )}
        {community.discord && (
          <a
            href={community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-[#4752c4]"
          >
            <DiscordIcon />
            Discord
          </a>
        )}
        {!community.website && !community.discord && (
          <p className="text-sm text-zinc-400">Links coming soon.</p>
        )}
      </div>
    </article>
  );
}
