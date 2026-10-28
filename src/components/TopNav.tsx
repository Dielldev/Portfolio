import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const LINKS = [
  { label: 'pond', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'experience', href: '/experience' },
  { label: 'gallery', href: '/gallery' },
];

interface TopNavProps {
  className?: string;
}

export default function TopNav({ className = '' }: TopNavProps) {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      data-koi-avoid
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-30 flex items-center justify-center gap-7 sm:gap-8 pt-8 font-mono text-[13px] lowercase transition-colors duration-200 text-[#262523] dark:text-[#fff7f0] ${className}`}
    >
      {LINKS.map(({ label, href }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            to={href}
            className={`transition-opacity duration-150 outline-none ${
              active
                ? 'opacity-100 font-semibold underline decoration-1 underline-offset-4'
                : 'opacity-50 hover:opacity-100 focus-visible:opacity-100'
            }`}
          >
            {label}
          </Link>
        );
      })}

      {/* Theme toggle */}
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
  );
}
