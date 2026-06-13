import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">

        <div className="bg-white border rounded-3xl p-6 md:p-10">

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            About KanjiGami
          </h1>

          <p className="text-gray-600 mb-8">
            Making Japanese Kanji easier to remember, one story at a time.
          </p>

          <div className="space-y-8">

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Our Mission
              </h2>

              <p className="leading-8 text-gray-700">
                Learning Kanji can feel overwhelming. Many learners struggle
                with memorization, confusing readings, and forgetting characters
                shortly after studying them.
              </p>

              <p className="leading-8 text-gray-700 mt-4">
                KanjiGami was created to make Kanji learning simpler,
                more memorable, and more enjoyable through practical examples,
                memory tricks, interesting facts, and real-world usage.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Why KanjiGami?
              </h2>

              <p className="leading-8 text-gray-700">
                Traditional flashcards and memorization methods work for some
                learners, but many people remember information better through
                stories, visual associations, and context.
              </p>

              <p className="leading-8 text-gray-700 mt-4">
                Every Kanji page on KanjiGami is designed to help learners build
                stronger memory connections using:
              </p>

              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
                <li>Easy-to-remember memory tricks</li>
                <li>Interesting cultural and linguistic facts</li>
                <li>Useful example words</li>
                <li>Example sentences with readings and translations</li>
                <li>JLPT-focused study organization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Who Is This Site For?
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami is built for Japanese learners of all levels,
                especially students preparing for the JLPT examinations.
              </p>

              <p className="leading-8 text-gray-700 mt-4">
                Whether you're learning your first Kanji or reviewing hundreds
                of characters, our goal is to make studying more effective and
                less frustrating.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Continuous Improvement
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami is constantly growing. New Kanji, study resources,
                guides, and learning tools are added regularly to help learners
                improve their Japanese skills.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Thank You
              </h2>

              <p className="leading-8 text-gray-700">
                Thank you for visiting KanjiGami. We hope our resources help
                make your Japanese learning journey more enjoyable and
                successful.
              </p>
            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}