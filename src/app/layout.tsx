import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Papery — 데스크탑에 움직임을 더하다",
    template: "%s | Papery",
  },
  description:
    "고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. Papery는 macOS를 위한 라이브 월페이퍼 앱입니다.",
  applicationName: "Papery",
  metadataBase: new URL("https://papery.app"),
  keywords: [
    "Papery",
    "페이퍼리",
    "맥OS 라이브 월페이퍼",
    "macOS live wallpaper",
    "비디오 배경화면",
    "동영상 배경화면",
    "맥 바탕화면",
    "메뉴바 앱",
  ],
  authors: [{ name: "Papery" }],
  creator: "Papery",
  publisher: "Papery",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: "Papery — 데스크탑에 움직임을 더하다",
    description:
      "고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. macOS를 위한 라이브 월페이퍼 앱.",
    type: "website",
    locale: "ko_KR",
    url: "https://papery.app",
    siteName: "Papery",
    images: [
      {
        url: "/screenshot2.png",
        width: 1200,
        height: 630,
        alt: "Papery — macOS 라이브 월페이퍼 앱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papery — 데스크탑에 움직임을 더하다",
    description:
      "고화질 비디오 배경화면을 메뉴바 한 번의 클릭으로. macOS를 위한 라이브 월페이퍼 앱.",
    images: ["/screenshot2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a1730",
  colorScheme: "dark",
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
