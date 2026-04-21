import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/quiz', label: 'Self-Assessment', icon: '📋' },
  { to: '/resources', label: 'Resources', icon: '📚' },
  { to: '/about', label: 'About', icon: 'ℹ️' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-100/50 sticky top-0 z-50 shadow-lg shadow-amber-500/5">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 tracking-tight hover:text-amber-600 transition-all duration-300 hover:scale-105"
          onClick={() => setOpen(false)}
        >
          Reclaim<span className="text-amber-500">AU</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex gap-3">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 shadow-lg shadow-amber-500/20'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-amber-50/50 hover:shadow-md'
                }`
              }
            >
              <span className="text-lg">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden p-3 rounded-2xl text-gray-600 hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-sm"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${open ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 rounded-full ${open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile navigation" className="md:hidden bg-white/98 backdrop-blur-sm border-t border-amber-100/50 px-4 pb-8 shadow-xl">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 py-5 text-lg font-medium border-b border-gray-100/50 last:border-0 transition-all duration-300 hover:translate-x-2 ${
                  isActive ? 'text-amber-700' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              <span className="text-2xl">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
