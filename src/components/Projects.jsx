import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Airbnb",
      description:
        "A full stack web application inspired by Airbnb that allows users to explore, create, and manage property listings with a responsive and user-friendly interface.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*EeUSITAmhPij7jNFHaltJw.jpeg",
      tech: ["React.js", "Node.js", "MongoDB","Express.js","Bootstrap Css","MVC"],
      github: "https://github.com/Puneetsingh16/",
      live: "https://wanderlust-0k1f.onrender.com/listings",
      featured: true
    },
    {
      title: "Mini Weather App",
      description: "A web application that provides real-time weather updates for any city using API integration.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      tech: ["React.js", "Material UI","API Integration","JavaScript"],
      github: "https://github.com/Puneetsingh16/",
      live: "",
      featured: false
    },
    {
      title: "Bitlinks",
      description: "A web app that converts long URLs into short, easy-to-share links.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      tech: ["React.js","Express.js","Tailwind CSS","MongoDB" ],
      github: "https://Puneetsingh16/",
      live: "",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></div>
          
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my projects that highlight
              my full stack development skills and problem-solving abilities.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-1 xl:grid-cols-1 ">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className=" bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="border-t border-gray-700 pt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Other Projects
            </h3>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;