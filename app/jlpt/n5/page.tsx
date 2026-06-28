"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import kanjiList from "../../../data/jlpt-n5.json";
import Link from "next/link";
import Script from "next/script";



export default function JLPTN5Page() {
  const [query, setQuery] = useState("");

  const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How many kanji are in JLPT N5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most JLPT N5 study resources cover approximately 100–120 essential kanji."
            }
          },
          {
            "@type": "Question",
            name: "Is JLPT N5 difficult?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "JLPT N5 is the easiest level of the Japanese Language Proficiency Test and is designed for beginners."
            }
          },
          {
            "@type": "Question",
            name: "How long does it take to learn JLPT N5 kanji?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many learners can complete the JLPT N5 Kanji List in 3–6 weeks with consistent study."
            }
          },
          {
            "@type": "Question",
            name: "Should I learn Onyomi and Kunyomi readings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Understanding common Onyomi and Kunyomi readings helps learners recognize vocabulary and improve reading comprehension."
            }
          },
          {
            "@type": "Question",
            name: "What is the best way to remember JLPT N5 kanji?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Memory tricks, example vocabulary, example sentences, and daily reading practice are effective ways to remember kanji."
            }
          }
        ]
      };
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kanjigami.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "JLPT N5",
      item: "https://kanjigami.com/jlpt/n5",
    },
  ],
};

  const filteredKanji = kanjiList.filter((item) => {
    const q = query.toLowerCase().trim();

    if (!q) return true;

    return (
      item.kanji?.includes(query) ||
      item.meaning?.toLowerCase().includes(q) ||
      item.onyomi?.toLowerCase().includes(q) ||
      item.kunyomi?.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6 mb-12">

        {/* Header */}

<div className="mb-5">

  <nav
    aria-label="Breadcrumb"
    className="text-xs md:text-sm text-gray-500 mb-3"
  >
    <Link href="/" className="hover:text-green-700">
      Home
    </Link>

    <span className="mx-2">›</span>

    <span className="text-gray-400">
      JLPT N5
    </span>
  </nav>

  <h1 className="text-2xl md:text-4xl font-bold mb-2">
    JLPT N5 Kanji List
  </h1>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Master all 108 essential JLPT N5 Kanji with meanings,
            Onyomi and Kunyomi readings, example vocabulary,
            example sentences, memory tricks, and interesting facts.
            Perfect for beginner Japanese learners preparing for the JLPT N5 exam.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {kanjiList.length} Essential N5 Kanji
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Beginner Japanese
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Memory Tricks
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              JLPT N5 Preparation
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Free JLPT Study Resource
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Example Vocabulary & Sentences
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Onyomi, Kunyomi
            </span>
          </div>

        </div>

          <div className="flex justify-center md:justify-end gap-3 mt-5 mb-6">

              <a
                href="#about-jlpt"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-green-600
                  bg-white
                  text-green-700
                  text-sm
                  font-semibold
                  shadow-sm
                  transition
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                📘 About JLPT N5 Kanji
              </a>

              <a
                href="#faq"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-slate-400
                  bg-white
                  text-slate-700
                  text-sm
                  font-semibold
                  shadow-sm
                  transition
                  hover:bg-slate-50
                  hover:shadow-md
                "
              >
                ❓ FAQs
              </a>

            </div>

        {/* Search */}

        <div className="mb-4">

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search N5 Kanji..."
            className="w-full border rounded-xl px-3 py-2 text-sm"
          />

        </div>

        <div className="mb-4 text-sm text-gray-500">
          {filteredKanji.length} result(s)
        </div>

        {/* Table */}

        <div className="bg-white border rounded-2xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="px-2 py-2 text-center text-xs md:text-sm">
                    #
                  </th>

                  <th className="px-2 py-2 text-left text-xs md:text-sm">
                    Kanji
                  </th>

                  <th className="px-2 py-2 text-left text-xs md:text-sm">
                    Meaning
                  </th>

                  <th className="px-2 py-2 text-left text-xs md:text-sm">
                    Onyomi
                  </th>

                  <th className="px-2 py-2 text-left text-xs md:text-sm">
                    Kunyomi
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredKanji.map((item) => {

                    const originalIndex = kanjiList.findIndex(
                      (k) => k.slug === item.slug
                    );

                    return (

                      <tr
                        key={item.slug}
                        className="border-t hover:bg-slate-50"
                      >

                        <td className="px-2 py-2 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                            {originalIndex + 1}
                          </span>
                        </td>

                    <td className="px-2 py-2">

                      <Link
                        href={`/kanji/${item.slug}`}
                        className="block group"
                      >

                        <div className="flex flex-col items-center">

                          <span className="text-2xl md:text-3xl font-medium transition group-hover:text-green-700">
                            {item.kanji}
                          </span>

                          <span className="text-[10px] text-gray-400 group-hover:text-green-700">
                            Explore →
                          </span>

                        </div>

                      </Link>

                    </td>

                    <td className="px-2 py-2 text-xs md:text-sm">
                      {item.meaning}
                    </td>

                    <td className="px-2 py-2 text-xs md:text-sm">
                      {item.onyomi}
                    </td>

                    <td className="px-2 py-2 text-xs md:text-sm">
                      {item.kunyomi}
                    </td>

                  </tr>
                  );
                })}

                {filteredKanji.length === 0 && (

                  <tr>

                    <td
                      colSpan={4}
                      className="text-center py-8 text-gray-500"
                    >
                      No matching kanji found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* About JLPT N5 Kanji */}
        <section id="about-jlpt" className="mt-12 scroll-mt-24">
          
          <div className="bg-gray-50 border rounded-2xl p-5 md:p-8">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              About JLPT N5 Kanji
            </h2>

            <div className="space-y-4 text-gray-700 leading-7 text-sm md:text-base">

              <p>
                The JLPT N5 Kanji List is designed for beginners learning
                Japanese and preparing for the Japanese Language Proficiency
                Test (JLPT). At this level, students are expected to recognize
                and understand approximately 100–120 essential Japanese kanji
                commonly used in everyday life.
              </p>

              <p>
                These beginner kanji appear in vocabulary related to school, 
                universtity, shopping, train station, directions and other day to day life events.
                Learning
                these characters helps students read simple Japanese
                sentences, understand common vocabulary, and build a strong
                foundation for higher JLPT levels.
              </p>

              <p>
                Many Japanese learners find kanji intimidating at first
                because each character can have multiple readings and
                meanings. However, mastering JLPT N5 kanji becomes much
                easier when you study them in context. Instead of memorizing
                isolated symbols, focus on learning example vocabulary,
                example sentences, and common usage patterns.
              </p>

              <p>
                Unlike many traditional JLPT study resources, KanjiGami
                includes memory tricks, and interesting facts with 
                Onyomi readings, Kunyomi readings, example words,
                example sentences for
                every kanji. These learning tools help beginners remember
                characters more effectively and improve long-term retention.
              </p>

              <p>
                If you study just a few kanji each day and regularly review
                vocabulary, you can complete the entire JLPT N5 Kanji List
                within a few weeks. Consistent practice, daily reading, and
                repeated exposure are far more effective than trying to
                memorize dozens of kanji in a single study session.
              </p>

              <p>
                Once you are comfortable with the JLPT N5 Kanji List, the
                next step is moving on to the{" "}
                <Link
                  href="/jlpt/n4"
                  className="text-green-700 font-medium hover:text-green-800 underline"
                >
                  JLPT N4 Kanji List
                </Link>
                , where you will encounter more intermediate beginner kanjis.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-12 scroll-mt-24">
          <div className="bg-white border rounded-2xl p-5 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How many kanji are in JLPT N5?
                </h3>
                <p className="text-gray-700">
                  Most JLPT N5 study resources cover approximately 100–120
                  essential kanji. The exact number may vary slightly between
                  resources, but mastering these beginner-level kanji provides
                  a solid foundation for reading basic Japanese.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Is JLPT N5 difficult?
                </h3>
                <p className="text-gray-700">
                  JLPT N5 is the easiest level of the Japanese Language
                  Proficiency Test and is designed for beginners. Students are
                  expected to understand basic grammar, vocabulary, hiragana,
                  katakana, and common kanji used in everyday situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How long does it take to learn JLPT N5 kanji?
                </h3>
                <p className="text-gray-700">
                  With consistent study, many learners can complete the JLPT
                  N5 Kanji List in 3–6 weeks. Studying just 5 kanji per day is
                  enough to learn all N5 kanji while also building vocabulary
                  and reading skills.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Should I learn Onyomi and Kunyomi readings?
                </h3>
                <p className="text-gray-700">
                  Yes. Understanding common Onyomi and Kunyomi readings helps
                  learners recognize vocabulary more easily and improves
                  overall Japanese reading comprehension.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What is the best way to remember JLPT N5 kanji?
                </h3>
                <p className="text-gray-700">
                  Many learners find memory tricks, example vocabulary,
                  example sentences, and daily reading practice more effective
                  than repeatedly writing the same kanji. Learning kanji in
                  context improves long-term retention.
                </p>
              </div>

            </div>
          </div>
        </section>
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

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