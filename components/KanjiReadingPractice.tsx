"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  sentence: string;
  question: string;
  options: string[];
  correct: string;
  meaning: string;
  translation: string;
  kanjiSlug: string;
};

type Props = {
  questions: Question[];
};

export default function KanjiReadingPractice({
  questions,
}: Props) {
  const [answers, setAnswers] = useState<
    Record<number, string>
  >({});

  const attempted = useMemo(
    () =>
      questions.filter((q) => answers[q.id]).length,
    [answers, questions]
  );

  const correct = useMemo(
    () =>
      questions.filter(
        (q) => answers[q.id] === q.correct
      ).length,
    [answers, questions]
  );

  const accuracy =
    attempted === 0
      ? 0
      : Math.round((correct / attempted) * 100);

  return (
    <div className="max-w-5xl mx-auto mt-10 md:mt-12">

      {/* Score */}
      <div
        id="score-card"
        className="mt-8 md:mt-10 mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >

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
<div className="mb-8 flex flex-wrap justify-center gap-4">

  <button
    onClick={() => setAnswers({})}
    className="rounded-lg border border-slate-300 bg-white px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
  >
    🔄 Re-test
  </button>

</div>
      
<div className="mb-8">

  <p className="text-base md:text-lg font-bold leading-relaxed tracking-wide text-slate-900">
    <span className="font-bold text-red-700">あか</span>
    の　ことばは　どう　よみますか。
  </p>

  <p className="mt-3 text-base md:text-lg font-bold leading-relaxed tracking-wide text-slate-900">
    １・２・３・４から　いちばん　いい　ものを　
    ひとつ　えらんで　ください。
  </p>

</div>

      {/* Questions */}

      <div className="space-y-8">

        {questions.map((q, index) => {

          const selected = answers[q.id];

          const isCorrect =
            selected === q.correct;

          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="mb-2 text-sm font-semibold text-green-700">
                Question {index + 1}
              </p>

              <p className="mb-6 text-xl md:text-2xl font-medium leading-relaxed text-slate-900">
                {q.sentence.split(q.question).map((part, index, array) => (
                    <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                        <span className="rounded px-1 font-bold text-red-700">
                        {q.question}
                        </span>
                    )}
                    </span>
                ))}
                </p>

              <div className="grid gap-3">

                {q.options.map((option) => {

                  const answered =
                    selected !== undefined;

                  const selectedThis =
                    selected === option;

                  let buttonStyle =
                    "border-slate-300 hover:border-green-300 hover:bg-green-50";

                  if (answered) {
                    if (option === q.correct) {
                      buttonStyle =
                        "border-green-500 bg-green-50 text-green-700";
                    } else if (selectedThis) {
                      buttonStyle =
                        "border-red-500 bg-red-50 text-red-700";
                    }
                  }

                  return (
                    <button
                      key={option}
                      disabled={answered}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: option,
                        }))
                      }
                      className={`rounded-lg border px-4 py-3 text-left transition ${buttonStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}



              </div>

              {selected && (

                <div
                  className={`mt-8 rounded-lg border p-4 ${
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
                    {isCorrect
                      ? "✅ Correct!"
                      : "❌ Incorrect"}
                  </p>

                  <p className="mt-3">
                    <span className="font-medium">
                      Correct Answer:
                    </span>{" "}
                    <strong>{q.correct}</strong>
                  </p>

                  <p className="mt-2">
                    <span className="font-medium">
                      Meaning:
                    </span>{" "}
                    <strong>{q.meaning}</strong>
                  </p>

                  <p className="mt-2">
                    <span className="font-medium">
                      Translation:
                    </span>{" "}
                    <strong>{q.translation}</strong>
                  </p>

                  <p className="mt-4">
                    <Link
                        href={`/kanji/${q.kanjiSlug}`}
                        className="inline-flex items-center gap-1 font-semibold text-orange-700 hover:underline"
                    >
                        <span>▶️ Revisit</span>
                        <strong>{q.question}</strong>
                        <span>Kanji →</span>
                    </Link>
                    </p>

                </div>

              )}

            </div>
          );

        })}

      </div>

    </div>
  );
}