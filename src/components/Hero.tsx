import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import KoiPond, { type PondStats } from './koi-pond/koi-pond';
import pfp from '../assets/images/pfp_main.png';

const NAV_LINKS = [
  { label: 'pond', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'experience', href: '/experience' },
  { label: 'gallery', href: '/gallery' },
];

const GREETINGS = ['Hello', 'Ckemi'];

const UNDERLINE =
  'underline decoration-[color-mix(in_srgb,currentColor_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100';

const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [stats, setStats] = useState<PondStats>({ koi: 0, pellets: 0 });
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="pond"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#f5f4f1] dark:bg-[#1a1921] text-[#262523] dark:text-[#fff7f0] transition-colors duration-300"
    >
      {/* Anchor for backward compatibility with #home */}
      <span id="home" className="absolute top-0 pointer-events-none" />

      {/* Koi Pond Canvas Background */}
      <KoiPond onStats={setStats} className="absolute inset-0 h-full w-full pointer-events-none" />

      {/* Top Navigation */}
      <header
        data-koi-avoid
        className="relative z-30 pt-8 px-6 flex items-center justify-between font-mono text-[13px] lowercase"
      >
        {/* Spacer for left balance */}
        <div className="hidden lg:block w-20" />

        {/* Center Nav Links */}
        <nav
          aria-label="Main"
          className="mx-auto flex items-center gap-6 md:gap-8 transition-colors duration-200"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = label === 'pond';
            return (
              <Link
                key={href}
                to={href}
                className={`transition-opacity duration-150 outline-none ${
                  isActive
                    ? 'opacity-100 font-semibold underline decoration-1 underline-offset-4'
                    : 'opacity-50 hover:opacity-100 focus-visible:opacity-100'
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Theme Toggle with safety margin to prevent accidental feeding */}
          <span data-koi-ignore className="-m-3 flex p-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="opacity-50 hover:opacity-100 transition-opacity outline-none text-current"
            >
              {theme === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
            </button>
          </span>
        </nav>

        {/* Top-Right Pond Stats (Koi & Pellet count like in screenshot) */}
        {stats.koi > 0 ? (
          <div
            data-koi-avoid
            aria-hidden="true"
            className="absolute right-6 top-8 font-mono text-[11px] leading-relaxed tabular-nums text-right select-none pointer-events-none lg:right-[15vw]"
          >
            <div className="opacity-[0.32] text-current">{stats.koi}</div>
            <motion.div
              key={stats.pellets}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.32 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-current"
            >
              {stats.pellets}
            </motion.div>
          </div>
        ) : (
          <div className="hidden lg:block w-20" />
        )}
      </header>

      {/* Hero Content (Positioned at bottom-left like in screenshot) */}
      <main className="relative z-20 max-w-4xl mx-auto w-full px-6 flex flex-col justify-end pb-24 md:pb-28 pt-20 font-mono">
        {/* Monospace Quote with Blinking Cursor */}
        <motion.blockquote
          data-koi-avoid
          className="text-[14px] lowercase leading-relaxed tracking-[0.02em] opacity-60 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.4 }}
        >
          less noise,
          <br />
          more signal.
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-current motion-reduce:animate-none"
          />
        </motion.blockquote>

        {/* Bio Details */}
        <motion.div
          data-koi-avoid
          className="max-w-[54rem] text-[15px] leading-[max(22px,3vh)] space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Profile Badge & Avatar */}
          <div className="flex items-center gap-3.5 mb-2">
            <img
              src={pfp}
              alt="Diell Govori"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover object-top border border-neutral-300 dark:border-neutral-700 shadow-sm"
            />
            <div>
              <h1
                onClick={() => setGreetingIndex((prev) => (prev + 1) % GREETINGS.length)}
                className="text-[17px] font-semibold text-current flex items-center cursor-pointer select-none"
                title="Click to switch greeting"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={GREETINGS[greetingIndex]}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {GREETINGS[greetingIndex]}
                  </motion.span>
                </AnimatePresence>
                <span>, I'm Diell.</span>
              </h1>
              <p className="text-xs opacity-60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AI Engineer · Kosovo
              </p>
            </div>
          </div>

          <p className="opacity-90">
            Software / AI Engineer, passionate about building the future.
          </p>
          <p className="opacity-90">
            Building and shipping LLM-powered products: RAG pipelines, agent workflows and the apps around them.
          </p>
          <p className="opacity-90">
            Currently, building @ <a href="https://github.com/Dielldev" target="_blank" rel="noopener noreferrer" className={`${UNDERLINE} font-semibold opacity-90`}>Sonte AI</a>.
          </p>

          {/* Koi Interaction Hint */}
          <div className="pt-1">
            <p className="text-[12px] opacity-40">
              [ click anywhere to feed the pond ]
            </p>
          </div>

          {/* Social Links */}
          <p className="pt-2 text-[14px]">
            <a
              href="https://github.com/Dielldev"
              target="_blank"
              rel="noopener noreferrer"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              github
            </a>
            <span className="opacity-40"> / </span>
            <a
              href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              linkedin
            </a>
            <span className="opacity-40"> / </span>
            <a
              href="mailto:diellgovori9@gmail.com"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              email
            </a>
            <span className="opacity-40"> / </span>
            <a
              href="/CV/cv_Diell_Govori.pdf"
              download="CV_Diell_Govori.pdf"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              cv
            </a>
            <span className="opacity-40"> / </span>
            <Link
              to="/projects"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              projects
            </Link>
            <span className="opacity-40"> / </span>
            <Link
              to="/experience"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              experience
            </Link>
            <span className="opacity-40"> / </span>
            <Link
              to="/gallery"
              className={`${UNDERLINE} opacity-60 hover:opacity-100`}
            >
              gallery
            </Link>
          </p>
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
