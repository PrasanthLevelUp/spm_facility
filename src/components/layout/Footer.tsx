import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { iconMap } from '../ui/iconMap'
import { company, services, socials } from '../../constants/siteConfig'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="SPM Facility Services Logo"
              className="h-12 w-auto rounded-md bg-white/90 p-1"
            />
            <span className="text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {company.tagline} across Chengalpattu — trusted, verified and professional.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-green transition-colors"
                >
                  {Icon && <Icon size={18} />}
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-brand-green transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.name} className="text-slate-400">
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={company.telLink} className="flex items-start gap-2 hover:text-brand-green">
                <Phone size={16} className="mt-0.5 shrink-0" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailLink} className="flex items-start gap-2 hover:text-brand-green">
                <Mail size={16} className="mt-0.5 shrink-0" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {company.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        <p>© 2025 {company.name}. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ in Chengalpattu, Tamil Nadu</p>
      </div>
    </footer>
  )
}
