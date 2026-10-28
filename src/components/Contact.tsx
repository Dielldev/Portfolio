import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const UNDERLINE =
    'underline decoration-[color-mix(in_srgb,currentColor_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100';

const Contact: React.FC = () => {
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
            id="contact"
            className="w-full max-w-4xl mx-auto px-6 pt-24 pb-32 sm:py-32 scroll-mt-20"
        >
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <SectionHeader
                    label="contact"
                    title="Let's build something"
                    description="Hiring for an AI engineering role, exploring an agent workflow, or building a prototype? Let's connect."
                />

                <motion.div
                    variants={itemVariants}
                    className="rounded-2xl border border-current/10 bg-current/[0.02] p-6 sm:p-10 transition-all duration-300 hover:border-current/25"
                >
                    <p className="font-mono text-[13px] opacity-50 lowercase tracking-wider">
                        direct inquiries & conversation
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-current/10">
                        <div>
                            <a
                                href="mailto:diellgovori9@gmail.com"
                                className="text-xl sm:text-2xl font-mono font-medium hover:opacity-80 transition-opacity break-all"
                            >
                                diellgovori9@gmail.com
                            </a>
                            <p className="mt-1 text-[13px] opacity-60">
                                Usually responds within 24 hours.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                            <a
                                href="mailto:diellgovori9@gmail.com"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[13px] border border-current/20 hover:border-current/50 hover:bg-current/5 transition-all"
                            >
                                <FiMail size={14} /> Send Email
                            </a>
                            <a
                                href="/CV/cv_Diell_Govori.pdf"
                                download="CV_Diell_Govori.pdf"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[13px] bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
                            >
                                <FiDownload size={14} /> CV
                            </a>
                        </div>
                    </div>

                    {/* Socials & Networks */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[13px]">
                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/Dielldev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${UNDERLINE} opacity-60 hover:opacity-100 inline-flex items-center gap-1`}
                            >
                                github <FiArrowUpRight size={13} />
                            </a>
                            <span className="opacity-30">/</span>
                            <a
                                href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${UNDERLINE} opacity-60 hover:opacity-100 inline-flex items-center gap-1`}
                            >
                                linkedin <FiArrowUpRight size={13} />
                            </a>
                            <span className="opacity-30">/</span>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${UNDERLINE} opacity-60 hover:opacity-100 inline-flex items-center gap-1`}
                            >
                                x <FiArrowUpRight size={13} />
                            </a>
                        </div>

                        <span className="opacity-40 text-[12px]">
                            Pristina / Ferizaj, Kosovo
                        </span>
                    </div>
                </motion.div>

                {/* Footer Monospace Note */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] opacity-40 text-center sm:text-left"
                >
                    <p>© {new Date().getFullYear()} Diell Govori. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        <span>crafted with precision</span>
                        <span>•</span>
                        <span>react & typescript</span>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
