import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiFolder, 
  FiBriefcase,
  FiImage,
  FiSun, 
  FiMoon
} from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

interface HorizontalNavProps {
  className?: string;
}

const HorizontalNav: React.FC<HorizontalNavProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const navItems = [
    {
      icon: FiHome,
      to: '/',
      label: 'pond',
    },
    {
      icon: FiFolder,
      to: '/projects',
      label: 'projects',
    },
    {
      icon: FiBriefcase,
      to: '/experience',
      label: 'experience',
    },
    {
      icon: FiImage,
      to: '/gallery',
      label: 'gallery',
    },
  ];

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 bg-[#f5f4f1]/80 dark:bg-[#1a1921]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full shadow-2xl transition-all duration-300">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);

          return (
            <Link
              key={index}
              to={item.to}
              className={`p-2 rounded-full transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-black dark:text-white bg-black/10 dark:bg-white/15'
                  : 'text-[#262523]/60 dark:text-[#fff7f0]/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon size={17} />
            </Link>
          );
        })}
        
        {/* Subtle vertical divider */}
        <div className="h-4 w-px bg-current opacity-15 mx-0.5"></div>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-[#262523]/60 dark:text-[#fff7f0]/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-200 active:scale-95"
          title="Toggle Theme"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
        </button>
      </div>
    </nav>
  );
};

export default HorizontalNav;
