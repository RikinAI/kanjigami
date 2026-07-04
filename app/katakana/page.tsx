import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import {
  basicKatakana,
  katakanaDakuten,
  katakanaHandakuten,
  katakanaYoon
} from "@/data/katakana";

import KanaTable from "@/components/kanatable";

export const metadata: Metadata = {
  title: "Learn Katakana – Complete Japanese Katakana Chart | KanjiGami",
  description:
    "Learn all 46 basic Katakana characters, Dakuten, Handakuten, and Combination Sounds with an easy-to-read Katakana chart and Romaji. Perfect for beginners learning Japanese.",

  keywords: [
    "katakana",
    "katakana chart",
    "learn katakana",
    "japanese katakana",
    "katakana alphabet",
    "katakana romaji",
    "japanese writing system",
    "kanjigami",
  ],

  alternates: {
    canonical: "https://kanjigami.com/katakana",
  },

  openGraph: {
    title: "Learn Katakana – Complete Japanese Katakana Chart",
    description:
      "Master Katakana with a complete chart, Romaji, Dakuten, Handakuten, and Combination Sounds.",
    url: "https://kanjigami.com/katakana",
    siteName: "KanjiGami",
    type: "website",
  },
};

export default function KatakanaPage() {
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
      name: "Katakana",
      item: "https://kanjigami.com/katakana",
    },
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Learn Katakana – Complete Japanese Katakana Chart",
  description:
    "Learn all 46 basic Katakana characters with Romaji, Dakuten, Handakuten, and combination sounds. Perfect for beginners learning Japanese.",
  url: "https://kanjigami.com/katakana",
};
  return (
    <>
      <Header />

      <main>
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
            <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Learn Katakana
            </h1>

            <p className="mt-3 text-base md:text-lg text-slate-600 leading-7">
                Complete Japanese Katakana Alphabet Chart with Romaji, Dakuten,
                Handakuten, and Combination Sounds.
            </p>
            </div>
        </div>

        <KanaTable
        title="Basic Katakana Chart"
        description="Learn all 46 basic Katakana characters with Romaji."
        headers={["A", "I", "U", "E", "O"]}
        data={basicKatakana}
        />

        <KanaTable
        title="Dakuten (゛)"
        description="Dakuten adds voicing to Katakana characters."
        headers={["A", "I", "U", "E", "O"]}
        data={katakanaDakuten}
        />

        <KanaTable
        title="Handakuten (゜)"
        description="Handakuten changes the H-row into P sounds."
        headers={["A", "I", "U", "E", "O"]}
        data={katakanaHandakuten}
        />

        <KanaTable
        title="Combination Sounds (Yōon)"
        description="Learn common Katakana combination sounds."
        headers={["Ya", "", "Yu", "", "Yo"]}
        data={katakanaYoon}
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
    {/* Katakana Practice */}
    <Link
          href="/practice/katakana"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-green-700">
              習
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Practice Katakana
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Practice Katakana interactive excercise.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>

    {/* Hiragana */}
    <Link
      href="/hiragana"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl md:text-5xl font-bold text-green-700">
          あ
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Learn Hiragana
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Master all 46 Hiragana characters with Romaji, Dakuten,
                Handakuten and Combination Sounds.
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