import { HeroActions } from "./HeroActions";
import { HeroLogo } from "./HeroLogo";

type HeroSectionProps = {
  channelUrl: string;
};

export function HeroSection({ channelUrl }: HeroSectionProps) {
  return (
    <section className="animate-fade-up rounded-3xl border border-white/15 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <HeroLogo />

        <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Raah-e-Hidayah
        </h1>

        <div className="mt-3 max-w-3xl space-y-2 text-pretty text-zinc-300 sm:text-lg">
          <p>
            Raah-e-Hidayah is a humble khidmah of deen. It began with a Musabaqah gathering at our
            local masjid in Manikbhandar, Nizamabad, and by the guidance of our scholars, it now
            serves the ummah through beneficial Islamic content.
          </p>
          <p lang="ur" dir="rtl" className="text-zinc-200">
            راہِ ہدایت دین کی ایک عاجزانہ خدمت ہے۔ اس کا آغاز نظام آباد کے مقامی مسجد، منک
            بھنڈار میں ایک مسابقہ اجتماع سے ہوا۔ علمائے کرام کی رہنمائی سے یہ پلیٹ فارم اب
            امت تک مفید اسلامی مواد پہنچا رہا ہے۔
          </p>
          <p className="italic text-zinc-400">
            Raah-e-Hidayah deen ki aik aajizana khidmat hai. Is ka aaghaz Nizamabad ke maqami
            masjid, Manikbhandar mein aik Musabaqah ijtima se hua. Ulama-e-kiram ki rehnumai se
            yeh platform ab ummah tak mufeed Islami mawad pohancha raha hai.
          </p>
        </div>

        <HeroActions channelUrl={channelUrl} />
      </div>
    </section>
  );
}
