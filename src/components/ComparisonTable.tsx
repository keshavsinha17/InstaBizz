import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    { name: 'Monthly Cost', ourPlatform: 'Free to start', shopify: '$29/month', etsy: '$0/month' },
    { name: 'Transaction Fee', ourPlatform: '2% only', shopify: '2.9% + 30¢', etsy: '5% + listing fees' },
    { name: 'Setup Time', ourPlatform: '5 minutes', shopify: '1-2 hours', etsy: '30+ minutes' },
    { name: 'Instagram Integration', ourPlatform: true, shopify: 'Partial', etsy: false },
    { name: 'Learning Curve', ourPlatform: 'Minimal', shopify: 'Steep', etsy: 'Moderate' },
    { name: 'Customer Support', ourPlatform: '24/7 Priority', shopify: 'Email Support', etsy: 'Email Support' },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg">
            See how we compare to traditional e-commerce platforms
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden">
          <div className="grid grid-cols-4 gap-4">
            {/* Headers */}
            <div className="font-semibold text-gray-600">Features</div>
            <div className="text-center bg-purple-50 rounded-t-lg py-4 font-semibold text-[#a855f7]">
              Our Platform
            </div>
            <div className="text-center py-4 font-semibold text-gray-900">Shopify</div>
            <div className="text-center py-4 font-semibold text-gray-900">Etsy</div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <React.Fragment key={feature.name}>
                <div className={`py-4 ${index !== features.length - 1 ? 'border-b' : ''} text-gray-900`}>
                  {feature.name}
                </div>
                <div className={`text-center py-4 ${index !== features.length - 1 ? 'border-b' : ''} bg-purple-50`}>
                  {typeof feature.ourPlatform === 'boolean' ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-green-600">{feature.ourPlatform}</span>
                  )}
                </div>
                <div className={`text-center py-4 ${index !== features.length - 1 ? 'border-b' : ''}`}>
                  {typeof feature.shopify === 'boolean' ? (
                    feature.shopify ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-600">{feature.shopify}</span>
                  )}
                </div>
                <div className={`text-center py-4 ${index !== features.length - 1 ? 'border-b' : ''}`}>
                  {typeof feature.etsy === 'boolean' ? (
                    feature.etsy ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-600">{feature.etsy}</span>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Table */}
        <div className="md:hidden space-y-8">
          {['Our Platform', 'Shopify', 'Etsy'].map((platform, platformIndex) => (
            <div key={platform} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`py-4 px-6 ${platformIndex === 0 ? 'bg-purple-50 text-[#a855f7]' : 'bg-gray-50'} font-semibold`}>
                {platform}
              </div>
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.name}
                  className={`px-6 py-4 flex justify-between items-center ${
                    featureIndex !== features.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <span className="text-gray-600">{feature.name}</span>
                  <span className="font-medium">
                    {(() => {
                      const value = feature[platform.toLowerCase().replace(' ', '') as keyof typeof feature];
                      if (typeof value === 'boolean') {
                        return value ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        );
                      }
                      return <span className={platformIndex === 0 ? 'text-green-600' : 'text-gray-900'}>{value}</span>;
                    })()}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-[#a855f7] text-white rounded-full font-semibold hover:bg-[#9333ea] transition-all transform hover:scale-105">
            Start Your Free Store
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;