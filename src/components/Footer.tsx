import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 mt-auto relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-300 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-2xl font-bold text-white mb-4">
              Reclaim<span className="text-amber-400">AU</span>
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Supporting Australians on their journey toward healthier relationships with gambling.
              Your privacy and well-being come first.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <span className="text-amber-400">💙</span>
              </div>
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <span className="text-orange-400">🤝</span>
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
                📋 Assessment
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors duration-200">
                🤝 Support
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                ℹ️ About
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Help</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Gambling Help Online</p>
                <a
                  href="tel:1800858858"
                  className="text-amber-400 hover:text-amber-300 font-bold text-lg transition-colors duration-200 block"
                >
                  📞 1800 858 858
                </a>
                <p className="text-gray-500 text-xs mt-1">24/7 • Free • Confidential</p>
              </div>
              <div className="bg-red-900/30 border border-red-800/50 rounded-lg p-3">
                <p className="text-red-300 text-sm font-medium">In crisis? Call immediately.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ReclaimAU. Made with care for the Australian community.
            </p>
            <p className="text-gray-600 text-xs">
              Your data stays private • No tracking • No ads
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
