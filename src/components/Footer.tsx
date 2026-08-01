import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Name only */}
        <p className="text-[#EBEBEB] text-sm font-semibold tracking-tight">
          Royston Soans
        </p>

        {/* Right: Prominent social icons */}
        <div className="flex items-center gap-2">
          {[
            { icon: GithubIcon,  href: 'https://github.com/royysoans',                          label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/', label: 'LinkedIn' },
            { icon: Mail,         href: 'mailto:roystonsoans3@gmail.com',                        label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-md text-[#888888] hover:text-[#EBEBEB] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
