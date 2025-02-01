import React from 'react';
import { Grid, ClipboardList, Lock } from 'lucide-react';

const Features = () => {
  const cards = [
    {
      icon: <Grid className="w-6 h-6 text-[#a855f7]" />,
      title: "Dedicated Product Pages",
      description: "Showcase your products beautifully with advanced filtering options and seamless browsing experience.",
      features: ['Custom layouts', 'Advanced filtering', 'SEO optimization'],
      delay: "0"
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-[#a855f7]" />,
      title: "Simple Admin Dashboard",
      description: "Manage your entire business effortlessly with our intuitive dashboard interface.",
      features: ['Inventory tracking', 'Order management', 'Analytics insights'],
      delay: "150"
    },
    {
      icon: <Lock className="w-6 h-6 text-[#a855f7]" />,
      title: "Secure Payments",
      description: "Integrated payment solutions with escrow-like features for maximum security and trust.",
      features: ['Razorpay integration', 'Escrow protection', 'Transparent fees'],
      delay: "300"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transform your Instagram presence into a professional e-commerce business with our powerful yet simple tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${card.delay}ms` }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:animate-float">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">
                {card.description}
              </p>
              <ul className="space-y-3">
                {card.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className="flex items-center text-gray-600 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${parseInt(card.delay) + (featureIndex * 100)}ms` }}
                  >
                    <span className="text-[#a855f7] mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;