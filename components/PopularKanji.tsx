import Link from "next/link";

export default function PopularKanji() {
  const kanji = [
    {
      symbol: "愛",
      meaning: "Love",
      reading: "あい (ai)",
      slug: "love",
    },
    {
      symbol: "神",
      meaning: "God",
      reading: "かみ (kami)",
      slug: "god",
    },
    {
      symbol: "金",
      meaning: "Money, Gold",
      reading: "かね (kane)",
      slug: "money",
    },
    {
      symbol: "心",
      meaning: "Heart",
      reading: "こころ (kokoro)",
      slug: "heart",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">

      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Popular Kanji
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

        {kanji.map((item) => (

          <Link
            key={item.symbol}
            href={`/kanji/${item.slug}`}
            className="bg-white rounded-2xl border p-4 md:p-6 text-center hover:shadow-md hover:border-green-300 transition"
          >

            <div className="text-5xl md:text-6xl mb-2 md:mb-4">
              {item.symbol}
            </div>

            <div className="font-bold text-base md:text-lg">
              {item.meaning}
            </div>

            <div className="text-xs md:text-sm text-gray-500 mt-1">
              {item.reading}
            </div>

            <div className="text-[10px] md:text-xs text-green-700 mt-2">
              Explore →
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}