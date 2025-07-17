import React from 'react';
import { 
  FiHome, 
  FiFolder, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiSun, 
  FiMoon 
} from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

interface HorizontalNavProps {
  className?: string;
}

const HorizontalNav: React.FC<HorizontalNavProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      icon: FiHome,
      href: '/',
      label: 'Home',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      icon: FiFolder,
      href: '#projects',
      label: 'Projects',
      onClick: () => {
        const projectsSection = document.getElementById('projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: FiGithub,
      href: 'https://github.com/Dielldev',
      label: 'GitHub',
      external: true
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/diell-govori-3a32b528b/',
      label: 'LinkedIn',
      external: true
    },
    {
      icon: FiMail,
      href: 'mailto:diellgovori9@gmail.com',
      label: 'Email',
      external: true
    }
  ];

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full shadow-lg transition-all duration-300">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          
          if (item.external) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-200"
                title={item.label}
              >
                <Icon size={20} />
              </a>
            );
          }
          
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-200"
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-full transition-all duration-200"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default HorizontalNav;
