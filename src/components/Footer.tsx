import React from 'react';

interface SocialLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: 'Github', href: 'https://github.com/Dielldev' },
    { name: 'Youtube', href: 'https://www.youtube.com/@diell_btw' },
    { name: 'Instagram', href: 'https://www.instagram.com/diellgovori/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/diell-govori-3a32b528b/' },
  ];

  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-link text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Diell Govori. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
