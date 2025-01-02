import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a
            href="mailto:email@example.com"
            className="text-gray-600 hover:text-gray-900"
          >
            Email
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Kittitouch Lelapiyamit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
