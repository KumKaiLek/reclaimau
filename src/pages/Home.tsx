import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import melbourneImg from '../assets/urlaubstracker-dW8dOC8r7O4-unsplash.jpg'
import sufferingImg from '../assets/hailey-kean-zt8PJ6LT9Uw-unsplash.jpg'
import financialImg from '../assets/vitaly-gariev-_nl1owGBorc-unsplash.jpg'
export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 py-32 min-h-[90vh] flex flex-col justify-center text-center overflow-hidden">
        <img
          src={melbourneImg}
          alt="Melbourne skyline at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Floating decorative orbs */}
        <div className="absolute top-20 right-16 w-80 h-80 rounded-full bg-amber-400/25 blur-3xl animate-orb-1 pointer-events-none z-0" />
        <div className="absolute bottom-24 left-8 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl animate-orb-2 pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/3 w-56 h-56 rounded-full bg-yellow-300/20 blur-2xl animate-orb-3 pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto relative z-10 flex-1 flex flex-col justify-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-100">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-6 py-3 rounded-full mb-10 shadow-lg border border-white/20">
              <span className="text-2xl animate-pulse-gentle">🫶</span>
              <span>Free • Confidential • No sign-up required</span>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-200">
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Reclaim what
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                matters most
              </span>
            </h1>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-300">
            <p className="text-xl sm:text-2xl text-white/85 leading-relaxed mb-12 max-w-3xl mx-auto font-light drop-shadow">
              A compassionate space for Australians navigating gambling concerns.
              Whether it's you or someone you care about, you're not alone in this journey.
            </p>
          </div>

          <div className="animate-in fade-in zoom-in-95 duration-600 fill-mode-both delay-500">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/quiz" className="premium-button group text-lg">
                <span className="relative z-10 flex items-center gap-3">
                  Begin Your Assessment →
                </span>
              </Link>
              <p className="text-white/70 font-medium">Takes 2 minutes • Completely private</p>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-700">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/70">
              {['No data collection', 'Available 24/7', 'Free forever'].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 animate-bounce pointer-events-none">
          <span className="text-[10px] font-light tracking-[0.3em] uppercase">scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="animate-in fade-in slide-in-from-left-6 duration-700 fill-mode-both text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Understanding the reality
          </h2>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-150 text-xl text-gray-600 max-w-3xl mx-auto">
            Gambling harm touches more lives than we realize, but help is available
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { stat: '~1 in 6', label: 'Australians will experience gambling harm in their lifetime', detail: "That's millions of people affected by this issue", color: 'from-emerald-500 to-teal-600', icon: '🧑‍🤝‍🧑', delay: 'delay-0' },
            { stat: '$25B+',   label: 'Lost annually on gambling across Australia',                  detail: 'The highest per capita gambling losses in the world', color: 'from-red-500 to-pink-600',    icon: '💸', delay: 'delay-150' },
            { stat: '1 in 80', label: 'Meet criteria for problem gambling',                          detail: 'With millions more at moderate risk',                color: 'from-purple-500 to-indigo-600', icon: '🎰', delay: 'delay-300' },
          ].map(({ stat, label, detail, color, icon, delay }) => (
            <div key={stat} className={`animate-in fade-in zoom-in-90 duration-600 fill-mode-both ${delay} premium-card p-10 text-center group`}>
              <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{icon}</span>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">{stat}</h3>
              <p className="text-xl font-semibold text-gray-800 mb-3">{label}</p>
              <p className="text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust pillars */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '🔒', title: 'Zero data collected', desc: 'Nothing is stored or tracked — ever' },
            { icon: '⚡', title: 'Takes 2 minutes', desc: 'Quick assessment, immediate clarity' },
            { icon: '🇦🇺', title: 'Built for Australians', desc: 'Local services and real context' },
            { icon: '💚', title: 'Free forever', desc: 'No subscriptions, no fees, ever' },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`animate-in fade-in zoom-in-90 duration-500 fill-mode-both gradient-border-card p-6 text-center group cursor-default`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{icon}</div>
              <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Reality — suffering image + financial stress image */}
      <section className="relative overflow-hidden">
        {/* Suffering — full bleed dark image with quote */}
        <div className="relative h-[420px] sm:h-[520px]">
          <img
            src={sufferingImg}
            alt="Person alone in darkness representing the weight of gambling harm"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
          <div className="animate-in fade-in slide-in-from-left-8 duration-800 fill-mode-both relative z-10 h-full flex items-center px-8 sm:px-20 max-w-3xl">
            <div>
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">The human cost</p>
              <blockquote className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
                "Behind every statistic is a person who didn't know where to turn."
              </blockquote>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Gambling harm doesn't just affect finances. It isolates people, strains relationships,
                and quietly takes hold before most people realise what's happening.
              </p>
            </div>
          </div>
        </div>

        {/* Financial stress — side-by-side with text */}
        <div className="bg-gray-900 px-6 py-0">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">
            <div className="animate-in fade-in slide-in-from-left-6 duration-700 fill-mode-both flex-1 flex flex-col justify-center py-14 lg:pr-16">
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">Financial impact</p>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-snug">
                Gambling debt affects the whole family
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Australians lose more per capita on gambling than any other nation. For many families,
                that means missed bills, borrowed money, and conversations that never happen until it's too late.
              </p>
              <Link to="/resources#financial" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors group text-lg">
                Find financial support
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="animate-in fade-in slide-in-from-right-6 duration-700 fill-mode-both delay-200 lg:w-[480px] flex-shrink-0 overflow-hidden lg:rounded-none">
              <img
                src={financialImg}
                alt="Couple stressed about finances"
                className="w-full h-64 lg:h-full object-cover object-center opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-gradient-to-br from-gray-50 via-amber-50/40 to-orange-50/30 px-4 py-24 overflow-hidden">
        {/* Background decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Three simple steps
            </div>
            <h2 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Your journey to reclaiming control
            </h2>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-150 text-xl text-gray-600">
              Three simple steps toward understanding and support
            </p>
          </div>

          <div className="space-y-0">
            {[
              { step: '01', title: 'Reflect honestly',    description: 'Answer 7 thoughtful questions about your relationship with gambling. No judgment, just clarity.',  icon: '🪞', color: 'from-blue-500 to-cyan-600',    delay: 'delay-0'   },
              { step: '02', title: 'See where you stand', description: 'Receive a clear, supportive assessment with practical insights and next steps.',                    icon: '🎯', color: 'from-emerald-500 to-green-600', delay: 'delay-200' },
              { step: '03', title: 'Find your support',   description: 'Connect with trusted Australian services tailored to your situation and needs.',                    icon: '🫱', color: 'from-amber-500 to-orange-600',  delay: 'delay-400' },
            ].map(({ step, title, description, icon, color, delay }, i, arr) => (
              <Fragment key={step}>
                <div className={`animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both ${delay} flex flex-col lg:flex-row items-center gap-12 py-8`}>
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center shadow-xl`}>
                      <span className="text-4xl">{icon}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Step {step}</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{description}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-shrink-0 w-24 flex justify-center">
                      <div className="h-10 border-l-2 border-dashed border-amber-300/70" />
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className="animate-in fade-in zoom-in-90 duration-700 fill-mode-both delay-500 text-center mt-20">
            <Link to="/quiz" className="premium-button text-xl px-12 py-6">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Assessment Now →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisis support */}
      <section className="relative bg-gradient-to-br from-red-900 via-rose-900 to-pink-900 px-4 py-24 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-red-500/20 blur-3xl animate-orb-1 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-orb-2 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span className="font-semibold text-sm tracking-wide uppercase">Immediate Support Available 24/7</span>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-150">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Need someone to talk to
              <span className="block bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">right now?</span>
            </h3>
          </div>

          <div className="animate-in fade-in duration-700 fill-mode-both delay-300">
            <p className="text-xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed">
              Gambling Help Online provides free, confidential support. Professional counsellors are ready to listen.
            </p>
          </div>

          <div className="animate-in fade-in zoom-in-95 duration-600 fill-mode-both delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:1800858858" className="crisis-pulse relative inline-flex items-center gap-3 bg-white text-red-700 font-black text-2xl px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 hover:bg-red-50 transition-all duration-300">
              ☎️ 1800 858 858
            </a>
            <div className="flex flex-col items-center gap-1 text-white/60 text-sm">
              <span>Free • Confidential</span>
              <span>Available right now</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
