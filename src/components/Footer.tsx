import React from 'react';
import { Mail, Phone, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Evagas Online" className="h-12 w-auto" />
            </div>
            <p className="text-primary-200 mb-6 max-w-xs">
              Your dedicated partner for navigating the graduate school application process with confidence and success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@evagasonline" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/evagastv" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/evagas-online/" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'About', 'Videos', 'Testimonials', 'Book a Consultation'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent-400 mt-0.5 mr-3" />
                <a 
                  href="mailto:contact@evagasonline.com" 
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  contact@evagasonline.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent-400 mt-0.5 mr-3" />
                <a 
                  href="tel:+17202203110" 
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  (720) 220-3110
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="#book" 
                className="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-md transition-colors duration-300 inline-block"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-8 text-center text-primary-300 text-sm">
          <p>© {new Date().getFullYear()} Evagas Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;