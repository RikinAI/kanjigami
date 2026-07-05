"use client";

import { useMemo, useState } from "react";
import words from "@/data/katakana-practice-1.json";
import Link from "next/link";

export default function KatakanaReadingPractice() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const attempted = useMemo(
    () =>
      words.filter((word) => answers[word.kana]?.trim()).length,
    [answers]
  );

  const correct = useMemo(
    () =>
      words.filter(
        (word) =>
          answers[word.kana]?.trim().toLowerCase() ===
          word.romaji.toLowerCase()
      ).length,
    [answers]
  );

  const accuracy =
    attempted === 0
      ? 0
      : Math.round((correct / attempted) * 100);

  function handleChange(kana: string, value: string) {
    setAnswers((prev) => ({
      ...prev,
      [kana]: value.trim().toLowerCase(),
    }));
  }

  function resetPractice() {
    setAnswers({});
  }

  return (
    <div className="max-w-6xl mx-auto">

      {/* Score Card */}

      <div
        id="score-card"
        className="scroll-mt-32 mb-6 rounded-xl border border-slate-200 bg-white p-4 md:p-3 shadow-sm"
      >
        <div className="grid grid-cols-3 text-center">

          <div>
            <p className="text-xs md:text-sm text-slate-500">
              Correct
            </p>

            <p className="text-2xl md:text-2xl font-bold text-green-600">
              {correct}
            </p>
          </div>

          <div>
            <p className="text-xs md:text-sm text-slate-500">
              Attempted
            </p>

            <p className="text-2xl md:text-2xl font-bold text-blue-600">
              {attempted}
            </p>
          </div>

          <div>
            <p className="text-xs md:text-sm text-slate-500">
              Accuracy
            </p>

            <p className="text-2xl md:text-2xl font-bold text-orange-600">
              {accuracy}%
            </p>
          </div>

        </div>
      </div>

      <div className="mb-8 flex flex-wrap justify-center items-center gap-4">

        <Link
          href="/katakana"
          className="rounded-lg border border-green-600 px-5 py-2 font-medium text-green-700 hover:bg-green-50 transition"
        >
          ← Review Katakana <strong>ア</strong>
        </Link>

        <button
          onClick={resetPractice}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          🔄 Reset
        </button>

      </div>

      {/* Practice */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {words.map((word) => {
          const value = answers[word.kana] || "";

          const attemptedWord =
            value.trim().length >= word.romaji.length;

          const isCorrect =
            value.trim().toLowerCase() ===
            word.romaji.toLowerCase();

          return (
            <div
              key={word.kana}
              className="rounded-xl border border-slate-200 bg-white p-4 md:p-2.5 shadow-sm"
            >
              {/* Katakana */}

              <div className="mb-4 md:mb-5 text-center text-3xl md:text-4xl font-bold text-slate-900">
                {word.kana}
              </div>

              {/* Input */}

              <input
                type="text"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                value={value}
                onChange={(e) =>
                  handleChange(word.kana, e.target.value)
                }
                placeholder="Type romaji..."
                className={`w-full rounded-lg border px-3 md:px-4 py-2.5 md:py-3 text-center text-base md:text-lg font-medium outline-none focus:border-blue-700 focus:ring-0 transition-colors ${
                  !attemptedWord
                    ? "border-slate-300"
                    : isCorrect
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-red-500 bg-red-50 text-red-700"
                }`}
              />

              {/* Feedback */}

              {attemptedWord && (
                <div
                  className={`mt-4 rounded-lg border px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm ${
                    isCorrect
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p
                    className={`font-semibold ${
                      isCorrect
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                  </p>

                  <p className="mt-2 text-slate-700">
                    <span>Correct Answer:</span>{" "}
                    <span className="font-bold">
                      {word.romaji}
                    </span>
                  </p>

                  <p className="mt-1 text-slate-700">
                    <span>Meaning:</span>{" "}
                    <span className="font-bold">
                      {word.meaning}
                    </span>
                  </p>
                </div>
              )}
            </div>
          );
        })}

        <button
          onClick={() => {
            const scoreCard =
              document.getElementById("score-card");

            if (scoreCard) {
              const y =
                scoreCard.getBoundingClientRect().top +
                window.scrollY -
                100;

              window.scrollTo({
                top: y,
                behavior: "smooth",
              });
            }
          }}
          className="
            fixed
            bottom-20
            left-3
            md:bottom-6
            md:left-auto
            md:right-6
            z-[9999]
            rounded-full
            bg-white
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-800
            shadow-lg
            border
            border-slate-200
            hover:bg-slate-50
            transition
          "
        >
          ⬆️Score
        </button>

      </div>

    </div>
  );
}