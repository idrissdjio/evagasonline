import React, { useState } from 'react';
import { CalendarDays, Clock, DollarSign, CheckCircle } from 'lucide-react';

const serviceOptions = [
  {
    id: 'visa',
    title: 'F1 Visa Interview Preparation',
    duration: '60 min',
    price: '$80',
    description: 'Comprehensive preparation for your F1 visa interview to increase your chances of success.',
    included: ['Mock interview practice', 'Document review', 'Common questions coverage', 'Tips and strategies'],
    calendlyUrl: 'https://calendly.com/example/visa',
    featured: false
  },
  {
    id: 'statement',
    title: 'Personal Statement Review',
    duration: '45 min',
    price: '$50',
    description: 'Detailed review and feedback on your personal statement or statement of purpose.',
    included: ['Document analysis', 'Content improvement suggestions', 'Structure recommendations', 'Language refinement'],
    calendlyUrl: 'https://calendly.com/example/statement',
    featured: true
  },
  {
    id: 'consultation',
    title: 'One-on-One Consultation',
    duration: '60 min',
    price: '$80',
    description: 'Personalized guidance for your graduate school application journey.',
    included: ['Application strategy', 'School selection advice', 'Timeline planning', 'General guidance'],
    calendlyUrl: 'https://calendly.com/example/consultation',
    featured: false
  }
];

const Booking = () => {
  const [selectedService, setSelectedService] = useState(serviceOptions[1].id);

  return (
    <section id="book" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book a Consultation
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Take the next step toward your graduate school goals with personalized guidance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {serviceOptions.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer rounded-lg border-2 p-6 transition-all duration-300 relative ${
                  selectedService === service.id 
                    ? 'border-primary-600 bg-primary-50 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                } ${service.featured ? 'transform md:-translate-y-4' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 text-white text-xs uppercase font-bold py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <div className="flex justify-center items-center gap-2 text-gray-600 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-left space-y-3 mb-6">
                    {service.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Instructions */}
          <div className="bg-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Payment Methods</h3>
            <p className="text-gray-600 text-center mb-6">
              After scheduling your appointment, please complete the payment using one of the following methods:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Mobile Money</h4>
                <p className="text-gray-600">Payment details will be provided after booking.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Bank Transfer</h4>
                <p className="text-gray-600">Bank details will be provided after booking.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Please send your payment receipt via WhatsApp after completing the payment.
            </p>
          </div>

          {/* Calendly Integration */}
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Schedule Your {serviceOptions.find(s => s.id === selectedService)?.title}
              </h3>
              <p className="text-gray-600">
                Select a date and time that works for you, and you'll receive a confirmation email with details.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 flex flex-col items-center">
              <CalendarDays className="h-16 w-16 text-primary-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Select a Date & Time</h4>
              <p className="text-gray-600 text-center mb-6">
                Click below to open the scheduling calendar.
              </p>
              <a 
                href={serviceOptions.find(s => s.id === selectedService)?.calendlyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;