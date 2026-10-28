import { useEffect, useRef } from 'react';
import TopNav from '../components/TopNav';
import HorizontalNav from '../components/HorizontalNav';
import aortaImage from '../assets/images/aorta.jpg';
import cragImage from '../assets/images/crag.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';
import egantImage from '../assets/images/egant.jpg';
import folioImage from '../assets/images/folio.jpg';
import meshImage from '../assets/images/mesh.jpg';

interface Project {
  slug: string;
  name: string;
  year: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

const GLIDE = 0.18; // share of remaining distance covered each frame
const DESKTOP_QUERY = '(min-width: 1024px)';

const KEY_STEPS: Record<string, number> = {
  ArrowRight: 0.1,
  ArrowDown: 0.1,
  ArrowLeft: -0.1,
  ArrowUp: -0.1,
  PageDown: 0.8,
  PageUp: -0.8,
  ' ': 0.8,
  End: Infinity,
  Home: -Infinity,
};

const PROJECTS: Project[] = [
  {
    slug: 'egant',
    name: 'egant',
    year: '2026',
    tagline: 'One native window for all your coding agents.',
    description:
      'A desktop app that wraps Claude Code, Codex, opencode and more in real project folders. Chat, file tree, diffs, git worktrees, terminals and an in-app browser sit beside the conversation.',
    tags: ['Tauri', 'Rust', 'React', 'TypeScript'],
    image: egantImage,
    liveUrl: 'https://egant.vercel.app/',
    githubUrl: 'https://github.com/Dielldev/egant',
  },
  {
    slug: 'mesh',
    name: 'Mesh',
    year: '2026',
    tagline: 'Live team knowledge from AI-agent work.',
    description:
      'A hook and MCP server making coding sessions report activities to teammates. 1st place winner at the Genpact x Agilyti Hackathon.',
    tags: ['TypeScript', 'MCP', 'PostgreSQL', 'AI Agents'],
    image: meshImage,
    liveUrl: 'https://genpact-ag-hack.vercel.app',
    githubUrl: 'https://github.com/Dielldev/mesh',
  },
  {
    slug: 'folio',
    name: 'Folio',
    year: '2026',
    tagline: 'AI portfolio tracker with SEC sentiment outlook.',
    description:
      'Describe holdings in plain English to parse them into live dashboards with P&L and AI sentiment outlooks from SEC filings and news.',
    tags: ['React', 'FastAPI', 'Groq', 'Supabase'],
    image: folioImage,
    liveUrl: 'https://folio-demo-diell.vercel.app',
    githubUrl: 'https://github.com/Dielldev/ai-stock-screnner',
  },
  {
    slug: 'crag',
    name: 'Agentic CRAG',
    year: '2025',
    tagline: 'Corrective Retrieval-Augmented Generation pipeline.',
    description:
      'Self-healing RAG pipeline that grades retrieval confidence, rewrites bad queries, and falls back to live web search before answering.',
    tags: ['Python', 'RAG', 'LLM', 'LangChain'],
    image: cragImage,
    githubUrl: 'https://github.com/Dielldev/agentic-crag',
  },
  {
    slug: 'aorta',
    name: 'Aorta Plus',
    year: '2026',
    tagline: 'Healthcare polyclinic web platform.',
    description:
      'Full digital experience for a historic healthcare polyclinic with online appointment requests, staff directory, and operating hours.',
    tags: ['React', 'Vite', 'Tailwind', 'Node.js'],
    image: aortaImage,
    liveUrl: 'https://aortaplus.vercel.app/',
    githubUrl: 'https://github.com/Dielldev/Aortaplus',
  },
  {
    slug: 'erta',
    name: 'Erta Flow',
    year: '2024',
    tagline: 'Client management system. 1st place JunctionX Tirana.',
    description:
      'Client management and workflow automation platform built in 48 hours, taking first place honors at JunctionX Tirana 2024.',
    tags: ['Vanilla', 'Tailwind', 'PHP'],
    image: project4Image,
    liveUrl: 'https://youtu.be/bHDd1XsMENA?si=-4HIfmJg8C5M5bNI',
    githubUrl: 'https://github.com/Drijoni/junction-erta',
  },
  {
    slug: 'aava',
    name: 'Aava Match',
    year: '2024',
    tagline: 'Intelligent job matching app. 2nd place Junction Helsinki.',
    description:
      'Dream job candidate matching platform built in Finland, winning 2nd place overall in Europe’s largest hackathon.',
    tags: ['Vanilla', 'Tailwind', 'PHP'],
    image: project5Image,
    liveUrl: 'https://youtu.be/9bH2aULUfYI?si=b9muHrH22qnj04hW',
    githubUrl: 'https://github.com/lirikrexhepi/aavaMatach',
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#f5f4f1] dark:bg-[#1a1921] text-[#262523] dark:text-[#fff7f0] transition-colors duration-300">
      <TopNav />
      <DesktopStrip />
      <MobileLayout />
      <HorizontalNav />
    </div>
  );
}

function DesktopStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktop = window.matchMedia(DESKTOP_QUERY);

