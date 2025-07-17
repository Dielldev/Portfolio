import React from 'react';
import pfp from '../assets/images/pfp3.png'

const Hero: React.FC = () => {
  return (
    <section className="h-[55vh] flex items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-300" id="home">
      <div className="max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-1 text-center md:text-left animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight tracking-tight transition-colors duration-300">
              Hi, I'm Diell
              
            </h1>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-snug max-w-sm mx-auto md:mx-0 transition-colors duration-300">
              Passionate developer building intelligent systems and modern web applications. 
              Specializing in 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> AI Engineering </span> 
              and creating solutions that make a difference.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Look at my work
              </button>
            </div>
            
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={pfp} 
                alt="Fillonit" 
                className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero