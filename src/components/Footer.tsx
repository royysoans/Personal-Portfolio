import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8 px-6 bg-[#DCC5B0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#18181B] text-sm font-semibold tracking-tight">Royston Soans</p>
        <div className="flex items-center gap-1">
          {[
            { icon: GithubIcon,   href: 'https://github.com/royysoans',                           label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/',    label: 'LinkedIn' },
            { icon: Mail,         href: 'mailto:roystonsoans3@gmail.com',                          label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="p-2.5 rounded-md text-[#A1A1AA] hover:text-[#18181B] hover:bg-black/[0.05] border border-transparent hover:border-black/[0.07] transition-all duration-200">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
