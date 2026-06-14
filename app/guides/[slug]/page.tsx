import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

const guidesDirectory = path.join(
  process.cwd(),
  "content/guides"
);

export async function generateStaticParams() {
  const files = fs.readdirSync(guidesDirectory);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(
    guidesDirectory,
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return {
      title: "Guide Not Found",
    };
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { data } = matter(source);

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/guides/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    guidesDirectory,
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return <div>Guide not found</div>;
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-3xl border p-3 md:p-10">

          {/* Breadcrumb */}

          <div className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-green-700">
              Home
            </a>
            {" > "}
            <a href="/guides" className="hover:text-green-700">
              Guides
            </a>
          </div>

          <h1 className="text-xl md:text-5xl font-bold leading-tight mb-4">
            {data.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {data.description}
          </p>

      
          {data.image && (
            <div className="mb-8">
              <img
                src={data.image}
                alt={data.title}
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          )}
            

          <p className="text-sm text-gray-500 mb-8">
            {data.publishedAt} · {data.readingTime}
          </p>

          <div className="max-w-none">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="kg-h2">{children}</h2>
                ),

                h3: ({ children }) => (
                  <h3 className="kg-h3">{children}</h3>
                ),

                p: ({ children }) => (
                  <p className="kg-p">{children}</p>
                ),

                ul: ({ children }) => (
                  <ul className="kg-ul">{children}</ul>
                ),

                ol: ({ children }) => (
                  <ol className="kg-ol">{children}</ol>
                ),

                strong: ({ children }) => (
                  <strong className="kg-strong">{children}</strong>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="kg-link"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}