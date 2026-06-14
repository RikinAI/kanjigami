import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 md:mt-20 bg-white border-t">

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">

          {/* Brand */}

          <div>

            <h3 className="text-xl md:text-2xl font-bold">

              <span className="text-black">
                Kanji
              </span>

              <span className="text-orange-700">
                Gami
              </span>

            </h3>

            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Remembering Kanji Made Easy.
            </p>

            <div className="text-xs text-gray-400 mt-3">
              日本語を楽しく学ぼう
            </div>

          </div>

          {/* JLPT */}

          <div>

            <h4 className="font-bold mb-3 text-sm md:text-base">
              JLPT
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/jlpt/n5"
                  className="hover:text-green-700"
                >
                  N5 Kanji
                </Link>
              </li>

              <li>
                <Link
                  href="/jlpt/n4"
                  className="hover:text-green-700"
                >
                  N4 Kanji
                </Link>
              </li>

              <li>
                <Link
                  href="/jlpt/n3"
                  className="hover:text-green-700"
                >
                  N3 Kanji
                </Link>
              </li>

            </ul>

          </div>

          {/* Popular */}

          <div>

            <h4 className="font-bold mb-3 text-sm md:text-base">
              Popular
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/kanji/kanji-love"
                  className="hover:text-green-700"
                >
                  Kanji for Love
                </Link>
              </li>

              <li>
                <Link
                  href="/kanji/kanji-God"
                  className="hover:text-green-700"
                >
                  Kanji for God
                </Link>
              </li>

              <li>
                <Link
                  href="/kanji/kanji-day-sun"
                  className="hover:text-green-700"
                >
                  Kanji for Sun
                </Link>
              </li>

            </ul>

          </div>

          {/* Guides & Blogs */}

        <div>

          <h4 className="font-bold mb-3 text-sm md:text-base">
            Guides
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                href="/guides/why-learning-kanji-is-important"
                className="hover:text-green-700"
              >
                Why Learning Kanji is Important
              </Link>
            </li>

            <li>
              <Link
                href="/guides/how-to-remember-kanji-easily"
                className="hover:text-green-700"
              >
                How to Remember Kanjis easily
              </Link>
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h4 className="font-bold mb-3 text-sm md:text-base">
            Company
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                href="/about"
                className="hover:text-green-700"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-green-700"
              >
                Contact Me
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-green-700"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-green-700"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>

        </div>

        </div>

        {/* Bottom */}

        <div className="border-t mt-8 pt-4 text-center text-xs text-gray-400">

          © 2026 KanjiGami • Remembering Kanji Made Easy.

        </div>

      </div>

    </footer>
  );
}