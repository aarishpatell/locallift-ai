import React, { useState, useRef } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // IMPORTANT: Replace these placeholder values with your actual EmailJS credentials.
  // You can find these in your EmailJS account dashboard.
  const SERVICE_ID = 'service_afjplx9';
  const TEMPLATE_ID = 'template_n6v1ila';
  const PUBLIC_KEY = 'L0Yv2tvAekIJbfTJF';


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    
    const formData = new FormData(form.current);
    if (!formData.get('name') || !formData.get('businessName') || !formData.get('email') || !formData.get('message')) {
        setErrorMessage('Please fill out all fields before submitting.');
        setStatus('error');
        return;
    }

    setStatus('submitting');
    setErrorMessage('');

    (window as any).emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
        },
        (error: any) => {
          console.error('FAILED...', error);
          setErrorMessage('Failed to send message. Please try again later.');
          setStatus('error');
        },
      );
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-lg shadow-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
                Fill out the form, or send an email directly. I'll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3 text-lg text-gray-700 dark:text-slate-300 font-medium">aarishpatel07@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-lg shadow-lg">
              <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input type="text" name="name" id="name" className="block w-full shadow-sm py-3 px-4 rounded-md bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="businessName" className="sr-only">Business Name</label>
                  <input type="text" name="businessName" id="businessName" className="block w-full shadow-sm py-3 px-4 rounded-md bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="Business Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 rounded-md bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 rounded-md bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="Message"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'submitting'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              {status === 'success' && (
                <div className="mt-4 text-center p-4 bg-green-100 text-green-800 border border-green-200 rounded-md">
                    Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-center p-4 bg-red-100 text-red-800 border border-red-200 rounded-md">
                    {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;