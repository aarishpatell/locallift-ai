import React from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ServiceItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="relative">
      <dt>
        <CheckIcon className="absolute h-6 w-6 text-green-500" />
        <p className="ml-9 text-lg leading-6 font-bold text-gray-900 dark:text-white">{title}</p>
      </dt>
      <dd className="mt-2 ml-9 text-base text-gray-600 dark:text-slate-400">{description}</dd>
    </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
            We provide essential front-end design services to give your business a polished and professional online presence.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <ServiceItem
              title="Landing Page Creation"
              description="Building beautiful and effective single-page websites to showcase your business, product, or event."
            />
            <ServiceItem
              title="Website Redesign"
              description="Refreshing outdated websites with modern layouts, clean typography, and a professional aesthetic to better reflect your brand."
            />
            <ServiceItem
              title="Visual & Layout Improvement"
              description="Enhancing the look and feel of your existing site, focusing on color schemes, imagery, and content structure for a better user experience."
            />
            <ServiceItem
              title="Mobile Responsiveness"
              description="Ensuring your website is fully responsive, providing an optimal viewing experience across all devices, including mobile phones and tablets."
            />
          </dl>
        </div>
        
        <div className="mt-20 bg-rose-50 dark:bg-rose-900/30 border-l-4 border-rose-500 p-8 rounded-r-lg">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-rose-600 dark:text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                    </svg>
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-bold text-rose-800 dark:text-rose-300">Scope of Work Clarification</h3>
                    <div className="mt-2 text-md text-rose-700 dark:text-rose-400">
                        <p>
                        Please remember: <strong>I do not offer custom backend development.</strong> My work focuses solely on front-end visual design. This means I create the part of the website your visitors see and interact with, but not the server-side logic, databases, or payment processing systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;