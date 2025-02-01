import React from 'react';
import { ArrowRight } from 'lucide-react';

const GetStartedButton = () => {
  return (
    <button className="group inline-flex items-center px-8 py-4 bg-[#a855f7] text-white rounded-full font-semibold text-lg hover:bg-[#9333ea] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
      Get Started Now
      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default GetStartedButton;