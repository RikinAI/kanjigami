"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import kanjiListData from "../../../data/jlpt-n4.json";

const kanjiList = kanjiListData as any[];

export default function JLPTN4Page() {
  const [query, setQuery] = useState("");

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

          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            JLPT N4 Kanji List
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-4">
            Learn the essential intermediate beginner Kanji required for JLPT N4.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {kanjiList.length} Kanji
            </span>

            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Beginner Level
            </span>

          </div>

        </div>

        {/* Coming Soon Notice */}

        <div className="mb-5 bg-yellow-50 border border-yellow-200 rounded-xl p-4">

          <p className="text-yellow-800 font-medium">
            🚧 More Kanji Coming Soon!
          </p>

          <p className="text-sm text-yellow-700 mt-1">
            We are actively adding more JLPT N4 kanji. Check back regularly for updates.
          </p>

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

      </main>

      <Footer />
    </>
  );
}