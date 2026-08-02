import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { projects, type Project } from '@/data/projects'
import TiltCard from './TiltCard'

function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  return (
    <TiltCard className="h-full">
      <motion.article
        variants={itemVariants}
        className="group flex flex-col overflow-hidden rounded-lg border border-black/[0.07] hover:border-black/[0.14] hover:shadow-lg transition-all duration-300 h-full bg-surface"
      >
        <div className={`relative overflow-hidden bg-black/[0.04] border-b border-black/[0.06] ${compact ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
          {project.image ? (
            <img src={project.image} alt={project.title}
              className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-300 ease-out"
              loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#A1A1AA]">{project.title}</div>
          )}
          {project.featured && (
            <span className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-surface/90 text-[#1A3B8B] border border-[#1A3B8B]/20 shadow-sm">
              Featured
            </span>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-base text-[#18181B] mb-2 group-hover:text-[#1A3B8B] transition-colors text-left" style={{ letterSpacing: '-0.02em' }}>
            {project.title}
          </h3>
          <p className="text-[#71717A] text-sm leading-relaxed mb-4 flex-1 text-left">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map(t => <span key={t} className="tag text-[10px]">{t}</span>)}
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-black/[0.05] mt-auto">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="btn-primary text-xs py-1.5 px-3" id={`project-demo-${project.id}`}>
                <ExternalLink size={11} /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-xs py-1.5 px-3" id={`project-github-${project.id}`}>
                <GithubIcon size={11} /> GitHub
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </TiltCard>
  )
}

export default function Projects() {
  const topRow = projects.slice(0, 2)
  const bottomRow = projects.slice(2, 5)

  return (
    <SectionWrapper id="projects" className="border-t border-black/[0.05]">
      <div className="mb-10 text-center">
        <SectionLabel>Selected Work</SectionLabel>
        <SectionTitle>Featured Projects</SectionTitle>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {topRow.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {bottomRow.map(p => <ProjectCard key={p.id} project={p} compact />)}
      </div>

      {/* GitHub Activity Chart */}
      <motion.div variants={itemVariants}
        className="rounded-lg border border-black/[0.07] p-5 max-w-4xl mx-auto bg-surface overflow-hidden mb-10 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="font-mono text-xs text-[#18181B] font-semibold">GitHub Activity</span>
          <span className="font-mono text-[10px] text-green-600">@royysoans</span>
        </div>
        <div className="w-full flex justify-center bg-[#DCC5B0] py-4 px-3 rounded border border-black/[0.04]">
          <img src="https://ghchart.rshah.org/royysoans"
            alt="royysoans's GitHub contributions chart"
            className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-200"
            loading="lazy" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center pt-2">
        <a href="https://github.com/royysoans" target="_blank" rel="noopener noreferrer"
          id="projects-github-all" className="btn-secondary text-sm">
          <GithubIcon size={14} /> View all repositories on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
