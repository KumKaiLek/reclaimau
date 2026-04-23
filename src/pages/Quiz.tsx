import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

const questions = [
  {
    id: 1,
    text: 'How often have you thought about gambling — replaying past sessions, planning the next one, or thinking about ways to get money to gamble?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Sometimes', score: 1 },
      { label: 'Most of the time', score: 2 },
      { label: 'Almost always', score: 3 },
    ],
  },
  {
    id: 2,
    text: 'Have you ever felt the need to bet more money than before to get the same feeling of excitement?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Once or twice', score: 1 },
      { label: 'Several times', score: 2 },
      { label: 'Yes, regularly', score: 3 },
    ],
  },
  {
    id: 3,
    text: 'Have you tried to cut back or stop gambling, but found it harder than you expected?',
    options: [
      { label: "I haven't tried / Not applicable", score: 0 },
      { label: 'I tried once and it was okay', score: 1 },
      { label: "I've tried a few times and struggled", score: 2 },
      { label: "I've tried many times and can't stop", score: 3 },
    ],
  },
  {
    id: 4,
    text: 'Do you feel restless, irritable, or anxious when you try to reduce or stop gambling?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Occasionally', score: 1 },
      { label: 'Often', score: 2 },
      { label: 'Every time I try to stop', score: 3 },
    ],
  },
  {
    id: 5,
    text: 'Have you ever gambled to escape stress, anxiety, depression, or other difficult feelings?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Once or twice', score: 1 },
      { label: 'Yes, a few times', score: 2 },
      { label: "Yes, it's how I cope", score: 3 },
    ],
  },
  {
    id: 6,
    text: 'Have you ever hidden or downplayed how much you gamble from family, friends, or a partner?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Once', score: 1 },
      { label: 'A few times', score: 2 },
      { label: 'Regularly', score: 3 },
    ],
  },
  {
    id: 7,
    text: 'Has gambling caused financial stress — things like borrowing money, missing bills, or spending money meant for something else?',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Once or twice', score: 1 },
      { label: 'It has caused some problems', score: 2 },
      { label: 'It has caused serious problems', score: 3 },
    ],
  },
]

type Result = 'low' | 'moderate' | 'high'

function getResult(total: number): Result {
  if (total <= 4) return 'low'
  if (total <= 11) return 'moderate'
  return 'high'
}

const resultContent: Record<Result, {
  heading: string; body: string; icon: string
  gradient: string; darkGradient: string; badge: string; badgeText: string; scoreBar: string; orb1: string; orb2: string
}> = {
  low: {
    heading: 'Low concern', icon: '🌱',
    body: "Your answers suggest gambling isn't currently causing significant harm in your life. That's good to hear. It's still worth knowing the signs to watch for — patterns can shift over time, especially during stressful periods.",
    gradient: 'from-emerald-900 via-teal-900 to-green-900',
    darkGradient: 'from-emerald-50 via-teal-50 to-emerald-50',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    badgeText: 'Low Risk',
    scoreBar: 'from-emerald-400 to-teal-500',
    orb1: 'bg-emerald-400/20', orb2: 'bg-teal-300/15',
  },
  moderate: {
    heading: 'Moderate concern', icon: '⚠️',
    body: "Your answers suggest gambling may be starting to affect areas of your life — emotionally, financially, or in your relationships. This is a common point where people benefit from a conversation with someone who understands. You don't need to be at rock bottom to ask for help.",
    gradient: 'from-amber-900 via-orange-900 to-yellow-900',
    darkGradient: 'from-amber-50 via-orange-50 to-amber-50',
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    badgeText: 'Moderate Risk',
    scoreBar: 'from-amber-400 to-orange-500',
    orb1: 'bg-amber-400/20', orb2: 'bg-orange-300/15',
  },
  high: {
    heading: 'High concern', icon: '🆘',
    body: "Your answers suggest gambling is having a significant impact on your life. You're not alone — many people have been in this place and found a way through. Reaching out is a genuine act of strength, and free, confidential help is available right now.",
    gradient: 'from-red-900 via-rose-900 to-pink-900',
    darkGradient: 'from-red-50 via-pink-50 to-red-50',
    badge: 'bg-red-100 text-red-800 border-red-200',
    badgeText: 'High Risk',
    scoreBar: 'from-red-400 to-pink-500',
    orb1: 'bg-red-400/20', orb2: 'bg-pink-300/15',
  },
}

const confettiColors = ['#f59e0b', '#10b981', '#3b82f6', '#a855f7', '#f97316', '#fbbf24', '#34d399']

function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: `${(i * 7919) % 100}%`,
      color: confettiColors[i % confettiColors.length],
      width: 6 + (i % 6) * 1.5,
      height: 6 + ((i + 2) % 6) * 1.5,
      isCircle: i % 3 === 0,
      delay: `${((i * 53) % 250) / 100}s`,
      duration: `${2.5 + (i % 5) * 0.4}s`,
    })),
  [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {pieces.map(({ id, left, color, width, height, isCircle, delay, duration }) => (
        <div
          key={id}
          className="absolute animate-confetti"
          style={{
            left,
            top: '-20px',
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color,
            borderRadius: isCircle ? '50%' : '3px',
            animationDelay: delay,
            animationDuration: duration,
          }}
        />
      ))}
    </div>
  )
}

