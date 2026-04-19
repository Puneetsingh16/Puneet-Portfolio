import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and high-performance UIs using React."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Developing scalable APIs with Node.js and Express."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Java & Problem Solving",
      description: "Strong in Java, OOPs, and Data Structures & Algorithms"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Database & Integration",
      description: "Managing MongoDB databases and integrating full stack applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
             I'm a passionate Full Stack Developer and aspiring Software Engineer with a strong foundation in Java, Data Structures & Algorithms, and modern web technologies.
             I enjoy building scalable applications that solve real-world problems and deliver seamless user experiences.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
             I have hands-on experience building full stack projects like an Airbnb Clone and a URL shortener using React, Node.js, Express, and MongoDB, strengthening my frontend and backend skills.
              With a strong foundation in Java, OOP, and problem-solving, I continuously work on improving my coding abilities and growing as a software engineer.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-700">
            {[
              { label: 'Projects Completed', value: '5+' },
              { label: 'Technologies', value: '10+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;