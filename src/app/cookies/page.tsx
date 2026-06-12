import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Retire Without Selling',
  description: 'How we use cookies on the Retire Without Selling website.',
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col flex-1">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#3A7BFF] text-sm tracking-[0.25em] uppercase font-semibold mb-6">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              Cookie Policy
            </h1>

            <div className="space-y-8 text-lg text-[#94a3b8] leading-relaxed">
              <p className="text-white font-semibold">
                Last updated: June 2026
              </p>

              <p>
                This Cookie Policy explains how Regenovate Limited uses cookies and similar technologies on the Retire Without Selling website.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-white">Essential Cookies:</strong> These are necessary for the website to function properly. They enable core features such as security, network management, and accessibility.</li>
                <li><strong className="text-white">Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website and services.</li>
                <li><strong className="text-white">Preference Cookies:</strong> These remember your settings and preferences (such as theme selection) to enhance your experience on return visits.</li>
              </ul>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full mt-4 border-collapse">
                  <thead>
                    <tr className="border-b border-[#1e293b]">
                      <th className="text-left py-3 px-4 text-white font-semibold">Cookie</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1e293b]/50">
                      <td className="py-3 px-4">theme</td>
                      <td className="py-3 px-4">Stores your preferred theme (dark/light/midnight)</td>
                      <td className="py-3 px-4">1 year</td>
                    </tr>
                    <tr className="border-b border-[#1e293b]/50">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Google Analytics — distinguishes users</td>
                      <td className="py-3 px-4">2 years</td>
                    </tr>
                    <tr className="border-b border-[#1e293b]/50">
                      <td className="py-3 px-4">_gid</td>
                      <td className="py-3 px-4">Google Analytics — distinguishes users</td>
                      <td className="py-3 px-4">24 hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">_gat</td>
                      <td className="py-3 px-4">Google Analytics — throttles request rate</td>
                      <td className="py-3 px-4">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can also delete existing cookies from your browser.
              </p>
              <p className="mt-4">
                Please note that disabling cookies may affect the functionality of this website. Essential cookies cannot be disabled as they are necessary for the website to operate.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">5. Third-Party Cookies</h2>
              <p>
                We may use third-party services (such as Google Analytics) that set their own cookies. These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies for more information.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
              </p>

              <h2 className="text-2xl text-white font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@retire-without-selling.com" className="text-[#3A7BFF] hover:underline">hello@retire-without-selling.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
