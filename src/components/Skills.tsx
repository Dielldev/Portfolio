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
        title: "LLMs & Agents",
        blurb: "Retrieval, agent workflows and LLM-backed products.",
        items: ["RAG", "LangChain", "OpenAI API", "Groq", "Hugging Face", "n8n"],
    },
    {
        title: "Machine Learning & Data",
        blurb: "Training, evaluating and tracking models.",
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "MLflow", "CUDA", "Jupyter"],
    },
    {
        title: "Backend & Infrastructure",
        blurb: "APIs and the plumbing to deploy them.",
        items: ["Python", "FastAPI", "Flask", "SQL", "Supabase", "Docker", "AWS", "Git"],
    },
    {
        title: "Full-stack & Apps",
        blurb: "Interfaces for the systems I build.",
        items: ["TypeScript", "React", "Tailwind CSS", "JavaScript", "Node.js", "Rust", "Tauri"],
    },
    {
        title: "Security",
        blurb: "Pentesting experience, including attacks on LLM apps.",
        items: ["Burp Suite", "Web Pentesting", "PortSwigger Labs", "Prompt Injection"],
    },
];

const Skills: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="skills">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        label="Skills"
                        title="Technologies I work with"
                        description="AI and ML at the core, with the full-stack and security background to ship it."
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {groups.map((group) => (
                        <motion.div
                            key={group.title}
                            variants={itemVariants}
                            className="md:[&:last-child:nth-child(odd)]:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5"
                        >
                            <h3 className="text-base font-semibold text-black dark:text-white">{group.title}</h3>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{group.blurb}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-xs font-medium bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
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
