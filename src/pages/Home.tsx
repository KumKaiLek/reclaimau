import { Link } from 'react-router-dom'
import melbourneImg from '../assets/urlaubstracker-dW8dOC8r7O4-unsplash.jpg'
import sufferingImg from '../assets/hailey-kean-zt8PJ6LT9Uw-unsplash.jpg'
import financialImg from '../assets/vitaly-gariev-_nl1owGBorc-unsplash.jpg'
import KoalaMascot from '../components/KoalaMascot'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 py-32 text-center overflow-hidden">
        <img
          src={melbourneImg}
          alt="Melbourne skyline at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-0 right-4 sm:right-12 z-10 animate-float-slow pointer-events-none">
          <KoalaMascot className="w-36 sm:w-48 drop-shadow-2xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-100">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-6 py-3 rounded-full mb-10 shadow-lg border border-white/20">
              <span className="text-2xl animate-pulse-gentle">🤝</span>
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
                  Begin Your Assessment
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">🚀</span>
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
            { stat: '~1 in 6', label: 'Australians will experience gambling harm in their lifetime', detail: "That's millions of people affected by this issue", color: 'from-emerald-500 to-teal-600', icon: '👥', delay: 'delay-0' },
            { stat: '$25B+',   label: 'Lost annually on gambling across Australia',                  detail: 'The highest per capita gambling losses in the world', color: 'from-red-500 to-pink-600',    icon: '💰', delay: 'delay-150' },
            { stat: '1 in 80', label: 'Meet criteria for problem gambling',                          detail: 'With millions more at moderate risk',                color: 'from-purple-500 to-indigo-600', icon: '🎲', delay: 'delay-300' },
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
              <Link to="/resources" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors group text-lg">
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
      <section className="bg-gradient-to-r from-gray-50 via-amber-50/30 to-orange-50/20 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Your journey to reclaiming control
            </h2>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-150 text-xl text-gray-600">
              Three simple steps toward understanding and support
            </p>
          </div>

          <div className="space-y-16">
            {[
              { step: '01', title: 'Reflect honestly',     description: 'Answer 7 thoughtful questions about your relationship with gambling. No judgment, just clarity.',           icon: '🤔', color: 'from-blue-500 to-cyan-600',    delay: 'delay-0'   },
              { step: '02', title: 'See where you stand',  description: 'Receive a clear, supportive assessment with practical insights and next steps.',                           icon: '📊', color: 'from-emerald-500 to-green-600', delay: 'delay-200' },
              { step: '03', title: 'Find your support',    description: 'Connect with trusted Australian services tailored to your situation and needs.',                           icon: '🤝', color: 'from-amber-500 to-orange-600',  delay: 'delay-400' },
            ].map(({ step, title, description, icon, color, delay }) => (
              <div key={step} className={`animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both ${delay} flex flex-col lg:flex-row items-center gap-12`}>
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
            ))}
          </div>

          <div className="animate-in fade-in zoom-in-90 duration-700 fill-mode-both delay-500 text-center mt-20">
            <Link to="/quiz" className="premium-button text-xl px-12 py-6">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Assessment Now
                <span className="text-3xl">✨</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisis support */}
      <section className="bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border-t-4 border-red-200 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both premium-card p-12 text-center">
            <div className="inline-flex items-center gap-4 glass-effect text-red-800 px-8 py-4 rounded-full mb-8">
              <span className="text-3xl animate-pulse-gentle">💙</span>
              <span className="font-semibold text-lg">Immediate Support Available</span>
            </div>

            <h3 className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-150 text-3xl font-bold text-gray-800 mb-6">
              Need someone to talk to right now?
            </h3>

            <p className="animate-in fade-in duration-700 fill-mode-both delay-300 text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Gambling Help Online provides free, confidential support 24 hours a day, 7 days a week.
              Professional counselors are ready to listen and help.
            </p>

            <div className="animate-in fade-in zoom-in-95 duration-600 fill-mode-both delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:1800858858" className="premium-button bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-10 py-5 text-xl">
                <span className="relative z-10 flex items-center gap-3">
                  📞 Call 1800 858 858
                  <span className="text-2xl">🔔</span>
                </span>
              </a>
              <p className="text-gray-500 font-medium">Free • 24/7 • Confidential</p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-600 mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl max-w-md mx-auto">
              <p className="text-red-700 font-semibold text-sm">🚨 If you're in crisis, call immediately.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
