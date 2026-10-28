import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopNav from '../components/TopNav';
import HorizontalNav from '../components/HorizontalNav';

// Images imported from assets
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import genpactMain from '../assets/images/genpact-main.jpg';
import genpact1 from '../assets/images/genpact-1.jpg';
import mePr from '../assets/images/me_pr.jpg';
import mainpic from '../assets/images/main_pic.png';
import win from '../assets/images/win.jpg';
import presenting from '../assets/images/presenting.jpg';
import presenting1 from '../assets/images/presenting1.jpg';
import team1 from '../assets/images/team1.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  rank: string;
  event: string;
  year: string;
  date: string;
  category: 'hackathons' | 'competitions' | 'moments';
  isFirstPlace?: boolean;
  src: string;
  description: string;
  tags: string[];
  link?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'genpact-1st-place',
    title: 'Genpact x Agilyti Hackathon',
    rank: '1st place',
    event: 'Agentic AI for Business Track',
    year: '2026',
    date: 'Oct 2026',
    category: 'hackathons',
    isFirstPlace: true,
    src: genpactMain,
    description:
      'In 6 hours our team built Mesh, an AI layer connecting teammates and PMs. Each person’s autonomous agent posts live build state to a shared board, ending the need to ask "what are you building?". Won 1st place in the Agentic AI for Business track.',
    tags: ['1st Place', 'AI Agents', 'Genpact', 'Mesh', '6h Sprint'],
    link: 'https://github.com/Dielldev/mesh',
  },
  {
    id: 'prishtina-healthcare-1st-place',
    title: 'Pristina Healthcare Hackathon',
    rank: '1st place',
    event: 'IHS Challenge Winner',
    year: '2026',
    date: 'Apr 2026',
    category: 'hackathons',
    isFirstPlace: true,
    src: mePr,
    description:
      'Our team took on the IHS Challenge, designing and engineering a Virtual Reality Exhibition on Non-Communicable Diseases. Stepped onto stage for my first live pitch to executive judges and secured 1st place overall.',
    tags: ['1st Place', 'VR Exhibition', 'Healthcare', 'Pitching'],
    link: 'https://lnkd.in/dVGwS5vh',
  },
  {
    id: 'junction-helsinki-2nd-place',
    title: 'Europe’s Biggest Hackathon — Junction Helsinki',
    rank: '2nd place',
    event: 'Helsinki, Finland',
    year: '2024',
    date: 'Sep 2024',
    category: 'hackathons',
    isFirstPlace: false,
    src: image2,
    description:
      'Competed with over 1,000 international developers in Helsinki. Built a smart job-matching application connecting talent and employers through shared engineering values and skills. Won 2nd place overall and gave the official team interview broadcast.',
    tags: ['2nd Place', 'Junction', 'Helsinki', 'Job Matcher', 'Europe'],
  },
  {
    id: 'junctionx-tirana-1st-place',
    title: 'JunctionX Tirana — Milestone Hackathon',
    rank: '1st place',
    event: '€3,000 Grand Prize Winner',
    year: '2024',
    date: 'May 2024',
    category: 'hackathons',
    isFirstPlace: true,
    src: image3,
    description:
      'Entered as the youngest participant among 500+ attendees from across the Balkans. In 48 hours our team built an innovative system that earned 1st place and the €3,000 grand prize, securing our qualification to Junction Helsinki.',
    tags: ['1st Place', '€3000 Grand Prize', 'Youngest Contestant', 'Balkans'],
  },
  {
    id: 'asef-2025-web-design',
    title: 'ASEF 2025 — Web Design & Computer Science',
    rank: '1st place',
    event: 'Albanian Science & Engineering Fair',
    year: '2025',
    date: 'Feb 2025',
    category: 'competitions',
    isFirstPlace: true,
    src: image4,
    description:
      'Won 1st place in Web Design for the third consecutive year out of 70 competing applications, evaluated on technical architecture, user flow, responsive interface, and real-world value.',
    tags: ['1st Place', 'Three-Peat', 'Full-Stack', 'ASEF'],
  },
  {
    id: 'cyber-security-finals',
    title: 'Cyber Security Challenge Kosova & Albania Finals',
    rank: '5th place',
    event: 'Finals in Tirana',
    year: '2026',
    date: 'Apr 2026',
    category: 'competitions',
    isFirstPlace: false,
    src: mainpic,
    description:
      'Placed 5th in the finals in Tirana with Ylber Govori after qualifying 3rd in preliminaries. Applied AI engineering experience to code vulnerabilities and security considerations in ML pipelines.',
    tags: ['5th Place', 'Cybersecurity', 'Finals Tirana', 'ML Security'],
  },
  {
    id: 'vrfinity-ict-awards',
    title: 'VRFinity — ICT Awards for Innovation',
    rank: 'city finalist',
    event: 'National Tech Innovation Stage',
    year: '2024',
    date: 'Mar 2024',
    category: 'competitions',
    isFirstPlace: false,
    src: image5,
    description:
      'Selected as the top innovative tech project in the city for VRFinity — an educational platform featuring an in-browser VR simulation without headsets. Presented to investors and university professors on the national stage.',
    tags: ['City Finalist', 'Innovation', 'WebVR', 'Pitching'],
  },
  {
    id: 'asef-2024-web-design',
    title: 'Back-to-Back Wins at ASEF — Web Design',
    rank: '1st place',
    event: 'Albanian Science & Engineering Fair',
    year: '2024',
    date: 'Feb 2024',
    category: 'competitions',
    isFirstPlace: true,
    src: image6,
    description:
      'Earned 1st place in Web Design for the second year in a row against 80 competitive projects from across Albania, building a full-stack platform with dynamic routing, auth, and modern UI.',
    tags: ['1st Place', 'Back-to-Back', 'Web Design', 'Full-Stack'],
  },
  {
    id: 'asef-2023-first-win',
    title: 'My First ASEF — Winning as a 10th Grader',
    rank: '1st place',
    event: 'Web Design Category',
    year: '2023',
    date: 'Feb 2023',
    category: 'competitions',
    isFirstPlace: true,
    src: image7,
    description:
      'Entered ASEF for the first time as a 10th grader, competing against 11th and 12th graders, and took 1st place in Web Design for clean visual hierarchy, modern styling, and smooth interactions.',
    tags: ['1st Place', '10th Grade', 'Breakthrough Win'],
  },
  {
    id: 'first-ctf-prishtina',
    title: 'First CTF Experience — Top 10 in Prishtina',
    rank: 'top 10',
    event: 'Capture The Flag Competition',
    year: '2024',
    date: 'Jun 2024',
    category: 'competitions',
    isFirstPlace: false,
    src: image1,
    description:
      'Participated in my first Capture The Flag cybersecurity competition in Prishtina, tackling cryptography, web exploitation, reverse engineering, and steganography to finish in the Top 10.',
    tags: ['Top 10', 'CTF', 'Web Exploitation', 'Crypto'],
  },
  {
    id: 'code1-prishtina-win',
    title: 'My First Coding Competition — Code1 in Prishtina',
    rank: '1st place',
    event: 'Where It All Started',
    year: '2022',
    date: 'Mar 2022',
    category: 'competitions',
    isFirstPlace: true,
    src: image8,
    description:
      'Entered my first-ever coding competition using block-based programming in Prishtina and won 1st place in my category — the spark that ignited my entire engineering journey.',
    tags: ['1st Place', 'First Competition', 'Origin Story'],
  },
  {
    id: 'ceremony-trophy',
    title: 'Healthcare Hackathon Victory Podium',
    rank: '1st place ceremony',
    event: 'Trophy Presentation',
    year: '2026',
    date: 'Apr 2026',
    category: 'moments',
    isFirstPlace: true,
    src: win,
    description:
      'Lifting the 1st place trophy with teammates after 48 hours of uninterrupted ideation, design, coding, and final stage defense.',
    tags: ['Podium', 'Trophy', 'Teamwork', 'Celebration'],
  },
  {
    id: 'pitching-on-stage',
    title: 'Stage Defense & Live Product Demo',
    rank: 'live pitch',
    event: 'Stage Defense & Live Demo',
    year: '2026',
    date: '2026',
    category: 'moments',
    isFirstPlace: false,
    src: presenting,
    description:
      'Defending system architecture, latency numbers, and multi-agent workflows live on stage in front of the executive panel and jury.',
    tags: ['Stage Pitch', 'Live Demo', 'Public Speaking'],
  },
  {
    id: 'team-sprint',
    title: 'Team Brainstorm & Prototyping Sprint',
    rank: 'in the zone',
    event: 'Hackathon War Room',
    year: '2026',
    date: '2026',
    category: 'moments',
    isFirstPlace: false,
    src: team1,
    description:
      'Intense collaborative design and whiteboarding during sprint hours, aligning API specs and frontend interfaces.',
    tags: ['Sprint', 'Collaboration', 'War Room'],
  },
  {
    id: 'system-demo',
    title: 'Autonomous Workflow Walkthrough',
    rank: 'demo stage',
    event: 'Product Demonstration',
    year: '2026',
    date: '2026',
    category: 'moments',
    isFirstPlace: false,
    src: presenting1,
    description:
      'Demonstrating real-time AI agent orchestration and task dispatching directly on screen to attendees.',
    tags: ['Live Demo', 'AI Agents', 'Stage'],
  },
  {
    id: 'midnight-session',
    title: 'Midnight Coding Session',
    rank: 'crunch time',
    event: 'Genpact Hackathon Final Hours',
    year: '2026',
    date: '2026',
    category: 'moments',
    isFirstPlace: false,
    src: genpact1,
    description:
      'Locking down the MCP protocol and APIs in the final sprint getting the MVP ready for submission.',
    tags: ['Late Night', 'Sprint', 'MCP', 'Coding'],
  },
];

