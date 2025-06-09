import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Yur Tur Company',
      description: 'Mobile-first travel companion app with destination discovery, and real-time trip updates.',
      tech: ['i18', 'Node.js', 'jQuery', 'Next.js'],
      link: 'https://yurturofficial.uz',
      github: 'https://github.com',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Tashkent Hotel',
      description: 'Mobile-first hospitality app with room booking, guest services, and real-time reservation management.',
      tech: ['Node.js', 'TypeScript', 'React', 'Tailwind'],
      link: 'https://toshkent-hotel.vercel.app/',
      github: 'https://github.com',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Click House',
      description: 'An online store offering modern home essentials with a user-friendly design and fast delivery options.',
      tech: ['React', 'SCSS', 'Javascript', 'SEO'],
      link: 'https://click-house-ten.vercel.app/',
      github: 'https://github.com',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Asl Wayne',
      description: 'Official site of the Khorezm rapper featuring exclusive tracks, music videos and behind-the-scenes content.',
      tech: ['React', 'Responsive Design', 'TypeScript', 'Js'],
      link: 'https://aslwaynee.uz',
      github: 'https://github.com',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'True Gis Bot',
      description: 'TrueGis bot — community-built Telegram bot with useful features and regular updates.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'SEO'],
      link: 'https://t.me/TrueGis_bot',
      github: 'https://github.com',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform with course management, video streaming, and progress tracking.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://example.com',
      github: 'https://github.com',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/80 text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full group-hover:bg-cyan-400/20 group-hover:text-cyan-400 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 group"
          >
            <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;