import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';

interface BlogArticleData {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    content: string[];
}

const BlogArticle: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();

    const articles: { [key: string]: BlogArticleData } = {
        'first-ctf-experience': {
           id: 'first-ctf-prishtina',
  title: 'My First CTF Experience – Top 10 in Prishtina!',
  category: 'Cybersecurity',
  date: '2024-06-08',
  readTime: '4 min read',
  description: 'A personal story about participating in my first Capture The Flag (CTF) competition in Prishtina, what I learned, and how we ended up in the Top 10.',
  image: image1,
  tags: ['CTF', 'Cybersecurity', 'Beginner Experience'],
  author: 'Diell Govori',
  content: [
    'In early June, I took part in my first Capture The Flag (CTF) cybersecurity competition, held in Prishtina. I had never done anything like it before — it was a completely new experience for me, and I went in with zero expectations and a lot of curiosity.',
    'Despite being new to the world of CTFs, I teamed up with a group of like-minded tech enthusiasts, and we decided to dive into the challenges together. The competition featured a variety of tasks — web exploitation, cryptography, reverse engineering, OSINT, and more.',
    '## What I Learned',
    'I learned a lot in a short amount of time. From understanding how buffer overflows work to decoding hidden messages using steganography tools, every challenge taught me something new. It wasn’t just about solving puzzles — it was about understanding how systems break and how they can be defended.',
    'We spent hours debugging, Googling, trying and failing — and sometimes, finally succeeding. I learned the importance of teamwork, quick thinking, and reading between the lines (literally).',
    '## Our Result',
    'To our surprise, we ended up placing in the **Top 10** out of all participating teams. For a first-timer like me, it was a huge confidence boost. More than the placement, I left with a sense of excitement and motivation to dive deeper into cybersecurity.',
    '## Why CTFs Are Worth It',
    'If you’ve ever been curious about cybersecurity but didn’t know where to start — CTFs are a great entry point. They’re fun, educational, and they force you to think like an attacker and a defender at the same time.',
    'This experience showed me how much I enjoy cybersecurity, and it’s already sparked my interest in learning more. I’m planning to participate in more competitions in the future — and maybe next time, we’ll aim even higher.',
    'Whether you’re a beginner or a seasoned developer, I highly recommend giving CTFs a shot. You’ll be surprised how much you can learn in a day.'
            ]
        },
        'winning-2nd-place-junction': {
            id: 'junction-hackathon-2024',
            title: 'Winning 2nd Place at Europe’s Biggest Hackathon – Junction in Helsinki',
            category: 'Hackathons',
            date: '2024-09-20',
            readTime: '5 min read',
            description: 'My experience at Junction, Europe’s biggest hackathon, where our team built a job-matching application and took home 2nd place.',
            image: image2,
            tags: ['Hackathon', 'Junction', 'Teamwork', 'Tech Projects'],
            author: 'Jane Smith',
             content: [
    'In November 2024, I had the incredible opportunity to participate in **Junction**, the biggest hackathon in Europe, held in Helsinki, Finland. With over a thousand participants from around the world, the energy and intensity of the event were unmatched.',
    'I joined forces with my team — a group of passionate and talented developers — and together we built a **job-matching application** designed to connect candidates and employers in a smarter, more intuitive way. The idea was to use technology to improve how people discover meaningful work opportunities based on skills, personality, and values, not just a CV.',
    '## Our Project – Smart Job Matcher',
    'Our app used advanced filtering, recommendation systems, and a clean user experience to make the job-hunting process less frustrating and more personalized. It wasn’t just about finding *a* job — it was about finding the *right* job.',
    'During the hackathon, we built the app from scratch — from brainstorming and wireframing to coding the frontend and backend. It was an intense 48 hours, but seeing the final result come together was beyond rewarding.',
    '## 2nd Place Finish',
    'Out of hundreds of teams, we were honored to be announced as **2nd place winners**. It was a surreal moment. The judges appreciated the clarity of our solution, our strong technical implementation, and the real-world value of our idea.',
    'As part of the recognition, I was even invited to do a short interview on behalf of my team to talk about our project and our experience at the event — another exciting first for me.',
    '## Final Thoughts',
    'Junction wasn’t just about building an app — it was about teamwork, innovation, and pushing ourselves under pressure. I met amazing people, learned a lot, and grew more confident in my abilities as a developer and teammate.',
    'If you ever get the chance to participate in a hackathon like Junction — take it. You won’t regret it. It’s one of those experiences that stays with you, both personally and professionally.'
  ]
        },
        'junctionx-tirana-2024': {
  id: 'junctionx-tirana-2024',
  title: 'Winning 1st Place at JunctionX Tirana – A Milestone Hackathon',
  category: 'Hackathons',
  date: '2024-05-12',
  readTime: '4 min read',
  description: 'Our journey to first place at JunctionX Tirana, where we competed against 500 participants and walked away with the €3000 grand prize.',
  image: image3,
  tags: ['Hackathon', 'JunctionX', 'Tirana', 'Innovation'],
  author: 'Diell Govori',
  content: [
    'Back in May 2024, I had the chance to participate in **JunctionX Tirana**, a regional edition of the famous Junction hackathon series. It took place in Tirana, Albania and brought together over **500 talented participants** from all around the Balkans and beyond.',
    'I was the **youngest participant** in the entire event, which felt a bit intimidating at first. But that didn’t stop me — I was determined to learn, contribute, and build something meaningful with my amazing team.',
    '## The Project That Won Us 1st Place',
    'Over an intense 48-hour weekend, we worked on an innovative tech solution tailored to one of the event’s challenges. Our idea combined creativity, solid problem-solving, and strong technical execution — and clearly, it stood out. We ended up taking **1st place**, winning the **grand prize of €3000**.',
    'The moment they announced us as winners was surreal. Out of 500 participants and dozens of strong projects, our work had made an impact. It felt like the months of self-learning, late-night coding, and teamwork had truly paid off.',
    '## Why This Hackathon Meant So Much',
    'Winning this hackathon wasn’t just about the prize — it was about proving to myself that age doesn’t define capability. I was surrounded by university students, startup founders, and industry professionals — and yet, I belonged there.',
    'This event also acted as a stepping stone for my team. Our victory in Tirana earned us a spot to compete at **Junction in Helsinki**, the biggest hackathon in Europe — where we later went on to win 2nd place!',
    '## Final Reflections',
    'JunctionX Tirana was one of those rare weekends that changes your trajectory. It gave me confidence, connections, and experience that I’ll carry forward in every future challenge. Whether you’re just starting out or already deep into tech — I highly recommend stepping into a hackathon. You’ll learn more in 48 hours than you think possible.'
  ]
},

        'asef-2025-web-design': {
            
  id: 'asef-web-design-win',
  title: 'Winning 1st Place in Web Design at ASEF – Albanian Science & Engineering Fair for the Third Year in a Row',
  category: 'Competitions',
  date: '2024-02-20',
  readTime: '4 min read',
  description: 'A breakdown of my experience competing at ASEF in the Web Design & Computer Science category, where I built a full-stack application and earned 1st place out of 70 projects.',
  image: image4,
  tags: ['Web Design', 'Full Stack', 'ASEF', 'Competition'],
  author: 'Diell Govori',
  content: [
    'In Feburary 2024, I participated in the **Albanian Science and Engineering Fair (ASEF)** — one of the biggest academic competitions for high school students in Albania. Every year, students from all over the country compete in categories like robotics, biology, computer science, and more.',
    'I entered under the **Computer Science and Web Design** category, where the goal was to build a full-stack application with strong technical functionality and great user experience. There were **70 different web projects** in the same category, and everyone brought something unique to the table.',
    '## Building My Project',
    'For the competition, I built a full-stack web application from scratch. I focused on performance, clean UI/UX design, and real-world functionality. I wanted to show not just technical skill, but also how thoughtful web design can improve usability and impact.',
    'The project included frontend and backend logic, database handling, responsive design, and user interaction — and I made sure every part worked smoothly.',
    '## Winning 1st Place',
    'After presenting the project to a panel of judges and walking them through the design decisions, technical architecture, and user flow — I was honored to be announced as the **1st place winner** in the Web Design category!',
    'Out of 70 projects, mine was chosen for its **clean execution, innovation, and real-world value**. It felt amazing to be recognized, especially among such a talented pool of students.',
    '## Why ASEF Was Special',
    'What made ASEF different from other competitions was the atmosphere — it was all about passion for science and tech. Even though it was competitive, it was also collaborative. I got to meet other young developers and designers, and it reminded me how much talent exists around us.',
    'Winning was a bonus — the experience itself was valuable. Presenting your work, defending your ideas, and thinking critically under pressure is something every developer should experience.',
    '## What’s Next?',
    'After ASEF, I’ve been even more motivated to keep building and improving. Competitions like these not only sharpen your skills — they open doors. I’m excited for the next challenge, wherever it may be.'
  ]
},
        'vrfinity-ict-awards': {
             id: 'ict-awards-vrfinity',
  title: 'VRFinity – City Finalist at ICT Awards for Innovation in Tech',
  category: 'Competitions',
  date: '2024-03-10',
  readTime: '3 min read',
  description: 'My journey with VRFinity, an educational VR platform selected as the top innovation project in my city for the ICT Awards, and the experience of presenting it to industry leaders.',
  image: image5,
  tags: ['ICT Awards', 'Innovation', 'VR', 'Tech Projects'],
  author: 'Diell Govori',
  content: [
    'Earlier this year, I participated in the **ICT Awards**, a national competition that travels across cities in Albania to discover and spotlight young tech innovators. The competition focuses on identifying standout projects that demonstrate creativity, problem-solving, and future potential.',
    'I entered with a project called **VRFinity** — an interactive learning platform that introduces users to the basics of virtual reality, including a **live web-based VR demo** that simulates the VR experience for users without a headset.',
    '## What VRFinity Does',
    'VRFinity was built to make VR more accessible and understandable. Many people still think VR is too complicated or expensive to get into. My goal was to break that barrier by providing an educational platform, a user-friendly walkthrough, and even an in-browser VR simulation to show what it feels like to be in a VR environment.',
    '## Selected as the Best in My City',
    'Among all the participants in my city, **VRFinity was selected as the top innovative tech project** — which gave me the opportunity to present it at the national ICT Awards stage. It was an honor to represent my city and share my work in front of a room full of high-level guests including investors, university professors, and industry experts.',
    '## Presenting in Front of Decision-Makers',
    'Even though I didn’t take home the national prize, the experience was absolutely worth it. I got to practice pitching my idea, answer real questions from professionals, and hear feedback that helped me think about how I could improve the product further.',
    'I also made valuable connections and got inspired by other young developers who were building apps, platforms, and tools that could really make a difference.',
    '## Final Thoughts',
    'Sometimes it’s not about winning the final award — it’s about being *seen*. ICT Awards gave me that chance. I was proud to represent my project and show that real innovation can come from young people too.',
    'I’m looking forward to evolving VRFinity even more — and maybe next time, I’ll walk away with both the experience and the trophy.'
            ]
        },
        'back-to-back-wins-asef': {
          id: 'asef-web-design-2024',
  title: 'Back-to-Back Wins at ASEF – 1st Place in Web Design (Again)',
  category: 'Competitions',
  date: '2024-02-21',
  readTime: '4 min read',
  description: 'For the second year in a row, I earned 1st place in the Web Design category at ASEF, competing against 80 impressive projects from across Albania.',
  image: image6,
  tags: ['Web Design', 'Full Stack', 'ASEF', 'Competition'],
  author: 'Diell Govori',
  content: [
    'Just one year after my first ASEF win, I returned in 2024 to compete again in the **Albanian Science and Engineering Fair (ASEF)** — and I’m incredibly proud to share that I won **1st place in Web Design** once again!',
    'This time, the competition was even tougher. There were **80 web development projects** in the same category, with students from all across Albania showcasing their creativity, problem-solving skills, and technical capabilities.',
    '## My New Project',
    'For this edition of ASEF, I took everything I had learned from the previous year and built an even more polished, full-stack web application. I focused on performance, accessibility, modern UI/UX, and a cleaner architecture to show how design and functionality can work seamlessly together.',
    'The project demonstrated dynamic routing, user authentication, and a fully responsive interface — all optimized for real-world usage. I wanted to push the limits of what could be done in just a few weeks of preparation.',
    '## Winning Again',
    'Hearing my name called for **1st place** for the second year in a row was surreal. It felt like validation that I’m moving in the right direction, learning more, and continuously improving.',
    'The judges highlighted my attention to detail, the overall user experience, and the technical depth of the project as reasons for the win — feedback that truly meant a lot.',
    '## Growing Through Competition',
    'Returning to ASEF reminded me why I love web development in the first place — the challenge, the creativity, and the ability to turn an idea into a functional experience for users. It also showed me that growth isn’t just about winning — it’s about how much better you are than your last version.',
    'Now with two back-to-back wins, I’m more motivated than ever to keep building, experimenting, and exploring new technologies. And who knows — maybe I’ll be back again next year.'
            ]
        },
        'my-first-asef': {
            id: 'my-first-asef',
            title: 'My First ASEF – Winning 1st Place in Web Design as a 10th Grader',
            category: 'Competitions',
            date: '2023-02-24',
            readTime: '4 min read',
            description: 'The story of how I entered ASEF for the first time as a 10th grader, competed in the Web Design category, and took 1st place against older and more experienced students.',
            image: image7,
            tags: ['Web Design', 'ASEF', '10th Grade'],
            author: 'Diell Govori',
            content: [
               'In 10th grade, I entered my very first **ASEF (Albanian Science and Engineering Fair)** — and I’ll never forget what happened next: I walked away with **1st place in Web Design**, beating out dozens of older students and more experienced developers.',
    'I was new to the competition scene. I had been building websites for a while, mostly self-taught, experimenting with frontend technologies, and pushing myself to make clean, usable designs. When ASEF came around, I decided to give it a shot.',
    '## Building My First Competition Project',
    'The project I submitted was a full-fledged website with smooth navigation, clear layout, responsive design, and a focus on usability. I didn’t have the most complex backend or advanced stack — but I made sure every detail on the frontend was tight, modern, and functional.',
    'I focused on the things that matter most to users: clarity, visual hierarchy, and smooth interactions. It turns out that attention to detail made a big impact.',
    '## Crushing Expectations',
    'Most of the other contestants in my category were in 11th or 12th grade, and many had previous experience with ASEF. I was the new kid — and younger. But when the results were announced, I had officially taken **1st place**.',
    'It felt unreal. Winning my first tech competition as a 10th grader gave me the confidence to keep going and set a new standard for what I wanted to achieve in the years ahead.',
    '## Why This Win Mattered',
    'This win wasn’t just a trophy — it was the start of a mindset. It taught me that age doesn’t matter when you’re passionate and consistent. What matters is effort, execution, and how much heart you put into what you build.',
    'That first ASEF experience laid the foundation for future wins and bigger challenges. It was the beginning of my competitive web design journey — and definitely not the end.'
            ]
        },
        'my-first-coding-competitio': {
            id: 'my-first-coding-competitio',
           title: 'My First Coding Competition – Winning Code1 in Prishtina',
  category: 'Competitions',
  date: '2022-03-05',
  readTime: '3 min read',
  description: 'The story of how I entered my first-ever coding competition, Code1 in Prishtina, and won in my category using drag-and-drop blocks — a moment that sparked my entire journey into tech.',
  image: image8,
  tags: ['First Competition', 'Code1', 'Coding Journey'],
  author: 'Diell Govori',
  content: [
    'Everyone has a starting point — mine was a competition called **Code1**, held in Prishtina. I had just started learning about programming, and this was the first time I ever participated in anything related to coding.',
    'The competition focused on **block-based programming** — a drag-and-drop coding environment built for beginners to learn logic, structure, and computational thinking. I was nervous, excited, and had no idea what to expect.',
    '## Winning My First Category',
    'To my surprise, I ended up **winning first place in my category**. It was a small win in the grand scheme of things — but for me, it meant everything. It was the moment that told me: *you belong here*.',
    '## The Moment Everything Clicked',
    'That day in Prishtina, standing among other young programmers, something clicked. I realized that I *loved* building things, solving problems, and figuring out how computers think. It wasn’t just fun — it felt right.',
    'From there, I dove headfirst into coding — learning HTML, CSS, JavaScript, then exploring frameworks, backend logic, full-stack development, and eventually cybersecurity, AI, and beyond.',
    '## Why I’ll Always Remember Code1',
    'Looking back, Code1 was more than just a beginner competition — it was the **starting point** of everything I’ve done since. Every project, every hackathon, every competition I’ve won since then traces back to that one moment.',
    
            ]
        }
    };

    const article = articleId ? articles[articleId] : null;

    if (!article) {
        return (
            <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
                <div className="section-container">
                    <div className="text-center py-16">
                        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Article Not Found</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
                        <Link
                            to="/blog"
                            className="minimal-link"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderContent = (content: string) => {
        if (content.startsWith('##')) {
            return <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">{content.substring(2).trim()}</h2>;
        } else if (content.startsWith('```')) {
            const code = content.replace(/```\w*\n?/g, '').trim();
            return (
                <pre className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 overflow-x-auto my-6">
                    <code className="text-sm text-gray-800 dark:text-gray-200">{code}</code>
                </pre>
            );
        } else {
            return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{content}</p>;
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <div className="section-container">
                {/* Back Button */}
                <div className="mb-8 text-left">
                    <Link
                        to="/blog"
                        className="minimal-link"
                    >
                        ← Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <article>
                    {/* Featured Image */}
                    <div className="mb-6 overflow-hidden rounded-lg">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="space-y-6">
                        {/* Category */}
                        <div className="text-center">
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded text-sm font-medium">
                                {article.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center">{article.title}</h1>
                        
                        {/* Meta Information */}
                        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                            <span>By {article.author}</span>
                            <span>•</span>
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-gray dark:prose-invert max-w-none pt-6 border-t border-gray-200 dark:border-gray-800">
                            {article.content.map((paragraph, index) => (
                                <div key={index}>
                                    {renderContent(paragraph)}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Thanks for reading! If you enjoyed this article, please share it with others.
                                    </p>
                                </div>
                                <Link
                                    to="/blog"
                                    className="minimal-button text-sm"
                                >
                                    More Articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogArticle;
