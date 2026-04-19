import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 75, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        { name: "Next.js", level: 60, color: "bg-purple-800" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-red-700" },
        { name: "RESTful APIs", level: 75, color: "bg-purple-500" }
      ]
    },
     {
      title: "Programming & CS Fundamentals",
      skills: [
        { name: "Java", level: 85, color: "bg-blue-700" },
        { name: "Python", level: 80, color: "bg-green-500" },
        { name: "DSA", level: 75, color: "bg-yellow-500" },
        { name: "C/C++", level: 80, color: "bg-pink-500" }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MySQL", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build efficient and scalable applications, 
              with a focus on continuous learning and improvement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1.5s ease-out ${index * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Other Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'GitHub', 'VS Code', 'Render','Chat-GPT'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-blue-400 hover:text-white transition-all duration-300 hover:transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;