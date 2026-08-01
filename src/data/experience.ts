export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  type: 'hackathon' | 'club' | 'education' | 'work';
}

export const experiences: ExperienceItem[] = [
  {
    id: 'hackathon',
    role: 'Hackathon Participant',
    org: 'Multiple Hackathons (5+)',
    period: '2024 – Present',
    description:
      'Collaborated with teams to design and develop full-stack web applications under strict deadlines. Focused on rapid prototyping, teamwork, and problem-solving with AI integrations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'APIs', 'AI Integrations'],
    type: 'hackathon',
  },
  {
    id: 'tech-club',
    role: 'Technical Club Member',
    org: 'Department Technical Club — DJ Sanghvi',
    period: '2024 – Present',
    description:
      'Contributed to technical initiatives and web development activities within the department. Participated in workshops, technical events, and collaborative coding projects.',
    tags: ['Web Development', 'Workshops', 'Open Source'],
    type: 'club',
  },
];

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  degree: string;
  field?: string;
  score: string;
  period: string;
  location: string;
  currentYear?: string;
}

export const educationList: EducationItem[] = [
  {
    id: 'school',
    level: 'Secondary Education (ICSE)',
    institution: 'Saint Francis School',
    degree: 'ICSE Board',
    score: '95%',
    period: '2013 – 2022',
    location: 'Mumbai, India',
  },
  {
    id: 'college',
    level: 'Higher Secondary Education (HSC)',
    institution: 'MJ Junior College of Science',
    degree: 'HSC Science',
    score: '89.33%',
    period: '2022 – 2024',
    location: 'Mumbai, India',
  },
  {
    id: 'undergrad',
    level: 'Undergraduate Degree',
    institution: 'Dwarkadas J. Sanghvi College of Engineering',
    degree: 'Bachelor of Technology',
    field: 'Computer Engineering (AI & ML)',
    score: 'SGPA: 9.64 (till 4th Sem)',
    period: '2024 – 2028',
    location: 'Mumbai, India',
    currentYear: '3rd Year of 4',
  },
];
