import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '/forever',
      features: [
        'Up to 10 products',
        'Basic analytics',
        'Standard support'
      ],
      buttonText: 'Start Free',
      buttonClass: 'text-[#a855f7] border-[#a855f7] bg-white hover:bg-[#a855f7] hover:text-white'
    },
    {
      name: 'Growth',
      price: '₹999',
      period: '/month',
      features: [
        'Unlimited products',
        'Advanced analytics',
        'Priority support',
        'Custom domain'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white text-[#a855f7] hover:bg-white/90',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Growth',
        'API access',
        'Dedicated support',
        'Custom integrations'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'text-[#a855f7] border-[#a855f7] bg-white hover:bg-[#a855f7] hover:text-white'
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">
            Start for free and upgrade when you're ready. Only pay when you see value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-8px]
                ${plan.popular 
                  ? 'bg-[#a855f7] text-white transform scale-105 shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]' 
                  : 'bg-white text-gray-900 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
                }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-white text-[#a855f7] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-[#a855f7]'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-semibold border transition-all duration-300 hover:scale-[1.02] ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8">
          All plans include 2% Razorpay platform fee per transaction
        </p>
      </div>
    </section>
  );
};

export default Pricing;