import React from 'react';
import { Clock, DollarSign, XCircle } from 'lucide-react';

const CallToAction = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: '5-minute setup'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: 'No hidden fees'
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      text: 'Cancel anytime'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#1a1424] to-[#2d1f47] py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Instagram Business?
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Join hundreds of creators who are already growing their business with our platform.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-[#a855f7] text-white rounded-full font-semibold hover:bg-[#9333ea] transition-all flex items-center group">
            Start Free Trial
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button className="px-8 py-3 bg-gray-800/50 text-white rounded-full font-semibold hover:bg-gray-800/70 transition-all">
            Schedule Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white"
            >
              <div className="mb-3 text-[#a855f7]">
                {feature.icon}
              </div>
              <span className="text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;