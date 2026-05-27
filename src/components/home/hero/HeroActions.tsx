import Image from "next/image";

type ActionLink = {
  href: string;
  label: string;
  className: string;
  iconSrc: string;
  external?: boolean;
};

type HeroActionsProps = {
  channelUrl: string;
};

const actionLinks = (channelUrl: string): ActionLink[] => [
  {
    href: `${channelUrl}?sub_confirmation=1`,
    label: "Subscribe on YouTube",
    className:
      "smooth-btn inline-flex items-center rounded-xl border border-white/30 bg-white px-5 py-3 text-sm font-semibold text-[#111111] shadow-lg shadow-black/20 hover:bg-zinc-100",
    iconSrc: "/youtube.png",
    external: true,
  },
  {
    href: "mailto:raahehidayah01@gmail.com?subject=Contact%20from%20Raah-e-Hidayah%20Website",
    label: "Email Us",
    className:
      "smooth-btn inline-flex items-center rounded-xl border border-[#8ab4f8]/35 bg-[#1a73e8]/20 px-5 py-3 text-sm font-semibold text-[#d2e3fc] hover:bg-[#1a73e8]/30",
    iconSrc: "/gmail.png",
  },
  {
    href: "https://wa.me/919502039079",
    label: "WhatsApp 1",
    className:
      "smooth-btn inline-flex items-center rounded-xl border border-[#25d366]/35 bg-[#25d366]/20 px-5 py-3 text-sm font-semibold text-[#dcffe8] hover:bg-[#25d366]/30",
    iconSrc: "/whatsapp.png",
    external: true,
  },
  {
    href: "https://wa.me/917994671492",
    label: "WhatsApp 2",
    className:
      "smooth-btn inline-flex items-center rounded-xl border border-[#25d366]/35 bg-[#25d366]/20 px-5 py-3 text-sm font-semibold text-[#dcffe8] hover:bg-[#25d366]/30",
    iconSrc: "/whatsapp.png",
    external: true,
  },
];

export function HeroActions({ channelUrl }: HeroActionsProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      {actionLinks(channelUrl).map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={link.className}
        >
          <Image
            src={link.iconSrc}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="mr-2 h-6 w-6 rounded-sm object-contain"
          />
          {link.label}
        </a>
      ))}
    </div>
  );
}