    let target = strip.scrollLeft;
    let raf = 0;

    const glide = () => {
      const before = strip.scrollLeft;
      strip.scrollLeft += (target - before) * GLIDE;
      if (Math.abs(strip.scrollLeft - target) < 1) {
        strip.scrollLeft = target;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(glide);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const glideBy = (delta: number) => {
      const max = strip.scrollWidth - strip.clientWidth;
      target = Math.max(0, Math.min(max, (raf ? target : strip.scrollLeft) + delta));
      if (still) strip.scrollLeft = target;
      else if (!raf) raf = requestAnimationFrame(glide);
    };

    const onWheel = (e: WheelEvent) => {
      if (!desktop.matches) return;
      const sideways = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (sideways && strip.contains(e.target as Node)) {
        stop();
        return;
      }
      e.preventDefault();
      const delta = sideways ? e.deltaX : e.deltaY;
      glideBy(e.deltaMode === 1 ? delta * 16 : delta);
    };

    let touch: { x: number; y: number; left: number; lastY: number; time: number; speed: number } | null = null;
    let vertical: boolean | undefined;

    const onTouchStart = (e: TouchEvent) => {
      stop();
      touch = null;
      vertical = undefined;
      if (!desktop.matches || e.touches.length !== 1) return;
      const { clientX: x, clientY: y } = e.touches[0];
      touch = { x, y, left: strip.scrollLeft, lastY: y, time: e.timeStamp, speed: 0 };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touch) return;
      const { clientX: x, clientY: y } = e.touches[0];
      if (vertical === undefined) {
        if (Math.hypot(x - touch.x, y - touch.y) < 6) return;
        vertical = Math.abs(y - touch.y) > Math.abs(x - touch.x);
      }
      if (!vertical) return;
      e.preventDefault();
      strip.scrollLeft = touch.left + touch.y - y;
      const dt = e.timeStamp - touch.time;
      if (dt > 0) touch.speed = (touch.lastY - y) / dt;
      touch.lastY = y;
      touch.time = e.timeStamp;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touch && vertical && !still && e.timeStamp - touch.time < 100) {
        glideBy(touch.speed * (1000 / 60 / GLIDE));
      }
      touch = null;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const step = KEY_STEPS[e.key];
      if (!desktop.matches || step === undefined || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey)
        return;
      if (e.key === ' ' && e.target instanceof HTMLButtonElement) return;
      e.preventDefault();
      glideBy((e.key === ' ' && e.shiftKey ? -step : step) * strip.clientWidth);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      stop();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <main className="flex h-full flex-col justify-center pt-12 max-lg:hidden">
      <div
        ref={stripRef}
        className="flex gap-4 overflow-x-auto px-[max(2rem,calc((100vw-58rem)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project) => (
          <StripTile key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}

function StripTile({ project }: { project: Project }) {
  const href = project.liveUrl || project.githubUrl;

  const content = (
    <>
      <div className="relative aspect-[3/2] h-[min(62vh,42rem)] overflow-hidden rounded-sm bg-black/5 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {href && (
          <span className="pointer-events-none absolute bottom-4 left-4 translate-y-1 rounded-full bg-black/75 dark:bg-black/90 px-3 py-1.5 font-mono text-[12px] text-white opacity-0 backdrop-blur-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {project.liveUrl ? 'visit site ↗' : 'view code ↗'}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-3">
        <span className="whitespace-nowrap text-[15px] font-medium text-current">{project.name}</span>
        <span className="whitespace-nowrap font-mono text-[12px] opacity-60">
          {project.year}
        </span>
      </div>

      <p className="mt-1 text-[14px] leading-[1.5] opacity-60 font-sans max-w-[28rem]">
        {project.tagline}
      </p>
    </>
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-min shrink-0 outline-none"
    >
      {content}
    </a>
  );
}

function MobileLayout() {
  return (
    <div className="w-full h-full overflow-y-auto pt-24 pb-28 px-6 lg:hidden">
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project) => (
          <article key={project.slug} className="flex flex-col">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/5">
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="text-[18px] font-semibold text-current">{project.name}</h2>
              <span className="font-mono text-[12px] opacity-60">{project.year}</span>
            </div>
            <p className="mt-1 text-[14px] opacity-70 leading-relaxed font-sans">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[12px] border border-current/20 hover:border-current/50 transition-colors"
              >
                visit live ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
