import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import starlabsLogo from '../assets/images/starlabs-logo.jpg';
import upworkLogo from '../assets/images/upwork-logo.webp';

interface Experience {
    title: string;
    company: string;
    type: string;
    duration: string;
    location: string;
    locationType: string;
    description: string;
    skills: string[];
    logo: string;
    linkedinUrl: string;
}

const WorkExperience: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.2);
    const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

    const toggleExpanded = (index: number) => {
        const newIndices = new Set(expandedIndices);
        if (newIndices.has(index)) {
            newIndices.delete(index);
        } else {
            newIndices.add(index);
        }
        setExpandedIndices(newIndices);
    };

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

    const experienceVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const experiences: Experience[] = [
        {
            title: "Research and Development AI",
            company: "StarLabs",
            type: "Internship",
            duration: "Oct 2025 - Jan 2026 · 4 mos",
            location: "District of Pristina, Kosovo",
            locationType: "On-site",
            description: "Designed and implemented production-level AI systems for Digital School. Developed and refined a Retrieval-Augmented Generation (RAG) system, working extensively with embeddings, vector-based retrieval pipelines, and evaluation of model reliability to ensure consistent and trustworthy outputs",
            skills: ["Python", "Retrieval-Augmented Generation (RAG)", "NumPy", "Pandas", "AI/ML"],
            logo: starlabsLogo,
            linkedinUrl: "https://www.linkedin.com/in/diell-govori-3a32b528b/"
        },
        {
            title: "Freelance Web Developer",
            company: "Upwork",
            type: "Self-employed",
            duration: "May 2021 - Feb 2025 · 3 yrs 10 mos",
            location: "Ferizaj, Kosovo",
            locationType: "Remote",
            description: "Building and maintaining modern web applications using React.js, TypeScript, JavaScript. Experienced in developing responsive, scalable, and user-friendly websites for clients worldwide. Skilled in frontend development.",
            skills: ["TypeScript", "Tailwind CSS", "React.js", "JavaScript"],
            logo: upworkLogo,
            linkedinUrl: "https://www.linkedin.com/in/diell-govori-3a32b528b/"
        }
    ];

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="experience">
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
                        Work Experience
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        My Journey
                    </h2>
                   
                </motion.div>

                <motion.div 
                    className="max-w-2xl mx-auto space-y-4"
                    variants={itemVariants}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={experienceVariants}
                            className="bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden"
                        >
                            {/* Main Card - Always Visible */}
                            <div className="p-4">
                                <div className="flex items-center gap-4 justify-between">
                                    {/* Logo & Content */}
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                        {/* Company Logo */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={exp.logo} 
                                                    alt={`${exp.company} logo`}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                <h3 className="text-base font-bold text-black dark:text-white truncate">
                                                    {exp.title}
                                                </h3>
                                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                    {exp.company}
                                                </span>
                                                <span>·</span>
                                                <span>{exp.type}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow Icon - Clickable */}
                                    <button
                                        onClick={() => toggleExpanded(index)}
                                        className="flex-shrink-0 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                                        aria-label="Toggle details"
                                    >
                                        <svg 
                                            className={`w-5 h-5 transition-transform duration-300 ${expandedIndices.has(index) ? 'rotate-90' : ''}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={expandedIndices.has(index) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
                            >
                                <div className="p-4 space-y-3">
                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{exp.location}</span>
                                        <span>·</span>
                                        <span>{exp.locationType}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-left">
                                        {exp.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* LinkedIn Link */}
                                    <a
                                        href={exp.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm font-medium text-black dark:text-white hover:underline transition-all mt-2"
                                    >
                                        View on LinkedIn →
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WorkExperience;
