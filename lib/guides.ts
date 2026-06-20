import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDirectory = path.join(
  process.cwd(),
  "content/guides"
);

export function getAllGuides() {
  const fileNames = fs.readdirSync(guidesDirectory);

  const guides = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "");

    const fullPath = path.join(
      guidesDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
            slug,
            title: data.title,
            description: data.description,
            readingTime: data.readingTime,
            image: data.image,
            order: data.order ?? 999,
            date: data.date,
            };
  });

  return guides.sort(
    (a, b) => a.order - b.order
  );
}