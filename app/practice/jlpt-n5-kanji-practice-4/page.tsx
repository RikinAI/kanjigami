import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KanjiSelectionPractice from "@/components/KanjiSelectionPractice";
import questions from "@/data/n5-kanji-reading-selection-2.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N5 Kanji Practice 4 – Choose the Correct Kanji | KanjiGami",

  description:
    "Practice JLPT N5 Kanji by choosing the correct Kanji for Hiragana words. Improve your Japanese reading and writing skills with interactive multiple-choice questions, instant feedback, and detailed Kanji review.",

  keywords: [
    "JLPT N5 Kanji Practice",
    "JLPT N5 Kanji Quiz",
    "JLPT N5 Kanji Test",
    "Choose the Correct Kanji",
    "JLPT N5 Writing Practice",
    "Japanese Kanji Practice",
    "N5 Kanji Quiz",
    "Japanese Reading Practice",
    "Learn JLPT N5 Kanji",
    "KanjiGami",
  ],

  alternates: {
    canonical:
      "https://kanjigami.com/practice/jlpt-n5-kanji-practice-4",
  },

  openGraph: {
    title:
      "JLPT N5 Kanji Practice 4 – Choose the Correct Kanji",
    description:
      "Test your JLPT N5 Kanji knowledge by selecting the correct Kanji for Hiragana words. Get instant feedback and review every Kanji.",
    url:
      "https://kanjigami.com/practice/jlpt-n5-kanji-practice-4",
    siteName: "KanjiGami",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "JLPT N5 Kanji Practice 4 – Choose the Correct Kanji",
    description:
      "Practice JLPT N5 Kanji by selecting the correct Kanji for Hiragana words with interactive quizzes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JLPTN5KanjiPractice4Page() {
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
        name: "JLPT N5 Kanji Practice 4",
        item: "https://kanjigami.com/practice/jlpt-n5-kanji-practice-4",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">

        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            JLPT N5 Kanji Practice 4
          </h1>
        </div>

        <KanjiSelectionPractice
          questions={questions}
        />

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

          {/* Previous Practice */}

          <Link
            href="/practice/jlpt-n5-kanji-practice-3"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N5 Kanji Practice 3
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Practice reading common JLPT N5 Kanji in real Japanese
                  sentences.
                </p>

                <div className="mt-4 font-semibold text-green-700 group-hover:-translate-x-1 transition-transform">
                  ← Previous Practice
                </div>

              </div>

            </div>
          </Link>

          {/* Next Practice */}

          <Link
            href="/practice/jlpt-n5-kanji-practice-5"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N5 Kanji Practice 5
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Continue improving your JLPT N5 Kanji reading skills with
                  more practice questions.
                </p>

                <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                  Next Practice →
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