import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section-container bg-white dark:bg-black transition-colors duration-300" id="contact">
      <h2 className="section-title">Contact</h2>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="minimal-card">
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
            Want to chat? Just shoot me an email with a direct question at
          </p>
          
          <a 
            href="mailto:diellgovori9@gmail.com"
            className="text-lg font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300 border-b-2 border-black dark:border-white hover:border-gray-700 dark:hover:border-gray-300"
          >
            diellgovori9@gmail.com
          </a>
          
          <p className="text-base text-gray-700 dark:text-gray-300 mt-4 transition-colors duration-300">
            and I'll respond whenever I can.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;