type FilterType = 'all' | '1st-place' | 'hackathons' | 'competitions' | 'moments';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '1st-place') return item.isFirstPlace === true;
    return item.category === activeFilter;
  });

  // Distribute filtered items across 3 columns for balanced masonry layout
  const columns: GalleryItem[][] = [[], [], []];
  filteredItems.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen w-full bg-[#f5f4f1] dark:bg-[#1a1921] text-[#262523] dark:text-[#fff7f0] transition-colors duration-300">
      <TopNav />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 pb-28 pt-28 lg:gap-12 lg:px-[6vw] lg:pt-36">
        {/* Header matching Dao-Ho's layout */}
        <header className="flex flex-col gap-5 font-mono lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2.5">
            <h1 className="sr-only">Gallery</h1>
            <p className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60 flex items-center">
              <span>beauty in the mundane.</span>
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-[0.95em] w-[0.52em] translate-y-[0.08em] bg-current opacity-90"
              />
            </p>
            <p className="max-w-[34rem] text-[15px] sm:text-[16px] leading-[1.6] opacity-80 font-sans">
              Quiet observations of hackathon stages, 1st place victories, and building across Europe.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[13px] opacity-60">
            <a
              href="https://github.com/Dielldev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-[5px] hover:opacity-100 transition-opacity"
            >
              github
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-[5px] hover:opacity-100 transition-opacity"
            >
              linkedin
            </a>
          </div>
        </header>

        {/* Minimal text-only filter tabs */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] opacity-70">
          {[
            { id: 'all', label: 'all' },
            { id: '1st-place', label: '1st place wins' },
            { id: 'hackathons', label: 'hackathons' },
            { id: 'competitions', label: 'competitions' },
            { id: 'moments', label: 'moments' },
          ].map((tab, idx) => {
            const isActive = activeFilter === tab.id;
            return (
              <span key={tab.id} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter(tab.id as FilterType);
                    setExpandedId(null);
                  }}
                  className={`transition-opacity outline-none ${
                    isActive
                      ? 'font-semibold opacity-100 underline decoration-1 underline-offset-4'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {tab.label}
                </button>
                {idx < 4 && <span className="opacity-30">/</span>}
              </span>
            );
          })}
        </div>

        {/* Masonry Columns Section (NO BORDERS, NO HOVER OVERLAY ON IMAGE) */}
        <section aria-label="Works" className="flex flex-col gap-y-6 lg:flex-row lg:items-start lg:gap-5">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-1 flex-col gap-6">
              {column.map((item, itemIdx) => {
                const isExpanded = expandedId === item.id;

                return (
                  <div key={item.id} className="flex flex-col">
                    {/* The Pure Image (No hover pill overlay) */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      aria-label={`View info for ${item.title}`}
                      className="block w-full overflow-hidden outline-none cursor-pointer text-left rounded-[4px]"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.01] rounded-[4px]"
                        loading={colIdx === 0 && itemIdx < 2 ? 'eager' : 'lazy'}
                      />
                    </button>

                    {/* Small text below the image telling the win with arrow to expand */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isExpanded}
                      className="mt-2.5 flex w-full items-baseline justify-between gap-2 text-left font-mono outline-none cursor-pointer group/info"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 truncate">
                        {/* Win text styled like Image 1 */}
                        <span className="text-[13px] sm:text-[14px] font-semibold lowercase tracking-[0.02em] text-zinc-800 dark:text-[#c4c2cf] flex items-center">
                          <span>{item.rank}</span>
                          <span
                            aria-hidden="true"
                            className="ml-1.5 inline-block h-[0.92em] w-[0.5em] translate-y-[0.06em] bg-current opacity-90"
                          />
                        </span>
                        {/* Event title */}
                        <span className="text-[12px] opacity-60 font-sans truncate">
                          · {item.title}
                        </span>
                      </div>

                      {/* Arrow to expand */}
                      <span
                        aria-hidden="true"
                        className={`shrink-0 font-mono text-[11px] opacity-40 transition-transform duration-200 group-hover/info:opacity-100 ${
                          isExpanded ? 'rotate-180 opacity-90' : ''
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {/* Expanded details below the small win text */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="pt-2 pb-1 flex flex-col gap-1.5 font-mono"
                        >
                          {/* Date and Event Meta */}
                          <div className="flex flex-wrap items-center gap-x-2 text-[11px] opacity-50">
                            <span>{item.date}</span>
                            <span>·</span>
                            <span>{item.event}</span>
                          </div>

                          {/* Story / Description from blog */}
                          <p className="font-sans text-[13px] leading-relaxed opacity-75 pt-0.5">
                            {item.description}
                          </p>

                          {/* Tags & Project Link */}
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1.5 text-[11px] opacity-60">
                            {item.tags.map((tag) => (
                              <span key={tag}>#{tag.toLowerCase().replace(/\s+/g, '')}</span>
                            ))}
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 ml-auto text-[12px]"
                                onClick={(e) => e.stopPropagation()}
                              >
                                view project ↗
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </section>
      </main>

      <HorizontalNav />
    </div>
  );
}