import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

interface SkillGroup {
    title: string;
    blurb: string;
    items: string[];
}

const groups: SkillGroup[] = [
    {
        title: 'LLMs & AI Agents',
        blurb: 'Retrieval pipelines, autonomous agents, and tool calling.',
        items: ['RAG', 'LangChain', 'OpenAI API', 'Groq', 'Hugging Face', 'n8n', 'MCP Servers'],
    },
    {
        title: 'Machine Learning & Data',
        blurb: 'Model training, fine-tuning, embeddings and evaluation.',
        items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'MLflow', 'CUDA', 'Jupyter'],
    },
    {
        title: 'Backend & Infrastructure',
        blurb: 'Performant APIs, data stores and cloud deployments.',
        items: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Supabase', 'Docker', 'AWS', 'Git'],
    },
    {
        title: 'Full-stack & Client Apps',
        blurb: 'Reactive frontends and cross-platform desktop software.',
        items: ['TypeScript', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Rust', 'Tauri'],
    },
    {
        title: 'Security & Adversarial AI',
        blurb: 'Offensive web pentesting and LLM vulnerabilities.',
        items: ['Burp Suite', 'Web Pentesting', 'Prompt Injection', 'Adversarial Jailbreaks', 'PortSwigger Labs'],
    },
];

const Skills: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="skills"
            className="w-full max-w-4xl mx-auto px-6 py-24 sm:py-32 scroll-mt-20"
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <SectionHeader
                    label="skills"
                    title="Technologies & tooling"
                    description="AI and machine learning at the core, backed by production full-stack engineering and application security."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groups.map((group, i) => (
                        <motion.div
                            key={group.title}
                            variants={itemVariants}
                            className={`rounded-2xl border border-current/10 bg-current/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-current/25 hover:bg-current/[0.04] ${
                                i === groups.length - 1 && groups.length % 2 === 1
                                    ? 'md:col-span-2'
                                    : ''
                            }`}
                        >
                            <h3 className="text-[17px] font-semibold text-current tracking-tight">
                                {group.title}
                            </h3>
                            <p className="mt-1 text-[13px] opacity-60 font-mono">
                                {group.blurb}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-current/10 bg-current/[0.03] px-3 py-1 font-mono text-[12px] opacity-80 hover:opacity-100 hover:border-current/30 transition-all duration-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
