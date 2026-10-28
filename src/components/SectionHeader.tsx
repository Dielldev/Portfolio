import React from 'react';

interface SectionHeaderProps {
    label: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    title,
    description,
    align = 'left',
}) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <p className={`font-mono text-[13px] lowercase tracking-[0.04em] opacity-60 mb-2 flex items-center ${align === 'center' ? 'justify-center' : ''}`}>
            <span>{label}</span>
            <span
                aria-hidden="true"
                className="ml-1.5 inline-block h-[0.9em] w-[0.48em] translate-y-[0.05em] animate-blink bg-current motion-reduce:animate-none"
            />
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-current">
            {title}
        </h2>
        {description && (
            <p className="mt-3 text-[15px] opacity-70 max-w-2xl leading-relaxed font-sans">
                {description}
            </p>
        )}
    </div>
);

export default SectionHeader;
