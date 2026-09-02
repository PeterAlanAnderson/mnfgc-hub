import MixfestBanner from "@/components/MixfestBanner";
import CommunitySections from "@/components/CommunitySections";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { mixfestJsonLd } from "@/lib/mixfest";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mixfestJsonLd) }}
      />
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
