const fs = require("fs");
const path = require("path");

const BASE_URL = "https://kanjigami.com";

const urls = [
  "",
  "/guides",
  "/jlpt/n5",
  "/jlpt/n4",
  "/jlpt/n3",
  "/jlpt/n2",
  "/practice/",
  "/hiragana",
  "/practice/hiragana",
  "/practice/hiragana-reading-1",
  "/katakana",
  "/practice/katakana",
  "/search",
  "/privacy-policy",
  "/terms-and-conditions",
];

// ---------- Guides ----------

const guidesDir = path.join(
  process.cwd(),
  "content/guides"
);

if (fs.existsSync(guidesDir)) {
  const guides = fs.readdirSync(guidesDir);

  guides.forEach((file) => {
    urls.push(
      `/guides/${file.replace(".mdx", "")}`
    );
  });
}

// ---------- JLPT Kanji ----------

const jlptFiles = [
  "jlpt-n5.json",
  "jlpt-n4.json",
  "jlpt-n3.json",
  "jlpt-n2.json",
  "jlpt-n1.json",
];

jlptFiles.forEach((file) => {
  const filePath = path.join(
    process.cwd(),
    "data",
    file
  );

  if (!fs.existsSync(filePath)) return;

  const kanjiData = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  kanjiData.forEach((kanji) => {
    if (kanji.slug) {
      urls.push(`/kanji/${kanji.slug}`);
    }
  });
});

// ---------- XML ----------

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls
  .map(
    (url) => `
<url>
  <loc>${BASE_URL}${url}</loc>
</url>`
  )
  .join("")}

</urlset>`;

fs.writeFileSync(
  path.join(process.cwd(), "public", "sitemap.xml"),
  xml
);

console.log(
  `✅ Sitemap generated with ${urls.length} URLs`
);