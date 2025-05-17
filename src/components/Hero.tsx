import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-900 mb-6 animate-fade-in">
              Your Pathway to <span className="text-accent-500">Graduate School</span> Success
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl animate-fade-in animation-delay-300">
              Expert guidance to help you navigate the graduate school application process with confidence. From personal statements to interviews, we provide the support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <a 
                href="#book" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                Book a Consultation <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#videos" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Watch Free Resources
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-400 rounded-full opacity-20"></div>
              <img 
                src="/assets/ceo-image.png"
                alt="Students collaborating" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;