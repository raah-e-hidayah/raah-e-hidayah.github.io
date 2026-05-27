import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type VideoItem = {
  url: string;
  videoId: string;
  title: string;
};

export type VideoCollection = {
  title: string;
  year: number;
  month: number;
  videos: VideoItem[];
};

type JsonVideo = {
  title: string;
  url: string;
};

type JsonPlaylist = {
  title: string;
  year: number;
  month: number;
  videos: JsonVideo[];
};

function loadPlaylistsFromJson(): JsonPlaylist[] {
  const jsonDir = path.join(process.cwd(), "src/data/json");
  const jsonFiles = readdirSync(jsonDir).filter((file) => file.endsWith(".json"));

  const playlists: JsonPlaylist[] = [];
  for (const fileName of jsonFiles) {
    const filePath = path.join(jsonDir, fileName);
    const raw = readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw) as JsonPlaylist;
    if (
      !parsed?.title ||
      !parsed?.year ||
      !parsed?.month ||
      !Array.isArray(parsed?.videos)
    ) {
      continue;
    }
    playlists.push(parsed);
  }

  return playlists;
}

export function getVideoCollections(): VideoCollection[] {
  return loadPlaylistsFromJson()
    .map((playlist) => ({
      title: playlist.title,
      year: playlist.year,
      month: playlist.month,
      videos: playlist.videos.slice(0, 10).map((video) => {
        const parsed = new URL(video.url);
        const videoId = parsed.searchParams.get("v") ?? "";
        return { url: video.url, videoId, title: video.title };
      }),
    }))
    .sort((a, b) => b.year - a.year || b.month - a.month || a.title.localeCompare(b.title));
}
