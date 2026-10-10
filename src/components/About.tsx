import React from 'react';
import { motion } from 'framer-motion';
import { SiClaude } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="about">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader label="About" title="Hi, I'm Diell" />
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="-mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                    I'm an AI engineer from Kosovo and a Computer Science and Engineering student at UBT.
                    I build LLM-powered products, RAG pipelines and agent workflows, and I enter a hackathon
                    whenever I get the chance.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="mt-10 max-w-xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 px-6 py-8 md:py-10"
                >
                    <SiClaude size={44} color="#D97757" className="mx-auto" aria-label="Claude logo" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gray-500">Fun fact</p>
                    <p className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white leading-snug">
                        I won't go a day without prompting Claude.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
