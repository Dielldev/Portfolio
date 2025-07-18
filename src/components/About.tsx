import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="about">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-6">
                        About Me
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Diell Govori
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Passionate developer creating intelligent solutions and modern web applications that make a difference.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="space-y-6 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    <div className="text-center">
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                            I'm a passionate developer who started coding at <span className="font-medium text-black dark:text-white">15 years old</span>. 
                            I love building modern web applications and intelligent systems that solve real problems.
                        </p>
                        
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            I specialize in AI engineering and software development, creating clean and efficient solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/CV/cv_Diell_Govori.pdf"
                            download="CV_Diell_Govori.pdf"
                            className="minimal-button"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minimal-button-outline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
