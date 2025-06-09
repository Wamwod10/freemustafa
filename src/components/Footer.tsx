import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-all duration-300 transform hover:scale-110 mb-8 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center space-x-8 mb-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Experience', href: '#experience' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 mb-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { name: 'GitHub', href: 'https://github.com' },
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'Twitter', href: 'https://twitter.com' },
              { name: 'Email', href: 'mailto:developer@example.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Long horizontal line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Frontend Developer Portfolio.</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;