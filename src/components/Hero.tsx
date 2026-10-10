import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import pfp from '../assets/images/pfp_main.png';

const socials = [
  { icon: FiGithub, href: 'https://github.com/Dielldev', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/diell-govori-3a32b528b/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:diellgovori9@gmail.com', label: 'Email' },
];

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      className="hero-backdrop relative min-h-[90vh] flex items-center justify-center bg-white dark:bg-black px-4 pt-16 pb-24 transition-colors duration-300"
      id="home"
    >
      <motion.div
        className="relative max-w-3xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          variants={itemVariants}
          src={pfp}
          alt="Diell Govori"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover object-top border-2 border-gray-200 dark:border-gray-700 shadow-md"
        />

        <motion.div
          variants={itemVariants}
          className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-black/70"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          AI Engineer · Kosovo
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-5 text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white"
        >
          Diell Govori
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
        >
          I build and ship LLM-powered products: RAG pipelines, agent workflows and the apps around them.
          Currently building Sonte AI.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#projects" className="minimal-button text-sm px-6 py-3">
            View my work
          </a>
          <a
            href="/CV/cv_Diell_Govori.pdf"
            download="CV_Diell_Govori.pdf"
            className="minimal-button-outline text-sm px-6 py-3 !inline-flex items-center justify-center gap-2"
          >
            <FiDownload size={16} /> Download CV
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-black dark:hover:text-white transition-colors animate-float hidden md:block"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
