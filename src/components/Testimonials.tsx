import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Vera Bonku Turkson',
    program: 'Masters degree in Communication at Illinois State University',
    image: '/assets/vera.png',
    quote: 'The personalized guidance I received was invaluable. My personal statement went from good to exceptional, and I was accepted to my dream program with a full scholarship!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emmanuel Oduro',
    program: 'Masters in Communication at University of Maine',
    image: '/assets/emmanuel.png',
    quote: 'The interview preparation made all the difference. I felt confident and prepared, which definitely came across to the admissions committee. Worth every penny!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Monalisa Lamptey ',
    program: 'Masters in Commmunication at Southern Illinois University, Carbondale',
    image: '/assets/monalisa.png',
    quote: 'I was struggling with how to position my non-traditional background, but the guidance I received helped me craft a compelling narrative that got me accepted to all 5 programs I applied to.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Daniel Kissi-Somuah',
    program: 'Masters in Geography University of Arkansas',
    image: '/assets/daniel.png',
    quote: 'The application strategy session helped me focus my efforts on the right schools and highlight the right experiences. I\'m now attending my top-choice law school with partial funding.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their graduate school dreams with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-md p-8">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                          <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary-100">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3 md:pl-6">
                          <div className="flex mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 italic mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-primary-600">{testimonial.program}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary-600 hover:text-primary-700 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary-600 hover:text-primary-700 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;