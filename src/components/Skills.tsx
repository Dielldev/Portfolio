import React from 'react';

const Skills: React.FC = () => {
    const technologies = [
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Node.js",
        "Python",
        "Java",
        "Flask",
        "Django",
        "SciPy",
        "PyTorch",
        "SQL",
        "Git",
        "Docker",
        "AWS",
        "REST APIs",
        "VS Code",
        "Figma",
        "n8n"
    ];

    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="skills">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
                Technologies I work with to build modern applications
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="text-center py-2 px-3 bg-gray-50 dark:bg-white rounded-md text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-200 cursor-pointer text-sm"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
