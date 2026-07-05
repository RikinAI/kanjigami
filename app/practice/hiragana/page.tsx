"use client";

import Script from "next/script";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomKanaPractice from "@/components/RandomKanaPractice";
import { hiraganaData } from "./hiraganaData";
import Link from "next/link";


type KanaGroup =
  | "basic"
  | "dakuten"
  | "handakuten"
  | "yoon";

export default function HiraganaPracticePage() {
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
      name: "Hiragana Practice",
      item: "https://kanjigami.com/practice/hiragana",
    },
  ],
};

  const [refreshKey, setRefreshKey] = useState(0);

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
      ? "border-green-500 bg-green-50 green-red-700 shadow-sm"
      : "border-slate-300 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50"
  }`;

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Hiragana Practice
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Test yourself with random Hiragana characters.
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
          characters={hiraganaData}
          groups={selectedGroups}
        />

 <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Hiragana Reading Practice */}
    <Link
          href="/practice/hiragana-reading-1"
          className="group bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl md:text-5xl font-bold text-green-700">
              試
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Hiragana Reading Practice 1
              </h3>

              <p className="mt-1 text-sm md:text-base text-slate-600 leading-6">
                Practice Hiragana Reading with vocabulary words.
              </p>

              <div className="mt-4 font-semibold text-green-700 group-hover:translate-x-1 transition-transform">
                Start Learning →
              </div>
            </div>
          </div>
        </Link>


  </div>
</section>   

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