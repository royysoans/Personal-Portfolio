export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  gradient: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pokelearn',
    title: 'PokeLearn',
    description: 'Gamified learning platform across 5 themed regions with subject-based quiz progression, Google Gemini API adaptive difficulty generation, JWT auth, and real-time Supabase leaderboards.',
    tech: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Gemini API', 'Vite'],
    github: 'https://github.com/royysoans/Pokelearn',
    demo: 'https://pokelearn-rsnp.vercel.app',
    image: '/projects/pokelearn.png',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    featured: true,
  },
  {
    id: 'chromagen',
    title: 'ChromaGen',
    description: 'AI-powered color palette generator supporting natural language prompts and image uploads with WCAG AA/AAA contrast ratio validation and one-click CSS design token export.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Groq API', 'Vite'],
    github: 'https://github.com/royysoans/ChromaGen-',
    demo: 'https://chroma-gen-iota.vercel.app',
    image: '/projects/ChromaGen.png',
    gradient: 'from-pink-500 via-purple-500 to-blue-500',
    featured: true,
  },
  {
    id: 'yt-audio',
    title: 'YT-Audio Extractor',
    description: 'Real-time YouTube audio streaming platform built with Unix pipe-based streaming architecture (zero temp storage), supporting multi-format audio conversion, loudness normalization, and live SSE progress tracking.',
    tech: ['Node.js', 'Express.js', 'FFmpeg', 'yt-dlp', 'SSE'],
    github: 'https://github.com/royysoans/YT-Audio',
    image: '/projects/YT-Audio.png',
    gradient: 'from-red-500 via-orange-500 to-amber-500',
    featured: true,
  },
  {
    id: 'campusconnect',
    title: 'CampusConnect',
    description: 'Campus networking & community platform for college students featuring discussion threads, real-time event updates, peer collaboration, and student project showcases.',
    tech: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Node.js'],
    github: 'https://github.com/royysoans/CampusConnect',
    demo: 'https://campus-connect-pi-eight.vercel.app',
    image: '/projects/CampusConnect.png',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    featured: false,
  },
  {
    id: 'packetrunner',
    title: 'PacketRunner',
    description: 'Interactive browser network routing puzzle game built in Phaser 3 inspired by real networking concepts like VPN tunnels, firewalls, and packet drop mechanics with custom scoring.',
    tech: ['Phaser 3', 'JavaScript', 'Vite'],
    github: 'https://github.com/royysoans/Packet-Runner',
    demo: 'https://packet-runner.vercel.app',
    image: '/projects/PacketRunner.png',
    gradient: 'from-green-500 via-emerald-500 to-cyan-500',
    featured: false,
  },
];
