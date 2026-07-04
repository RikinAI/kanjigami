import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HiraganaReadingPractice from "./HiraganaReadingPractice";
import Link from "next/link";

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
      name: "Hiragana Reading Practice 1",
      item: "https://kanjigami.com/practice/hiragana-reading-1",
    },
  ],
};
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-14 md:mb-15">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Hiragana Reading Practice 1
          </h1>

          <p className="mt-3 text-base md:text-sg text-slate-600">
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

      <Footer />
    </>
  );
}