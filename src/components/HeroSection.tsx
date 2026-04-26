'use client'

import Link from 'next/link'
import { useRef } from 'react'
import VariableProximity from './VariableProximity'

const stats = [
  { value: '28%', label: 'Sri Lankans with Hypertension' },
  { value: '1 in 4', label: 'Affected by Diabetes / Pre-diabetes' },
  { value: 'AI-Powered', label: 'Risk Screening Engine' },
  { value: 'Real-Time', label: 'Wellness Monitoring' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative overflow-hidden bg-[#09132b]">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(110deg, rgba(9,19,43,0.90) 0%, rgba(10,32,73,0.70) 55%, rgba(26,165,165,0.20) 100%), url(/images/hero-wellness.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#1d4ed8]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-[#1aa5a5]/20 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative w-[min(92%,1200px)] mx-auto py-28 lg:py-36">
        <div ref={containerRef} className="max-w-[720px] relative">
          {/* Eyebrow pill */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[0.75rem] font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#1aa5a5] dot-pulse" />
            AI-Driven Hypertension and Diabetes Prevention
          </span>

          <h1 className="text-[clamp(2rem,4.2vw,3.2rem)] leading-tight mb-4 text-white">
            <VariableProximity
              label="MediSense Wellness Surveillance Platform"
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={250}
              falloff="linear"
            />
          </h1>

          <p className="text-[#dbe9ff] max-w-[640px] mb-9 text-[1.02rem] leading-relaxed">
            Real-time risk screening, personalized prevention guidance, and
            data-driven wellness monitoring for healthier communities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#scope"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1d4ed8] hover:bg-[#143da9] text-white font-semibold transition-all shadow-[0_6px_24px_rgba(29,78,216,0.45)] hover:-translate-y-0.5"
            >
              Explore Research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#downloads"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold transition-all backdrop-blur-sm"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="w-[min(92%,1200px)] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-5 px-6 text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
            >
              <p className="text-[1.45rem] font-bold text-white">{s.value}</p>
              <p className="text-[0.73rem] text-[#93c5fd] mt-0.5 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
