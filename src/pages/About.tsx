import { Link } from 'react-router-dom'
import KoalaMascot from '../components/KoalaMascot'
import koalasImg from '../assets/c-valdez-KhpFiOX9MdQ-unsplash.jpg'

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 py-24 text-center overflow-hidden">
        <img
          src={koalasImg}
          alt="Two koalas hugging on a tree"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="animate-in zoom-in-75 fade-in duration-600 fill-mode-both flex justify-center mb-4">
            <KoalaMascot className="w-24 animate-float-slow drop-shadow-2xl" />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-100">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6 shadow-md border border-white/20">
              <span>ℹ️</span>
              <span>Built for Australians, by an Australian</span>
            </div>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-200 text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            About ReclaimAU
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-300 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow">
            A free, anonymous resource helping Australians understand and navigate gambling harm —
            no sign-ups, no data collection, no pressure.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14 space-y-10">

        {/* Why this site exists */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-600 fill-mode-both delay-100 premium-card p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-200 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-xl">💡</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Why this site exists</h2>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Australia has one of the highest rates of gambling harm in the world. Yet the conversation
              around it remains quiet. People often don't realise they have a problem until it's significantly
              affected their finances, relationships, or mental health. And even then, the first step —
              admitting something might be wrong and looking for help — can feel overwhelming.
            </p>
            <p>
              ReclaimAU was built to make that first step easier. It's not a clinical tool, a treatment
              program, or a replacement for professional support. It's a calm, honest starting point — a
              place to pause, reflect, and find the right people to talk to.
            </p>
          </div>
        </div>

        {/* Who built this */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-600 fill-mode-both delay-200 premium-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-300 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-xl">👤</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who built this</h2>
          </div>
          <div className="flex gap-5 items-start bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-6">
            <div className="animate-in zoom-in-75 fade-in duration-500 fill-mode-both delay-400 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-2xl flex items-center justify-center shadow-lg">
              RK
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">Ryan Kum</p>
              <p className="text-sm text-gray-500 mb-3">RMIT Computer Science Graduate · Melbourne, Australia</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                I built ReclaimAU as a personal project because I believe access to honest,
                judgment-free information can make a real difference. Gambling harm touches more
                Australian families than most people know, and I wanted to create something that meets
                people where they are — quietly, without pressure.
              </p>
            </div>
          </div>
        </div>

        {/* What this site is / isn't */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-600 fill-mode-both delay-300 premium-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-400 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-xl">📋</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What this site is — and isn't</h2>
          </div>
          <ul className="space-y-3">
            {[
              { icon: '✓', colour: 'text-emerald-600 bg-emerald-50', text: 'A free, anonymous self-assessment tool to help you understand your relationship with gambling' },
              { icon: '✓', colour: 'text-emerald-600 bg-emerald-50', text: 'A curated list of real, trusted Australian support services' },
              { icon: '✓', colour: 'text-emerald-600 bg-emerald-50', text: 'A private space — no data is collected, stored, or sent anywhere' },
              { icon: '✗', colour: 'text-red-500 bg-red-50',         text: 'Not a substitute for professional help, clinical assessment, or medical advice' },
              { icon: '✗', colour: 'text-red-500 bg-red-50',         text: 'Not affiliated with any gambling operator, government body, or health organisation' },
            ].map(({ icon, colour, text }, i) => (
              <li
                key={i}
                className={`animate-in fade-in slide-in-from-left-4 duration-400 fill-mode-both flex gap-3 items-start text-sm text-gray-600`}
                style={{ animationDelay: `${400 + i * 80}ms` }}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs mt-0.5 ${colour}`}>{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Crisis note */}
        <div className="animate-in fade-in zoom-in-95 duration-600 fill-mode-both delay-400 bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border border-red-200 rounded-3xl p-7">
          <div className="flex items-start gap-4">
            <span className="animate-in zoom-in-50 duration-500 fill-mode-both delay-500 text-3xl">🆘</span>
            <div>
              <p className="font-bold text-gray-800 mb-2">In crisis right now?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Please call{' '}
                <a href="tel:1800858858" className="text-brand-600 font-semibold hover:underline">Gambling Help Online on 1800 858 858</a>
                {' '}or{' '}
                <a href="tel:131114" className="text-brand-600 font-semibold hover:underline">Lifeline on 13 11 14</a>
                . Both services are free, confidential, and available 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-500 flex flex-col sm:flex-row gap-4 pt-2">
          <Link to="/resources" className="premium-button flex-1 text-center">
            <span className="relative z-10 flex items-center justify-center gap-2">View support services →</span>
          </Link>
          <Link to="/quiz" className="flex-1 text-center bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-amber-50 font-semibold px-6 py-4 rounded-2xl transition-all duration-300">
            Take the assessment
          </Link>
        </div>
      </section>
    </main>
  )
}
