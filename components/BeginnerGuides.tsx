import Link from "next/link";

export default function BeginnerGuides() {
  const guides = [
    {
      title: "Introduction To Japanese Writing",
      slug: "introduction-to-japanese-writing",
    },
    {
      title: "What Is JLPT?",
      slug: "what-is-jlpt",
    },
    {
      title: "Kanji vs Hiragana vs Katakana",
      slug: "kanji-vs-hiragana-vs-katakana",
    },
    {
      title: "Tips To Remember Kanji",
      slug: "tips-to-remember-kanji",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">

      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Beginner Guides
      </h2>

      <div className="grid md:grid-cols-2 gap-3 md:gap-5">

        {guides.map((guide) => (

          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="bg-white rounded-2xl border p-4 md:p-6 hover:shadow-md hover:border-green-300 transition"
          >

            <div className="font-medium">
              {guide.title}
            </div>

            <div className="text-xs text-green-700 mt-2">
              Read Guide →
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}