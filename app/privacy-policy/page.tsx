import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
return (
<> <Header />


  <main className="max-w-4xl mx-auto px-4 py-8">

    <div className="bg-white border rounded-3xl p-6 md:p-10">

      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-8">
        Last updated: June 2026
      </p>

      <div className="space-y-6">

        <section>
          <h2 className="text-xl font-bold mb-2">
            Introduction
          </h2>

          <p>
            KanjiGami respects your privacy. This Privacy Policy explains how information may be collected, used, and protected when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Information We Collect
          </h2>

          <p>
            We may collect non-personal information such as browser type, device information, pages visited, and time spent on the website to improve user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Cookies
          </h2>

          <p>
            KanjiGami may use cookies and similar technologies to enhance website functionality, analyze traffic, and improve user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Third-Party Services
          </h2>

          <p>
            We may use third-party services such as Google Analytics and Google AdSense. These services may collect information according to their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Google AdSense
          </h2>

          <p>
            Google may use cookies to serve ads based on your visits to this and other websites. Users may opt out of personalized advertising through Google's Ads Settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Data Security
          </h2>

          <p>
            We take reasonable measures to protect information collected through our website. However, no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Changes to This Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Contact
          </h2>

          <p>
            If you have questions regarding this Privacy Policy, please contact us through our Contact page.
          </p>
        </section>

      </div>

    </div>

  </main>

  <Footer />
</>


);
}
