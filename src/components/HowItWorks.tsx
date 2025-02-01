import React, { useEffect, useState } from 'react';
import { Eye, Palette, ShoppingBag } from 'lucide-react';

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      number: "1",
      icon: <Eye className="w-6 h-6" />,
      title: "Connect Your Instagram",
      description: "Link your Instagram business account to import your existing products and profile.",
      badge: "Quick Setup",
      delay: "0"
    },
    {
      number: "2",
      icon: <Palette className="w-6 h-6" />,
      title: "Customize Your Store",
      description: "Personalize your store's appearance and organize your products with easy drag-and-drop tools.",
      badge: "Easy Customization",
      delay: "150"
    },
    {
      number: "3",
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Start Selling",
      description: "Share your store link with customers and start accepting secure payments instantly.",
      badge: "Secure Payments",
      delay: "300"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-1/4 right-1/4 h-0.5 bg-purple-100">
            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#a855f7] animate-line-fill" />
          </div>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative h-[400px] animate-fade-in-up group"
              style={{ animationDelay: `${step.delay}ms` }}
            >
              <div className="bg-white h-full rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#a855f7] text-white text-2xl font-bold flex items-center justify-center mb-6 mx-auto">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {step.description}
                </p>

                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-[#a855f7] text-sm font-medium">
                    {step.icon}
                    <span className="ml-2">{step.badge}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-[400px]">
                    <div className="w-14 h-14 rounded-full bg-[#a855f7] text-white text-2xl font-bold flex items-center justify-center mb-6 mx-auto">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center mb-6">
                      {step.description}
                    </p>

                    <div className="flex justify-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-[#a855f7] text-sm font-medium">
                        {step.icon}
                        <span className="ml-2">{step.badge}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#a855f7]' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;