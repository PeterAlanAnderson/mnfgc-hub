export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-400 sm:px-6 lg:px-8">
        <p>Want to get your community listed on this site?</p>
        <p className="mt-1">
          Reach out to simoncbarjona /{" "}
          <a
            href="https://www.runthemix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 underline decoration-zinc-600 underline-offset-2 transition hover:text-white hover:decoration-white"
          >
            RunTheMix.com
          </a>{" "}
          on Discord.
        </p>
      </div>
    </footer>
  );
}
