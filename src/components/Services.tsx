import React from 'react';
import { FileCheck, Edit, MessageSquare, Award, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Edit className="h-8 w-8 text-primary-600" />,
    title: 'Personal Statement Review',
    description: 'Get comprehensive feedback on your personal statement to highlight your strengths and experiences effectively.',
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary-600" />,
    title: 'Application Strategy',
    description: 'Develop a tailored strategy for school selection, timeline management, and application optimization.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
    title: 'Interview Preparation',
    description: 'Mock interviews with detailed feedback to help you present yourself confidently and effectively.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary-600" />,
    title: 'Scholarship Guidance',
    description: 'Navigate scholarship and funding opportunities with expert advice on applications and requirements.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary-600" />,
    title: 'Research Statement Support',
    description: 'Craft compelling research statements that align with program offerings and faculty interests.',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support at every stage of your graduate school application journey, tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary-200"
            >
              <div className="mb-4 bg-primary-50 p-3 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Not sure which service is right for you? Schedule a free 15-minute discovery call.
          </p>
          <a 
            href="#book" 
            className="btn-primary inline-flex items-center justify-center"
          >
            Schedule Free Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;