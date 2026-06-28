import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N3 Kanji List (330 Kanji) | Meanings, Onyomi, Kunyomi, Interesting Facts, Memory Trick and Examples",

  description:
    "Master all 330 JLPT N3 Kanji with meanings, Onyomi, Kunyomi, example words, example sentences, memory tricks, and study tips. Perfect for JLPT N3 preparation.",

  alternates: {
    canonical: "/jlpt/n3",
  },
};

export default function N3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}