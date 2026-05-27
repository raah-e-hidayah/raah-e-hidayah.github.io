import Image from "next/image";

export function HeroLogo() {
  return (
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
  );
}
