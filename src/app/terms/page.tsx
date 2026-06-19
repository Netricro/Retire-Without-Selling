import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Retire Without Selling',
  description: 'Terms of use for the Retire Without Selling website.',
};

export default function Terms() {
  return (
    <div className="flex flex-col flex-1">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              Terms and Conditions
            </h1>

            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p className="text-white font-semibold">
                Last updated: June 2026
              </p>

              <p>
                Please read these Terms and Conditions carefully before using the Retire Without Selling website operated by the operator of this website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">2. About Us</h2>
              <p>
                This website is operated by a company registered in England and Wales (Company Number: 15339923). Our registered address is The Wellington, High Street, Uttoxeter, England, ST14 7JD.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">3. Use of the Website</h2>
              <p>
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behaviour includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of the operator of this website or its content suppliers and is protected by UK and international copyright laws. You may not reproduce, modify, distribute, or republish any content from this website without our prior written consent.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">5. Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only and does not constitute professional advice. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on it.
              </p>
              <p className="mt-4">
                Any reliance you place on such information is strictly at your own risk. Business exit planning and retirement strategies involve complex financial and legal considerations. We strongly recommend seeking independent professional advice before making any decisions.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                To the extent permitted by law, the operator of this website shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website or any content on it.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">7. External Links</h2>
              <p>
                Our website may contain links to third-party websites. We have no control over the content of these websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">8. Changes to These Terms</h2>
              <p>
                We may revise these Terms and Conditions at any time by updating this page. By continuing to use the website after changes are posted, you agree to be bound by the revised terms.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:hello@retire-without-selling.com" className="text-[#3A7BFF] hover:underline">hello@retire-without-selling.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
