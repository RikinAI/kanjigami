import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N5 Kanji List – Interesting Facts, Memory Tricks, Meanings, Readings & Study Guide",

  description:
    "Study all JLPT N5 Kanji with interesting facts, memory tricks, meanings, Onyomi, Kunyomi, example words, and example sentences.",

  alternates: {
    canonical: "/jlpt/n5",
  },
};

export default function N5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}