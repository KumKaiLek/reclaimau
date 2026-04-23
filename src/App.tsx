import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Resources from './pages/Resources'
import About from './pages/About'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="animate-in fade-in duration-300 fill-mode-both flex-1">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />
      <AnimatedRoutes />
      <Footer />

      {/* Floating crisis helpline button */}
      <a
        href="tel:1800858858"
        aria-label="Call crisis line 1800 858 858"
        className="fixed right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold px-5 py-3.5 rounded-2xl shadow-2xl shadow-red-500/30 hover:scale-105 hover:shadow-red-500/50 transition-all duration-300 crisis-pulse"
        style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <span className="text-xl">☎️</span>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-[10px] font-medium opacity-80 uppercase tracking-wide">Crisis Line</span>
          <span className="text-sm font-black">1800 858 858</span>
        </div>
      </a>
    </BrowserRouter>
  )
}
