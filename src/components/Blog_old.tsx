import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import image2 from '../assets/images/2.png';
import mePr from '../assets/images/me_pr.jpg';
import genpactMain from '../assets/images/genpact-main.jpg';

interface BlogPost {
    title: string;
    category: string;
    date: string;
    readTime: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    rank: string;
}

const Blog: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.05);

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

    const blogPosts: BlogPost[] = [
        {
            title: 'We Won 1st Place at the Genpact x Agilyti Hackathon',
            category: 'Hackathons',
            date: '2026-10-05',
            readTime: '2 min read',
            description: 'In 6 hours our team built Mesh, an AI layer that connects teammates and PMs, and won 1st place in the Agentic AI for Business track.',
            image: genpactMain,
            link: '/blog/genpact-agilyti-hackathon-1st-place',
            tags: ['Hackathon', 'AI Agents', 'Genpact', 'Mesh'],
            rank: '1st place'
        },
        {
            title: 'We Won 1st Place at the Pristina Healthcare Hackathon',
            category: 'Hackathons',
            date: '2026-04-06',
            readTime: '3 min read',
            description: 'Our team won 1st place at the Pristina Healthcare Hackathon after building a Virtual Reality Exhibition on Non-Communicable Diseases.',
            image: mePr,
            link: '/blog/prishtina-healthcare-hackathon-1st-place',
            tags: ['Hackathon', 'VR', 'Healthcare', 'Pitching'],
            rank: '1st place'
        },
        {
            title: 'Winning 2nd Place at Europe’s Biggest Hackathon – Junction in Helsinki',
            category: 'Hackathons',
            date: '2024-09-20',
            readTime: '5 min read',
            description: 'My experience at Junction, Europe’s biggest hackathon, where our team built a job-matching application and took home 2nd place.',
            image: image2,
            link: '/blog/winning-2nd-place-junction',
            tags: ['Hackathon', 'Junction', 'Teamwork', 'Tech Projects'],
            rank: '2nd place'
        }
    ];

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="blog">
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        label="Competitions & Awards"
                        title="Podium finishes"
                        description="Hackathons and competitions I've placed in, with the story behind each one."
                    />
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {blogPosts.map((post, index) => (
                        <motion.article 
                            key={index} 
                            className="minimal-card group text-left !m-0 flex flex-col"
                            variants={cardVariants}
                        >
                            {/* Post Image */}
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold shadow">
                                    {post.rank}
                                </span>
                            </div>

                            {/* Post Info */}
                            <div className="space-y-2 flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300">
                                        {formatDate(post.date)}
                                    </span>
                                </div>

                                <h3 className="text-base font-medium text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 line-clamp-3 flex-1">
                                    {post.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                    {post.tags.slice(0, 3).map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {post.tags.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300">
                                            +{post.tags.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Action Button */}
                                <div className="pt-2">
                                    <Link
                                        to={post.link}
                                        className="block text-center minimal-button text-sm"
                                    >
                                        Read Article
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.p
                    className="max-w-6xl mx-auto mt-6 text-sm text-gray-500 dark:text-gray-400"
                    variants={itemVariants}
                >
                    Also: <span className="text-gray-700 dark:text-gray-300">1st place, ASEF Web Design (2023, 2024)</span>
                    {' · '}
                    <span className="text-gray-700 dark:text-gray-300">Bronze, STEM Olympiad Coding (2023)</span>
                </motion.p>

                <motion.div 
                    className="text-center mt-8"
                    variants={itemVariants}
                >
                    <Link
                        to="/blog"
                        className="minimal-link text-base"
                    >
                        View all articles →
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Blog;
