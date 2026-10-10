import React from 'react';

interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, description }) => (
    <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium mb-6">
            {label}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
            {title}
        </h2>
        {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {description}
            </p>
        )}
    </div>
);

export default SectionHeader;
