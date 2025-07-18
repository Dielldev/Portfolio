import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';

interface BlogPost {
    title: string;
    category: string;
    date: string;
    readTime: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const Blog: React.FC = () => {
    const { ref, isInView } = useScrollAnimation(0.2);

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
            title: 'My First CTF Experience – Top 10 in Prishtina!',
            category: 'Cybersecurity',
            date: '2025-04-15',
            readTime: '4 min read',
            description: 'A personal story about participating in my first Capture The Flag (CTF) competition in Prishtina, what I learned, and how we ended up in the Top 10.',
            image: image1,
            link: '/blog/first-ctf-experience',
            tags: ['CTF', 'Cybersecurity', 'Beginner Experience']
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
                <motion.div 
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-6">
                        My Blog
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Highlights from my journey
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Insights and experiences from my journey in tech, sharing what I've learned along the way through competitions, hackathons, and projects.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
                    variants={containerVariants}
                >
                    {blogPosts.map((post, index) => (
                        <motion.article 
                            key={index} 
                            className="minimal-card group"
                            variants={cardVariants}
                        >
                            {/* Post Image */}
                            <div className="mb-2 overflow-hidden rounded-lg">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-28 object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Post Info */}
                            <div className="space-y-2">
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

                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 line-clamp-3">
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
                                        className="flex-1 text-center minimal-button text-xs"
                                    >
                                        Read Article
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

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
