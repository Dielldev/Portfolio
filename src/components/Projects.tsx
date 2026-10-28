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

const UNDERLINE =
    'underline decoration-[color-mix(in_srgb,currentColor_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100';

const Projects: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const featured: Project[] = [
        {
            company: 'egant',
            year: '2026',
            title: 'One native window for all your coding agents',
            description:
                'A desktop app that wraps Claude Code, Codex, opencode and more, running in your real project folders. Chat, file tree, diffs, git worktrees, terminals and an in-app browser sit beside the conversation. Revert any turn, sync MCP servers and skills across agents, and pick a session up from your phone.',
            tags: ['Tauri', 'Rust', 'React', 'TypeScript'],
            image: egantImage,
            liveUrl: 'https://egant.vercel.app/',
            githubUrl: 'https://github.com/Dielldev/egant',
            liveLabel: 'Visit egant'
        },
        {
            company: 'Mesh',
            year: '2026',
            title: 'Live team knowledge from AI-agent work',
            description:
                'A hook and MCP server make every Claude Code, Codex, Cursor or Gemini session report what it did, why, and what is blocked. PMs and teammates get a live feed, can ask questions in plain language, and are warned when two people are about to collide or repeat a dead end.',
            tags: ['TypeScript', 'MCP', 'PostgreSQL', 'AI Agents'],
            image: meshImage,
            liveUrl: 'https://genpact-ag-hack.vercel.app',
            githubUrl: 'https://github.com/Dielldev/mesh',
            liveLabel: 'Open Mesh',
            badge: '1st place · Genpact x Agilyti'
        },
        {
            company: 'Folio',
            year: '2026',
            title: 'AI Portfolio Tracker',
            description:
                'Describe your holdings in plain English and Folio parses them into a live dashboard with P&L, price charts and allocation. An on-demand AI Outlook gives a 3-5 day sentiment read built from technical indicators, news headlines and SEC filings.',
            tags: ['React', 'FastAPI', 'Groq', 'Supabase'],
            image: folioImage,
            liveUrl: 'https://folio-demo-diell.vercel.app',
            githubUrl: 'https://github.com/Dielldev/ai-stock-screnner',
            liveLabel: 'Try the demo'
        },
    ];

    const projects: Project[] = [
        {
            company: 'Agentic RAG',
            year: '2025',
            title: 'Corrective RAG Pipeline',
            description:
                'Corrective Retrieval-Augmented Generation — a self-healing RAG pipeline that grades its own retrieval, rewrites bad queries, and falls back to web search before generating an answer.',
            tags: ['Python', 'RAG', 'LLM', 'LangChain'],
            image: cragImage,
            githubUrl: 'https://github.com/Dielldev/agentic-crag'
        },
        {
            company: 'Aorta Plus',
            year: '2026',
            title: 'Polyclinic Healthcare Platform',
            description:
                'A full redesign for a polyclinic in Ferizaj operating since 1996. Presents six medical departments, physician roster, an online appointment request system, live opening status, and patient testimonials.',
            tags: ['React', 'Vite', 'Tailwind', 'Node.js'],
            image: aortaImage,
            liveUrl: 'https://aortaplus.vercel.app/',
            githubUrl: 'https://github.com/Dielldev/Aortaplus'
        },
        {
            company: 'Erta Flow',
            year: '2024',
            title: 'Client Management System',
            description:
                'A client management website built in 48 hours at JunctionX Tirana, where it won first place.',
            tags: ['Vanilla', 'Tailwind', 'PHP'],
            image: project4Image,
            liveUrl: 'https://youtu.be/bHDd1XsMENA?si=-4HIfmJg8C5M5bNI',
            githubUrl: 'https://github.com/Drijoni/junction-erta',
            liveLabel: 'Watch demo',
            badge: '1st place · JunctionX Tirana 2024'
        },
        {
            company: 'Aava Match',
            year: '2024',
            title: 'Job Matching Application',
            description:
                'A job matching application that matches people with their dream job, built in 48 hours at Junction Helsinki, where it placed second.',
            tags: ['Vanilla', 'Tailwind', 'PHP'],
            image: project5Image,
            liveUrl: 'https://youtu.be/9bH2aULUfYI?si=b9muHrH22qnj04hW',
            githubUrl: 'https://github.com/lirikrexhepi/aavaMatach',
            liveLabel: 'Watch demo',
            badge: '2nd place · Junction Helsinki 2024'
        },
    ];

    const renderCard = (project: Project, priority = false) => {
        const href = project.liveUrl || project.githubUrl;

        return (
            <motion.article
                key={project.title}
                variants={itemVariants}
                className="group relative flex flex-col rounded-2xl border border-current/10 bg-current/[0.02] p-4 sm:p-5 transition-all duration-300 hover:border-current/25 hover:bg-current/[0.04]"
            >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-current/[0.05]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading={priority ? 'eager' : 'lazy'}
                    />
                    {/* Hover pill indicator like in Dao-Ho */}
                    {href && (
                        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/75 dark:bg-white/90 px-3 py-1 font-mono text-[11px] text-white dark:text-black opacity-0 backdrop-blur-md transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                            {project.liveUrl ? 'visit site ↗' : 'view code ↗'}
                        </span>
                    )}
                    {project.badge && (
                        <span className="absolute top-3 right-3 rounded-full bg-black/60 dark:bg-black/80 px-2.5 py-0.5 font-mono text-[11px] text-white border border-white/10 backdrop-blur-md">
                            {project.badge}
                        </span>
                    )}
                </div>

                {/* Header: Name & Year */}
                <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h3 className="text-[17px] font-semibold text-current tracking-tight flex items-center gap-2">
                        {project.company}
                        <span className="text-[13px] font-normal opacity-50">· {project.title}</span>
                    </h3>
                    <span className="font-mono text-[12px] opacity-50 shrink-0">
                        {project.year}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-[14px] leading-relaxed opacity-70 flex-grow font-sans">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-current/10 bg-current/[0.03] px-2.5 py-0.5 font-mono text-[11px] opacity-70"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center gap-4 text-[13px] font-mono">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${UNDERLINE} opacity-70 hover:opacity-100 flex items-center gap-1`}
                        >
                            {project.liveLabel || 'visit live'} ↗
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${UNDERLINE} opacity-50 hover:opacity-100 flex items-center gap-1`}
                        >
                            source code ↗
                        </a>
                    )}
                </div>
            </motion.article>
        );
    };

    return (
        <section
            id="projects"
            className="w-full max-w-6xl mx-auto px-6 py-24 sm:py-32 scroll-mt-20"
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <SectionHeader
                    label="projects"
                    title="Things I've built"
                    description="AI tools, developer software and client products. Real projects shipped to users."
                />

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((p, i) => renderCard(p, i === 0))}
                </div>

                {/* More Work Subheader */}
                <div className="mt-20 mb-8 pt-8 border-t border-current/10 flex items-center justify-between">
                    <div>
                        <p className="font-mono text-[12px] lowercase tracking-[0.04em] opacity-60">
                            archive & hackathons
                        </p>
                        <h3 className="text-xl font-semibold mt-1">More Projects</h3>
                    </div>
                    <a
                        href="https://github.com/Dielldev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-[13px] opacity-60 hover:opacity-100 ${UNDERLINE}`}
                    >
                        all repositories on github ↗
                    </a>
                </div>

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((p) => renderCard(p))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
