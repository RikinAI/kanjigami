import Link from "next/link";

import n5 from "../data/jlpt-n5.json";



const allKanji = [...n5];

export default function Hero() {
  // India time
  const now = new Date();

  const indiaTime = new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
  );

  // Change Kanji every day at 6 AM IST
  indiaTime.setHours(indiaTime.getHours() - 6);

  const seed =
    indiaTime.getFullYear() * 10000 +
    (indiaTime.getMonth() + 1) * 100 +
    indiaTime.getDate();

  const index = seed % allKanji.length;

  const kanjiOfDay = allKanji[index];

  return (
    <section className="max-w-5xl mx-auto px-4 py-6 md:py-10">

      <div className="bg-white border rounded-3xl p-5 md:p-10">

        <div className="text-center text-green-800 font-bold text-xl md:text-3xl mb-6 md:mb-10 tracking-wide">
          KANJI OF THE DAY
        </div>

        {/* Kanji Section */}

        <div className="mb-5 md:mb-8">

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">

            {/* Kanji */}

            <div className="flex flex-col items-center">

              <div className="text-[80px] md:text-[120px] leading-none">
                {kanjiOfDay.kanji}
              </div>

              <div className="text-sm md:text-lg text-gray-500 mt-1 text-center">
                {kanjiOfDay.kunyomi}
              </div>
              
            </div>

            {/* Meaning */}

            <div className="flex-1 flex items-center justify-center md:justify-start">

              <div className="text-xl md:text-3xl font-semibold break-words text-center md:text-left">
                {kanjiOfDay.meaning}
              </div>

            </div>

          </div>

        </div>

        {/* Interesting Fact */}

        <div className="bg-slate-50 rounded-2xl p-4 md:p-6 mb-4">

          <h2 className="text-green-800 font-bold text-lg md:text-xl mb-2">
            Interesting Fact
          </h2>

          <p className="text-sm md:text-lg leading-6 md:leading-8 text-gray-700">
            {kanjiOfDay.fact}
          </p>

        </div>

        {/* Memory Trick */}

        <div className="bg-green-50 rounded-2xl p-4 md:p-6 mb-5">

          <h2 className="text-green-800 font-bold text-lg md:text-xl mb-2">
            Memory Trick
          </h2>

          <p className="text-sm md:text-lg leading-6 md:leading-8 text-gray-700">
            {kanjiOfDay.memory}
          </p>

        </div>

        {/* Button */}

        <Link
          href={`/kanji/${kanjiOfDay.slug}`}
          className="inline-block bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-xl font-medium text-sm"
        >
          View Full Details →
        </Link>

      </div>

    </section>
  );
}