import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const technologies = [
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Node.js",
        "Python",
        "Java",
        "Flask",
        "Django",
        "SciPy",
        "PyTorch",
        "SQL",
        "Git",
        "Docker",
        "AWS",
        "REST APIs",
        "VS Code",
        "Figma",
        "n8n"
    ];

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="skills">
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
                        My Skills
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Technologies I work with
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I specialize in modern web development technologies and tools, from frontend frameworks to backend systems and cloud services.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="text-center py-2 px-3 bg-gray-50 dark:bg-white rounded-md text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-200 cursor-pointer text-sm"
                            variants={skillVariants}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
