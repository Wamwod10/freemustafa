import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated intro */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-cyan-400 mr-2 animate-bounce" />
            <span className="text-cyan-400 text-lg font-semibold tracking-wide">Welcome to my portfolio</span>
            <Sparkles className="h-6 w-6 text-cyan-400 ml-2 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Main heading with animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            Creative
          </span>
          <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards] max-w-2xl mx-auto leading-relaxed">
          Passionate about crafting simple and effective digital designs, always eager to learn new skills and improve user engagement
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col mb-5 sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]">
          <a
            href="#projects"
            className="group px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom--10 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_3s_forwards]">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mt-2">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 mt-5 text-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;