import { Link } from 'react-router-dom'
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
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-100">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6 shadow-md border border-white/20">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
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
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-200 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
              </svg>
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
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-300 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who built this</h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border border-amber-100">
            {/* Decorative background orb */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-300/20 blur-2xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="animate-in zoom-in-75 fade-in duration-500 fill-mode-both delay-400 flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white font-black text-2xl flex items-center justify-center shadow-xl ring-4 ring-amber-200/60">
                  RK
                </div>
                {/* Online dot */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-300 animate-ping absolute" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <p className="font-black text-gray-900 text-xl">Ryan Kum</p>
                  <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2.5 py-0.5 rounded-full border border-amber-200">
                    🇦🇺 Melbourne
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-medium">RMIT Computer Science Graduate</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  I built ReclaimAU as a personal project because I believe access to honest,
                  judgment-free information can make a real difference. Gambling harm touches more
                  Australian families than most people know, and I wanted to create something that meets
                  people where they are — quietly, without pressure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What this site is / isn't */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-600 fill-mode-both delay-300 premium-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="animate-in zoom-in-50 duration-400 fill-mode-both delay-400 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-md text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-4"/>
              </svg>
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
            <div className="animate-in zoom-in-50 duration-500 fill-mode-both delay-500 flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-md text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.86 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
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
