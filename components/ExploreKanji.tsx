export default function ExploreKanji() {
  const cards = [
    {
      title: "JLPT N5 Kanji",
      subtitle: "103 Essential Beginner Kanji",
    },
    {
      title: "JLPT N4 Kanji",
      subtitle: "181 Elementary Kanji",
    },
    {
      title: "JLPT N3 Kanji",
      subtitle: "367 Intermediate Kanji",
    },
    {
      title: "JLPT N2 Kanji",
      subtitle: "Advanced Kanji",
    },
    {
      title: "JLPT N1 Kanji",
      subtitle: "Expert Kanji",
    },
    {
      title: "Kanji for Love",
      subtitle: "愛 and related Kanji",
    },
    {
      title: "Kanji for God",
      subtitle: "神 and related Kanji",
    },
    {
      title: "Kanji for Money",
      subtitle: "金 and related Kanji",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">
        Explore Kanji
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl border p-5 hover:shadow-md cursor-pointer"
          >
            <h3 className="font-bold text-lg">
              {card.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}