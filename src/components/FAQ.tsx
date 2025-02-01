import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does it take to set up my store?',
      answer: 'Setting up your store takes just 5 minutes. Connect your Instagram account, customize your store settings, and you\'re ready to start selling. Our platform automatically imports your products and profile information.'
    },
    {
      question: 'What are the payment processing fees?',
      answer: 'We charge a flat 2% transaction fee through Razorpay. There are no hidden charges or additional fees. You only pay when you make a sale.'
    },
    {
      question: 'Can I customize my store\'s appearance?',
      answer: 'Yes! You have full control over your store\'s appearance. Choose from our professionally designed themes, customize colors, layout, and branding to match your Instagram aesthetic. No coding required.'
    },
    {
      question: 'How secure are the payments?',
      answer: 'All payments are processed through Razorpay\'s secure payment gateway, which uses industry-standard encryption and security measures. We never store sensitive payment information on our servers.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">Still have questions?</p>
          <a
            href="#"
            className="text-[#a855f7] font-medium hover:text-[#9333ea] inline-flex items-center"
          >
            Contact our support team
            <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;