import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">

        <div className="bg-white border rounded-3xl p-6 md:p-10">

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-8">
            We'd love to hear from you.
          </p>

          <div className="space-y-8">

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Get in Touch
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami is a passion project built by a fellow Japanese learner,
                and every suggestion helps make it better for everyone. If a memory
                trick made you smile, a page helped you remember a difficult Kanji,
                or you spot something that could be improved, we'd genuinely love
                to hear from you.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Email
              </h2>

              <a
                href="mailto:your-email@example.com"
                className="text-green-700 hover:underline break-all"
              >
                rikin.kanjigami@gmail.com
              </a>
            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}