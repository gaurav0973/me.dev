import React from 'react';

const Sidebar = () => (
  <aside className="w-64 border-r border-gray-800 flex-shrink-0 bg-black text-white h-screen overflow-y-auto">
    <div className="p-4 border-b border-gray-800">
      <a href="/" className="flex items-center gap-2 font-bold text-white">
        <div className="bg-blue-600 text-white p-1 rounded">🤖</div>
        gaurav.dev
      </a>
    </div>

    <Section title="About Me" isText>
      <p className="text-sm text-gray-400">
        I'm <span className="text-purple-400">Gaurav</span>, a software developer who loves building web apps. This is my digital garden 🌱 — a space for ideas, guides, and creativity.
      </p>
    </Section>

    <Section title="Stay Connected">
      <SidebarLink text="Twitter" emoji="🐦" href="https://twitter.com/yourhandle" />
      <SidebarLink text="LinkedIn" emoji="💼" href="https://linkedin.com/in/yourhandle" />
      <SidebarLink text="GitHub" emoji="📡" href="https://github.com/yourusername" />
      <SidebarLink text="Blog" emoji="📝" href="/blog" />
    </Section>


    <Section title="Fun Stuff">
      <SidebarLink text="The Lore of Animorphs" emoji="🌀" href="/fun/animorphs" />
    </Section>
  </aside>
);

const Section = ({ title, children, isText }) => (
  <div className="p-4 border-b border-gray-800">
    <h2 className="font-bold mb-3">{title}</h2>
    {isText ? children : <ul className="space-y-2 text-sm">{children}</ul>}
  </div>
);

const SidebarLink = ({ text, emoji, href }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
    >
      {emoji && <span>{emoji}</span>}
      {text}
    </a>
  </li>
);

export default Sidebar;
