import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 mt-auto relative overflow-hidden">
      {/* Animated gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Background decorative rings */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-300 rounded-full"></div>
      </div>

      {/* Background blur orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-white mb-4">
              Reclaim<span className="text-amber-400">AU</span>
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Supporting Australians on their journey toward saying no to gambling.
              Your privacy and well-being come first.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-400">🫶</span>
              </div>
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-orange-400">🌏</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                🏠 Home
              </Link>
              <Link to="/quiz" className="block text-gray-400 hover:text-white transition-colors duration-200">
                📝 Assessment
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors duration-200">
                📖 Support
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                👤 About
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Help Now</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Gambling Help Online</p>
                <a
                  href="tel:1800858858"
                  className="group inline-flex items-center gap-2 font-black text-xl transition-all duration-300"
                >
                  <span className="text-2xl">☎️</span>
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300" style={{ textShadow: 'none' }}>
                    1800 858 858
                  </span>
                </a>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-gray-500 text-xs">24/7 • Free • Confidential</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-900/40 to-rose-900/40 border border-red-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <p className="text-red-300 text-sm font-bold">In crisis? Call immediately.</p>
                </div>
                <p className="text-red-400/70 text-xs">This number is always available.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-gray-400 font-semibold">ReclaimAU</span>. Made with care for the Australian community.
            </p>
            <div className="flex items-center gap-3 text-gray-600 text-xs">
              {['Your data stays private', 'No tracking', 'No ads'].map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-700" />}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
