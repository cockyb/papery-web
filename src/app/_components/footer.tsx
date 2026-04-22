import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-[8px]"
              />
              <span className="font-display text-[20px] font-bold tracking-[-0.01em] text-foreground">
                Papery
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-[1.7] text-muted">
              데스크탑에 움직임을 더하는 가장 조용한 방법.
              <br />
              Made with care in Seoul.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[13.5px]">
            <span className="col-span-2 text-[11px] font-medium uppercase tracking-[0.2em] text-subtle">
              Links
            </span>
            <Link
              href="/"
              className="text-muted transition-colors hover:text-foreground"
            >
              홈
            </Link>
            <Link
              href="/support"
              className="text-muted transition-colors hover:text-foreground"
            >
              지원
            </Link>
            <Link
              href="/privacy"
              className="text-muted transition-colors hover:text-foreground"
            >
              개인정보 처리방침
            </Link>
            <a
              href="mailto:rsptursf@gmail.com"
              className="text-muted transition-colors hover:text-foreground"
            >
              문의
            </a>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-hairline pt-6 text-[12px] text-subtle">
          <p>© 2026 Owen. All rights reserved.</p>
          <p className="font-display italic">데스크탑에 움직임을.</p>
        </div>
      </div>
    </footer>
  );
}
