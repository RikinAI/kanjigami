import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">

        <div className="bg-white border rounded-3xl p-6 md:p-10">

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Terms and Conditions
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: June 2026
          </p>

          <div className="space-y-8">

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Acceptance of Terms
              </h2>

              <p className="leading-8 text-gray-700">
                By accessing and using KanjiGami, you agree to comply with and
                be bound by these Terms and Conditions. If you do not agree with
                any part of these terms, please discontinue use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Educational Purpose
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami is an educational website created to help learners
                study Japanese Kanji and prepare for Japanese language
                proficiency exams. All content is provided for educational and
                informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Use of Content
              </h2>

              <p className="leading-8 text-gray-700">
                You may use the content on KanjiGami for personal and
                non-commercial learning purposes. Reproduction, redistribution,
                or commercial use of the content without permission is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Accuracy of Information
              </h2>

              <p className="leading-8 text-gray-700">
                We strive to provide accurate and up-to-date information.
                However, language learning resources may contain errors,
                omissions, or outdated information. Users are encouraged to
                verify important information through multiple sources.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                External Links
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami may contain links to external websites for additional
                learning resources. We are not responsible for the content,
                policies, or practices of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Limitation of Liability
              </h2>

              <p className="leading-8 text-gray-700">
                KanjiGami is provided on an "as is" basis without warranties of
                any kind. We are not liable for any losses, damages, or
                inconveniences resulting from the use of this website or its
                content.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Changes to These Terms
              </h2>

              <p className="leading-8 text-gray-700">
                We may update these Terms and Conditions from time to time.
                Updated versions will be posted on this page, and continued use
                of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Contact
              </h2>

              <p className="leading-8 text-gray-700">
                If you have questions regarding these Terms and Conditions,
                please contact us through the Contact page.
              </p>
            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}