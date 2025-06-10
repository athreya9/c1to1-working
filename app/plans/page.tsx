'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A4A4C] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-200">
                Choose the perfect plan for your business needs. All plans include our core matching algorithm and secure platform.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A4A4C]">Basic</h3>
                  <p className="mt-4 text-gray-600">Perfect for small businesses just getting started with B2B matchmaking.</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Up to 10 active matches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Basic profile customization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Standard matching algorithm</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Email support</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Priority matching</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/signup?plan=basic" className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-[#C99B2D] transform md:-translate-y-4 scale-105">
                <div className="bg-[#C99B2D] text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A4A4C]">Professional</h3>
                  <p className="mt-4 text-gray-600">Ideal for growing businesses looking to expand their network.</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">$249</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Up to 50 active matches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Enhanced profile customization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Advanced matching algorithm</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Priority email & chat support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Basic analytics dashboard</span>
                    </li>
                    <li className="flex items-start text-gray-400">
                      <svg className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/signup?plan=professional" className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#C99B2D] hover:bg-[#B38A28] transition-colors">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A4A4C]">Enterprise</h3>
                  <p className="mt-4 text-gray-600">For established businesses with complex matching needs.</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">$499</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Unlimited active matches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Full profile customization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Premium matching algorithm</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">24/7 priority support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Advanced analytics & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Dedicated account manager</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/signup?plan=enterprise" className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Compare Features</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Find the plan that's right for your business needs.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-[#1A4A4C] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Basic</th>
                    <th className="py-4 px-6 text-center bg-[#C99B2D]">Professional</th>
                    <th className="py-4 px-6 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 font-medium">Active Matches</td>
                    <td className="py-4 px-6 text-center">10</td>
                    <td className="py-4 px-6 text-center bg-yellow-50">50</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Match Quality Algorithm</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center bg-yellow-50">Advanced</td>
                    <td className="py-4 px-6 text-center">Premium</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Profile Customization</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center bg-yellow-50">Enhanced</td>
                    <td className="py-4 px-6 text-center">Full</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Document Sharing</td>
                    <td className="py-4 px-6 text-center">5 documents</td>
                    <td className="py-4 px-6 text-center bg-yellow-50">25 documents</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Analytics Dashboard</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center bg-yellow-50">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center bg-yellow-50">Priority Email & Chat</td>
                    <td className="py-4 px-6 text-center">24/7 Priority</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Dedicated Account Manager</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center bg-yellow-50">
                      <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">API Access</td>
                    <td className="py-4 px-6 text-center">
                      <svg className="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-4 px-6 text-center bg-yellow-50">Limited</td>
                    <td className="py-4 px-6 text-center">Full</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our pricing plans.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Is there a free trial available?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
                <div className="mt-2 text-gray-600">
                  <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Do you offer annual billing?</h3>
                <div className="mt-2 text-gray-600">
                  <p>Yes, we offer annual billing with a 20% discount compared to monthly billing.</p>
                </div>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">What happens if I exceed my plan limits?</h3>
                <div className="mt-2 text-gray-600">
                  <p>We'll notify you when you're approaching your plan limits. You can choose to upgrade your plan or continue with your current plan, but new matches will be queued until space becomes available.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Plan Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A4A4C] rounded-xl overflow-hidden shadow-xl">
              <div className="px-6 py-12 sm:px-12 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Need a Custom Solution?</h2>
                    <p className="mt-4 text-lg text-gray-200">
                      We offer tailored solutions for businesses with specific requirements. Our team will work with you to create a custom plan that meets your unique needs.
                    </p>
                    <ul className="mt-8 space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">Custom integration with your existing systems</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">Specialized matching algorithms for your industry</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-[#C99B2D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">White-label solutions available</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:text-right">
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#1A4A4C] bg-white hover:bg-gray-100 transition-colors">
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1A4A4C]">Ready to Get Started?</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of businesses that have found success with Connect 1to1.
              </p>
              <div className="mt-10">
                <Link href="/signup" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638] transition-colors">
                  Start Your Free Trial
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
