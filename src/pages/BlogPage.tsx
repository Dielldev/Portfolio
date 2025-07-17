import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';

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

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const blogPosts: BlogPost[] = [
        {
            title: 'My First CTF Experience – Top 10 in Prishtina!',
            category: 'Cybersecurity',
            date: '2024-06-15',
            readTime: '5 min read',
            description: 'A comprehensive guide on building scalable web applications using React and TypeScript, covering best practices and modern development patterns.',
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
        },
        {
            title: 'Winning 1st Place at JunctionX Tirana – A Milestone Hackathon',
            category: 'Hackathons',
            date: '2024-06-10',
            readTime: '4 min read',
           description: 'Our journey to first place at JunctionX Tirana, where we competed against 500 participants and walked away with the €3000 grand prize.',
            image: image3,
            link: '/blog/junctionx-tirana-2024',
            tags: ['Hackathon', 'JunctionX', 'Tirana', 'Innovation'],
        },
        {
            title: 'Winning 1st Place in Web Design at ASEF 2025 – Albanian Science & Engineering Fair',
            category: 'Competitions',
            date: '2025-02-25',
            readTime: '4 min read',
             description: 'A breakdown of my experience competing at ASEF in the Web Design & Computer Science category, where I built a full-stack application and earned 1st place out of 70 projects.',
            image: image4,
            link: '/blog/asef-2025-web-design',
            tags: ['Web Design', 'ASEF', 'Full Stack']
        },
        {
            title: 'VRFinity – City Finalist at ICT Awards for Innovation in Tech',
            category: 'Competitions',
            date: '2024-02-14',
            readTime: '3 min read',
            description: 'My journey with VRFinity, an educational VR platform selected as the top innovation project in my city for the ICT Awards, and the experience of presenting it to industry leaders.',
            image: image5,
            link: '/blog/vrfinity-ict-awards',
            tags: ['VR', 'Education', 'Innovation']
        },
        {
            title: 'Back-to-Back Wins at ASEF – 1st Place in Web Design (Again)',
            category: 'Competitions',
            date: '2024-02-25',
            readTime: '4 min read',
            description: 'For the second year in a row, I earned 1st place in the Web Design category at ASEF, competing against 80 impressive projects from across Albania.',
            image: image6,
            link: '/blog/back-to-back-wins-asef',
            tags: ['Web Design', 'ASEF', 'Full Stack']
        },
        {
            title: 'My First ASEF – Winning 1st Place in Web Design as a 10th Grader',
            category: 'Competitions',
            date: '2023-02-24',
            readTime: '4 min read',
            description: 'The story of how I entered ASEF for the first time as a 10th grader, competed in the Web Design category, and took 1st place against older and more experienced students.',
            image: image7,
            link: '/blog/my-first-asef',
            tags: ['Web Design', 'ASEF', '10th Grade']
        },
        {
            title: 'My First Coding Competition – Winning Code1 in Prishtina',
            category: 'Competitions',
            date: '2021-08-24',
            readTime: '3 min read',
            description: 'The story of how I entered my first-ever coding competition, Code1 in Prishtina, and won in my category using drag-and-drop blocks — a moment that sparked my entire journey into tech.',
            image: image8,
            link: '/blog/my-first-coding-competition',
            tags: ['First Competition', 'Code1', 'Coding Journey'],
        }
    ];

    const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    const filteredPosts = selectedCategory === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <div className="section-container">
                {/* Back Button */}
                <div className="mb-8 text-left">
                    <Link
                        to="/"
                        className="minimal-link"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>

                {/* Header */}
                <h1 className="section-title">Highlights</h1>
                <p className="section-subtitle">
                    Insights and experiences from my journey in tech
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                selectedCategory === category
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {filteredPosts.map((post, index) => (
                        <article key={index} className="minimal-card group">
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
                        </article>
                    ))}
                </div>

                {/* No posts message */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
