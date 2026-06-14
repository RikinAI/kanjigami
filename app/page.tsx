import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import JLPTPreview from "../components/JLPTPreview";
import PopularKanji from "../components/PopularKanji";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Learn Japanese Kanji with Memory Tricks | KanjiGami",

  description:
    "Master Japanese Kanji through memorable stories, memory tricks, interesting facts, example words, and JLPT-focused study guides.",

  openGraph: {
    title: "Learn Japanese Kanji with Memory Tricks | KanjiGami",

    description:
      "Master Japanese Kanji through memorable stories, memory tricks, interesting facts, example words, and JLPT-focused study guides.",

    type: "website",

    siteName: "KanjiGami",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <JLPTPreview />
      <PopularKanji />
      <Footer />
    </>
  );
}