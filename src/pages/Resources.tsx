import { useEffect } from 'react'
import friendsImg from '../assets/helena-lopes-PGnqT0rXWLs-unsplash.jpg'

const resources = [
  {
    name: 'Gambling Help Online',
    type: 'Counselling & Crisis Line',
    description: 'Free, confidential counselling available 24/7 by phone, chat, or email. The first and most important number to know.',
    phone: '1800 858 858',
    url: 'https://www.gamblinghelponline.org.au',
    urlLabel: 'gamblinghelponline.org.au',
    available: '24/7', cost: 'Free', icon: '🛟', priority: true,
  },
  {
    name: 'Lifeline Australia',
    type: 'Crisis Support',
    description: "National crisis support for Australians experiencing emotional distress. If gambling is affecting your mental health, they're here.",
    phone: '13 11 14',
    url: 'https://www.lifeline.org.au',
    urlLabel: 'lifeline.org.au',
    available: '24/7', cost: 'Free', icon: '🫂', priority: false,
  },
  {
    name: 'Beyond Blue',
    type: 'Mental Health Support',
    description: 'Support, information and resources for anxiety, depression, and other mental health concerns that often co-occur with problem gambling.',
    phone: '1300 22 4636',
    url: 'https://www.beyondblue.org.au',
    urlLabel: 'beyondblue.org.au',
    available: '24/7', cost: 'Free', icon: '💭', priority: false,
  },
  {
    name: 'Gamblers Anonymous Australia',
    type: 'Peer Support',
    description: 'A fellowship of men and women who share their experience, strength, and hope to recover from a gambling problem. Meetings across Australia.',
    phone: null,
    url: 'https://www.gamblersanonymous.org.au',
    urlLabel: 'gamblersanonymous.org.au',
    available: 'Meeting times vary', cost: 'Free', icon: '🫱', priority: false,
  },
  {
    name: 'Gam-Anon Australia',
    type: 'Family & Friends Support',
    description: "Support for family members, friends, and loved ones of people with a gambling problem. You're not alone in what you're going through.",
    phone: null,
    url: 'https://www.gamanon.org.au',
    urlLabel: 'gamanon.org.au',
    available: 'Meeting times vary', cost: 'Free', icon: '🏡', priority: false,
  },
  {
    name: 'MensLine Australia',
    type: "Men's Wellbeing",
    description: "A professional telephone and online support service for Australian men. Gambling harm can be isolating — this is a safe space to talk.",
    phone: '1300 78 99 78',
    url: 'https://mensline.org.au',
    urlLabel: 'mensline.org.au',
    available: '24/7', cost: 'Free', icon: '💬', priority: false,
  },
  {
    name: 'National Debt Helpline',
    type: 'Financial Counselling',
    description: 'Free financial counselling from professional advisors. If gambling has created debt or financial stress, these are the people to call.',
    phone: '1800 007 007',
    url: 'https://ndh.org.au',
    urlLabel: 'ndh.org.au',
    available: 'Mon–Fri, 9:30am–4:30pm', cost: 'Free', icon: '💸', priority: false,
  },
]

const typeColors: Record<string, string> = {
  'Counselling & Crisis Line': 'bg-red-100 text-red-700',
  'Crisis Support':            'bg-rose-100 text-rose-700',
  'Mental Health Support':     'bg-blue-100 text-blue-700',
  'Peer Support':              'bg-amber-100 text-amber-700',
  'Family & Friends Support':  'bg-purple-100 text-purple-700',
  "Men's Wellbeing":           'bg-teal-100 text-teal-700',
  'Financial Counselling':     'bg-emerald-100 text-emerald-700',
}

export default function Resources() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <main className="overflow-hidden">
      {/* Hero — friends at sunset background */}
      <section className="relative px-4 py-28 text-center overflow-hidden">
        <img
          src={friendsImg}
          alt="Group of friends supporting each other at sunset"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6 shadow-md border border-white/20">
              <span>📖</span>
              <span>7 trusted Australian services — all free</span>
            </div>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-100 text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            You don't have to face this alone
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-200 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Every service listed here is free and available to Australians. If you're not sure where to start, call{' '}
            <strong className="text-amber-300">Gambling Help Online on 1800 858 858</strong> — they'll help you figure out the right next step.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* Emergency banner */}
        <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-600 fill-mode-both delay-300 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white rounded-3xl p-8 mb-12 shadow-xl shadow-red-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🚨</span>
                <p className="font-bold text-xl">Need to speak with someone right now?</p>
              </div>
              <p className="text-red-100 text-sm">Free, confidential counselling. Available day and night.</p>
            </div>
            <a href="tel:1800858858" className="flex-shrink-0 bg-white text-red-600 font-bold text-xl px-8 py-4 rounded-2xl hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg text-center">
              1800 858 858
            </a>
          </div>
        </div>

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((r, index) => (
            <article
              key={r.name}
              id={r.type === 'Financial Counselling' ? 'financial' : undefined}
              className={`animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both p-6 flex flex-col gap-4 ${
                r.priority
                  ? 'sm:col-span-2 gradient-border-card ring-2 ring-red-200 shadow-2xl shadow-red-500/10'
                  : 'premium-card'
              }`}
              style={{ animationDelay: `${400 + index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="animate-in zoom-in-50 duration-400 fill-mode-both flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style={{ animationDelay: `${500 + index * 80}ms` }}>
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColors[r.type] ?? 'bg-gray-100 text-gray-600'}`}>{r.type}</span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full">{r.cost}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{r.name}</h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-1">{r.description}</p>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                <span>{r.available}</span>
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                {r.phone && (
                  <a href={`tel:${r.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-brand-700 font-bold text-lg hover:text-brand-600 transition-colors group">
                    <span className="w-8 h-8 bg-brand-50 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    {r.phone}
                  </a>
                )}
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {r.urlLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="animate-in fade-in duration-700 fill-mode-both delay-500 mt-12 text-center text-sm text-gray-400">
          All services are independently operated. ReclaimAU is not affiliated with any organisation listed above.
        </p>
      </section>
    </main>
  )
}
