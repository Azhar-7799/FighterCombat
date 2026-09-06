import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const benefits = [
  'Practical self-defense skills for real-world confidence',
  'Strength, mobility and conditioning for every fitness level',
  'Small-group coaching in a focused, supportive environment',
  'Progressive training led by Master Azhar and the coaching team'
]

export default function Women(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Women’s Martial Arts Course"
        description="Build strength, confidence and practical self-defense skills with the Women’s Martial Arts Course at Fighters Combat Academy."
      />

      <section className="grid gap-10 rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-gray-950 via-black to-yellow-950/30 p-8 shadow-2xl shadow-black/30 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Women’s Training</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white sm:text-6xl">Move with strength. Train with confidence.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">Our Women’s Martial Arts & Self-Defense Course combines combat fundamentals, functional fitness and confidence-building coaching for beginners and experienced athletes.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/join" className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black shadow-xl shadow-yellow-500/20">Book your trial</Link>
            <Link to="/contact" className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400">Ask a coach</Link>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">Course focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Master the fundamentals</h2>
          <div className="mt-6 space-y-4">
            {benefits.map(benefit => (
              <div key={benefit} className="flex gap-3 text-gray-300">
                <span className="mt-1 text-yellow-400">✦</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            <div><strong className="block text-xl text-white">3x</strong><span className="text-xs text-gray-400">weekly sessions</span></div>
            <div><strong className="block text-xl text-white">All</strong><span className="text-xs text-gray-400">skill levels</span></div>
            <div><strong className="block text-xl text-white">1:1</strong><span className="text-xs text-gray-400">coach guidance</span></div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.5rem] border border-white/10 bg-gray-950 p-6"><h2 className="text-xl font-semibold text-white">Self-defense</h2><p className="mt-3 text-gray-400">Learn awareness, movement, striking and escape fundamentals through practical drills.</p></article>
        <article className="rounded-[1.5rem] border border-white/10 bg-gray-950 p-6"><h2 className="text-xl font-semibold text-white">Combat fitness</h2><p className="mt-3 text-gray-400">Build power, endurance and coordination with training that keeps you moving.</p></article>
        <article className="rounded-[1.5rem] border border-white/10 bg-gray-950 p-6"><h2 className="text-xl font-semibold text-white">Community</h2><p className="mt-3 text-gray-400">Train alongside women who are building skill, discipline and confidence together.</p></article>
      </section>
    </div>
  )
}
