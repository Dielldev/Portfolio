import React from 'react';
import { motion } from 'framer-motion';
import { SiClaude } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section
            id="about"
            className="w-full max-w-4xl mx-auto px-6 py-24 sm:py-32 scroll-mt-20"
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <SectionHeader
                    label="about"
                    title="Background & philosophy"
                />

                <div className="space-y-6 max-w-2xl text-[15px] leading-relaxed opacity-80 font-sans">
                    <motion.p variants={itemVariants}>
                        I'm an AI engineer based in Kosovo and a Computer Science & Engineering student at UBT.
                        I specialize in architecting LLM-driven systems: multi-agent task loops, robust RAG pipelines,
                        and the production software layers required to ship them reliably.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        I have a deep passion for high-velocity building. Whether competing in hackathons across Europe
                        (winning 1st place at Genpact x Agilyti and JunctionX Tirana, and 2nd at Junction Helsinki)
                        or engineering Sonte AI, I focus on building tools that give humans leverage.
                    </motion.p>
                </div>

                {/* Claude Feature Card */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 max-w-2xl rounded-2xl border border-current/10 bg-current/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-current/25"
                >
                    <div className="flex items-center gap-3">
                        <SiClaude size={32} color="#D97757" aria-label="Claude logo" />
                        <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest opacity-50">
                                workflow note
                            </p>
                            <h3 className="text-[17px] font-semibold text-current tracking-tight">
                                Autonomous coding & agent pair programming
                            </h3>
                        </div>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed opacity-75 font-sans">
                        I treat AI agents as full collaborators. From drafting architectures and exploring unfamiliar APIs to
                        writing custom MCP servers and unit tests, I build and operate agent pipelines daily.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
