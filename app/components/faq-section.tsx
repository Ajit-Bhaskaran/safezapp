
'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does the approval process work for new apps and websites?',
      answer: 'When your child tries to access a new app or website, SafeZapp automatically checks it against our database. If it\'s not pre-approved, your child can send a request directly through the app. You\'ll get an instant notification with details about the request, and you can approve or deny it with one tap. You can also set up automatic approvals for educational content and pre-approved categories.'
    },
    {
      question: 'Can SafeZapp monitor my child\'s messages and social media?',
      answer: 'Yes, SafeZapp can monitor messages across popular platforms like WhatsApp, Instagram, Snapchat, and text messages. However, we believe in transparent monitoring - your child knows the app is active, and we provide age-appropriate explanations about why monitoring helps keep them safe. You can customize monitoring levels based on your child\'s age and maturity, and older teens can have more privacy while still maintaining safety protections.'
    },
    {
      question: 'What are the pricing plans and is there a free trial?',
      answer: 'SafeZapp offers a 14-day free trial with full access to all features. After the trial, our Family Plan is $9.99/month for up to 5 devices, and our Premium Plan is $14.99/month for unlimited devices plus advanced AI monitoring and detailed analytics. We also offer annual plans with 2 months free. All plans include 24/7 customer support and regular feature updates.'
    },
    {
      question: 'Which devices and operating systems does SafeZapp support?',
      answer: 'SafeZapp works on iOS (iPhone/iPad), Android smartphones and tablets, Windows computers, and Mac computers. We support iOS 12 and above, Android 8.0 and above, Windows 10/11, and macOS 10.14 and above. The app automatically syncs across all devices, so you can monitor your child\'s activity whether they\'re using their phone, tablet, or computer.'
    },
    {
      question: 'How does screen time management work, and can my child request more time?',
      answer: 'You can set daily screen time limits, bedtime restrictions, and create custom schedules for different days of the week. When your child\'s time is running low, they get gentle warnings. If they need more time, they can send a request through the app explaining why - maybe for homework or a family video call. You can approve extra time instantly or set up automatic extensions for educational apps during homework hours.'
    },
    {
      question: 'Is my family\'s data secure and private with SafeZapp?',
      answer: 'Absolutely. SafeZapp uses bank-level encryption to protect all data, and we never sell or share your family\'s information with third parties. All monitoring data is stored securely in the cloud and only accessible by you. We\'re COPPA compliant and follow strict privacy guidelines. You can export or delete all data at any time, and we provide detailed privacy reports showing exactly what information is collected and why.'
    },
    {
      question: 'What happens if my child tries to bypass or uninstall SafeZapp?',
      answer: 'SafeZapp has built-in tamper protection that prevents uninstallation without parental permission. If your child tries to bypass the app or uninstall it, you\'ll receive an immediate alert. The app also has offline protection, so restrictions remain active even if your child goes offline. For teens, we focus more on education and communication rather than strict enforcement, helping them understand the importance of digital safety.'
    },
    {
      question: 'Can I monitor multiple children with different rules for each?',
      answer: 'Yes! SafeZapp supports individual profiles for each child with completely customized rules. Your 7-year-old might have strict content filters and 1 hour of screen time, while your 14-year-old has more freedom but still has bedtime restrictions and social media monitoring. You can easily switch between children\'s profiles in the parent dashboard and adjust rules as they grow and demonstrate more responsibility.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything parents need to know about keeping their children safe online
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs?.map?.((faq, index) => (
              <div key={faq?.question || `faq-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq?.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                )}
              </div>
            )) || []}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
