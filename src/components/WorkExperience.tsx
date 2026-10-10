import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import starlabsLogo from '../assets/images/starlabs-logo.jpg';
import upworkLogo from '../assets/images/upwork-logo.webp';
import stealthLogo from '../assets/images/stealth.jpeg';
import preteralogo from '../assets/images/image.png';
import hackathonHubLogo from '../assets/images/hackathon-hub-logo.jpg';

interface Experience {
    title: string;
    company?: string;
    type?: string;
    duration?: string;
    location?: string;
    summary: string;
    details?: string;
    skills: string[];
    logo?: string;
}

const MAX_VISIBLE_SKILLS = 6;

const experiences: Experience[] = [
    {
        title: "Building Sonte AI",
        summary: "Automate social media, coming soon...",
        skills: [],
        logo: stealthLogo,
    },
    {
        title: "Hackathon Ambassador",
        company: "Hackathon Hub",
        summary: "Managing Kosovo's hackathon ecosystem.",
        skills: [],
        logo: hackathonHubLogo,
    },
    {
        title: "Cyber Security Intern",
        company: "Pretera",
        type: "Internship",
        duration: "Mar 2026 - May 2026 · 3 mos",
        location: "Pristina, Kosovo · On-site",
        summary: "Web application pentester. Ran hands-on tests with Burp Suite, completed advanced PortSwigger Web Security Academy labs, and wrote professional pentest reports with risk levels and remediation advice.",
        details: "Identified, exploited and documented vulnerabilities across server-side and client-side attacks: SQL Injection, SSRF, OS Command Injection, SSTI, XXE, Path Traversal, File Upload Vulnerabilities, Access Control, Authentication Issues, Business Logic Vulnerabilities, XSS and CSRF. Also covered Web LLM attacks such as prompt injection and adversarial techniques targeting AI systems.",
        skills: ["Penetration Testing", "Burp Suite", "SQL Injection", "SSRF", "XSS", "CSRF", "SSTI", "XXE", "Access Control", "Prompt Injection", "Web LLM Attacks"],
        logo: preteralogo,
    },
    {
        title: "Research and Development AI Intern",
        company: "StarLabs",
        type: "Internship",
        duration: "Oct 2025 - Jan 2026 · 4 mos",
        location: "Pristina, Kosovo · On-site",
        summary: "Designed and built production-level AI systems for Digital School, centred on a Retrieval-Augmented Generation (RAG) system.",
        details: "Developed and refined the RAG system, working extensively with embeddings, vector-based retrieval pipelines and evaluation of model reliability to keep outputs consistent and trustworthy. Fine-tuned a local LLM for task-specific performance with Hugging Face Transformers and the OpenAI API, and built and tested FastAPI endpoints to serve model outputs in production.",
        skills: ["Python", "RAG", "FastAPI", "Hugging Face", "OpenAI API", "NumPy", "Pandas"],
        logo: starlabsLogo,
    },
    {
        title: "Freelance Web Developer",
        company: "Upwork",
        type: "Self-employed",
        duration: "May 2021 - Feb 2025 · 3 yrs 10 mos",
        location: "Ferizaj, Kosovo · Remote",
        summary: "Built and maintained responsive, scalable web applications for clients worldwide with React, TypeScript and JavaScript.",
        skills: ["TypeScript", "React.js", "JavaScript", "Tailwind CSS"],
        logo: upworkLogo,
    },
];

const WorkExperience: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);
    const [expanded, setExpanded] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setExpanded((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="experience">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        label="Experience"
                        title="Where I've worked"
                        description="AI research, security testing and years of client work."
                    />
                </motion.div>

                <ol className="relative max-w-2xl mx-auto text-left border-l border-gray-200 dark:border-gray-800">
                    {experiences.map((exp, index) => {
                        const isOpen = expanded.has(index);
                        const hasMore = Boolean(exp.details) || exp.skills.length > MAX_VISIBLE_SKILLS;
                        const visibleSkills = isOpen ? exp.skills : exp.skills.slice(0, MAX_VISIBLE_SKILLS);

                        return (
                            <motion.li key={exp.title} variants={itemVariants} className="relative pl-8 pb-10 last:pb-0">
                                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-black" />

                                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
                                            {exp.logo ? (
                                                <img src={exp.logo} alt={`${exp.company ?? exp.title} logo`} className="w-8 h-8 object-contain" />
                                            ) : (
                                                <span className="text-sm font-bold text-black dark:text-white">
                                                    {(exp.company ?? exp.title).split(" ").map((w) => w[0]).join("").slice(0, 2)}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-bold text-black dark:text-white">{exp.title}</h3>
                                            {exp.company && (
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="font-medium text-gray-800 dark:text-gray-200">{exp.company}</span>
                                                    {exp.type && <span> · {exp.type}</span>}
                                                </p>
                                            )}
                                            {(exp.duration || exp.location) && (
                                                <p className="mt-1 text-xs text-gray-500">
                                                    {[exp.duration, exp.location].filter(Boolean).join("  |  ")}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {exp.summary}
                                    </p>

                                    {isOpen && exp.details && (
                                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {exp.details}
                                        </p>
                                    )}

                                    {exp.skills.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {visibleSkills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {!isOpen && exp.skills.length > MAX_VISIBLE_SKILLS && (
                                                <span className="px-3 py-1 text-xs text-gray-500">
                                                    +{exp.skills.length - MAX_VISIBLE_SKILLS} more
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {hasMore && (
                                        <button
                                            onClick={() => toggle(index)}
                                            aria-expanded={isOpen}
                                            className="mt-4 text-sm font-medium text-black dark:text-white hover:underline"
                                        >
                                            {isOpen ? "Show less" : "Show more"}
                                        </button>
                                    )}
                                </div>
                            </motion.li>
                        );
                    })}
                </ol>
            </motion.div>
        </section>
    );
};

export default WorkExperience;
