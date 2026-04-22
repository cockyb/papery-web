import type { Metadata } from "next";
import { Footer } from "../_components/footer";
import { Nav } from "../_components/nav";
import { PageHeader } from "../_components/page-header";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — Papery",
  description: "Papery는 사용자 계정, 로그인, 개인정보를 수집하지 않습니다.",
};

const items = [
  {
    label: "수집하는 정보",
    body: "없음. 사용자 계정, 로그인, 개인정보를 수집하지 않습니다.",
  },
  {
    label: "네트워크 통신",
    body: "앱은 배경화면 목록 조회와 비디오 다운로드를 위해 Papery API 서버와 통신합니다. 이 과정에서 개인 식별 정보는 전송되지 않습니다.",
  },
  {
    label: "로컬 데이터 저장",
    body: "다운로드된 비디오 파일과 앱 설정(배터리 모드 일시정지, 가려짐 일시정지 등)은 사용자의 기기에만 저장됩니다.",
  },
  {
    label: "제3자 공유",
    body: "없음. 어떠한 데이터도 제3자에게 공유하지 않습니다.",
  },
  {
    label: "분석 / 추적",
    body: "없음. 분석 도구나 광고 추적을 사용하지 않습니다.",
  },
  {
    label: "문의",
    body: "rsptursf@gmail.com",
    mailto: "rsptursf@gmail.com",
  },
  {
    label: "시행일",
    body: "2026년 4월 22일",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Privacy"
          title="우리는 당신을 보지 않습니다."
          description="Papery는 계정이 없고, 로그인이 없고, 추적하지 않습니다. 아래는 앱이 무엇을 하고, 무엇을 하지 않는지에 대한 담백한 서술입니다."
        />

        <section className="mx-auto w-full max-w-3xl px-6 py-20">
          <dl className="divide-y divide-hairline rounded-[18px] border border-hairline bg-surface/40">
            {items.map((it) => (
              <div
                key={it.label}
                className="grid grid-cols-1 gap-2 px-7 py-7 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-subtle">
                  {it.label}
                </dt>
                <dd className="text-[15.5px] leading-[1.7] text-foreground">
                  {it.mailto ? (
                    <a
                      href={`mailto:${it.mailto}`}
                      className="underline decoration-muted/40 underline-offset-[5px] transition-colors hover:decoration-foreground"
                    >
                      {it.body}
                    </a>
                  ) : (
                    it.body
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-center font-display text-[13.5px] italic text-subtle">
            조용한 것이, 가장 정중한 것입니다.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
