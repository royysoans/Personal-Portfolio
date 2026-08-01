import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { projects, type Project } from '@/data/projects'

function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group card flex flex-col overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
      style={{ background: '#0e0e0e' }}
    >
      {/* Thumbnail image container with 2% hover zoom */}
      <div className={`relative overflow-hidden bg-[#121212] border-b border-white/[0.06] ${compact ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#444444]">
            {project.title}
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#090909]/80 backdrop-blur-xs text-[#4DA8DA] border border-[#4DA8DA]/30">
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-base text-[#EBEBEB] mb-2 group-hover:text-[#4DA8DA] transition-colors"
          style={{ letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>

        <p className="text-[#888888] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className="tag text-[10px]">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3"
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-1.5 px-3"
              id={`project-github-${project.id}`}
            >
              <GithubIcon size={11} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <SectionWrapper id="projects" className="border-t border-white/[0.04]">
      <div className="mb-10 text-center">
        <SectionLabel>Selected Work</SectionLabel>
        <SectionTitle>Featured Projects</SectionTitle>
      </div>

      {/* Featured Projects: 2 Columns */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {featuredProjects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* Other Projects: 3 Columns */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {otherProjects.map(p => (
          <ProjectCard key={p.id} project={p} compact />
        ))}
      </div>

      {/* GitHub Green Streak Contributions Grid - Center-aligned and prominent */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-white/[0.07] p-5 max-w-4xl mx-auto bg-[#0f0f0f] overflow-hidden mb-10"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="font-mono text-xs text-[#EBEBEB] font-semibold">GitHub Activity</span>
          <span className="font-mono text-[10px] text-green-500">@royysoans</span>
        </div>
        <div className="w-full flex justify-center bg-[#070707] py-4 px-3 rounded border border-white/[0.04]">
          <img
            src="https://ghchart.rshah.org/royysoans"
            alt="royysoans's GitHub contributions chart"
            className="w-full h-auto object-contain filter brightness-95 contrast-105 opacity-90 hover:opacity-100 transition-opacity duration-200"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* GitHub Link */}
      <motion.div variants={itemVariants} className="flex justify-center pt-2">
        <a
          href="https://github.com/royysoans"
          target="_blank"
          rel="noopener noreferrer"
          id="projects-github-all"
          className="btn-secondary text-sm"
        >
          <GithubIcon size={14} />
          View all repositories on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
