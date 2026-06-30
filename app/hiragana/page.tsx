import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

        </main>

      <Footer />
    </>
  );
}