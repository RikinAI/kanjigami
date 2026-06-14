import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Japanese Kanji Learning Guides | KanjiGami",
  description:
    "Learn Japanese Kanji faster with practical guides, study tips, memory tricks, and JLPT advice.",
};
const guides = [
  {
    slug: "why-learning-kanji-is-important",
    title:
      "Why Learning Kanji Is Important: 7 Reasons Every Japanese Learner Should Know",
    description:
      "Discover why learning Kanji improves reading, listening, vocabulary, and overall Japanese fluency.",
    readingTime: "6 min read",
  },
  {
    slug: "how-to-remember-kanji-easily",
    title:
      "How to Remember Kanji Easily: Practical Tips for Beginners",
    description:
      "Learn simple memory tricks and study techniques to remember Japanese Kanji faster.",
    readingTime: "8 min read",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">
          Japanese Learning Guides
        </h1>

        <p className="text-gray-600 mb-8">
          Helpful guides for learning Japanese Kanji, vocabulary,
          reading, and JLPT preparation.
        </p>

        <div className="space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border rounded-2xl p-6 hover:border-green-600 hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {guide.title}
              </h2>

              <p className="text-gray-600 mb-2">
                {guide.description}
              </p>

              <p className="text-sm text-gray-500">
                {guide.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}