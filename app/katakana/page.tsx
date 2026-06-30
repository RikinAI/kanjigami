import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

        </main>

      <Footer />
    </>
  );
}