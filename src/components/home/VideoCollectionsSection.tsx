import { YouTubeEmbed } from "@next/third-parties/google";
import type { VideoCollection } from "@/lib/videos";

type VideoCollectionsSectionProps = {
  collections: VideoCollection[];
};

function SectionHeader() {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold text-white">Video Collections</h2>
      </div>
    </div>
  );
}

function VideoCard({ video }: { video: VideoCollection["videos"][number] }) {
  return (
    <div className="hover-lift w-[280px] min-w-[280px] overflow-hidden rounded-lg border border-white/10">
      <YouTubeEmbed videoid={video.videoId} style="max-width:100%;" params="rel=0" />
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block truncate border-t border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-300 hover:text-emerald-200"
        title={video.title}
      >
        {video.title}
      </a>
    </div>
  );
}

function PlaylistRow({ collection }: { collection: VideoCollection }) {
  return (
    <article className="rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-4">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
            {collection.year}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">{collection.title}</h3>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {collection.videos.map((video) => (
          <VideoCard key={video.url} video={video} />
        ))}
      </div>
    </article>
  );
}

export function VideoCollectionsSection({ collections }: VideoCollectionsSectionProps) {
  return (
    <section className="animate-fade-up-delay-1 rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-lg sm:p-6">
      <SectionHeader />

      <div className="space-y-5">
        {collections.map((collection) => (
          <PlaylistRow key={collection.title} collection={collection} />
        ))}
      </div>
    </section>
  );
}
