'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Create a Header component for consistent navigation
const Header = () => {
  return (
    <header className="bg-[#1A4A4C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Connect1to1 Logo" width={150} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/how-it-works" className="hover:text-gray-300">How It Works</Link>
          <Link href="/features" className="hover:text-gray-300">Features</Link>
          <Link href="/plans" className="hover:text-gray-300">Plans</Link>
          <Link href="/resources" className="hover:text-gray-300">Resources</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-gray-300">Login</Link>
          <Link href="/signup" className="bg-white text-[#1A4A4C] px-4 py-2 rounded-md hover:bg-gray-100">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

// Create a Footer component for consistent navigation
const Footer = () => {
  return (
    <footer className="bg-[#1A4A4C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect1to1</h3>
            <p className="mb-4">92 Park Groton Pl,<br />San Jose, CA 95136</p>
            <p className="mb-2">Phone: (909) 500-3345</p>
            <p className="mb-2">Phone: (408) 657-7085</p>
            <p className="mb-4">Email: info@c1to1.com</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/c1to1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-gray-300">How It Works</Link></li>
              <li><Link href="/features" className="hover:text-gray-300">Features</Link></li>
              <li><Link href="/plans" className="hover:text-gray-300">Plans</Link></li>
              <li><Link href="/resources" className="hover:text-gray-300">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link href="/gdpr-compliance" className="hover:text-gray-300">GDPR Compliance</Link></li>
              <li><Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="hover:text-gray-300">Help Center</Link></li>
              <li><Link href="/submit-ticket" className="hover:text-gray-300">Submit a Ticket</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li>
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.Tawk_API) {
                      window.Tawk_API.toggle();
                    }
                  }}
                  className="hover:text-gray-300"
                >
                  Live Chat
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Connect1to1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Header section */}
      <div className="bg-[#1A4A4C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">GDPR Compliance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            How we comply with the General Data Protection Regulation
          </p>
        </div>
      </div>
      
      {/* GDPR Compliance content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">Last Updated: June 1, 2025</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            At Connect1to1, we are committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (GDPR). This GDPR Compliance Statement explains how we collect, use, and protect personal data in compliance with the GDPR.
          </p>
          <p>
            The GDPR applies to all organizations operating within the European Union (EU) and European Economic Area (EEA), as well as non-EU businesses that process personal data of EU residents. As a global platform connecting vendors and retailers, we take our GDPR obligations seriously.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Our Role Under GDPR</h2>
          <p>
            Under the GDPR, Connect1to1 acts as both a data controller and a data processor:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Data Controller:</strong> We determine the purposes and means of processing personal data that we collect directly from our users.</li>
            <li><strong>Data Processor:</strong> We process personal data on behalf of our business customers who use our platform to connect with potential business partners.</li>
          </ul>
          <p>
            In both roles, we are committed to complying with the GDPR principles and ensuring the protection of personal data.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. GDPR Principles We Follow</h2>
          <p>
            We adhere to the following GDPR principles when processing personal data:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Lawfulness, Fairness, and Transparency</h3>
          <p>
            We process personal data lawfully, fairly, and in a transparent manner. We clearly inform individuals about how we collect and use their data through our Privacy Policy and other communications.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Purpose Limitation</h3>
          <p>
            We collect personal data for specified, explicit, and legitimate purposes and do not process it in a manner incompatible with those purposes. We clearly state the purposes for which we collect data and obtain consent when required.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Data Minimization</h3>
          <p>
            We limit the collection of personal data to what is necessary for the purposes for which it is processed. We regularly review our data collection practices to ensure we only collect what is needed.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Accuracy</h3>
          <p>
            We take reasonable steps to ensure that personal data is accurate and kept up to date. We provide users with the ability to review and update their personal information through their account settings.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Storage Limitation</h3>
          <p>
            We retain personal data only for as long as necessary for the purposes for which it is processed. We have established data retention policies and regularly review and delete data that is no longer needed.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.6 Integrity and Confidentiality</h3>
          <p>
            We implement appropriate technical and organizational measures to protect personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. Our security measures include encryption, access controls, and regular security assessments.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.7 Accountability</h3>
          <p>
            We take responsibility for complying with the GDPR and can demonstrate our compliance through documentation, policies, and procedures.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing</h2>
          <p>
            Under the GDPR, we process personal data on one or more of the following legal bases:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Consent:</strong> The individual has given clear consent for us to process their personal data for a specific purpose.</li>
            <li><strong>Contract:</strong> The processing is necessary for a contract we have with the individual, or because they have asked us to take specific steps before entering into a contract.</li>
            <li><strong>Legal Obligation:</strong> The processing is necessary for us to comply with the law.</li>
            <li><strong>Legitimate Interests:</strong> The processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect the individual's personal data which overrides those legitimate interests.</li>
          </ul>
          <p>
            We clearly identify the legal basis for each processing activity in our Privacy Policy and internal documentation.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Subject Rights</h2>
          <p>
            We respect and uphold the rights of individuals under the GDPR, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Right to Access:</strong> Individuals have the right to know what personal data we hold about them and how we process it.</li>
            <li><strong>Right to Rectification:</strong> Individuals have the right to have inaccurate personal data rectified or completed if it is incomplete.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> Individuals have the right to request the deletion of their personal data in certain circumstances.</li>
            <li><strong>Right to Restrict Processing:</strong> Individuals have the right to request the restriction or suppression of their personal data in certain circumstances.</li>
            <li><strong>Right to Data Portability:</strong> Individuals have the right to obtain and reuse their personal data for their own purposes across different services.</li>
            <li><strong>Right to Object:</strong> Individuals have the right to object to the processing of their personal data in certain circumstances.</li>
            <li><strong>Rights Related to Automated Decision Making and Profiling:</strong> Individuals have rights related to automated decision making and profiling based on their personal data.</li>
          </ul>
          <p>
            To exercise any of these rights, individuals can contact us using the information provided in the "Contact Information" section below. We will respond to all requests within one month as required by the GDPR.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. International Data Transfers</h2>
          <p>
            As a global platform, we may transfer personal data to countries outside the EU/EEA. When we do so, we ensure that appropriate safeguards are in place to protect the data, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Binding Corporate Rules</li>
            <li>Adequacy decisions by the European Commission</li>
            <li>Other legally approved transfer mechanisms</li>
          </ul>
          <p>
            We regularly review our data transfer mechanisms to ensure they remain valid and effective.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Protection Impact Assessments</h2>
          <p>
            We conduct Data Protection Impact Assessments (DPIAs) when processing is likely to result in a high risk to the rights and freedoms of individuals. DPIAs help us identify and minimize data protection risks and ensure compliance with the GDPR.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Data Breach Notification</h2>
          <p>
            We have procedures in place to detect, report, and investigate personal data breaches. In the event of a breach that is likely to result in a risk to the rights and freedoms of individuals, we will:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Notify the relevant supervisory authority within 72 hours of becoming aware of the breach</li>
            <li>Notify affected individuals without undue delay when the breach is likely to result in a high risk to their rights and freedoms</li>
            <li>Document all breaches, including the facts, effects, and remedial actions taken</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Data Protection Officer</h2>
          <p>
            We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our data protection strategy and implementation to ensure compliance with GDPR requirements. Our DPO can be contacted at dpo@c1to1.com.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Training and Awareness</h2>
          <p>
            We provide regular training to our employees on data protection and GDPR compliance. All employees who handle personal data are required to complete this training and are informed about their responsibilities under the GDPR.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Record Keeping</h2>
          <p>
            We maintain records of our processing activities as required by the GDPR. These records include information about the purposes of processing, categories of data subjects and personal data, recipients of personal data, data transfers, retention periods, and security measures.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
          <p>
            If you have any questions about our GDPR compliance or wish to exercise your rights under the GDPR, please contact us at:
          </p>
          <p className="mb-4">
            Connect1to1<br />
            92 Park Groton Pl,<br />
            San Jose, CA 95136<br />
            Email: dpo@c1to1.com<br />
            Phone: (909) 500-3345
          </p>
          <p>
            You also have the right to lodge a complaint with a supervisory authority if you believe that our processing of your personal data infringes the GDPR.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">13. Updates to This Statement</h2>
          <p>
            We may update this GDPR Compliance Statement from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated statement on our website and updating the "Last Updated" date.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
