import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';
import project6Image from '../assets/images/project6.png';

interface Project {
    company: string;
    year: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
}

const Projects: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.2);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    const cardVariants = {
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

    const projects: Project[] = [
        {
            company: "MedAi",
            year: "2025",
            title: "Medical AI Tool For Scanning Reports",
            description: "A local AI tool for analyzing medical reports using OCR and machine learning.",
            tags: ["Python", "PyTorch", "Flask", "OCR", "ML"],
            image: project6Image, 
            liveUrl: "https://med-ai-website.vercel.app/",
            githubUrl: "https://github.com/Dielldev/MedAI"
        },
        {
            company: "Aorta Plus",
            year: "2024",
            title: "Clinic Website",
            description: "A modern clinic website that displays the company's features",
            tags: ["React", "Tailwind", "Node.js"],
            image: project1Image,
            liveUrl: "https://aortaplus.vercel.app/",
            githubUrl: "https://github.com/Dielldev/Aortaplus"
        },
        {
            company: "Dekor Drilon",
            year: "2023",
            title: "Furniture Website",
            description: "Full-featured Website with minimalistic design",
            tags: ["HTML", "CSS", "JavaScript"],
            image: project2Image,
            liveUrl: "https://dekordrilon.com/",
            githubUrl: "#"
        },
        {
            company: "Erta Flow",
            year: "2024",
            title: "Client Management",
            description: "A client management website done in 48 hours during a hackathon",
            tags: ["Vanilla", "Tailwind", "PHP"],
            image: project4Image,
            liveUrl: "https://youtu.be/bHDd1XsMENA?si=-4HIfmJg8C5M5bNI",
            githubUrl: "https://github.com/Drijoni/junction-erta"
        },
        {
            company: "Aava Match",
            year: "2024",
            title: "Job Matching Application",
            description: "A job matching application with the purpose of matching people with their dream job.",
            tags: ["Vanilla", "Tailwind", "PHP"],
            image: project5Image,
            liveUrl: "https://youtu.be/9bH2aULUfYI?si=b9muHrH22qnj04hW",
            githubUrl: "https://github.com/lirikrexhepi/aavaMatach"
        },
    ];

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="projects">
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
                        My Projects
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Check out my latest work
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="minimal-card group"
                            variants={cardVariants}
                        >
                            {/* Project Image */}
                            <div className="mb-2 overflow-hidden rounded-lg">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-28 object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">{project.company}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300">{project.year}</span>
                                </div>

                                <h3 className="text-base font-medium text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 pt-2">
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center minimal-button text-xs"
                                    >
                                        View Live
                                    </a>
                                    {project.githubUrl !== "#" && (
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="minimal-button-outline text-xs px-3"
                                        >
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center mt-8"
                    variants={itemVariants}
                >
                    <a 
                        href="https://github.com/Dielldev" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="minimal-link text-base"
                    >
                        View all projects on GitHub →
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;