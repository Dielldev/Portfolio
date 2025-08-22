import React from 'react';
import { motion } from 'framer-motion';
import pfp from '../assets/images/pfp3.png'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-300" id="home">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <img 
              src={pfp} 
              alt="Diell" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight tracking-tight transition-colors duration-300">
              Hi, I'm Diell
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
              Data Engineer specializing in AI and Machine Learning
            </p>

            {/* Simple CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a 
                href="#projects" 
                className="minimal-button text-sm px-6 py-3"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="minimal-button-outline text-sm px-6 py-3"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero