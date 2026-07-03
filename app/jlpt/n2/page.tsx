"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import kanjiListData from "../../../data/jlpt-n2.json";
import Script from "next/script";

const kanjiList = kanjiListData as any[];

export default function JLPTN2Page() {
  const [query, setQuery] = useState("");

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many Kanji are in the JLPT N2 Kanji list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The JLPT N2 level contains approximately 367 commonly learned Kanji. Combined with the previous JLPT levels (N5, N4, and N3), learners will know nearly 1,000 essential Kanji used in everyday Japanese.",
      },
    },
    {
      "@type": "Question",
      name: "Is JLPT N2 difficult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JLPT N2 is considered an upper-intermediate to advanced level. It requires a solid understanding of grammar, vocabulary, reading, listening, and around 1,000 commonly used Kanji.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to learn JLPT N2 Kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time depends on your study routine. Learning around five Kanji per day allows most learners to complete the N2 Kanji list in about 10 to 12 weeks while regularly reviewing previous JLPT levels.",
      },
    },
    {
      "@type": "Question",
      name: "Are these official JLPT N2 Kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The JLPT does not publish official Kanji lists. This collection is based on widely accepted educational resources and commonly used references for Japanese language learners.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to memorize JLPT N2 Kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective method is to learn Kanji together with vocabulary, review them regularly, practice reading example sentences, and use memory tricks to improve long-term retention.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pass JLPT N2 by only studying Kanji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Passing JLPT N2 requires proficiency in Kanji, vocabulary, grammar, reading comprehension, and listening. A balanced study plan covering all of these areas is recommended.",
      },
    },
  ],
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
      name: "JLPT N2",
      item: "https://kanjigami.com/jlpt/N2",
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
              JLPT N2
            </span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            JLPT N2 Kanji List
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Master all 367 essential JLPT N2 Kanji with meanings,
            Onyomi and Kunyomi readings, example vocabulary,
            example sentences, memory tricks, and interesting facts.
            Perfect for intermediate Japanese learners preparing for the JLPT N2 exam.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {kanjiList.length} Essential N2 Kanji
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Intermediate Japanese
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Memory Tricks
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              JLPT N2 Preparation
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
            📘 About JLPT N2 Kanji
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
            placeholder="Search N2 Kanji..."
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

        {/* About JLPT N2 Kanji */}
          <section id="about-jlpt" className="mt-12 scroll-mt-24">
            <div className="bg-gray-50 border rounded-2xl p-5 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                About JLPT N2 Kanji
              </h2>

              <div className="mt-6 space-y-5 text-slate-700 leading-8">
                  <p>
                    The <strong>JLPT N2 Kanji</strong> level bridges the gap between
                    intermediate and advanced Japanese. At this stage, learners are expected
                    to recognize approximately <strong>367 essential N2 Kanji</strong>,
                    bringing the total number of commonly learned JLPT Kanji to nearly
                    1,000 characters.
                  </p>

                  <p>
                    If you're still building your foundation, we recommend mastering the{" "}
                    <Link
                      href="/jlpt/n3"
                      className="text-green-700 font-medium hover:underline"
                    >
                      JLPT N3 Kanji List
                    </Link>{" "}
                    before moving on to N2. The N2 level introduces more abstract meanings,
                    advanced vocabulary, and Kanji commonly found in newspapers, novels,
                    business documents, and official Japanese writing.
                  </p>

                  <p>
                    Every Kanji on KanjiGami includes its meaning, On'yomi, Kun'yomi,
                    stroke order, example vocabulary, example sentences, memory tricks,
                    and interesting cultural facts to make learning easier and more
                    memorable.
                  </p>

                  <p>
                    To strengthen your learning, explore our{" "}
                    <Link
                      href="/guides"
                      className="text-green-700 font-medium hover:underline"
                    >
                      Japanese learning guides
                    </Link>
                    . You'll find study tips, Kanji memorization techniques, explanations
                    of Hiragana and Katakana, and practical advice to prepare for the JLPT
                    more effectively.
                  </p>

                  <p>
                    Whether your goal is passing the <strong>Japanese Language Proficiency
                    Test (JLPT) N2</strong>, studying in Japan, or working in a Japanese
                    company, mastering these Kanji is a major step toward reading authentic
                    Japanese with confidence.
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

              <div className="mt-8 space-y-6">

                <div>
                  <h3 className="font-semibold text-lg">
                    How many Kanji are in JLPT N2?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    The JLPT N2 level contains approximately
                    <strong> 367 commonly learned Kanji</strong>. Combined with the
                    previous levels (N5, N4, and N3), learners will know nearly
                    1,000 essential Kanji used in everyday Japanese.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Is JLPT N2 difficult?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    Yes. JLPT N2 is considered an upper-intermediate to advanced level.
                    It requires a solid understanding of grammar, vocabulary, reading,
                    listening, and around 1,000 commonly used Kanji.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    How long does it take to learn JLPT N2 Kanji?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    The time varies depending on your study routine. Learning around
                    5 Kanji per day allows most learners to complete the N2 Kanji list
                    in about 10–12 weeks. Make sure to regularly review the{" "}
                    <Link
                      href="/jlpt/n3"
                      className="text-green-700 font-medium hover:underline"
                    >
                      JLPT N3 Kanji
                    </Link>{" "}
                    to reinforce previously learned characters.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Are these official JLPT Kanji?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    The JLPT does not publish official Kanji lists. This collection is
                    based on widely accepted references and educational resources used by
                    Japanese learners worldwide.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    What is the best way to memorize JLPT N2 Kanji?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    Learn Kanji together with vocabulary instead of studying individual
                    characters. Review daily, read example sentences, and use memory tricks.
                    You can also explore our{" "}
                    <Link
                      href="/guides"
                      className="text-green-700 font-medium hover:underline"
                    >
                      Japanese study guides
                    </Link>{" "}
                    for proven learning strategies and JLPT preparation tips.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Can I pass JLPT N2 by only studying Kanji?
                  </h3>
                  <p className="mt-2 text-slate-700 leading-7">
                    No. While Kanji are essential, the JLPT N2 also tests grammar,
                    vocabulary, reading comprehension, and listening skills. A balanced
                    study plan covering all areas gives you the best chance of success.
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