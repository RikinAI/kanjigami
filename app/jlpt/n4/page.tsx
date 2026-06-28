"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import kanjiListData from "../../../data/jlpt-n4.json";
import Script from "next/script";

const kanjiList = kanjiListData as any[];

export default function JLPTN4Page() {
  const [query, setQuery] = useState("");

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many kanji are in JLPT N4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JLPT N4 typically requires knowledge of around 300 kanji in total including N5 kanji."
      }
    },
    {
      "@type": "Question",
      name: "Is JLPT N4 harder than JLPT N5?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many users find JLPT N4 easier than JLPT N5."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to learn JLPT N4 kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learners require several months of consistent study to master JLPT N4 kanji."
      }
    },
    {
      "@type": "Question",
      name: "Should I finish JLPT N5 before studying N4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A solid understanding of JLPT N5 kanji and vocabulary makes learning N4 much easier."
      }
    },
    {
      "@type": "Question",
      name: "What is the best way to remember JLPT N4 kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning through vocabulary, example sentences, memory tricks, and reading practice is highly effective."
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
      name: "JLPT N4",
      item: "https://kanjigami.com/jlpt/n4",
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
      JLPT N4
    </span>
  </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            JLPT N4 Kanji List
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Master all 180 essential JLPT N4 Kanji with meanings,
            Onyomi and Kunyomi readings, example vocabulary,
            example sentences, memory tricks, and interesting facts.
            Perfect for beginner Japanese learners preparing for the JLPT N4 exam.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {kanjiList.length} Essential N4 Kanji
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Beginner Japanese
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Memory Tricks
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              JLPT N4 Preparation
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

        {/* Coming Soon Notice */}

        <div className="mb-5 bg-yellow-50 border border-yellow-200 rounded-xl p-4">

          <p className="text-yellow-800 font-medium">
            🚧 More easier memory tricks Coming Soon!
          </p>

          <p className="text-sm text-yellow-700 mt-1">
            We are actively adding better interesing facts and memory tricks JLPT N4 kanji. Check back regularly for updates.
          </p>

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
                📘 About JLPT N4 Kanji
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
            placeholder="Search N4 Kanji..."
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
                    {/* Kanji */}

                    <td className="px-2 py-2 align-middle">
                      <Link
                        href={`/kanji/${item.slug}`}
                        className="flex h-full flex-col items-center justify-center group"
                      >
                        <span className="text-2xl md:text-3xl font-medium transition group-hover:text-green-700">
                          {item.kanji}
                        </span>

                        <span className="text-[10px] text-gray-400 group-hover:text-green-700 whitespace-nowrap">
                          Explore →
                        </span>
                      </Link>
                    </td>

                    {/* Meaning */}

                    <td className="px-2 py-2 text-xs md:text-sm">
                      {item.meaning}
                    </td>

                    {/* Onyomi */}

                    <td className="px-2 py-2 text-xs md:text-sm">
                      {item.onyomi}
                    </td>

                    {/* Kunyomi */}

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

      {/* About JLPT N4 Kanji */}
      <section id="about-jlpt" className="mt-12 scroll-mt-24">
        <div className="bg-gray-50 border rounded-2xl p-5 md:p-8">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About JLPT N4 Kanji
          </h2>

          <div className="space-y-4 text-gray-700 leading-7 text-sm md:text-base">

            <p>
              The JLPT N4 Kanji List builds upon the foundation learned at
              the JLPT N5 level and introduces several hundred additional
              Japanese kanji commonly used in everyday reading. At this
              stage, learners begin encountering more complex vocabulary,
              longer sentences, and a wider range of real-world Japanese.
            </p>

            <p>
              JLPT N4 kanji frequently appear in topics related to work,
              transportation, shopping, travel, weather, emotions,
              directions, hobbies, and daily conversations. Mastering these
              characters allows learners to read short articles, simple
              stories, signs, menus, and practical Japanese materials with
              greater confidence.
            </p>

            <p>
              Unlike JLPT N5, where learners focus on basic recognition,
              JLPT N4 requires stronger reading ability and a larger
              vocabulary. Understanding how kanji combine into common words
              becomes increasingly important for improving Japanese
              comprehension.
            </p>

            <p>
              KanjiGami helps learners study JLPT N4 kanji through Onyomi
              readings, Kunyomi readings, example vocabulary, example
              sentences, memory tricks, and interesting cultural facts.
              Learning kanji in context makes them easier to remember and
              more useful in real Japanese situations.
            </p>

            <p>
              Consistent daily study is the key to success. Learning a few
              new kanji every day while reviewing previous characters can
              help learners steadily progress through the entire JLPT N4
              Kanji List without feeling overwhelmed.
            </p>

            <p>
              If you are still building your foundation, you may wish to
              review the{" "}
              <Link
                href="/jlpt/n5"
                className="text-green-700 font-medium hover:text-green-800 underline"
              >
                JLPT N5 Kanji List
              </Link>
              . After completing N4, continue your journey with the{" "}
              <Link
                href="/jlpt/n3"
                className="text-green-700 font-medium hover:text-green-800 underline"
              >
                JLPT N3 Kanji List
              </Link>
              .
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
                  How many kanji are in JLPT N4?
                </h3>
                <p className="text-gray-700">
                  JLPT N4 typically requires knowledge of around 300 kanji in total,
                  including the kanji learned at the JLPT N5 level.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Should I finish JLPT N5 before studying N4?
                </h3>
                <p className="text-gray-700">
                  Yes. A solid understanding of JLPT N5 kanji and vocabulary makes
                  learning N4 significantly easier.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  JLPT N4 harder than JLPT N5?
                </h3>
                <p className="text-gray-700">
                  Not dramatically. If you already have a solid understanding of
                  JLPT N5 grammar and kanji, moving to JLPT N4 is a natural next
                  step. The biggest challenge is learning additional kanji and
                  vocabulary rather than completely new grammar concepts. With
                  consistent reading practice and daily vocabulary study, most
                  learners find JLPT N4 easier to complete than completing JLPT N5.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How long does it take to learn JLPT N4 kanji?
                </h3>
                <p className="text-gray-700">
                  With consistent study, many learners can complete the JLPT
                  N4 Kanji List in 1-2 month. Studying just 5 kanji per day is
                  enough to learn all N5 kanji while also building vocabulary
                  and reading skills.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  What is the best way to remember JLPT N4 kanji?
                </h3>
                <p className="text-gray-700">
                  Learning kanji through vocabulary, example sentences, memory
                  tricks, and regular reading practice is one of the most effective
                  ways to retain JLPT N4 kanji long term.
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