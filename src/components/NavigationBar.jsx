import React from 'react';
import { Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';

const NavigationBar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
    <div className="max-w-5xl mx-auto flex items-center justify-center gap-6 text-sm font-medium">
      <NavLink icon={<Home className="w-4 h-4" />} text="Home" href="#home" />
      <NavLink icon={<User className="w-4 h-4" />} text="About" href="#about" />
      <NavLink icon={<Briefcase className="w-4 h-4" />} text="Experience" href="#experience" />
      <NavLink icon={<Code className="w-4 h-4" />} text="Projects" href="#projects" />
      <NavLink icon={<Mail className="w-4 h-4" />} text="Contact" href="#contact" />
      <a
        href="/resume.pdf" // Replace with actual resume path
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-150"
      >
        <FileText className="w-4 h-4" /> Resume
      </a>
    </div>
  </nav>
);



const NavLink = ({ icon, text, href }) => (
  <a href={href} className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-150">
    {icon} {text}
  </a>
);

export default NavigationBar;
