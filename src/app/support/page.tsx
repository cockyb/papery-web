import type { Metadata } from "next";
import { Footer } from "../_components/footer";
import { Nav } from "../_components/nav";
import { PageHeader } from "../_components/page-header";

export const metadata: Metadata = {
  title: "지원 — Papery",
  description:
    "Papery 사용 중 궁금한 점이 있으신가요? 자주 묻는 질문과 문의 채널을 확인해 보세요.",
};

const faq = [
  {
    q: "Dock에 앱 아이콘이 보이지 않아요",
    a: "Papery는 메뉴바 앱입니다. 화면 상단 메뉴바에서 Papery 아이콘을 찾아주세요.",
  },
  {
    q: "배경화면이 자동으로 멈춰요",
    a: "배터리 모드이거나 배경화면이 다른 창에 가려진 경우 자동으로 일시정지됩니다. 설정에서 이 동작을 끌 수 있습니다.",
  },
  {
    q: "멀티모니터에서 어떻게 설정하나요",
    a: "갤러리에서 배경화면을 선택한 후, 적용할 모니터를 선택하면 됩니다. 각 모니터에 서로 다른 배경화면을 설정할 수 있습니다.",
  },
  {
    q: "비디오가 재생되지 않아요",
    a: "비디오를 삭제한 후 다시 다운로드해 주세요. 문제가 계속되면 아래 이메일로 문의해 주세요.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Support"
          title="도움이 필요하신가요?"
          description="자주 묻는 질문을 먼저 확인해 보세요. 답을 찾지 못했다면 언제든 이메일로 편하게 말 걸어 주세요. 보통 1–2일 안에 답장드립니다."
        />

        <section className="mx-auto w-full max-w-3xl px-6 py-20">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
            자주 묻는 질문
          </h2>
          <div className="mt-7 divide-y divide-hairline overflow-hidden rounded-[18px] border border-hairline bg-surface/40">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group px-7 py-6 transition-colors open:bg-surface/70"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16.5px] font-medium text-foreground">
                  <span className="font-display tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-hairline text-muted transition-transform duration-500 group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      className="h-3 w-3"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.75] text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-6 pb-28">
          <div className="relative isolate overflow-hidden rounded-[20px] border border-hairline bg-surface/60 p-10 sm:p-14">
            <div
              aria-hidden
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.1_300_/_0.22),transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.9_0.08_55_/_0.18),transparent_70%)] blur-2xl"
            />

            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-subtle">
              Contact
            </p>
            <h2 className="font-display mt-4 text-[clamp(28px,3.6vw,38px)] font-bold leading-tight tracking-[-0.02em] text-foreground">
              직접 말 걸어 주세요.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.75] text-muted">
              버그 리포트, 넣고 싶은 월페이퍼, 사소한 칭찬까지 — 모두 환영합니다.
              Papery를 다듬는 가장 좋은 재료는 사용자의 문장입니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:rsptursf@gmail.com"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-all hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-16px_rgba(255,230,210,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                rsptursf@gmail.com
              </a>
              <span className="text-[13px] text-muted">
                답변 언어 · 한국어, English
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
