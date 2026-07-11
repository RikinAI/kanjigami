import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Japanese Practice | Hiragana, Katakana & JLPT Kanji Quizzes",

  description:
    "Practice Japanese for free with interactive Hiragana, Katakana, and JLPT Kanji quizzes. Improve your reading skills, build vocabulary, and prepare for the JLPT with beginner-friendly exercises and instant feedback.",

  keywords: [
    "Japanese Practice",
    "Japanese Practice Quiz",
    "Learn Japanese",
    "Japanese Quiz",
    "Hiragana Quiz",
    "Practice Hiragana",
    "Hiragana Practice",
    "Katakana Quiz",
    "Katakana Practice",
    "Kanji Quiz",
    "Kanji Test",
    "JLPT Kanji Quiz",
    "JLPT N5 Kanji Quiz",
    "JLPT N4 Kanji Quiz",
    "Japanese Reading Practice",
    "Free Japanese Practice",
    "Learn Kanji",
    "KanjiGami",
  ],

  alternates: {
    canonical: "https://kanjigami.com/practice",
  },

  openGraph: {
    title:
      "Japanese Practice | Free Hiragana, Katakana & JLPT Kanji Quizzes",
    description:
      "Practice Japanese online with free Hiragana, Katakana, and JLPT Kanji quizzes. Improve your reading skills through interactive exercises and instant feedback.",
    url: "https://kanjigami.com/practice",
    siteName: "KanjiGami",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Japanese Practice | Free Hiragana, Katakana & JLPT Kanji Quizzes",
    description:
      "Practice Hiragana, Katakana, and JLPT Kanji with free interactive quizzes on KanjiGami.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Education",

  applicationName: "KanjiGami",

  authors: [
    {
      name: "KanjiGami",
    },
  ],
};

export default function PracticePage() {

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
  ],
};

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
            Japanese Practice Quizzes
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-700 leading-8">
Practice Japanese for free with interactive Hiragana, Katakana, and JLPT Kanji quizzes. Build your reading skills through carefully designed exercises, improve vocabulary, and prepare for the JLPT with instant feedback and detailed explanations.
</p>
        </div>

        {/* Kana Practice */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            🎌 Kana Practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link
              href="/practice/hiragana"
              className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-green-700">
                  あ
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Hiragana Practice
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                    Practice Hiragana characters by typing the correct romaji with instant feedback.
                  </p>

                  <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    Start Practice →
                  </div>
                </div>

              </div>
            </Link>

            <Link
              href="/practice/katakana"
              className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-green-700">
                  ア
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Katakana Practice
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                    Improve your Katakana recognition with randomized practice questions.
                  </p>

                  <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    Start Practice →
                  </div>
                </div>

              </div>
            </Link>

          </div>
        </section>

        {/* Hiragana Reading Practice */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            📖 Hiragana Reading Practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link
              href="/practice/hiragana-reading-1"
              className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-green-700">
                  読
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Hiragana Reading Practice 1
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                    Read common Hiragana words and type the correct romaji while building vocabulary.
                  </p>

                  <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    Start Practice →
                  </div>
                </div>

              </div>
            </Link>

            <Link
              href="/practice/hiragana-reading-2"
              className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-green-700">
                  読
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Hiragana Reading Practice 2
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                    Read common Hiragana words and type the correct romaji while building vocabulary.
                  </p>

                  <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    Start Practice →
                  </div>
                </div>

              </div>
            </Link>

            <Link
              href="/practice/hiragana-reading-3"
              className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-green-700">
                  読
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Hiragana Reading Practice 3
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                    Read common Hiragana words and type the correct romaji while building vocabulary.
                  </p>

                  <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                    Start Practice →
                  </div>
                </div>

              </div>
            </Link>

          </div>
        </section>

{/* Katakana Reading Practice */}
<section className="mb-12">
  <h2 className="mb-6 text-2xl font-bold text-slate-900">
    📖 Katakana Reading Practice
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <Link
      href="/practice/katakana-reading-1"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          外
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Katakana Reading Practice 1
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read common Katakana words and type the correct romaji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Practice →
          </div>
        </div>

      </div>
    </Link>

    <Link
      href="/practice/katakana-reading-2"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          外
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Katakana Reading Practice 2
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read common Katakana words and type the correct romaji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Practice →
          </div>
        </div>

      </div>
    </Link>

    <Link
      href="/practice/katakana-reading-3"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          外
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            Katakana Reading Practice 3
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read common Katakana words and type the correct romaji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Practice →
          </div>
        </div>

      </div>
    </Link>

  </div>
</section>

{/* JLPT N5 Kanji Practice */}
<section className="mb-12">

  <h2 className="mb-6 text-2xl font-bold text-slate-900">
    🈶 N5 Kanji Quiz
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Practice 1 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-1"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N5 Kanji Quiz 1
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the highlighted JLPT N5 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 2 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-2"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N5 Kanji Quiz 2
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 3 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-3"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
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
            Read the highlighted JLPT N5 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 4 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-4"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N5 Kanji Quiz 4
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 5 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-5"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
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
            Read the highlighted JLPT N5 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 6 */}

    <Link
      href="/practice/jlpt-n5-kanji-practice-6"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N5 Kanji Quiz 6
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

  </div>

</section>

{/* JLPT N4 Kanji Practice */}
<section className="mb-12">

  <h2 className="mb-6 text-2xl font-bold text-slate-900">
    🉐️ N4 Kanji Quiz
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Practice 1 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-1"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
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
            Read the highlighted JLPT N4 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 2 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-2"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N4 Kanji Quiz 2
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 3 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-3"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
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
            Read the highlighted JLPT N4 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 4 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-4"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N4 Kanji Quiz 4
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 5 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-5"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N4 Kanji Quiz 5
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the highlighted JLPT N4 Kanji and choose the correct reading.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

    {/* Practice 6 */}

    <Link
      href="/practice/jlpt-n4-kanji-practice-6"
      className="group block bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-700 transition duration-300"
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl md:text-5xl font-bold text-green-700">
          字
        </div>

        <div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            JLPT N4 Kanji Quiz 6
          </h3>

          <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
            Read the Hiragana word and choose the correct Kanji.
          </p>

          <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
            Start Test →
          </div>

        </div>

      </div>
    </Link>

  </div>

</section>

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