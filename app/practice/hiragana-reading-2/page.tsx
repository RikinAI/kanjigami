import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HiraganaReadingPractice from "./HiraganaReadingPractice";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hiragana Reading Practice 2 – Japanese Vocabulary Quiz | KanjiGami",

  description:
    "Continue improving your Hiragana reading with more Japanese vocabulary practice. Read Hiragana words, type the correct romaji, and receive instant feedback.",

  keywords: [
    "Hiragana Reading Practice",
    "Hiragana Practice",
    "Japanese Reading Practice",
    "Hiragana Vocabulary",
    "Hiragana Quiz",
    "Learn Hiragana",
    "Japanese Vocabulary",
    "Japanese Language Practice",
    "Hiragana Test",
    "KanjiGami",
  ],

  alternates: {
    canonical:
      "https://kanjigami.com/practice/hiragana-reading-2",
  },

  openGraph: {
    title:
      "Hiragana Reading Practice 2 | KanjiGami",
    description:
      "Continue practicing Hiragana reading with Japanese vocabulary quizzes.",
    url:
      "https://kanjigami.com/practice/hiragana-reading-2",
    siteName: "KanjiGami",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hiragana Reading Practice 2",
    description:
      "Continue practicing Hiragana reading with interactive vocabulary quizzes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HiraganaReadingPracticePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kanjigami.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Practice",
        item: "https://kanjigami.com/practice",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hiragana Reading Practice 2",
        item: "https://kanjigami.com/practice/hiragana-reading-2",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-14 md:mb-15">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Hiragana Reading Practice 2
          </h1>

          <p className="mt-3 text-base md:text-lg text-slate-600">
            Read the Hiragana word and type the correct romaji.
          </p>
        </div>

        <HiraganaReadingPractice />

        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </main>

<section className="max-w-5xl mx-auto px-4 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Hiragana Reading Practice */}
    <Link
          href="/practice/hiragana-reading-3"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-green-700">
              試
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Hiragana Reading Practice 3
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Practice Hiragana Reading with vocabulary words.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>

    {/* Katakana */}
    <Link
      href="/katakana"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl md:text-5xl font-bold text-green-700">
          ア
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Learn Katakana
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Learn Katakana used for foreign words, names, and modern Japanese
            vocabulary.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Learning →
          </div>
        </div>
      </div>
    </Link>

    {/* JLPT N5 */}
    <Link
      href="/jlpt/n5"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N5 Kanji
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Master all 108 essential JLPT N5 Kanji with meanings, readings,
            example words and memory tricks.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Learning →
          </div>
        </div>
      </div>
    </Link>

  </div>
</section>

      <Footer />
    </>
  );
}