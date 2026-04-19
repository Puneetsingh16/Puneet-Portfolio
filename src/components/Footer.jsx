import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Puneet Singh
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 text-center mb-8 max-w-md">
            Building scalable web applications and solving real-world problems with modern technologies.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center gap-1 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by Puneet singh</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;