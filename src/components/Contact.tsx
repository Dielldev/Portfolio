import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isInView } = useScrollAnimation(0.05);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="contact">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 px-6 py-14 md:py-16"
        >
          <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-6">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
            Let's work together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            Hiring for an AI role, or have a project in mind? I'd like to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:diellgovori9@gmail.com"
              className="minimal-button text-sm px-6 py-3 !inline-flex items-center justify-center gap-2"
            >
              <FiMail size={16} /> diellgovori9@gmail.com
            </a>
            <a
              href="/CV/cv_Diell_Govori.pdf"
              download="CV_Diell_Govori.pdf"
              className="minimal-button-outline text-sm px-6 py-3 !inline-flex items-center justify-center gap-2"
            >
              <FiDownload size={16} /> Download CV
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/Dielldev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
            >
              <FiGithub size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Diell Govori
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
