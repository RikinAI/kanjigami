import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

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
            Japanese Practice
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600">
            Practice Hiragana, Katakana and Kanji with interactive exercises.
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

        {/* Reading Practice */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            📖 Reading Practice
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
                    Hiragana Reading Practice
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

            <div className="bg-slate-50 border border-dashed rounded-2xl p-4 md:p-5">

              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-slate-400">
                  ア
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-500">
                    Katakana Reading Practice
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-500 leading-6">
                    Practice reading common Katakana words and loanwords.
                  </p>

                  <div className="mt-4 font-semibold text-slate-400">
                    Coming Soon
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Kanji Practice */}
        <section>

          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            🈶 Kanji Practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-slate-50 border border-dashed rounded-2xl p-4 md:p-5">

              <div className="flex items-center gap-4">

                <div className="text-4xl md:text-5xl font-bold text-slate-400">
                  字
                </div>

                <div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-500">
                    JLPT Kanji Quiz
                  </h3>

                  <p className="mt-1 text-sm md:text-base text-slate-500 leading-6">
                    Test your JLPT Kanji knowledge with interactive quizzes.
                  </p>

                  <div className="mt-4 font-semibold text-slate-400">
                    Coming Soon
                  </div>

                </div>

              </div>

            </div>

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