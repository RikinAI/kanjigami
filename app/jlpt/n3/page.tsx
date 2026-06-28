"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import kanjiListData from "../../../data/jlpt-n3.json";
import Script from "next/script";

const kanjiList = kanjiListData as any[];

export default function JLPTN3Page() {
  const [query, setQuery] = useState("");

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many kanji are in JLPT N3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JLPT N3 typically requires knowledge of around 650 kanji in total, including the kanji learned in JLPT N5 and N4."
      }
    },
    {
      "@type": "Question",
      name: "Is JLPT N3 harder than JLPT N4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JLPT N3 marks the transition from beginner to intermediate Japanese and requires a much larger vocabulary, stronger reading ability, and more kanji."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to learn JLPT N3 kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learners require several months of consistent study to master JLPT N3 kanji and become comfortable reading intermediate Japanese."
      }
    },
    {
      "@type": "Question",
      name: "Should I finish JLPT N4 before studying N3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A strong understanding of JLPT N4 kanji, grammar, and vocabulary provides the foundation needed to successfully study JLPT N3."
      }
    },
    {
      "@type": "Question",
      name: "What is the best way to remember JLPT N3 kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning kanji through vocabulary, example sentences, memory tricks, regular reading practice, and spaced review is one of the most effective ways to retain JLPT N3 kanji."
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
      name: "JLPT N3",
      item: "https://kanjigami.com/jlpt/n3",
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
              JLPT N3
            </span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            JLPT N3 Kanji List
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Master all 362 essential JLPT N3 Kanji with meanings,
            Onyomi and Kunyomi readings, example vocabulary,
            example sentences, memory tricks, and interesting facts.
            Perfect for intermediate Japanese learners preparing for the JLPT N3 exam.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {kanjiList.length} Essential N3 Kanji
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Intermediate Japanese
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Memory Tricks
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              JLPT N3 Preparation
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
            📘 About JLPT N3 Kanji
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
            placeholder="Search N3 Kanji..."
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

        {/* About JLPT N3 Kanji */}
          <section id="about-jlpt" className="mt-12 scroll-mt-24">
            <div className="bg-gray-50 border rounded-2xl p-5 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                About JLPT N3 Kanji
              </h2>

              <div className="space-y-4 text-gray-700 leading-7 text-sm md:text-base">

                <p>
                  The JLPT N3 Kanji List marks the transition from beginner to
                  intermediate Japanese. Building on the foundation established in
                  JLPT N5 and N4, learners encounter significantly more kanji,
                  vocabulary, and longer passages commonly found in everyday life,
                  newspapers, websites, and simple novels.
                </p>

                <p>
                  JLPT N3 kanji frequently appear in topics related to business,
                  education, technology, health, society, transportation, emotions,
                  culture, and current events. Mastering these characters allows
                  learners to understand more natural Japanese and communicate with
                  greater confidence.
                </p>

                <p>
                  Compared with JLPT N4, the focus at the N3 level shifts from
                  recognizing individual kanji to reading complete sentences
                  fluently. Learners are expected to understand how kanji combine
                  into common vocabulary and interpret them within different
                  contexts.
                </p>

                <p>
                  KanjiGami helps learners study JLPT N3 kanji through Onyomi
                  readings, Kunyomi readings, example vocabulary, example
                  sentences, memory tricks, and interesting cultural facts.
                  Studying kanji in context makes them easier to remember and
                  improves long-term retention.
                </p>

                <p>
                  Consistent daily practice is the most effective way to master
                  JLPT N3. Learning just a few new kanji every day while reviewing
                  previous ones can steadily build the reading ability needed for
                  intermediate Japanese.
                </p>

                <p>
                  If you have not yet completed the previous level, you may wish to
                  review the{" "}
                  <Link
                    href="/jlpt/n4"
                    className="text-green-700 font-medium hover:text-green-800 underline"
                  >
                    JLPT N4 Kanji List
                  </Link>
                  . After mastering N3, you'll be well prepared to continue with
                  the JLPT N2 level.
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
                    How many kanji are in JLPT N3?
                  </h3>
                  <p className="text-gray-700">
                    JLPT N3 typically requires knowledge of around 650 kanji in total,
                    including the kanji learned in JLPT N5 and JLPT N4.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Should I finish JLPT N4 before studying N3?
                  </h3>
                  <p className="text-gray-700">
                    Yes. A strong understanding of JLPT N4 kanji, grammar, and
                    vocabulary provides the foundation needed to successfully study
                    JLPT N3.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Is JLPT N3 much harder than JLPT N4?
                  </h3>
                  <p className="text-gray-700">
                    Yes. JLPT N3 is widely considered the biggest jump in the JLPT
                    series because it introduces intermediate-level reading,
                    significantly more vocabulary, and many new kanji. However,
                    learners who build a strong N4 foundation and practice reading
                    consistently often find the transition manageable.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How long does it take to learn JLPT N3 kanji?
                  </h3>
                  <p className="text-gray-700">
                    With consistent daily study, many learners can master the JLPT
                    N3 Kanji List in several months. Studying a few new kanji every
                    day while reviewing previous ones helps build long-term
                    retention and reading fluency.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What is the best way to remember JLPT N3 kanji?
                  </h3>
                  <p className="text-gray-700">
                    Learning kanji through vocabulary, example sentences, memory
                    tricks, and regular reading practice is one of the most
                    effective ways to retain JLPT N3 kanji and recognize them in
                    real Japanese.
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