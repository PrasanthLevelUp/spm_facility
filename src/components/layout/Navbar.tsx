import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { company, navLinks } from '../../constants/siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="SPM Facility Services Logo"
            className="h-11 w-auto rounded-lg bg-navy p-1.5"
          />
          <span className="text-base font-bold leading-tight text-navy sm:text-lg">
            {company.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-green' : 'text-navy hover:text-brand-green'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={company.telLink}
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-green' : 'text-navy hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={company.telLink}
              className="my-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
