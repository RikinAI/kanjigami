import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "KanjiGami - Learn Japanese Kanji with Memory Tricks",
    template: "%s | KanjiGami",
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/icon.png", type: "image/png" },
  ],
},
  
  description:
    "Master Japanese Kanji through memory tricks, interesting facts, example words, and step by step guide for kanji learning.",

  keywords: [
    "Kanji",
    "Japanese Kanji",
    "JLPT N5 Kanji",
    "JLPT N4 Kanji",
    "Learn Japanese",
    "Kanji meanings",
    "Kanji memory tricks",
    "Japanese language learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8E7TMLFPE"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z8E7TMLFPE');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">

        
        {/* Desktop Left Sticky Ad */}
        <div
          className="
            hidden
            2xl:block
            fixed
            left-20
            top-[140px]
            z-40
          "
        >
          <div className="w-[120px] h-[400px] border rounded-2xl bg-white shadow flex items-center justify-center text-gray-400 text-sm">
            Advertisement
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pb-20">
          {children}
        </div>

        {/* Mobile Fixed Bottom Ad */}
        <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden">
          <div className="bg-white border-t shadow-lg">
            <div className="h-[60px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}