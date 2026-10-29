import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopNav from '../components/TopNav';
import HorizontalNav from '../components/HorizontalNav';
import sonteLogo from '../assets/images/sonte-logo.png';
import starlabsLogo from '../assets/images/starlabs-logo.jpg';
import upworkLogo from '../assets/images/upwork-logo.webp';
import preteralogo from '../assets/images/image.png';
import hackathonHubLogo from '../assets/images/hackathon-hub-logo.jpg';

type ExperienceCategory = 'all' | 'founding' | 'internships' | 'leadership' | 'freelance';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  category: 'founding' | 'internships' | 'leadership' | 'freelance';
  location: string;
  summary: string;
  details: string[];
  skills: string[];
  logo?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sonte',
    role: 'Founding AI Engineer',
    company: 'Sonte AI',
    period: '2026 — Present',
    type: 'Full-time / Founding',
    category: 'founding',
    location: 'Remote',
    summary: 'Automating multi-modal content creation, video generation and autonomous social media agent workflows.',
    details: [
      'Architecting multi-agent loops that convert raw user prompts and references into complete multi-slide carousels, video cuts, and audio overlays.',
      'Integrating model APIs with structured tool-calling, custom MCP servers, and background job queues.',
      'Optimizing generation latency and prompt efficiency with streaming token responses and dynamic caching.',
    ],
    skills: ['AI Agents', 'LLMs', 'Prompt Engineering', 'TypeScript', 'Next.js', 'Python', 'MCP'],
    logo: sonteLogo,
  },
  {
    id: 'pretera',
    role: 'Cyber Security Intern',
    company: 'Pretera',
    period: 'Mar 2026 — May 2026',
    type: 'Internship',
    category: 'internships',
    location: 'Pristina, Kosovo · On-site',
    summary: 'Web application pentesting and security research focused on web vulnerabilities and generative AI safety.',
    details: [
      'Executed end-to-end vulnerability assessments with Burp Suite and completed advanced PortSwigger Web Security Academy labs.',
      'Identified and exploited critical vulnerabilities: SQLi, SSRF, OS Command Injection, SSTI, XXE, Path Traversal, and Broken Access Control.',
      'Researched and documented adversarial Web LLM attacks including prompt injection, direct system jailbreaks, and indirect prompt extraction.',
      'Authored professional penetration testing reports with categorized CVSS risk levels and actionable remediation blueprints.',
    ],
    skills: ['Penetration Testing', 'Burp Suite', 'Prompt Injection', 'LLM Attacks', 'SSRF', 'SQL Injection'],
    logo: preteralogo,
  },
  {
    id: 'starlabs',
    role: 'R&D AI Systems Intern',
    company: 'StarLabs',
    period: 'Oct 2025 — Jan 2026',
    type: 'Internship',
    category: 'internships',
    location: 'Pristina, Kosovo · On-site',
    summary: 'Designed and engineered production-level AI infrastructure and Retrieval-Augmented Generation (RAG) for Digital School.',
    details: [
      'Constructed dense vector retrieval pipelines with semantic chunking, cosine similarity scoring, and reranking to eliminate hallucinations.',
      'Fine-tuned domain-specific local language models using Hugging Face Transformers and the OpenAI API.',
      'Deployed low-latency production FastAPI endpoints for model inference with automated reliability logging.',
      'Benchmarked embedding models on educational query sets, improving top-3 recall accuracy.',
    ],
    skills: ['Python', 'RAG Pipelines', 'FastAPI', 'Hugging Face', 'Vector Stores', 'OpenAI API', 'NumPy'],
    logo: starlabsLogo,
  },
  {
    id: 'hackathon-hub',
    role: 'Hackathon Ambassador',
    company: 'Hackathon Hub',
    period: '2024 — Present',
    type: 'Leadership & Mentorship',
    category: 'leadership',
    location: 'Kosovo',
    summary: 'Directing Kosovo’s collegiate hackathon ecosystem, student team preparation, and international technical representation.',
    details: [
      'Organizing preparatory sprint workshops on agentic development, prototyping speed, and pitching.',
      'Mentoring multidisciplinary student squads competing in premier European hackathons including Junction.',
      'Fostering relationships with tech companies and sponsors to expand access to computing resources.',
    ],
    skills: ['Community Leadership', 'Technical Mentorship', 'Hackathon Sprints', 'Public Speaking'],
    logo: hackathonHubLogo,
  },
  {
    id: 'upwork',
    role: 'Freelance Software Engineer',
    company: 'Upwork',
    period: 'May 2021 — Feb 2025',
    type: 'Self-employed',
    category: 'freelance',
    location: 'Remote',
    summary: 'Delivered modern web applications, interactive user interfaces, and custom client software internationally.',
    details: [
      'Developed 15+ responsive web applications using React, TypeScript, Tailwind CSS, and REST/GraphQL APIs.',
      'Collaborated directly with founders and teams across North America and Europe to iterate rapidly from wireframes to deployment.',
      'Ensured 99%+ customer satisfaction with clean, maintainable, and thoroughly tested codebases.',
    ],
    skills: ['TypeScript', 'React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Node.js'],
    logo: upworkLogo,
  },
];

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>('all');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['sonte']));

  const filteredItems = EXPERIENCES.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allExpanded = filteredItems.length > 0 && filteredItems.every((item) => expandedIds.has(item.id));

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredItems.map((e) => e.id)));
    }
  };

  // Two balanced columns for desktop layout (matching Gallery's editorial aesthetic)
  const columns: ExperienceItem[][] = [[], []];
  filteredItems.forEach((item, index) => {
    columns[index % 2].push(item);
  });

  return (
    <div className="min-h-screen w-full bg-[#f5f4f1] dark:bg-[#1a1921] text-[#262523] dark:text-[#fff7f0] transition-colors duration-300">
      <TopNav />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 pb-28 pt-28 lg:gap-12 lg:px-[6vw] lg:pt-36">
        {/* Editorial Header matching Gallery / Dao-Ho aesthetic */}
        <header className="flex flex-col gap-5 font-mono lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2.5">
            <h1 className="sr-only">Experience</h1>
            <p className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60 flex items-center">
              <span>experience.</span>
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-[0.95em] w-[0.52em] translate-y-[0.08em] bg-current opacity-90"
              />
            </p>
            <p className="max-w-[34rem] text-[15px] sm:text-[16px] leading-[1.6] opacity-80 font-sans">
              Founding AI engineering, security research, R&D systems, and technical leadership across Europe.
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
            <span>/</span>
            <a
              href="/CV/Diell_Govori_CV_AI_Engineer.pdf"
              download="Diell_Govori_CV_AI_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-[5px] hover:opacity-100 transition-opacity"
            >
              cv ↗
            </a>
          </div>
        </header>

        {/* Minimal text-only filter tabs matching Gallery */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-[12px] opacity-70">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {[
              { id: 'all', label: 'all' },
              { id: 'founding', label: 'founding' },
              { id: 'internships', label: 'internships' },
              { id: 'leadership', label: 'leadership' },
              { id: 'freelance', label: 'freelance' },
            ].map((tab, idx) => {
              const isActive = activeFilter === tab.id;
              return (
                <span key={tab.id} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveFilter(tab.id as ExperienceCategory)}
                    className={`transition-opacity outline-none cursor-pointer ${
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

          {/* Toggle all details */}
          <button
            type="button"
            onClick={toggleAll}
            className="text-[11px] opacity-50 hover:opacity-100 transition-opacity underline decoration-1 underline-offset-2 cursor-pointer outline-none"
          >
            {allExpanded ? 'collapse all' : 'expand all'}
          </button>
        </div>

        {/* Unboxed 2-Column Section (Combination of Gallery layout + Projects typographic clarity) */}
        <section aria-label="Work Experience" className="flex flex-col gap-y-12 lg:flex-row lg:items-start lg:gap-x-12">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-1 flex-col gap-12">
              {column.map((item) => {
                const isExpanded = expandedIds.has(item.id);

                return (
                  <article
                    key={item.id}
                    className="flex flex-col pb-8 border-b border-current/10 transition-colors duration-200"
                  >
                    {/* Top Meta Line: Index, Type, Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] opacity-40 uppercase tracking-wider pb-3 border-b border-current/10">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-current opacity-70">
                          EXP / 0{EXPERIENCES.findIndex((e) => e.id === item.id) + 1}
                        </span>
                        <span>·</span>
                        <span>{item.type}</span>
                      </div>
                      <span>{item.period}</span>
                    </div>

                    {/* Logo + Identity Header (NO BORDERS, NO PADDING, PURE LOGO) */}
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0"
                          />
                        )}
                        <div>
                          <h2 className="text-[19px] sm:text-[21px] font-semibold text-current tracking-tight leading-tight">
                            {item.role}
                          </h2>
                          <p className="font-mono text-[13px] opacity-60 mt-0.5">
                            @ {item.company} · {item.location}
                          </p>
                        </div>
                      </div>

                      {/* Expand / Collapse toggle */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        aria-label={isExpanded ? `Collapse details for ${item.company}` : `Expand details for ${item.company}`}
                        className="font-mono text-[11px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer shrink-0 outline-none flex items-center gap-1 select-none"
                      >
                        <span>{isExpanded ? 'less' : 'details'}</span>
                        <span>{isExpanded ? '↑' : '↓'}</span>
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="mt-3.5 text-[14px] sm:text-[15px] leading-relaxed opacity-75 font-sans">
                      {item.summary}
                    </p>

                    {/* Expandable Technical Contributions Tray (Gallery-style AnimatePresence) */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          {/* Specifics */}
                          <div className="mt-4 pt-3.5 border-t border-current/10 space-y-2">
                            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                              Key Technical Contributions & Specifics
                            </p>
                            <ul className="space-y-2 text-[13px] opacity-80 font-sans leading-relaxed">
                              {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2.5">
                                  <span className="font-mono text-[10px] opacity-40 mt-0.5 shrink-0 select-none">
                                    0{dIdx + 1}
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills in clean mono tags (NO rounded-full pills!) */}
                          <div className="mt-4 pt-3 border-t border-current/10 flex flex-wrap gap-x-2.5 gap-y-1 font-mono text-[11px] opacity-60">
                            {item.skills.map((skill) => (
                              <span key={skill}>
                                #{skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
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
