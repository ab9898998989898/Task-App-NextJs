import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-800/50 shadow-2xl shadow-cyan-500/10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Terms & Conditions
        </h1>
        <p className="text-slate-400">
          Last Updated:{" "}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </header>

      <div className="space-y-12 text-slate-300 leading-relaxed text-base md:text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using any portion of our platform, website, mobile
            application, or related services (collectively referred to as the "Services"),
            you acknowledge that you have read, understood, and agree to be bound by these
            Terms and Conditions ("Terms"), along with our Privacy Policy. These terms form a legally binding agreement between you
            and our company ("we," "us," "our"). If you do not agree with one or more provisions of this
            agreement, you are strictly prohibited from accessing or using the Services in
            any capacity. Your continued use of the Services constitutes your acceptance of any amendments to these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">2. User Eligibility and Responsibilities</h2>
          <p className="mb-4">
            You must be at least 18 years of age or the age of legal majority in your jurisdiction to use our Services. By using the Services, you represent and warrant that you meet this requirement.
          </p>
          <p className="mb-4">
            You are solely responsible for accurately maintaining your account information,
            ensuring the security of your login credentials, and monitoring all activities
            associated with your account. You agree not to share your password or allow
            unauthorized individuals to access your account under any circumstances. You must notify us immediately of any unauthorized use of your account.
          </p>
          <p>
            You further agree to comply with all applicable local, state, national, and international laws, regulations, and ethical
            guidelines while using the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">3. Prohibited Conduct</h2>
          <p className="mb-4">
            Your use of the Services is contingent on your adherence to the rules of conduct set forth in these Terms. You agree not to engage in any of the following prohibited activities:
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-slate-400">
            <li>Attempting to breach security, reverse-engineering platform components, distributing malicious
            software, or engaging in fraudulent actions.</li>
            <li>Using the Services for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li>Harassing, threatening, defaming, or otherwise violating the legal rights of others.</li>
            <li>Scraping, data mining, or using any automated means to collect information from the Services without our express written permission.</li>
            <li>Uploading or transmitting any material that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
            <li>Interfering with or disrupting the integrity or performance of the Services or the data contained therein.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">4. Intellectual Property Rights</h2>
          <p>
            All materials provided within the Services, including but not limited to text,
            graphics, logos, icons, images, design elements, source code, software
            architecture, and database structures, are the exclusive property of our company
            or our licensors and are protected under international
            copyright, trademark, and intellectual property legislation.
          </p>
          <p className="mt-3">
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, non-commercial use. You may not reproduce, modify, republish, transmit, or distribute any part of the
            Services without explicit written permission. Any unauthorized use may violate
            applicable laws and will be subject to legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">5. User-Generated Content</h2>
          <p>
            If you post, upload, or make available any content on the Services ("User Content"), you retain all rights in, and are solely responsible for, the User Content you post. However, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Services and our business.
          </p>
          <p className="mt-3">
            You represent and warrant that you have the legal rights to grant this license and that your User Content does not violate any third-party rights or applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">6. Disclaimer of Warranties and Limitation of Liability</h2>
          <p>
            Our platform is provided on an "as-is" and "as-available" basis. We make no
            warranties, express or implied, regarding reliability, availability, accuracy, or error-free operation. You
            acknowledge that online platforms inherently involve potential risks such as
            technical malfunctions, cyber threats, and unplanned maintenance.
          </p>
          <p className="mt-3">
            To the fullest extent permitted by law, we, our affiliates, and our licensors disclaim all liability for any direct,
            indirect, incidental, special, consequential, or exemplary damages that arise from your use of or inability to use the Services. This includes, but is not limited to, loss of data, loss of profits, operational disruptions,
            service downtime, or any other damages—whether foreseeable or unforeseen.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless our company, its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">8. Modifications to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to update, modify, or replace portions of these Terms and
            Conditions at any time. Any changes will take
            effect immediately upon posting an updated version on the website or application. While we may provide notice of significant changes, it is your responsibility to review the Terms periodically to stay informed.
          </p>
          <p className="mt-3">
            By continuing to use the Services after changes are posted, you acknowledge and
            accept the revised Terms. If you disagree with the modifications, you must
            discontinue use of the platform immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">9. Termination of Access</h2>
          <p>
            We reserve the right to suspend or permanently terminate your access to the
            Services at our sole discretion, with or without notice, if we detect suspicious activity, breach of these Terms, misuse of platform
            resources, or engagement in illegal or unethical behavior. Upon termination, all
            rights and licenses granted to you under these Terms will immediately cease, and we may delete your account and User Content. Provisions of these Terms that by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">10. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of
            the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Any disputes arising from the use
            of our Services shall be resolved exclusively by the appropriate state or federal courts within
            that jurisdiction. You consent to the personal jurisdiction of such courts.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">11. General Provisions</h2>
          <p className="mb-3"><strong className="text-slate-200">Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Service and supersede all prior agreements.</p>
          <p className="mb-3"><strong className="text-slate-200">Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, that provision will be struck and the remaining provisions will be enforced to the fullest extent under law.</p>
          <p className="mb-3"><strong className="text-slate-200">Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
          <p><strong className="text-slate-200">Contact Information:</strong> If you have any questions about these Terms, please contact us at support@example.com.</p>
        </section>

        <footer className="pt-8 border-t border-slate-800 mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Thank you for reviewing our Terms & Conditions. Your trust is important to us.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;
