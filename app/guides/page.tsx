import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllGuides } from "../../lib/guides";
import Image from "next/image";
export const metadata = {
  title: "Japanese Kanji Learning Guides | KanjiGami",
  description:
    "Learn Japanese Kanji faster with practical guides, study tips, memory tricks, and JLPT advice.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

    const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kanjigami.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: "https://kanjigami.com/guides",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">
          Japanese Learning Guides
        </h1>

        <p className="text-gray-600 mb-8">
          Helpful guides for learning Japanese Kanji,
          vocabulary, reading, and JLPT preparation.
        </p>

        <div className="space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block overflow-hidden rounded-xl border bg-white hover:shadow-lg transition"
            >
              <div className="flex flex-col md:grid md:grid-cols-[320px_1fr]">

                <div className="relative h-36 md:h-full">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 md:p-6">
                  <h2 className="text-lg md:text-2xl font-semibold mb-1">
                    {guide.title}
                  </h2>

                  <p className="text-sm md:text-base text-gray-600 mb-2 line-clamp-2">
                    {guide.description}
                  </p>

                  <p className="text-xs md:text-sm text-gray-500">
                    {guide.readingTime}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </main>

      <Footer />
    </>
  );
}