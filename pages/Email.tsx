import React from 'react';

const Email = () => {
  const email = "thierrydebelder@gmail.com";
  const subject = "Portfolio Website Contact";
  const body = "Hi, I visited your portfolio website and would like to connect!";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="mb-8 text-3xl font-bold text-white">Contact Me</h1>
      <a 
        href={mailtoLink}
        className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send me an email
      </a>
      <p className="mt-4 text-gray-400">
        Or email me directly at: {email}
      </p>
    </div>
  );
};

export default Email;
