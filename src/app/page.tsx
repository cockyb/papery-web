import Image from "next/image";
import { AppStoreButton } from "./_components/app-store-button";
import { Footer } from "./_components/footer";
import { Nav } from "./_components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <GalleryShowcase />
        <FeatureList />
        <Download />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate grain overflow-hidden">
      {/* full-bleed wallpaper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/screenshot2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* warm scrim: darkens left for legibility, preserves right wallpaper detail */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.14_0.03_315_/_0.95)_0%,oklch(0.14_0.03_315_/_0.88)_35%,oklch(0.14_0.03_315_/_0.55)_62%,oklch(0.14_0.03_315_/_0.35)_85%,oklch(0.14_0.03_315_/_0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,oklch(0.14_0.03_315_/_0.65)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
        <div className="animate-rise grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Papery 앱 아이콘"
                width={56}
                height={56}
                className="rounded-[13px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.55)] ring-1 ring-white/15"
              />
              <div className="flex flex-col gap-0.5 leading-tight">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-peach/80">
                  Live Wallpaper · macOS
                </span>
                <span className="font-display text-[15px] font-bold text-foreground">
                  Papery
                </span>
              </div>
            </div>

            <h1 className="font-display text-balance text-[clamp(44px,7.2vw,88px)] font-bold leading-[1.02] tracking-[-0.028em] text-foreground [text-wrap:balance] drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
              데스크탑에
              <br />
              <em className="not-italic text-peach">움직임</em>을 더하다
            </h1>

            <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.7] text-foreground/75 [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. Papery는 조용히,
              아름답게, 배터리 걱정 없이 당신의 Mac을 움직이게 합니다.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <AppStoreButton size="lg" variant="light" />
              <div className="flex flex-col gap-0.5 text-[12.5px] leading-tight text-muted">
                <span className="text-foreground/80">무료 · 인앱결제 없음</span>
                <span>macOS 14 Sonoma 이상</span>
              </div>
            </div>
          </div>

          {/* right-side poster card: small floating wallpaper preview with metadata */}
          <PosterCard />
        </div>
      </div>
    </section>
  );
}

