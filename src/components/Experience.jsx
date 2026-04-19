import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Currently a Computer Science student, actively building projects and strengthening
               my skills in full stack development and problem solving.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-2 text-blue-400 mb-2 lg:mb-0">
                      <Building size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-900 text-blue-400 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-gray-700">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
                Education
          </h3>

        <div className="flex flex-col items-center gap-10">

        {/* B.Tech (Top - Highlighted) */}

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 max-w-md text-center w-full">
        <h4 className="text-xl font-bold text-white mb-2">
            Bachelor of Technology (CSE - AI)
        </h4>
        <p className="text-blue-400 mb-2">
           G L Bajaj Group of Institutions
        </p>
        <p className="text-gray-400">India • 2023 - 2027</p>
        <p className="text-gray-400">CGPA: 7.2</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

          {/* Intermediate */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
        <h4 className="text-lg font-semibold text-white mb-2">
            Intermediate
        </h4>
        <p className="text-blue-400 mb-2">
           Rani Revati Devi SVNIC
        </p>
        <p className="text-gray-400">2022 - 2023</p>
        <p className="text-gray-400">69%</p>
        </div>

        {/* High School */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
        <h4 className="text-lg font-semibold text-white mb-2">
           High School
        </h4>
        <p className="text-blue-400 mb-2">
           Rani Revati Devi SVNIC
        </p>
        <p className="text-gray-400">2020 - 2021</p>
        <p className="text-gray-400">91.5%</p>
        </div>
           </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;