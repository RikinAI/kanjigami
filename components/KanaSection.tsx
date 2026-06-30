import Link from "next/link";

export default function KanaSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Hiragana */}
        <Link
          href="/hiragana"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-blue-700">
              あ
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Learn Hiragana
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Master all 46 Hiragana characters with Romaji, Dakuten,
                Handakuten and Combination Sounds.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>

        {/* Katakana */}
        <Link
          href="/katakana"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-blue-700">
              ア
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Learn Katakana
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Learn Katakana used for foreign words, names, and modern
                Japanese vocabulary.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}