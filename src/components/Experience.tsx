import React from 'react';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Company Header */}
            <div className="flex items-center space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">TechVision Solutions</h3>
                <p className="text-cyan-400 font-semibold">Senior Frontend Developer</p>
              </div>
            </div>

            {/* Experience Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span>2021 - Present</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="prose prose-lg text-gray-300 leading-relaxed">
                <p className="mb-6">
                  As a Senior Frontend Developer at TechVision Solutions, I lead a dynamic team of developers 
                  in creating cutting-edge web applications for Fortune 500 companies. My role encompasses 
                  full-stack development, technical leadership, and client collaboration to deliver exceptional 
                  digital experiences.
                </p>
                
                <p className="mb-6">
                  During my tenure, I've spearheaded the development of over 50 high-impact projects, 
                  ranging from e-commerce platforms to enterprise-level SaaS solutions. I've been instrumental 
                  in implementing modern development practices, introducing React and TypeScript to legacy 
                  codebases, and mentoring junior developers in best practices and emerging technologies.
                </p>

                <p>
                  My contributions have resulted in a 40% improvement in application performance, 60% reduction 
                  in development time through process optimization, and consistently high client satisfaction 
                  scores. I've also been recognized as 'Developer of the Year' twice for my innovative 
                  solutions and leadership excellence.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                  <Award className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">50+</div>
                    <div className="text-gray-400 text-sm">Projects Delivered</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
                  <Award className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">40%</div>
                    <div className="text-gray-400 text-sm">Performance Boost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional workspace"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/20">
                <div className="text-cyan-400 text-sm font-semibold">Experience</div>
                <div className="text-white text-xl font-bold">5+ Years</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Tech Stack Icons */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 space-y-4">
              {['React', 'TS', 'JS'].map((tech, index) => (
                <div
                  key={tech}
                  className="w-12 h-12 bg-gray-900 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs hover:border-cyan-400 transition-colors duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-400/30"></div>
            
            <div className="space-y-8">
              {[
                { year: '2021-Present', title: 'Senior Frontend Developer', company: 'TechVision Solutions' },
                { year: '2019-2021', title: 'Frontend Developer', company: 'Digital Innovations' },
                { year: '2018-2019', title: 'Junior Developer', company: 'StartupLab' }
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-cyan-400/50 transition-colors duration-300">
                      <div className="text-cyan-400 font-semibold text-sm">{item.year}</div>
                      <div className="text-white font-bold">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.company}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;