function PosterCard() {
  return (
    <div className="hidden lg:block">
      <div className="relative ml-auto max-w-sm">
        <div className="absolute -inset-8 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.1_10_/_0.18),transparent_70%)] blur-2xl" />
        <div className="overflow-hidden rounded-[22px] border border-white/15 bg-[oklch(0.22_0.03_315_/_0.55)] p-3 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
            <Image
              src="/screenshot2.png"
              alt="여우 월페이퍼 프리뷰"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between px-2 pb-1 pt-3">
            <div className="leading-tight">
              <p className="font-display text-[13.5px] font-bold text-foreground">
                Sleeping Foxes
              </p>
              <p className="text-[11.5px] text-muted">Illustrated · 4K · 30fps</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-1 text-[10.5px] font-medium text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_8px_currentColor]" />
              재생 중
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["자연", "추상 아트", "도시의 밤", "일러스트", "사계절"];

  return (
    <section className="border-y border-hairline bg-surface/40">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-8">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
          Curated categories
        </span>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {items.map((t, i) => (
            <li key={i} className="flex items-center gap-8">
              <span className="font-display text-[17px] italic font-medium text-foreground/85">
                {t}
              </span>
              {i < items.length - 1 ? (
                <span
                  aria-hidden
                  className="hidden h-3 w-px bg-hairline sm:inline-block"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GalleryShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 sm:py-36">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
            Gallery
          </p>
          <h2 className="font-display mt-5 text-balance text-[clamp(32px,4.2vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-foreground">
            고르고,
            <br />
            한 번에 적용.
          </h2>
          <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.75] text-muted">
            큐레이션된 갤러리에서 마음에 드는 비디오를 선택하고, 해상도를 골라
            적용하세요. 멀티모니터라면 각 화면에 서로 다른 분위기를 둘 수 있습니다.
          </p>

          <dl className="mt-10 space-y-5">
            <Row label="해상도" value="1080p · 1440p · 4K" />
            <Row label="카테고리" value="20+ 큐레이션" />
            <Row label="저장 위치" value="로컬 — 오프라인 재생" />
          </dl>
        </div>

        <figure className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.82_0.1_10_/_0.2),transparent_70%)] blur-3xl" />
          <div className="overflow-hidden rounded-[18px] border border-hairline bg-surface shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]">
            <Image
              src="/screenshot1.png"
              alt="Papery 갤러리 화면"
              width={2560}
              height={1600}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full"
              quality={90}
            />
          </div>
          <figcaption className="mt-5 text-center text-[12.5px] text-subtle">
            실제 앱 화면. 여우·풍경·추상 아트 등 다양한 분위기를 갤러리에서 만나요.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-hairline pb-4">
      <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-subtle">
        {label}
      </dt>
      <dd className="font-display text-[16.5px] font-medium text-foreground">
        {value}
      </dd>
    </div>
  );
}

function FeatureList() {
  const features = [
    {
      index: "01",
      title: "멀티모니터",
      body: "각 모니터마다 다른 배경을. 왼쪽은 새벽 파도, 오른쪽은 한밤의 도시 — 취향을 병렬로 펼쳐 두세요.",
      accent: "sky",
    },
    {
      index: "02",
      title: "스마트 전력 관리",
      body: "배터리로 전환되면 자동으로 일시정지. 창에 가려진 구간은 재생을 멈춰 불필요한 에너지를 쓰지 않습니다.",
      accent: "lavender",
    },
    {
      index: "03",
      title: "메뉴바에서 모든 것",
      body: "Dock은 가볍게, 메뉴바는 아름답게. 조용히 앉아있다가 필요할 때 한 번의 클릭으로 전부 제어할 수 있습니다.",
      accent: "peach",
    },
    {
      index: "04",
      title: "오프라인 재생",
      body: "한 번 받으면 끝. 인터넷이 끊겨도, 카페에 있어도, 비행기 안에서도 같은 풍경이 당신의 데스크탑에 흐릅니다.",
      accent: "rose",
    },
  ];

  const accentToClass: Record<string, string> = {
    sky: "text-sky",
    lavender: "text-lavender",
    peach: "text-peach",
    rose: "text-rose",
  };

  return (
    <section className="border-t border-hairline bg-surface/20">
      <div className="mx-auto w-full max-w-5xl px-6 py-28 sm:py-36">
        <div className="mb-20 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
            Details
          </p>
          <h2 className="font-display mt-5 text-balance text-[clamp(32px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
            조용히, 당신을 방해하지 않게.
          </h2>
        </div>

        <ol className="space-y-0">
          {features.map((f, i) => (
            <li
              key={f.index}
              className={`grid grid-cols-[auto_1fr] items-start gap-8 py-10 sm:grid-cols-[120px_auto_1fr] sm:gap-10 ${
                i !== 0 ? "border-t border-hairline" : ""
              }`}
            >
              <span
                className={`font-display text-[42px] font-bold leading-none ${accentToClass[f.accent]} sm:text-[56px]`}
              >
                {f.index}
              </span>
              <h3 className="font-display text-[22px] font-bold leading-tight tracking-[-0.015em] text-foreground sm:text-[26px]">
                {f.title}
              </h3>
              <p className="col-span-2 max-w-[58ch] text-[15.5px] leading-[1.75] text-muted sm:col-span-1">
                {f.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="relative isolate overflow-hidden border-t border-hairline">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.82_0.1_300_/_0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,oklch(0.84_0.09_10_/_0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_90%,oklch(0.9_0.08_55_/_0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 py-32 text-center sm:py-40">
        <Image
          src="/logo.png"
          alt="Papery"
          width={88}
          height={88}
          className="mx-auto rounded-[20px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/20 animate-breathe"
        />
        <h2 className="font-display mt-10 text-balance text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
          당신의 Mac에,
          <br />
          조용한 움직임을.
        </h2>
        <p className="mx-auto mt-6 max-w-[48ch] text-[16.5px] leading-[1.75] text-muted">
          지금 Mac App Store에서 Papery를 받으세요. 첫 월페이퍼를 고르는 데
          30초면 충분합니다.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          <AppStoreButton size="lg" variant="light" />
          <p className="text-[12.5px] text-subtle">
            macOS 14.0 Sonoma 이상 · Apple Silicon & Intel
          </p>
        </div>
      </div>
    </section>
  );
}
