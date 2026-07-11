import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KanjiSelectionPractice from "@/components/KanjiSelectionPractice";
import questions from "@/data/n4-kanji-reading-selection-1.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
title:
    "JLPT N4 Kanji Quiz #2 | Free Reading Test (25 Questions)",

  description:
"Take this free JLPT N4 Kanji Quiz with 25 multiple-choice reading questions. Practice real Japanese sentences, improve your kanji reading, check your score instantly, and review every kanji with explanations.",
  
keywords: [
"JLPT N4 Kanji Quiz",
"JLPT N4 Kanji Test",
"JLPT N4 Reading Quiz",
"Kanji Quiz",
"Kanji Test",
"Japanese Kanji Quiz",
"Free JLPT N4 Quiz",
"JLPT N4 Practice",
"JLPT N4 Reading Practice",
"Japanese Reading Practice",
"Learn JLPT N4 Kanji"
],

  alternates: {
    canonical:
      "https://kanjigami.com/practice/jlpt-n4-kanji-practice-2",
  },

  openGraph: {
    title:
      "JLPT n4 Kanji Practice 2 – Choose the Correct Kanji",
    description:
      "Test your JLPT n4 Kanji knowledge by selecting the correct Kanji for Hiragana words. Get instant feedback and review every Kanji.",
    url:
      "https://kanjigami.com/practice/jlpt-n4-kanji-practice-2",
    siteName: "KanjiGami",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "JLPT n4 Kanji Practice 2 – Choose the Correct Kanji",
    description:
      "Practice JLPT n4 Kanji by selecting the correct Kanji for Hiragana words with interactive quizzes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JLPTn4KanjiPractice2Page() {
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
        name: "JLPT n4 Kanji Practice 2",
        item: "https://kanjigami.com/practice/jlpt-n4-kanji-practice-2",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">

        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            JLPT N4 Kanji Quiz 2
          </h1>
        </div>

                <div className="max-w-3xl mx-auto mt-6 text-center">

        <p className="text-slate-700 leading-8">

        Practice your JLPT N4 Kanji with 25 carefully designed multiple-choice questions based on real Japanese sentences.

        This free Kanji quiz helps you improve reading skills, recognize common vocabulary, and prepare for the JLPT N4 exam.

        After finishing the quiz, review every answer and revisit each Kanji page with detailed meanings, readings, vocabulary, memory tricks, and example sentences.

        </p>

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
            href="/practice/jlpt-n4-kanji-practice-1"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N4 Kanji Quiz 1
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Test reading common JLPT n4 Kanji in real Japanese
                  sentences.
                </p>

                <div className="mt-4 font-semibold text-green-700 group-hover:-translate-x-1 transition-transform">
                  ← Previous Quiz
                </div>

              </div>

            </div>
          </Link>

          {/* Next Practice */}

          <Link
            href="/practice/jlpt-n4-kanji-practice-3"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N4 Kanji Quiz 3
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Continue improving your JLPT n4 Kanji reading skills with
                  more test questions.
                </p>

                <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                  Next Quiz →
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