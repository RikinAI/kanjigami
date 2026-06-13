export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const titleMap: Record<string, string> = {
    "introduction-to-japanese-writing":
      "Introduction To Japanese Writing",

    "what-is-jlpt":
      "What Is JLPT?",

    "kanji-vs-hiragana-vs-katakana":
      "Kanji vs Hiragana vs Katakana",

    "tips-to-remember-kanji":
      "Tips To Remember Kanji",
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-6">
        {titleMap[slug]}
      </h1>

      <div className="bg-white border rounded-2xl p-6">

        <p>
          Content coming soon...
        </p>

      </div>

    </main>
  );
}