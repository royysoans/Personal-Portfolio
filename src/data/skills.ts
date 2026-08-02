export type SkillCategory = 'All' | 'Languages' | 'Frontend' | 'Backend' | 'Tools';

export interface Skill {
  name: string;
  icon?: string;
  category: Exclude<SkillCategory, 'All'>;
  description?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'C++', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'DSA & Systems' },
  { name: 'C', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', description: 'Core Systems' },
  { name: 'TypeScript', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', description: 'Type-safe App Development' },
  { name: 'JavaScript', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'ES6+ Full-stack' },
  { name: 'Python', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Scripting & AI Tools' },
  { name: 'Java', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'OOP Concepts' },
  { name: 'SQL', category: 'Languages', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Relational DB Queries' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'SPAs & UI Components' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', description: 'Utility-first Styling' },
  { name: 'Vite', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', description: 'Fast Modern Bundling' },
  { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Semantic Structure' },
  { name: 'CSS3', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Custom Animations & Grid' },
  { name: 'Framer Motion', category: 'Frontend', description: 'Smooth UI Micro-interactions' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Event-driven Server Runtime' },
  { name: 'Express.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'RESTful Server APIs' },
  { name: 'Supabase', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', description: 'Auth, Realtime & Storage' },
  { name: 'PostgreSQL', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Relational Database Schema' },
  { name: 'REST APIs', category: 'Backend', description: 'Scalable Endpoint Design' },


  // Tools
  { name: 'Git', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version Control' },
  { name: 'GitHub', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', description: 'Collaboration & Actions' },
  { name: 'Vercel', category: 'Tools', description: 'Edge Deployment & CI/CD' },
];

export const skillCategories: SkillCategory[] = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'];

export const currentlyLearning = [
  'Data Structures & Algorithms',
  'System Design',
  'Advanced Backend Engineering',
  'Machine Learning & Neural Networks',
];