function ScoreBar({ scorePercent, barClass }: { scorePercent: number; barClass: string }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setWidth(scorePercent), 120)
    return () => clearTimeout(t)
  }, [scorePercent])

  return (
    <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
      <div
        className={`h-full bg-gradient-to-r ${barClass} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [done, setDone] = useState(false)
  const [total, setTotal] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const question = questions[current]
  const progress = (current / questions.length) * 100

  function handleNext() {
    if (selected === null) return
    const newTotal = total + selected
    if (current + 1 >= questions.length) {
      setTotal(newTotal)
      setAnswers([...answers, selected])
      setDone(true)
    } else {
      setAnswers([...answers, selected])
      setTotal(newTotal)
      setCurrent(current + 1)
      setSelected(null)
      setAnimKey(k => k + 1)
    }
  }

  function handleRestart() {
    setCurrent(0); setAnswers([]); setSelected(null); setDone(false); setTotal(0); setAnimKey(0)
  }

  if (done) {
    const result = getResult(total)
    const content = resultContent[result]
    const scorePercent = Math.round((total / 21) * 100)

    return (
      <main className="overflow-hidden">
        {result === 'low' && <Confetti />}

        {/* Result hero — dark gradient with orbs */}
        <section className={`relative bg-gradient-to-br ${content.gradient} px-4 py-24 text-center overflow-hidden`}>
          <div className={`absolute top-10 right-16 w-72 h-72 rounded-full ${content.orb1} blur-3xl animate-orb-1 pointer-events-none`} />
          <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full ${content.orb2} blur-3xl animate-orb-2 pointer-events-none`} />

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="animate-in zoom-in-50 fade-in duration-500 fill-mode-both text-7xl mb-6 drop-shadow-lg">
              {content.icon}
            </div>
            <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both delay-100 inline-flex items-center gap-2 border px-5 py-2 rounded-full text-sm font-bold mb-6 ${content.badge}`}>
              {content.badgeText}
            </div>
            <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-600 fill-mode-both delay-200 text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
              {content.heading}
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-300 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
              {content.body}
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12 space-y-6">
          {/* Score card */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-400 premium-card p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Your score</p>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-7xl font-black text-gray-900 leading-none">{total}</span>
              <span className="text-3xl text-gray-400 mb-2">/ 21</span>
            </div>
            <ScoreBar scorePercent={scorePercent} barClass={content.scoreBar} />
            <div className="flex justify-between text-xs text-gray-400 mt-3">
              <span>Low risk (0–4)</span>
              <span>Moderate (5–11)</span>
              <span>High (12+)</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both delay-500 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Remember:</strong> This is not a clinical diagnosis. It's a starting point. Speaking with a trained counsellor will give you a much clearer picture.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both delay-600 flex flex-col sm:flex-row gap-4">
            <Link to="/resources" className="premium-button flex-1 text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">Find support services →</span>
            </Link>
            <button
              onClick={handleRestart}
              className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-amber-50 font-semibold px-6 py-4 rounded-2xl transition-all duration-300"
            >
              Retake quiz
            </button>
          </div>

          <p className="animate-in fade-in duration-600 fill-mode-both delay-700 text-center text-sm text-gray-500 pt-2">
            Need to talk now?{' '}
            <a href="tel:1800858858" className="text-amber-600 font-semibold hover:underline">Call 1800 858 858</a>
            {' '}— free, confidential, 24/7.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="overflow-hidden">
      {/* Header — gradient with floating orbs */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 px-4 py-20 text-center overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl animate-orb-1 pointer-events-none" />
        <div className="absolute bottom-8 left-10 w-80 h-80 rounded-full bg-orange-300/15 blur-3xl animate-orb-2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-yellow-300/10 blur-2xl animate-orb-3 pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-600 fill-mode-both">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6 shadow-md">
              <span>📝</span>
              <span>Anonymous • Private • Takes 2 minutes</span>
            </div>
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-100 text-4xl sm:text-5xl font-black text-white mb-4 drop-shadow-lg">
            Self-Assessment
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both delay-200 text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
            Answer honestly — there are no right or wrong answers. Nothing is saved or sent anywhere.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-10">
        {/* Progress */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-3 font-medium">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={current + 1} aria-valuemax={questions.length}>
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < current ? 'bg-amber-500' : i === current ? 'bg-orange-400 scale-125' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question card — keyed so it re-animates on each new question */}
        <div key={animKey} className="animate-question-in premium-card p-8 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">Question {current + 1}</p>
          <p className="text-xl font-semibold text-gray-900 leading-snug mb-8">{question.text}</p>

          <fieldset>
            <legend className="sr-only">Answer options</legend>
            <div className="space-y-3">
              {question.options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                    selected === opt.score
                      ? 'border-amber-400 bg-amber-50 shadow-md shadow-amber-100'
                      : 'border-gray-100 hover:border-amber-200 hover:bg-amber-50/40'
                  }`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    value={opt.score}
                    checked={selected === opt.score}
                    onChange={() => setSelected(opt.score)}
                    className="sr-only"
                  />
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    selected === opt.score ? 'border-amber-500 bg-amber-500' : 'border-gray-300'
                  }`}>
                    {selected === opt.score && <span className="w-2 h-2 rounded-full bg-white block" />}
                  </span>
                  <span className="text-gray-800 font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            onClick={handleNext}
            disabled={selected === null}
            className={`mt-8 w-full font-semibold py-4 rounded-2xl transition-all duration-300 text-lg ${
              selected !== null ? 'premium-button' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span className="relative z-10">
              {current + 1 === questions.length ? 'See my result →' : 'Next question →'}
            </span>
          </button>
        </div>

        <p className="animate-in fade-in duration-700 fill-mode-both delay-300 mt-5 text-center text-sm text-gray-400">
          Need help now? Call{' '}
          <a href="tel:1800858858" className="text-amber-600 hover:underline font-medium">1800 858 858</a>
        </p>
      </section>
    </main>
  )
}
