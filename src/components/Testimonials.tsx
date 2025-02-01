import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  initial: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initial: "S",
    name: "Sarah Johnson",
    role: "Fashion Creator",
    quote: "Finally, a platform that understands Instagram sellers! Setting up my store was incredibly easy, and my sales have increased by 40% since I started using it."
  },
  {
    id: 2,
    initial: "R",
    name: "Rahul Mehta",
    role: "Handcraft Artist",
    quote: "The simplicity is what won me over. No more juggling between different platforms. Everything I need is right here, and it's so affordable!"
  },
  {
    id: 3,
    initial: "P",
    name: "Priya Sharma",
    role: "Jewelry Designer",
    quote: "The secure payment system gave my customers confidence, and the analytics help me understand what's working. My business has grown 3x in just two months!"
  },
  {
    id: 4,
    initial: "M",
    name: "Mike Chen",
    role: "Food Blogger",
    quote: "The analytics insights have been game-changing for my business. I can now focus on creating content that truly resonates with my audience."
  },
  {
    id: 5,
    initial: "L",
    name: "Lisa Wong",
    role: "Beauty Influencer",
    quote: "Managing orders used to be a nightmare. Now it's all automated and I can focus on growing my brand. Absolutely love it!"
  },
  {
    id: 6,
    initial: "A",
    name: "Alex Rivera",
    role: "Fitness Coach",
    quote: "The seamless integration with Instagram has helped me monetize my following effectively. My community loves the shopping experience."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Instagram Creators
          </h2>
          <p className="text-gray-600 text-lg">
            See what our community has to say about their experience
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            {/* Mobile View */}
            <div className="md:hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6">
                    {testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial) => (
                      <div key={testimonial.id} className="w-1/3">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="px-4">
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] font-semibold text-lg mr-4">
          {testimonial.initial}
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-[#a855f7] fill-current"
          />
        ))}
      </div>

      <p className="text-gray-600 text-lg leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
  </div>
);

export default Testimonials;