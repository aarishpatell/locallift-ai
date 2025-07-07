
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Passion for Design, Business, and AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
            LocalLift AI was born from a desire to merge technology with community impact.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl dark:shadow-slate-800/20">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop" alt="A modern, creative workspace representing the home of LocalLift AI" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Meet the Founder</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                I’m Aarish Patel, a high school student with a deep passion for entrepreneurship, user-centric design, and the incredible potential of artificial intelligence. I started LocalLift AI as a way to use my skills to give back to the local businesses that make our community unique. By providing high-quality web design for free, I hope to help these businesses grow and succeed in the digital world.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Our Tools & Approach</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                I utilize a modern toolkit to bring website designs to life, including visual builders, HTML/CSS for fine-tuning, and generative AI platforms like Google AI Studio to rapidly prototype and create stunning visual concepts. This blend of tools allows for professional-grade results with maximum efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-indigo-50 dark:bg-slate-800 border-l-4 border-indigo-500 dark:border-indigo-400 p-8 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300">Important: Front-End Design Only</h3>
              <div className="mt-2 text-md text-indigo-700 dark:text-indigo-400">
                <p>
                  My expertise and services are focused exclusively on **front-end design**. This includes the visual appearance, layout, and user experience of your website. I do not offer back-end development services, which means I cannot build databases, user login systems, e-commerce functionality, or complex server-side applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;