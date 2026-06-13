import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JLPT N4 Kanji List – Interesting Facts, Memory Tricks, Meanings, Readings & Study Guide",

  description:
    "Study JLPT N4 Kanji with interesting facts, memory tricks, meanings, Onyomi, Kunyomi, interesting facts,  example words, and example sentences. Perfect for learners progressing beyond N5.",

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