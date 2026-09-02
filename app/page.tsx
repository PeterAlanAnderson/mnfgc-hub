import MixfestBanner from "@/components/MixfestBanner";
import CommunitySections from "@/components/CommunitySections";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-zinc-950">
      <SiteHeader />
      <main className="flex-1">
        <MixfestBanner />
        <div id="communities">
          <CommunitySections />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
