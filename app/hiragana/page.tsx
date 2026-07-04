import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import {
  basicHiragana,
  dakuten,
  handakuten,
  hiraganaYoon
} from "@/data/hiragana";

import KanaTable from "@/components/kanatable";

export const metadata: Metadata = {
  title: "Learn Hiragana – Complete Japanese Hiragana Chart | KanjiGami",
  description:
    "Learn all 46 basic Hiragana characters, Dakuten, Handakuten, and Combination Sounds with an easy-to-read Hiragana chart and Romaji. Perfect for beginners learning Japanese.",
  keywords: [
    "hiragana",
    "hiragana chart",
    "learn hiragana",
    "japanese alphabet",
    "hiragana alphabet",
    "hiragana romaji",
    "japanese writing system",
    "kanjigami",
  ],
  alternates: {
    canonical: "https://kanjigami.com/hiragana",
  },
  openGraph: {
    title: "Learn Hiragana – Complete Japanese Hiragana Chart",
    description:
      "Master Hiragana with a complete chart, Romaji, Dakuten, Handakuten, and Combination Sounds.",
    url: "https://kanjigami.com/hiragana",
    siteName: "KanjiGami",
    type: "website",
  },
};

export default function HiraganaPage() {

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kanjigami.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hiragana",
      item: "https://kanjigami.com/hiragana",
    },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Learn Hiragana – Complete Japanese Hiragana Chart",
  description:
    "Learn all 46 basic Hiragana characters with Romaji, Dakuten, Handakuten, and combination sounds.",
  url: "https://kanjigami.com/hiragana",
};
  return (
    <>
      <Header />

      <main>
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Learn Hiragana
            </h1>

            <p className="mt-3 text-base md:text-lg text-slate-600 leading-7">
                Complete Japanese Hiragana Alphabet Chart with Romaji, Dakuten,
                Handakuten, and Combination Sounds.
            </p>
            </div>
        </div>

        <KanaTable
        title="Basic Hiragana Chart"
        description="Learn all 46 basic Hiragana characters with Romaji."
        headers={["A", "I", "U", "E", "O"]}
        data={basicHiragana}
        />

        <KanaTable
        title="Dakuten (゛)"
        description="Dakuten adds voicing to Hiragana characters."
        headers={["A", "I", "U", "E", "O"]}
        data={dakuten}
        />

        <KanaTable
        title="Handakuten (゜)"
        description="Handakuten changes the H-row into P sounds."
        headers={["A", "I", "U", "E", "O"]}
        data={handakuten}
        />

        <KanaTable
        title="Combination Sounds (Yōon)"
        description="Learn common Hiragana combination sounds."
        headers={["Ya", "", "Yu", "", "Yo"]}
        data={hiraganaYoon}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpageSchema),
          }}
        />

        </main>

<section className="max-w-5xl mx-auto px-4 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Hiragana Practice */}
    <Link
          href="/practice/hiragana"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-green-700">
              習
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Practice Hiragana
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Practice Hiragana with interactive excercise.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>

    {/* Hiragana Reading Practice */}
    <Link
          href="/practice/hiragana-reading-1"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-green-700">
              試
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Hiragana Reading Practice 
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