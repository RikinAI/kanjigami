import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KanjiReadingPractice from "@/components/KanjiReadingPractice";
import questions from "@/data/n4-kanji-reading-practice-3.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT n4 Kanji Practice 5 – Reading Quiz",

  description:
    "Practice JLPT N4 Kanji reading with interactive multiple-choice questions. Improve your Japanese reading skills, check your score instantly, and revisit every Kanji with detailed explanations.",

  keywords: [
    "JLPT N4 Kanji Practice",
    "JLPT N4 Kanji Quiz",
    "JLPT N4 Kanji Reading Practice",
    "N4 Kanji Test",
    "Japanese Kanji Practice",
    "Kanji Reading Quiz",
    "JLPT N4 Practice",
    "Learn JLPT N4 Kanji",
    "Japanese Reading Practice",
    "KanjiGami",
  ],

  alternates: {
    canonical:
      "https://kanjigami.com/practice/jlpt-n4-kanji-practice-5",
  },

  openGraph: {
    title:
      "JLPT n4 Kanji Practice 5 – Reading Quiz",
    description:
      "Practice JLPT n4 Kanji reading with interactive multiple-choice questions and instant feedback.",
    url:
      "https://kanjigami.com/practice/jlpt-n4-kanji-practice-5",
    siteName: "KanjiGami",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "JLPT N4 Kanji Practice 5 – Reading Quiz",
    description:
      "Practice JLPT N4 Kanji reading with interactive quizzes and improve your Japanese skills.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JLPTn4KanjiPractice3Page() {
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
        name: "JLPT n4 Kanji Practice 5",
        item: "https://kanjigami.com/practice/jlpt-n4-kanji-practice-5",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">

        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            JLPT N4 Kanji Practice 5
          </h1>
          
        </div>

        <KanjiReadingPractice
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
            href="/practice/jlpt-n4-kanji-practice-4"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N4 Kanji Practice 4
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Practice reading common JLPT n4 Kanji in real Japanese
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
            href="/practice/jlpt-n4-kanji-practice-6"
            className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
          >
            <div className="flex items-center gap-4">

              <div className="text-4xl md:text-5xl font-bold text-green-700">
                字
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  JLPT N4 Kanji Practice 6
                </h3>

                <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                  Continue improving your JLPT N4 Kanji reading skills with
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