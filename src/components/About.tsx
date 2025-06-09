// import React from 'react';
import { User, Coffee, Heart } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Frontend Developer & UI/UX Enthusiast</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
            I'm a frontend developer who started my journey at Proweb IT Academy, where I learned the foundations of web development. After completing my studies, I worked as a freelancer on several real-world projects, helping clients create responsive and modern websites. I also spent 6 months at amoCRM, gaining hands-on experience in a team environment.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in React, JavaScript, and responsive design. I'm passionate about building clean, user-friendly interfaces and always eager to improve my skills. As a growing developer, I enjoy exploring UI/UX trends and taking on new challenges to deliver better digital experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-10 pt-8">
              <div className="text-center group">
                <div className="cursor-pointer bg-cyan-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300 hover-rotate">
                  <Coffee className="h-8 w-8 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-800" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="cursor-pointer bg-cyan-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300 hover-rotate">
                  <Heart className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="cursor-pointer bg-cyan-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300 hover-rotate">
                  <User className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-gray-400 text-sm">Months Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mt-[-100px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/20 ">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-cyan-400 mb-2">const developer = {`{`}</div>
                  <div className="text-white ml-4">name: "Shamshod Ochilov",</div>
                  <div className="text-white ml-4">skills: ["React", "TypeScript", "Design"...],</div>
                  <div className="text-white ml-4">passion: "Creating amazing UX",</div>
                  <div className="text-white ml-4">coffee: "Motivating fuel ☕"</div>
                  <div className="text-cyan-400">{`}`}</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;