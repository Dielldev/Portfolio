import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const experiences: Experience[] = [
    {
        title: 'Building Sonte AI',
        company: 'Sonte AI',
        type: 'Founding Engineer',
        duration: 'Present',
        location: 'Remote',
        summary: 'Automate social media creation, multi-modal content generation and publishing with intelligent AI workflows.',
        skills: ['AI Agents', 'LLMs', 'TypeScript', 'Next.js', 'Python'],
        logo: stealthLogo,
    },
    {
        title: 'Hackathon Ambassador',
        company: 'Hackathon Hub',
        type: 'Community Leadership',
        duration: '2024 - Present',
        location: 'Kosovo',
        summary: 'Managing Kosovo’s hackathon ecosystem, mentoring student teams and fostering community tech initiatives.',
        skills: ['Mentorship', 'Community Leadership', 'Ecosystem Growth'],
        logo: hackathonHubLogo,
    },
    {
        title: 'Cyber Security Intern',
        company: 'Pretera',
        type: 'Internship',
        duration: 'Mar 2026 - May 2026 · 3 mos',
        location: 'Pristina, Kosovo · On-site',
        summary: 'Web application pentester. Ran hands-on tests with Burp Suite, completed advanced PortSwigger Web Security Academy labs, and wrote professional pentest reports with risk levels and remediation advice.',
        details:
            'Identified, exploited and documented vulnerabilities across server-side and client-side attacks: SQL Injection, SSRF, OS Command Injection, SSTI, XXE, Path Traversal, File Upload Vulnerabilities, Access Control, Authentication Issues, Business Logic Vulnerabilities, XSS and CSRF. Also investigated Web LLM attacks including prompt injection, data leakage, and adversarial techniques against generative systems.',
        skills: ['Penetration Testing', 'Burp Suite', 'Prompt Injection', 'Web LLM Attacks', 'SSRF', 'SQL Injection', 'Access Control'],
        logo: preteralogo,
    },
    {
        title: 'Research and Development AI Intern',
        company: 'StarLabs',
        type: 'Internship',
        duration: 'Oct 2025 - Jan 2026 · 4 mos',
        location: 'Pristina, Kosovo · On-site',
        summary: 'Designed and built production-level AI systems for Digital School, centred on a Retrieval-Augmented Generation (RAG) system.',
        details:
            'Developed and refined the RAG system, working extensively with embeddings, vector-based retrieval pipelines and evaluation of model reliability to keep outputs consistent and trustworthy. Fine-tuned a local LLM for task-specific performance with Hugging Face Transformers and the OpenAI API, and built and tested FastAPI endpoints to serve model outputs in production.',
        skills: ['Python', 'RAG', 'FastAPI', 'Hugging Face', 'OpenAI API', 'Vector DB', 'NumPy'],
        logo: starlabsLogo,
    },
    {
        title: 'Freelance Web Developer',
        company: 'Upwork',
        type: 'Self-employed',
        duration: 'May 2021 - Feb 2025 · 3 yrs 10 mos',
        location: 'Ferizaj, Kosovo · Remote',
        summary: 'Built and maintained responsive, scalable web applications for international clients with React, TypeScript and JavaScript.',
        details:
            'Delivered custom client platforms, interactive web experiences, and API integrations with modern component architectures and rigorous performance benchmarks.',
        skills: ['TypeScript', 'React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
        logo: upworkLogo,
    },
];

const WorkExperience: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);
    const [expanded, setExpanded] = useState<Set<number>>(new Set([0]));

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
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section
            id="experience"
            className="w-full max-w-4xl mx-auto px-6 py-24 sm:py-32 scroll-mt-20"
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <SectionHeader
                    label="experience"
                    title="Where I've worked"
                    description="Professional experience in AI engineering, application security and software development."
                />

                <div className="space-y-4">
                    {experiences.map((exp, index) => {
                        const isExpanded = expanded.has(index);

                        return (
                            <motion.div
                                key={exp.title + index}
                                variants={itemVariants}
                                className="rounded-2xl border border-current/10 bg-current/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-current/25 hover:bg-current/[0.04]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        {/* Company logo or monogram */}
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={exp.company || exp.title}
                                                className="w-11 h-11 rounded-xl object-cover border border-current/10 shrink-0"
                                            />
                                        ) : (
                                            <div className="w-11 h-11 rounded-xl bg-current/10 flex items-center justify-center font-mono font-semibold text-sm shrink-0">
                                                {(exp.company || exp.title).charAt(0)}
                                            </div>
                                        )}

                                        <div>
                                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                                <h3 className="text-[17px] font-semibold text-current tracking-tight">
                                                    {exp.title}
                                                </h3>
                                                {exp.company && (
                                                    <span className="text-[14px] opacity-60">
                                                        @ {exp.company}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[12px] opacity-50">
                                                {exp.duration && <span>{exp.duration}</span>}
                                                {exp.type && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{exp.type}</span>
                                                    </>
                                                )}
                                                {exp.location && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{exp.location}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {exp.details && (
                                        <button
                                            type="button"
                                            onClick={() => toggle(index)}
                                            className="font-mono text-[12px] opacity-60 hover:opacity-100 px-2.5 py-1 rounded-full border border-current/15 shrink-0 transition-opacity"
                                        >
                                            {isExpanded ? 'less -' : 'more +'}
                                        </button>
                                    )}
                                </div>

                                {/* Summary */}
                                <p className="mt-4 text-[14px] leading-relaxed opacity-75 font-sans">
                                    {exp.summary}
                                </p>

                                {/* Expandable Details */}
                                <AnimatePresence>
                                    {isExpanded && exp.details && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-3 pt-3 border-t border-current/10 text-[14px] leading-relaxed opacity-70 font-sans">
                                                {exp.details}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Skills */}
                                {exp.skills.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-current/10 bg-current/[0.03] px-2.5 py-0.5 font-mono text-[11px] opacity-70"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default WorkExperience;
