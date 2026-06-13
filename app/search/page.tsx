"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "../../components/Header";

import n5 from "../../data/jlpt-n5.json";
import n4 from "../../data/jlpt-n4.json";
import n3 from "../../data/jlpt-n3.json";
import n2 from "../../data/jlpt-n2.json";
import n1 from "../../data/jlpt-n1.json";

const allKanji = [
  ...n5,
  ...n4,
  ...n3,
  ...n2,
  ...n1,
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const results = q
    ? allKanji.filter((item: any) => {
        const kanji = item.kanji?.toLowerCase() || "";
        const meaning = item.meaning?.toLowerCase() || "";
        const onyomi = item.onyomi?.toLowerCase() || "";
        const kunyomi = item.kunyomi?.toLowerCase() || "";

        if (kanji === q) {
          return true;
        }

        const meaningWords = meaning
          .replace(/,/g, " ")
          .split(/\s+/)
          .filter(Boolean);

        const meaningMatch = meaningWords.some((word: string) =>
          word.startsWith(q)
        );

        const onyomiWords = onyomi
          .split(/[()\s]+/)
          .filter(Boolean)
          .map((w: string) => w.toLowerCase());

        const onyomiMatch = onyomiWords.some((word: string) =>
          word.startsWith(q)
        );

        const kunyomiWords = kunyomi
          .split(/[()\s]+/)
          .filter(Boolean)
          .map((w: string) => w.toLowerCase());

        const kunyomiMatch = kunyomiWords.some((word: string) =>
          word.startsWith(q)
        );

        return (
          meaningMatch ||
          onyomiMatch ||
          kunyomiMatch
        );
      })
    : [];

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 mb-12">

        {/* Back Link */}

        <Link
          href="/"
          className="inline-block text-green-700 hover:text-green-800 mb-6"
        >
          ← Back to Home
        </Link>

        {/* Page Title */}

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Search Kanji
        </h1>

        <p className="text-gray-600 mb-8">
          Search by Kanji, Meaning, Onyomi, or Kunyomi.
        </p>

        {/* Search Box */}

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search kanji, meaning, reading..."
          className="w-full border rounded-2xl px-5 py-4 text-lg mb-8"
        />

        {/* Popular Searches */}

        {!q && (
          <div className="bg-white border rounded-2xl p-6">

            <h2 className="font-bold text-lg mb-4">
              Popular Searches
            </h2>

            <div className="flex flex-wrap gap-2">

              {[
                "forest",
                "moon",
                "mori",
                "tsuki",
                "water",
                "tree",
                "sun",
                "fire",
                "森",
                "月",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-sm"
                >
                  {term}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* Results */}

        {q && (
          <>

            <div className="mb-4 text-gray-600">
              {results.length} result(s) found
            </div>

            {results.length === 0 && (
              <div className="bg-white border rounded-2xl p-6">

                <h2 className="font-bold mb-2">
                  No Kanji Found
                </h2>

                <p className="text-gray-500">
                  Try searching by Kanji,
                  meaning, Onyomi or Kunyomi.
                </p>

              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-3">

                {results.map((item: any) => (

                  <Link
                    key={item.slug}
                    href={`/kanji/${item.slug}`}
                    className="block bg-white border rounded-2xl p-4 hover:border-green-300 hover:bg-slate-50 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="text-4xl">
                        {item.kanji}
                      </div>

                      <div>

                        <div className="font-semibold">
                          {item.meaning}
                        </div>

                        <div className="text-sm text-gray-500">
                          Onyomi: {item.onyomi}
                        </div>

                        <div className="text-sm text-gray-500">
                          Kunyomi: {item.kunyomi}
                        </div>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>
            )}

          </>
        )}

      </main>
    </>
  );
}