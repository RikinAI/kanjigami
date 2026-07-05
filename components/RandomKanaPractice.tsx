"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { KanaCharacter } from "@/types/kana";
import Link from "next/link";

type KanaGroup =
  | "basic"
  | "dakuten"
  | "handakuten"
  | "yoon";

type Props = {
  characters: KanaCharacter[];
  groups: KanaGroup[];
};

export default function RandomKanaPractice({
  characters,
  groups,
}: Props) {
  const [questions, setQuestions] = useState<KanaCharacter[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function shuffle<T>(array: T[]) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function generateQuestions() {
    const pool = characters.filter((character) =>
      groups.includes(character.group)
    );

    const random = shuffle(pool).slice(
      0,
      Math.min(20, pool.length)
    );

    setQuestions(random);
    setAnswers({});
    inputRefs.current = [];
  }

  useEffect(() => {
    generateQuestions();
  }, [groups]);

  const attempted = useMemo(
    () =>
      questions.filter(
        (question) => answers[question.kana]?.trim()
      ).length,
    [answers, questions]
  );

  const correct = useMemo(
    () =>
      questions.filter(
        (question) =>
          answers[question.kana] === question.romaji
      ).length,
    [answers, questions]
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

  return (
    <div className="max-w-5xl mx-auto px-4">

      {/* Score */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-3 text-center">

          <div>
            <p className="text-sm text-slate-500">Correct</p>
            <p className="text-3xl font-bold text-green-600">
              {correct}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Attempted</p>
            <p className="text-3xl font-bold text-blue-600">
              {attempted}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Accuracy</p>
            <p className="text-3xl font-bold text-orange-600">
              {accuracy}%
            </p>
          </div>

        </div>
      </div>

      {/* New Random Set */}
<div className="mb-8 flex flex-wrap justify-center items-center gap-4">

    <Link
    href="/hiragana"
    className="rounded-lg border border-green-600 px-5 py-2 font-medium text-green-700 hover:bg-green-50 transition"
  >
    ← Review Hiragana <strong>あ</strong>
  </Link>

    <Link
    href="/katkana"
    className="rounded-lg border border-green-600 px-5 py-2 font-medium text-green-700 hover:bg-green-50 transition"
  >
    ← Review Katakana <strong>ア</strong>
  </Link>

  <button
    onClick={generateQuestions}
    className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-700 hover:bg-green-50 transition"
  >
    🔄 New Set
  </button>



</div>

      {/* Practice Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">

        {questions.map((question, index) => (
          <div
            key={`${question.kana}-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <div className="mb-4 text-4xl font-bold">
              {question.kana}
            </div>

            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={3}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              value={answers[question.kana] || ""}
              onChange={(e) =>
                handleChange(question.kana, e.target.value)
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" ||
                  e.key === " "
                ) {
                  e.preventDefault();
                  inputRefs.current[index + 1]?.focus();
                }
              }}
              className={`mx-auto box-border h-10 w-10 rounded-lg border px-1 text-center font-medium outline-none transition-colors ${
                        !answers[question.kana]
                            ? "border-slate-300"
                            : answers[question.kana] === question.romaji
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-red-500 bg-red-50 text-red-700"
                        }`}
            />
          </div>
        ))}

      </div>

    </div>
  );
}