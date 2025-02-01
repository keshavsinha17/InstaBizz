import React from 'react';
import { Instagram, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import GetStartedButton from './components/GetStartedButton';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1a1424] to-[#2d1f47]">
        <main className="container mx-auto px-4 pt-32 lg:pt-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Transform Your{' '}
                <span className="text-[#a855f7]">Instagram</span>{' '}
                Into a{' '}
                <span className="block mt-2">Thriving Business</span>
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl">
                Turn your Instagram presence into a professional e-commerce store, as easy as posting a story. No complexity, just pure simplicity.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#a855f7] text-white rounded-full font-semibold hover:bg-[#9333ea] transition-colors">
                  Start Selling Now
                </button>
                <button className="px-8 py-3 border border-[#a855f7] text-[#a855f7] rounded-full font-semibold hover:bg-[#a855f7] hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#a855f7] flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">500+</span> creators already trust us
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#2a1f3d] rounded-lg p-4 shadow-2xl">
                {/* Placeholder for dashboard/product image */}
                <div className="aspect-video bg-[#1a1424] rounded-lg"></div>
              </div>
            </div>
          </div>
        </main>
      </div>


      <Features />
      <HowItWorks />
      <ComparisonTable />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;