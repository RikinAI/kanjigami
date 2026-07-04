"use client";

import Script from "next/script";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomKanaPractice from "@/components/RandomKanaPractice";
import { katakanaData } from "./katakanaData";

type KanaGroup =
  | "basic"
  | "dakuten"
  | "handakuten"
  | "yoon";

export default function KatakanaPracticePage() {
  const [selectedGroups, setSelectedGroups] = useState<KanaGroup[]>([
    "basic",
  ]);

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kanjigami.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Practice",
      item: "https://kanjigami.com/practice",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Katakana Practice",
      item: "https://kanjigami.com/practice/katakana",
    },
  ],
};

  const toggleGroup = (group: KanaGroup) => {
    setSelectedGroups((prev) => {
      if (prev.includes(group)) {
        const updated = prev.filter((g) => g !== group);

        // Prevent having no groups selected
        return updated.length ? updated : ["basic"];
      }

      return [...prev, group];
    });
  };

  const buttonClass = (active: boolean) =>
    `flex items-center gap-2 rounded-xl border px-5 py-2 font-medium transition-all duration-200 ${
      active
        ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
        : "border-slate-300 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50"
    }`;

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Katakana Practice
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Test yourself with random Katakana characters.
            Type the correct romaji and get instant feedback.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">

          <button
            onClick={() => toggleGroup("basic")}
            className={buttonClass(selectedGroups.includes("basic"))}
          >
            <span className="text-lg">
              {selectedGroups.includes("basic") ? "☑" : "☐"}
            </span>
            Basic
          </button>

          <button
            onClick={() => toggleGroup("dakuten")}
            className={buttonClass(selectedGroups.includes("dakuten"))}
          >
            <span className="text-lg">
              {selectedGroups.includes("dakuten") ? "☑" : "☐"}
            </span>
            Dakuten
          </button>

          <button
            onClick={() => toggleGroup("handakuten")}
            className={buttonClass(selectedGroups.includes("handakuten"))}
          >
            <span className="text-lg">
              {selectedGroups.includes("handakuten") ? "☑" : "☐"}
            </span>
            Handakuten
          </button>

          <button
            onClick={() => toggleGroup("yoon")}
            className={buttonClass(selectedGroups.includes("yoon"))}
          >
            <span className="text-lg">
              {selectedGroups.includes("yoon") ? "☑" : "☐"}
            </span>
            Yōon
          </button>

        </div>

        <RandomKanaPractice
          characters={katakanaData}
          groups={selectedGroups}
        />
        
        <Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

      </main>

      <Footer />
    </>
  );
}