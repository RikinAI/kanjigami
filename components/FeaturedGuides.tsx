import Link from "next/link";
import guides from "../data/guides.json";

export default function FeaturedGuides() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        📖 Featured Guides
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {guides.slice(0, 4).map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="border rounded-2xl p-5 hover:border-green-600 hover:shadow"
          >
            <h3 className="font-semibold text-lg mb-2">
              {guide.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}