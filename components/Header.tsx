export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4">

        <div className="h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}

          <div>

            <div className="text-2xl md:text-3xl font-bold">

              <span className="text-black">
                Kanji
              </span>

              <span className="text-green-800">
                Gami
              </span>

            </div>

            <div className="text-xs md:text-sm text-gray-500">
              Remembering Kanji Made Easy.
            </div>

          </div>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

            <a
              href="/"
              className="hover:text-green-700"
            >
              🏠 Home
            </a>

            <a
              href="/jlpt/n5"
              className="hover:text-green-700"
            >
              📘 N5 Kanji
            </a>

            <a
              href="/jlpt/n4"
              className="hover:text-green-700"
            >
              📗 N4 Kanji
            </a>

            <a href="/search">
  🔍 Search
</a>

          </nav>

        </div>

      </div>

      {/* Mobile Navigation */}

      <div className="md:hidden border-t bg-slate-50">

        <div className="flex justify-around py-2 text-xs font-medium">

          <a href="/">
            🏠 Home
          </a>

          <a href="/jlpt/n5">
            📘 N5 Kanji
          </a>

          <a href="/jlpt/n4">
            📗 N4 Kanji
          </a>

          <a href="/search">
  🔍 Search
</a>

        </div>

      </div>

    </header>
  );
}