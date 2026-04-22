import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-hairline bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-85"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-[7px] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)]"
            priority
          />
          <span className="font-display text-[17px] font-bold tracking-[-0.01em] text-foreground">
            Papery
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-[13px] text-muted">
          <Link
            href="/support"
            className="transition-colors hover:text-foreground"
          >
            지원
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            개인정보
          </Link>
          <a
            href="#download"
            className="inline-flex h-8 items-center rounded-full bg-foreground px-4 text-[12.5px] font-medium text-background transition-all hover:opacity-90"
          >
            다운로드
          </a>
        </nav>
      </div>
    </header>
  );
}
