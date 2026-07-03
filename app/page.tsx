import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import JLPTPreview from "../components/JLPTPreview";
import PopularKanji from "../components/PopularKanji";
import Footer from "../components/Footer";
import FeaturedGuides from "../components/FeaturedGuides";
import KanaSection from "../components/KanaSection";

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
  const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KanjiGami",
  url: "https://kanjigami.com",
  description:
    "Learn Japanese Kanji, Hiragana, and Katakana with JLPT Kanji lists, memory tricks, example words, and beginner-friendly study guides.",
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kanjigami.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KanjiGami",
  url: "https://kanjigami.com",
  logo: "https://kanjigami.com/logo.png",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "KanjiGami – Learn Japanese Kanji, Hiragana & Katakana",
  description:
    "Learn Japanese Kanji with JLPT N5, N4, N3 and N2 Kanji lists, Hiragana, Katakana, memory tricks, example words, and beginner-friendly study guides.",
  url: "https://kanjigami.com",
};



  return (
    <>
      <Header />
      <Hero />
      <JLPTPreview />
      <KanaSection />
      <PopularKanji />
      <FeaturedGuides />
      <Footer />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(webpageSchema),
  }}
/>
    </>
  );

  
}