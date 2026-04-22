import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Papery — 데스크탑에 움직임을 더하다",
  description:
    "고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. Papery는 macOS를 위한 라이브 월페이퍼 앱입니다.",
  metadataBase: new URL("https://papery.app"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Papery — 데스크탑에 움직임을 더하다",
    description:
      "고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. macOS를 위한 라이브 월페이퍼 앱.",
    type: "website",
    locale: "ko_KR",
    images: ["/screenshot2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerif.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
