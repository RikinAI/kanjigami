"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

              <span className="text-orange-700">
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
              className="hover:text-orange-700"
            >
              🏠 Home
            </a>

            <a
              href="/jlpt/n5"
              className="hover:text-orange-700"
            >
              🌸 JLPT N5 Kanji
            </a>

            <a
              href="/jlpt/n4"
              className="hover:text-orange-700"
            >
              🍃 JLPT N4 Kanji
            </a>

            <a
              href="/jlpt/n3"
              className="hover:text-orange-700"
            >
              ⛩️ JLPT N3 Kanji
            </a>

            <a
              href="/jlpt/n2"
              className="hover:text-orange-700"
            >
              🌄 JLPT N2 Kanji
            </a>

            <Link
              href="/guides"
              className="hover:text-orange-700"
            >
              📚 Guides
            </Link>

            <a href="/search">
              🔍 Search
            </a>

          </nav>

        </div>

      </div>

      {/* Mobile Navigation */}

      <div className="md:hidden border-t bg-slate-50">

        <div className="flex justify-around items-center py-2 text-sm font-medium">

          <Link href="/">
            🏠 Home
          </Link>

          <Link href="/guides">
            📚 Guides
          </Link>

          <Link href="/search">
            🔍 Search
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-medium"
          >
            ☰ Kanji List
          </button>

        </div>

        {menuOpen && (
          <div className="flex flex-col border-t bg-white">

            <Link
              href="/jlpt/n5"
              className="px-4 py-3 border-b hover:bg-slate-100"
            >
              🌸 JLPT N5 Kanji
            </Link>

            <Link
              href="/jlpt/n4"
              className="px-4 py-3 border-b hover:bg-slate-100"
            >
              🍃 JLPT N4 Kanji
            </Link>

            <Link
              href="/jlpt/n3"
              className="px-4 py-3 border-b hover:bg-slate-100"
            >
              ⛩️ JLPT N3 Kanji
            </Link>

            <Link
              href="/jlpt/n2"
              className="px-4 py-3 border-b hover:bg-slate-100"
            >
              🌄 JLPT N2 Kanji
            </Link>

          </div>
        )}



      </div>

    </header>
  );
}