
import React from 'react';

interface PortfolioCardProps {
  imageUrl: string;
  title: string;
  description: string;
  isPlaceholder?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageUrl, title, description, isPlaceholder = false }) => (
  <div className="group relative bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="h-64 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    {isPlaceholder && (
      <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
        Coming Soon
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  </div>
);

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            A showcase of designs created with passion and modern tools.
          </p>
        </div>

        {/* This Website as a Project */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Featured Project</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/2">
              <img className="h-full w-full object-cover" src="https://picsum.photos/id/1074/1200/800" alt="LocalLift AI Website Screenshot" />
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">Project #1</div>
              <h4 className="block mt-1 text-2xl leading-tight font-bold text-black dark:text-white">The LocalLift AI Website</h4>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                This very website serves as our first portfolio piece. It was designed to be clean, professional, and easy to navigate, reflecting the same quality and principles we bring to every project. It's built with React, TypeScript, and Tailwind CSS to be fully responsive and modern.
              </p>
            </div>
          </div>
        </div>

        {/* Future Client Work */}
        <div className="mt-20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">Client Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              imageUrl="https://picsum.photos/seed/bakery/600/400"
              title="Artisan Bakery"
              description="A warm and inviting landing page design for a local bakery to showcase their products and location."
              isPlaceholder={true}
            />
            <PortfolioCard
              imageUrl="https://picsum.photos/seed/mechanic/600/400"
              title="Auto Repair Shop"
              description="A clean, trustworthy redesign for a local mechanic, making it easy for customers to find services and contact info."
              isPlaceholder={true}
            />
            <PortfolioCard
              imageUrl="https://picsum.photos/seed/florist/600/400"
              title="Boutique Florist"
              description="An elegant and visually rich design for a flower shop, focusing on beautiful imagery and event services."
              isPlaceholder={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;