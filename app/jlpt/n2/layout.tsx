import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N2 Kanji List (366 Kanji) | Meanings, Onyomi, Kunyomi, Interesting Facts, Memory Trick and Examples",

  description:
    "Master all 366 JLPT N2 Kanji with meanings, Onyomi, Kunyomi, example words, example sentences, memory tricks, and study tips. Perfect for JLPT N3 preparation.",

  alternates: {
    canonical: "/jlpt/n2",
  },
};

export default function N2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}