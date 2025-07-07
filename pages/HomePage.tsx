
import React from 'react';
import { Link } from 'react-router-dom';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-4.08V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h2.08M12 21h4a1 1 0 001-1v-4a1 1 0 00-1-1h-2.08m0-11.92V6a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h2.08m13.38-2.17L18 10m-3.08-6.17L14 9m5.38-2.17L20 10m-3.08-6.17L16 9" />
    </svg>
);

const MobileIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const CpuChipIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m3.75 3.75h-1.5m-15 0H3m15 0h-1.5m-15 3.75H3m15 0h-1.5M15.75 21v-1.5m-1.5-1.5h-3.75a.75.75 0 0 1-.75-.75V9.75c0-.414.336-.75.75-.75h3.75a.75.75 0 0 1 .75.75v9.75c0 .414-.336.75-.75.75Z" />
    </svg>
);


const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background container */}
        <div className="absolute inset-0 -z-10">
            {/* Light Mode Image */}
            <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop" 
                alt="A bright, modern desk setup with a laptop" 
                className="absolute inset-0 h-full w-full object-cover dark:hidden"
            />
            {/* Dark Mode Image */}
            <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2500&auto=format&fit=crop" 
                alt="A person presenting with a laptop in a dark room"
                className="absolute inset-0 h-full w-full object-cover hidden dark:block"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/70 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              <span className="block">LocalLift AI</span>
              <span className="block text-indigo-600 dark:text-indigo-500 mt-2">
                Free AI-Powered Websites
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300">
              Helping small businesses in our community thrive with modern, professional, and mobile-friendly websites, designed with cutting-edge AI tools.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/portfolio"
                className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
              >
                See My Work
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white/50 text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-white dark:bg-slate-800/50 dark:text-indigo-400 dark:hover:bg-slate-800 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-400/30 backdrop-blur-sm border border-white/20"
              >
                Request a Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Beautifully Designed, Expertly Crafted
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We focus on what matters most for a small business's online presence: great design, mobile accessibility, and the efficiency of modern technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={<SparklesIcon className="h-8 w-8" />}
              title="Modern Design"
              description="Visually stunning and professional designs that make a great first impression and build trust with your customers."
            />
            <IconCard
              icon={<MobileIcon className="h-8 w-8" />}
              title="Mobile Optimization"
              description="Ensuring your website looks and works perfectly on all devices, from desktops to smartphones."
            />
            <IconCard
              icon={<CpuChipIcon className="h-8 w-8" />}
              title="Built with AI Tools"
              description="Leveraging powerful AI tools like Google AI Studio to create beautiful designs quickly and efficiently."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
