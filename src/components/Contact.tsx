import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isInView } = useScrollAnimation(0.5);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="contact">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-6">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Have a project in mind or just want to chat about tech? I'm always open to discussing new opportunities and ideas. Reach out at{' '}
            <a 
              href="mailto:diellgovori9@gmail.com"
              className="text-lg font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 border-b-2 border-black dark:border-white hover:border-gray-700 dark:hover:border-gray-300"
            >
              diellgovori9@gmail.com
            </a>
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;