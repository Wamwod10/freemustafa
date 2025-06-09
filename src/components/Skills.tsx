import React from 'react';
import { 
  Code, 
  Palette, 
  Figma, 
  Globe, 
  Database, 
  Zap, 
  Layers, 
  GitBranch, 
  Monitor, 
  Cpu 
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: Code, level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: Database, level: 60, color: 'from-green-400 to-green-600' },
    { name: 'Git', icon: GitBranch, level: 70, color: 'from-orange-400 to-red-500' },
    { name: 'TypeScript', icon: Cpu, level: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: Zap, level: 75, color: 'from-yellow-400 to-orange-500' },
    { name: 'Tailwind CSS', icon: Palette, level: 70, color: 'from-cyan-400 to-teal-500' },
    { name: 'Figma', icon: Figma, level: 85, color: 'from-purple-400 to-pink-500' },
    { name: 'UI/UX Design', icon: Layers, level: 95, color: 'from-pink-400 to-purple-500' },
    { name: 'Responsive Design', icon: Monitor, level: 98, color: 'from-indigo-400 to-purple-600' }
    // { name: 'Next.js', icon: Globe, level: 88, color: 'from-gray-400 to-gray-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to create exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Proficiency</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'REST APIs', 'Netlify', 'Vercel', 'NPM / Yarn', 'i18next ',
              'SEO', 'Figma', 'Bootstrap', 'Sass/SCSS', 'Redux', 'Axios ', 'MongoDB '
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;