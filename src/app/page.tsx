import { channelUrl, offerings, topics } from "@/constants/home";
import { HeroSection } from "@/components/home/hero/HeroSection";
import { InfoSection } from "@/components/home/InfoSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { VideoCollectionsSection } from "@/components/home/VideoCollectionsSection";
import { getVideoCollections } from "@/lib/videos";

export default function Home() {
  const videoCollections = getVideoCollections();

  return (
    <main className="relative min-h-screen overflow-hidden text-zinc-100">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <HeroSection channelUrl={channelUrl} />
        <VideoCollectionsSection collections={videoCollections} />
        <InfoSection offerings={offerings} topics={topics} />
        <SiteFooter channelUrl={channelUrl} />
      </div>
    </main>
  );
}
