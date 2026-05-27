type SiteFooterProps = {
  channelUrl: string;
};

export function SiteFooter({ channelUrl }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="animate-fade-up-delay-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm text-zinc-300 backdrop-blur-lg sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Raah-e-Hidayah. Community media khidmah for Islamic programs and events.</p>

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn rounded-md border border-white/20 px-2.5 py-1 hover:bg-white/10"
          >
            YouTube
          </a>
          <a
            href="mailto:raahehidayah01@gmail.com"
            className="smooth-btn rounded-md border border-white/20 px-2.5 py-1 hover:bg-white/10"
          >
            Email
          </a>
          <a
            href="https://wa.me/919502039079"
            target="_blank"
            rel="noopener noreferrer"
            className="smooth-btn rounded-md border border-white/20 px-2.5 py-1 hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
