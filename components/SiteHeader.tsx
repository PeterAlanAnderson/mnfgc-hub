export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white">
          <a href="#top">Minnesota FGC Hub</a>
        </h1>
        <a
          href="#communities"
          className="text-sm font-semibold uppercase tracking-wide text-zinc-300 transition hover:text-white"
        >
          Find Minnesota locals
        </a>
      </div>
    </header>
  );
}
