import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import n5 from "../../../data/jlpt-n5.json";
import n4 from "../../../data/jlpt-n4.json";
import n3 from "../../../data/jlpt-n3.json";

const kanjiList = [
  ...n5,
  ...n4,
  ...n3
];

export function generateStaticParams() {
  return kanjiList.map((kanji) => ({
    slug: kanji.slug,
  }));
}



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const kanji = kanjiList.find(
    (item: any) => item.slug === slug
  );

  if (!kanji) {
    return {
      title: "Kanji Not Found",
    };
  }

  return {
  title: `Kanji for ${kanji.meaning} – Meaning, Reading & Memory Trick`,

  description: `Learn the Japanese Kanji for ${kanji.meaning}. Discover interesting fact, memory trick, its meaning, Onyomi and Kunyomi readings, example words, and example sentence on KanjiGami.`,
    alternates: {
    canonical: `/kanji/${kanji.slug}`,
  },
};
}

export default async function KanjiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const kanji = kanjiList.find(
    (item: any) => item.slug === slug
  );

  const backLink = `/jlpt/${kanji?.jlpt.toLowerCase()}`;
  const backText = `← Back to JLPT ${kanji?.jlpt} List`;
  
 const recommendations =
  kanji?.relatedKanji?.length
    ? kanji.relatedKanji
        .map((relatedChar) =>
          kanjiList.find(
            (item) => item.kanji === relatedChar
          )
        )
        .filter(Boolean)
    : [];


  if (!kanji) {
    return <div>Kanji not found</div>;
  }

// Determine which JLPT list this kanji belongs to

const jlptLists: Record<string, any[]> = {
  N5: n5,
  N4: n4,
  N3: n3,
};

const currentList = jlptLists[kanji.jlpt] || n5;

// Navigation only within that JLPT level

const currentIndex = currentList.findIndex(
  (item: any) => item.slug === slug
);

const prevKanji =
  currentList[
    (currentIndex - 1 + currentList.length) %
      currentList.length
  ];

const nextKanji =
  currentList[
    (currentIndex + 1) %
      currentList.length
  ];

  return (
    <>
      {/* Floating Previous */}

      <Link
        href={`/kanji/${prevKanji.slug}`}
        className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-50"
      >
        ←
      </Link>

      {/* Floating Next */}

      <Link
        href={`/kanji/${nextKanji.slug}`}
        className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-50"
      >
        →
      </Link>

      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">

        <div className="bg-white border rounded-3xl p-5 md:p-8">

          {/* Back */}

          <div className="mb-6">

            <Link
              href={backLink}
              className="text-green-700 text-sm hover:underline"
            >
              {backText}
            </Link>

          </div>

          {/* Hero */}

          <div className="flex gap-6 md:gap-8 items-start mb-8">

            <div className="text-[90px] md:text-[120px] leading-none">
              {kanji.kanji}
            </div>

            <div>

              <h1 className="text-3xl md:text-4xl font-bold">
                {kanji.meaning}
              </h1>

              <p className="text-gray-500 mt-2">
                {kanji.kunyomi}
              </p>

              <div className="mt-3">

                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  JLPT {kanji.jlpt}
                </span>

              </div>

            </div>

          </div>

          {/* Interesting Fact */}

          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 mb-6">

            <h2 className="text-xl font-bold mb-3">
              Interesting Fact
            </h2>

            <p className="whitespace-pre-line">
              {kanji.fact}
            </p>
          </div>

          {/* Memory Trick */}

          <div className="bg-green-50 rounded-2xl p-5 md:p-6 mb-6">

            <h2 className="text-xl font-bold mb-3">
              Memory Trick
            </h2>

            <p className="whitespace-pre-line">
              {kanji.memory}
            </p>

          </div>

          {/* Readings */}

          <div className="mb-6">

            <h2 className="text-xl font-bold mb-3">
              Readings
            </h2>

            <p>
              <strong>Onyomi:</strong> {kanji.onyomi}
            </p>

            <p>
              <strong>Kunyomi:</strong> {kanji.kunyomi}
            </p>

          </div>

          {/* Example Words */}

          <div className="mb-6">

            <h2 className="text-xl font-bold mb-3">
              Example Words
            </h2>

            {kanji.words.map((word: any) => (

              <div
                key={word.word}
                className="border-b py-3"
              >

                <div className="font-semibold">
                  {word.word}
                </div>

                <div className="text-gray-500">
                  {word.reading} ({word.romaji})
                </div>

                <div>
                  {word.meaning}
                </div>

              </div>

            ))}

          </div>

          {/* Example Sentence */}

          <div className="mb-8">

            <h2 className="text-xl font-bold mb-3">
              Example Sentence
            </h2>

            <p className="text-xl mb-3">
                {kanji.sentence.japanese}
            </p>

            <p className="text-gray-700 mb-3">
              {kanji.sentence.reading}
            </p>

            <p className="text-gray-500 italic mb-3">
              {kanji.sentence.romaji}
            </p>

            <p>
              {kanji.sentence.english}
            </p>

          </div>

          {/* Recommendations */}

<div className="mt-12">

  <h2 className="text-xl font-bold mb-4">
    Related Kanjis
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {recommendations.map((item: any) => (

      <Link
        key={item.slug}
        href={`/kanji/${item.slug}`}
        className="bg-white border rounded-2xl p-4 text-center hover:border-green-400 transition"
      >

        <div className="text-4xl mb-2">
          {item.kanji}
        </div>

        <div className="font-semibold">
          {item.meaning}
        </div>

      </Link>

    ))}

  </div>

</div>

        </div>

      </main>

      <Footer />

    </>
  );
}