import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/quiz', label: 'Self-Assessment', icon: '📝' },
  { to: '/resources', label: 'Resources', icon: '📖' },
  { to: '/about', label: 'About', icon: '👤' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b border-amber-100/50 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-xl shadow-amber-500/10' : 'shadow-lg shadow-amber-500/5'}`}>
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-black tracking-tight hover:scale-105 transition-all duration-300 group"
          onClick={() => setOpen(false)}
        >
          <span className="text-gray-800 group-hover:text-gray-900 transition-colors">Reclaim</span>
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">AU</span>
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

        {/* Crisis hotline pill — desktop only */}
        <a
          href="tel:1800858858"
          className="hidden lg:flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-red-100 hover:border-red-300 transition-all duration-300 crisis-pulse"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <span>1800 858 858</span>
        </a>

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
