import React from 'react';

const SecurityPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-800/50 shadow-2xl shadow-cyan-500/10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Security Overview
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
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Our Commitment to Security</h2>
          <p>
            At our company, the security of your data and the integrity of our platform are paramount. We are committed to implementing and maintaining a robust security program that protects your information from unauthorized access, alteration, disclosure, or destruction. This document provides an overview of the technical and organizational measures we have in place.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Data Protection & Encryption</h2>
          <p className="mb-4">
            We employ strong encryption protocols to protect your data both in transit and at rest.
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-slate-400">
            <li>
              <strong className="text-slate-200">Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using industry-standard TLS (Transport Layer Security) 1.2 or higher. This prevents eavesdropping and man-in-the-middle attacks.
            </li>
            <li>
              <strong className="text-slate-200">Encryption at Rest:</strong> All user data, including database records and stored files, is encrypted at rest using the AES-256 standard, one of the strongest block ciphers available.
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Infrastructure Security</h2>
          <p className="mb-4">
            Our services are hosted on leading cloud infrastructure providers that offer state-of-the-art physical and network security.
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-slate-400">
            <li>
              <strong className="text-slate-200">Network Security:</strong> Our infrastructure is protected by multiple layers of security, including firewalls, virtual private clouds (VPCs), and DDoS mitigation services to guard against network-level attacks.
            </li>
            <li>
              <strong className="text-slate-200">System Monitoring:</strong> We continuously monitor our systems for security threats and suspicious activity using automated tools and a dedicated security team. Access to production environments is strictly controlled and logged.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Application Security</h2>
          <p className="mb-4">
            We integrate security into every phase of our software development lifecycle (SDLC) to build secure and resilient applications.
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-slate-400">
            <li>
              <strong className="text-slate-200">Secure Coding Practices:</strong> Our engineers follow secure coding guidelines and are trained to mitigate common vulnerabilities such as those listed in the OWASP Top 10.
            </li>
            <li>
              <strong className="text-slate-200">Vulnerability Scanning & Penetration Testing:</strong> We conduct regular automated security scans of our codebase and perform periodic third-party penetration tests to identify and remediate potential vulnerabilities.
            </li>
            <li>
              <strong className="text-slate-200">Secure Authentication:</strong> We enforce strong password policies and provide Multi-Factor Authentication (MFA/2FA) for all user accounts to prevent unauthorized access.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Incident Response</h2>
          <p>
            In the event of a security incident, we have a formal incident response plan in place. This plan outlines the procedures for containing, investigating, and remediating the incident, as well as communicating with affected users in a timely and transparent manner in accordance with applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Your Role in Security</h2>
          <p className="mb-4">
            While we work hard to protect your account, security is a shared responsibility. We urge you to take the following steps to enhance your security:
          </p>
          <ul className="list-disc list-inside space-y-3 pl-4 text-slate-400">
            <li>
              <strong className="text-slate-200">Create a Strong Password:</strong> Use a long, complex, and unique password for your account that is not reused on other services.
            </li>
            <li>
              <strong className="text-slate-200">Enable Multi-Factor Authentication (MFA):</strong> MFA adds a critical layer of security and is the single most effective way to protect your account from unauthorized access.
            </li>
            <li>
              <strong className="text-slate-200">Beware of Phishing:</strong> Be cautious of suspicious emails or messages asking for your login credentials. We will never ask for your password outside of our official login page.
            </li>
            <li>
              <strong className="text-slate-200">Keep Your Devices Secure:</strong> Ensure your computer and mobile devices are protected with up-to-date antivirus software and operating system security patches.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-100 mb-4 border-l-4 border-cyan-400 pl-4">Responsible Disclosure</h2>
          <p>
            We value the work of security researchers and have a responsible disclosure program. If you believe you have discovered a security vulnerability in our services, please contact us at <a href="mailto:security@example.com" className="text-cyan-400 hover:underline">security@example.com</a>. We are committed to working with you to understand and resolve the issue promptly.
          </p>
        </section>

        <footer className="pt-8 border-t border-slate-800 mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Your security is our top priority. If you have any questions, please don't hesitate to reach out.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SecurityPage;