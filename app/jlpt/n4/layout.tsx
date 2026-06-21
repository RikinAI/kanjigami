import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N4 Kanji List (180 Kanji) | Meanings, Onyomi, Kunyomi, Interesting Facts, Memory Trick and Examples",

  description:
    "Master all 180 JLPT N4 Kanji with meanings, Onyomi, Kunyomi, example words, example sentences, memory tricks, and study tips. Perfect for JLPT N4 preparation.",

  alternates: {
    canonical: "/jlpt/n4",
  },
};

export default function N4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}