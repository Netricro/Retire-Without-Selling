import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Retire Without Selling',
  description: 'How we collect, use, and protect your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col flex-1">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p className="text-white font-semibold">
                Last updated: June 2026
              </p>

              <p>
                This Privacy Policy describes how the operator of this website ("we", "us", or "our") collects, uses, and protects your personal information when you use the Retire Without Selling website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">1. Who We Are</h2>
              <p>
                We are a company registered in England and Wales (Company Number: 15339923). Our registered address is The Wellington, High Street, Uttoxeter, England, ST14 7JD. We are the data controller for the personal information collected through this website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">2. What Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and business details when you fill out forms or contact us.</li>
                <li><strong className="text-white">Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
                <li><strong className="text-white">Usage Information:</strong> How you interact with our website, pages visited, and time spent on the site.</li>
              </ul>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Respond to your enquiries and provide our services</li>
                <li>Send you relevant information about business exit planning and retirement strategies</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">4. Legal Basis for Processing</h2>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR), we process your data based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-white">Consent:</strong> When you sign up for newsletters or agree to receive marketing communications.</li>
                <li><strong className="text-white">Legitimate Interests:</strong> When processing is necessary for our business operations and does not override your rights.</li>
                <li><strong className="text-white">Contract:</strong> When we need to process data to provide services you have requested.</li>
              </ul>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">5. How We Share Your Information</h2>
              <p>
                We do not sell your personal data. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Service providers who help us operate our website and deliver services</li>
                <li>Professional advisers such as lawyers and accountants</li>
                <li>Regulatory authorities when required by law</li>
              </ul>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:hello@retirewithoutselling.com" className="text-[#3A7BFF] hover:underline">hello@retirewithoutselling.com</a>.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">7. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, including for legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">8. Cookies</h2>
              <p>
                We use cookies to improve your experience on our website. For more information, please see our <Link href="/cookies" className="text-[#3A7BFF] hover:underline">Cookie Policy</Link>.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong> <a href="mailto:hello@retirewithoutselling.com" className="text-[#3A7BFF] hover:underline">hello@retirewithoutselling.com</a><br />
                <strong className="text-white">Address:</strong> The Wellington, High Street, Uttoxeter, England, ST14 7JD
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
