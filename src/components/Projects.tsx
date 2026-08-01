import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { projects, type Project } from '@/data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group card flex flex-col overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300"
      style={{ background: '#0e0e0e' }}
    >
      {/* Thumbnail image container with 2% hover zoom */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#121212] border-b border-white/[0.06]">
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
          className="font-bold text-lg text-[#EBEBEB] mb-2 group-hover:text-[#4DA8DA] transition-colors"
          style={{ letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>

        <p className="text-[#888888] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3"
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={12} />
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
              <GithubIcon size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="border-t border-white/[0.04]">
      <div className="mb-12">
        <SectionLabel>Selected Work</SectionLabel>
        <SectionTitle>Featured Projects</SectionTitle>
      </div>

      {/* Projects grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* GitHub link */}
      <motion.div variants={itemVariants} className="flex justify-center pt-4">
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
