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
  videos: VideoItem[];
};

type CsvVideo = {
  source: string;
  title: string;
  videoUrl: string;
  publishedAt: string;
};

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells;
}

function loadVideosFromCsv(): CsvVideo[] {
  const dataDir = path.join(process.cwd(), "src/data");
  const csvFiles = readdirSync(dataDir).filter((file) => file.endsWith(".csv"));
  const rows: CsvVideo[] = [];

  for (const fileName of csvFiles) {
    const csvPath = path.join(dataDir, fileName);
    const csv = readFileSync(csvPath, "utf8");

    const fileRows = csv
      .split(/\r?\n/)
      .filter(Boolean)
      .slice(1)
      .map((line) => parseCsvLine(line))
      .map((cells) => ({
        source: fileName.replace(".csv", ""),
        title: cells[1],
        videoUrl: cells[2],
        publishedAt: cells[4],
      }))
      .filter((row) => row.title && row.videoUrl && row.publishedAt);

    rows.push(...fileRows);
  }

  return rows;
}

export function getVideoCollections(): VideoCollection[] {
  const videos = loadVideosFromCsv();
  const grouped = new Map<string, CsvVideo[]>();

  for (const video of videos) {
    if (!grouped.has(video.source)) grouped.set(video.source, []);
    grouped.get(video.source)?.push(video);
  }

  return [...grouped.entries()]
    .map(([source, rows]) => {
      const sourceLabel = source
        .replace(/^youtube-playlist-links-/, "")
        .replace(/-\d{4}-\d{2}-\d{2}$/, "")
        .slice(0, 24);
      const newestYear = Math.max(...rows.map((row) => new Date(row.publishedAt).getUTCFullYear()));

      return {
        title: `Playlist ${sourceLabel}`,
        year: newestYear,
        videos: rows.slice(0, 10).map((row) => {
          const parsed = new URL(row.videoUrl);
          const videoId = parsed.searchParams.get("v") ?? "";
          return { url: row.videoUrl, videoId, title: row.title };
        }),
      };
    })
    .sort((a, b) => b.year - a.year);
}
