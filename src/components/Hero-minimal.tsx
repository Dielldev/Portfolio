import React from 'react';
import pfp from '../assets/images/pfp3.png'

const HeroMinimal: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-300" id="home">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={pfp} 
            alt="Diell" 
            className="w-24 h-24 rounded-full object-cover border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-wide transition-colors duration-300">
          Diell Govori
        </h1>

        {/* Title */}
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-light tracking-wide uppercase transition-colors duration-300">
          Data Engineer & Developer
        </p>

        {/* Location */}
        <p className="text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">
          Kosovo
        </p>

        {/* Simple Navigation */}
        <div className="flex gap-8 justify-center mt-12 text-sm">
          <a href="#about" className="minimal-link">About</a>
          <a href="#projects" className="minimal-link">Work</a>
          <a href="#contact" className="minimal-link">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default HeroMinimal
