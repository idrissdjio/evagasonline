import React from 'react';
import { CheckCircle, Clock, UserCheck, BookOpen } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <UserCheck className="h-6 w-6 text-accent-500" />,
      value: '500+',
      label: 'Students Helped',
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent-500" />,
      value: '92%',
      label: 'Acceptance Rate',
    },
    {
      icon: <Clock className="h-6 w-6 text-accent-500" />,
      value: '7+',
      label: 'Years Experience',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-accent-500" />,
      value: '50+',
      label: 'Top Universities',
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5905945/pexels-photo-5905945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Consultant helping student" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 rounded-lg shadow-xl p-4 md:p-6 text-white">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        {item.icon}
                      </div>
                      <div className="font-bold text-xl md:text-2xl">{item.value}</div>
                      <div className="text-xs md:text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Your Consultant
            </h2>
            <div className="w-16 h-1 bg-accent-500 mb-6"></div>
            <p className="text-gray-600 mb-4">
              With over 7 years of experience in higher education admissions and counseling, I specialize in helping ambitious students navigate the complex graduate school application process.
            </p>
            <p className="text-gray-600 mb-4">
              My unique background combines experience on admissions committees at top universities with a deep understanding of what makes applications stand out in competitive programs.
            </p>
            <p className="text-gray-600 mb-6">
              I believe every student has a unique story that, when told effectively, can open doors to exceptional educational opportunities. My approach is personalized to your individual goals, background, and target programs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2" />
                <p className="text-gray-700">Former Admissions Committee Member at top-tier universities</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2" />
                <p className="text-gray-700">Master's in Higher Education Administration</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2" />
                <p className="text-gray-700">Certified Educational Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;