import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import aortaImage from '../assets/images/aorta.jpg';
import cragImage from '../assets/images/crag.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';
import egantImage from '../assets/images/egant.jpg';
import folioImage from '../assets/images/folio.jpg';
import meshImage from '../assets/images/mesh.jpg';

interface Project {
    company: string;
    year: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl: string;
    liveLabel?: string;
    badge?: string;
}

const Projects: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

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

    const featured: Project[] = [
        {
            company: "egant",
            year: "2026",
            title: "One native window for all your coding agents",
            description: "A desktop app that wraps Claude Code, Codex, opencode and more, running in your real project folders. Chat, file tree, diffs, git worktrees, terminals and an in-app browser sit beside the conversation. Revert any turn, sync MCP servers and skills across agents, and pick a session up from your phone. No account, everything runs locally.",
            tags: ["Tauri", "Rust", "React", "TypeScript"],
            image: egantImage,
            liveUrl: "https://egant.vercel.app/",
            githubUrl: "https://github.com/Dielldev/egant",
            liveLabel: "Visit egant"
        },
        {
            company: "Mesh",
            year: "2026",
            title: "Live team knowledge from AI-agent work",
            description: "A hook and MCP server make every Claude Code, Codex, Cursor or Gemini session report what it did, why, and what is blocked. PMs and teammates get a live feed, can ask questions in plain language, and are warned when two people are about to collide or repeat a dead end. Built in 6 hours at the Genpact x Agilyti Hackathon.",
            tags: ["TypeScript", "MCP", "PostgreSQL", "AI Agents"],
            image: meshImage,
            liveUrl: "https://genpact-ag-hack.vercel.app",
            githubUrl: "https://github.com/Dielldev/mesh",
            liveLabel: "Open Mesh",
            badge: "1st place · Genpact x Agilyti"
        },
        {
            company: "Folio",
            year: "2026",
            title: "AI Portfolio Tracker",
            description: "Describe your holdings in plain English and Folio parses them into a live dashboard with P&L, price charts and allocation. An on-demand AI Outlook gives a 3-5 day sentiment read built from technical indicators, news headlines and the latest SEC filing. The live demo runs on simulated market data; the full-stack version uses FastAPI, Supabase, Groq and yfinance.",
            tags: ["React", "FastAPI", "Groq", "Supabase"],
            image: folioImage,
            liveUrl: "https://folio-demo-diell.vercel.app",
            githubUrl: "https://github.com/Dielldev/ai-stock-screnner",
            liveLabel: "Try the demo"
        },
    ];

    const projects: Project[] = [
        {
            company: "Agentic RAG",
            year: "2025",
            title: "Corrective RAG Pipeline",
            description: "Corrective Retrieval-Augmented Generation — a self-healing RAG pipeline that grades its own retrieval, rewrites bad queries, and falls back to web search before generating an answer.",
            tags: ["Python", "RAG", "LLM", "LangChain"],
            image: cragImage,
            githubUrl: "https://github.com/Dielldev/agentic-crag"
        },
        {
            company: "Aorta Plus",
            year: "2026",
            title: "Polyclinic Website",
            description: "A full redesign for a polyclinic in Ferizaj that has been open since 1996. The Albanian-language site presents six departments, the medical team and a simple 3-step care process, with an online appointment request form, opening-hours status, patient testimonials and contact details.",
            tags: ["React", "Vite", "Tailwind", "Node.js"],
            image: aortaImage,
            liveUrl: "https://aortaplus.vercel.app/",
            githubUrl: "https://github.com/Dielldev/Aortaplus"
        },
        {
            company: "Erta Flow",
            year: "2024",
            title: "Client Management",
            description: "A client management website built in 48 hours at JunctionX Tirana, where it won first place.",
            tags: ["Vanilla", "Tailwind", "PHP"],
            image: project4Image,
            liveUrl: "https://youtu.be/bHDd1XsMENA?si=-4HIfmJg8C5M5bNI",
            githubUrl: "https://github.com/Drijoni/junction-erta",
            liveLabel: "Watch demo",
            badge: "1st place · JunctionX Tirana 2024"
        },
        {
            company: "Aava Match",
            year: "2024",
            title: "Job Matching Application",
            description: "A job matching application that matches people with their dream job, built in 48 hours at Junction Helsinki, where it placed second.",
            tags: ["Vanilla", "Tailwind", "PHP"],
            image: project5Image,
            liveUrl: "https://youtu.be/9bH2aULUfYI?si=b9muHrH22qnj04hW",
            githubUrl: "https://github.com/lirikrexhepi/aavaMatach",
            liveLabel: "Watch demo",
            badge: "2nd place · Junction Helsinki 2024"
        },
    ];

    const renderActions = (project: Project) => (
        <div className="flex gap-2 pt-2">
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center minimal-button text-sm"
                >
                    {project.liveLabel ?? "View Live"}
                </a>
            )}
            {project.githubUrl !== "#" && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center minimal-button-outline text-sm px-4 ${project.liveUrl ? "" : "flex-1"}`}
                >
                    Code
                </a>
            )}
        </div>
    );

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="projects">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        label="Projects"
                        title="Things I've built"
                        description="AI tools, developer software and client products. The ones at the top are my most recent."
                    />
                </motion.div>

                {/* Featured projects */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {featured.map((project, index) => {
                        const wide = index === featured.length - 1 && featured.length % 2 === 1;
                        return (
                        <motion.div
                            key={project.title}
                            className={`minimal-card group flex flex-col !m-0 text-left ${wide ? 'lg:col-span-2 lg:flex-row lg:gap-8 lg:items-center' : ''}`}
                            variants={cardVariants}
                        >
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative block mb-5 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 ${wide ? 'lg:mb-0 lg:w-1/2 lg:flex-shrink-0' : ''}`}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.company} screenshot`}
                                    className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {project.badge && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold shadow">
                                        {project.badge}
                                    </span>
                                )}
                            </a>

                            <div className="flex flex-col flex-1 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-black dark:text-white">{project.company}</span>
                                    <span className="text-sm text-gray-500">{project.year}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-black dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {renderActions(project)}
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>

                {/* Other projects */}
                <motion.h3
                    className="max-w-6xl mx-auto mt-14 mb-4 text-sm font-medium uppercase tracking-widest text-gray-500"
                    variants={itemVariants}
                >
                    More projects
                </motion.h3>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            className="minimal-card group flex flex-col !m-0 text-left"
                            variants={cardVariants}
                        >
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={`${project.company} screenshot`}
                                    className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {project.badge && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold shadow">
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{project.company}</span>
                                    <span className="text-xs text-gray-500">{project.year}</span>
                                </div>

                                <h3 className="text-base font-medium text-black dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {renderActions(project)}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-10"
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
