import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KanjiSelectionPractice from "@/components/KanjiSelectionPractice";
import questions from "@/data/n5-kanji-reading-selection-2.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N5 Kanji Quiz #4 | Free Reading Test (25 Questions)",

  description:
    "Take this free JLPT N5 Kanji Quiz with 25 multiple-choice reading questions. Practice beginner Japanese kanji, improve your reading skills, check your score instantly, and review every kanji with detailed explanations.",

keywords: [
  "JLPT N5 Kanji Quiz",
  "JLPT N5 Kanji Test",
  "JLPT N5 Kanji Reading Quiz",
  "JLPT N5 Kanji Practice",
  "JLPT N5 Reading Practice",
  "JLPT N5 Quiz",
  "JLPT N5 Practice Test",
  "JLPT N5 Kanji Questions",
  "JLPT N5 Reading Test",
  "N5 Kanji Quiz",
  "N5 Kanji Test",
  "N5 Kanji Practice",
  "Japanese Kanji Quiz",
  "Japanese Kanji Test",
  "Japanese Reading Practice",
  "Kanji Reading Quiz",
  "Kanji Quiz",
  "Kanji Test",
  "Learn JLPT N5 Kanji",
  "Beginner Japanese Kanji",
  "Free JLPT N5 Quiz",
  "Free Kanji Quiz",
  "JLPT Preparation",
  "Japanese Language Practice",
  "KanjiGami"
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
            JLPT N5 Kanji Quiz 4
          </h1>
        </div>

        <div className="max-w-3xl mx-auto mt-6 text-center">

  <p className="text-slate-700 leading-8">

    Practice your JLPT N5 Kanji with 25 carefully designed multiple-choice questions based on real Japanese sentences.

    This free Kanji quiz helps beginners improve their reading skills, learn essential JLPT N5 vocabulary, and prepare for the Japanese Language Proficiency Test.

    After completing the quiz, review every answer and explore detailed Kanji pages featuring meanings, readings, vocabulary, memory tricks, and example sentences to strengthen your foundation.

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
            href="/practice/jlpt-n5-kanji-practice-3"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N5 Kanji Quiz 3
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Test reading common JLPT N5 Kanji in real Japanese
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
            href="/practice/jlpt-n5-kanji-practice-5"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N5 Kanji Quiz 5
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Continue improving your JLPT N5 Kanji reading skills with
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