import Image from "next/image";

type HeroSectionProps = {
  channelUrl: string;
};

export function HeroSection({ channelUrl }: HeroSectionProps) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-2 rounded-3xl border border-white/15 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400/30 via-transparent to-amber-400/25 blur-xl" />
          <div className="relative overflow-hidden rounded-full border border-white/20 bg-[#0d1814] p-4">
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/15">
              <Image
                src="/logo.webp"
                alt="Raah-e-Hidayah logo"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Raah-e-Hidayah
        </h1>

        <p className="mt-3 max-w-2xl text-pretty text-zinc-300 sm:text-lg">
          Authentic Islamic lectures, Majalis, and spiritual guidance from trusted scholars,
          delivered with sincerity and clarity.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`${channelUrl}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#ff0000] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-[#e00000]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.6V8.4L16 12l-6.4 3.6Z" />
            </svg>
            Subscribe on YouTube
          </a>
          <a
            href="mailto:raahehidayah01@gmail.com?subject=Contact%20from%20Raah-e-Hidayah%20Website"
            className="inline-flex items-center rounded-xl border border-[#8ab4f8]/35 bg-[#1a73e8]/20 px-5 py-3 text-sm font-semibold text-[#d2e3fc] transition hover:-translate-y-0.5 hover:bg-[#1a73e8]/30"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current">
              <path d="M3 5.5h18a1 1 0 0 1 1 1V8l-10 6L2 8V6.5a1 1 0 0 1 1-1Zm19 4.3v7.7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.8l9.5 5.7a1 1 0 0 0 1 0L22 9.8Z" />
            </svg>
            Email Us
          </a>
          <a
            href="https://wa.me/919502039079"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-[#25d366]/35 bg-[#25d366]/20 px-5 py-3 text-sm font-semibold text-[#dcffe8] transition hover:-translate-y-0.5 hover:bg-[#25d366]/30"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current">
              <path d="M20 4A10 10 0 0 0 4.2 16.8L3 22l5.4-1.1A10 10 0 1 0 20 4Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.6.7-3-.2-.3A8 8 0 1 1 12 20Zm4.4-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.1.2-.6.8-.7.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.2-1.3-1.3-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1 2.3c.1.1 1.4 2.2 3.3 3.1 2 .9 2 .6 2.4.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
            </svg>
            WhatsApp 1
          </a>
          <a
            href="https://wa.me/917994671492"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-[#25d366]/35 bg-[#25d366]/20 px-5 py-3 text-sm font-semibold text-[#dcffe8] transition hover:-translate-y-0.5 hover:bg-[#25d366]/30"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mr-2 h-4 w-4 fill-current">
              <path d="M20 4A10 10 0 0 0 4.2 16.8L3 22l5.4-1.1A10 10 0 1 0 20 4Zm-8 16a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.6.7-3-.2-.3A8 8 0 1 1 12 20Zm4.4-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.1.2-.6.8-.7.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.2-1.3-1.3-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.7s.7 2 1 2.3c.1.1 1.4 2.2 3.3 3.1 2 .9 2 .6 2.4.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
            </svg>
            WhatsApp 2
          </a>
        </div>
      </div>
    </section>
  );
}
