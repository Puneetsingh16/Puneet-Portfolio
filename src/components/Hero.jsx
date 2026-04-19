import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <img 
              src="/photo.jpg"
              alt="Puneet Singh"
              className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-blue-500/50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Puneet <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Singh</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer | DSA Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
           Passionate about problem-solving and web development, with a strong foundation in Data Structures & Algorithms and modern technologies.
           Focused on building efficient, scalable, and user-friendly applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="Puneet_Resume.pdf" 
              download="Puneet_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download CV
            </a>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/Puneetsingh16" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/puneetsingh5/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:puneet7002singh@gmail.com"
               className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;