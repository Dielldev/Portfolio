import React from 'react';

const About: React.FC = () => {
    return (
        <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="about">
            <h2 className="section-title">About</h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-center">
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                        I'm a passionate developer who started coding at <span className="font-medium text-black dark:text-white">15 years old</span>. 
                        I love building modern web applications and intelligent systems that solve real problems.
                    </p>
                    
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                        I specialize in AI engineering and software development, creating clean and efficient solutions.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/CV/cv_Diell_Govori.pdf"
                        download="CV_Diell_Govori.pdf"
                        className="minimal-button"
                    >
                        Download CV
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diell-govori-3a32b528b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="minimal-button-outline"
                    >
                        LinkedIn
                    </a>
                </div>

                
                    
                
            </div>
        </section>
    );
};

export default About;
