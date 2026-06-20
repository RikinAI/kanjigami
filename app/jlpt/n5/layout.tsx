import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N5 Kanji List (112 Kanji) | Meanings, Onyomi, Kunyomi, Interesting Facts, Memory Trick and Examples",

  description:
    "Master all 112 JLPT N5 Kanji with meanings, Onyomi, Kunyomi, example words, example sentences, memory tricks, and study tips. Perfect for JLPT N5 preparation.",

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