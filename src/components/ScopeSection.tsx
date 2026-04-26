'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const scopeSections = [
  {
    id: 'literature',
    label: 'Literature Survey',
    accent: '#2563eb',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    borderColor: 'border-blue-200',
    intro:
      'Global healthcare is shifting from reactive treatment to proactive prevention of chronic diseases like hypertension and diabetes.',
    bullets: [
      {
        label: 'Prevalence in Sri Lanka',
        text: 'Approximately 28% of Sri Lankan adults are hypertensive, and one in four suffers from diabetes or pre-diabetes.',
      },
      {
        label: 'Impact of Lifestyle',
        text: 'The rising incidence is strongly linked to urbanization, sedentary office routines, high-stress environments, and dietary habits characterized by high carbohydrate and sodium intake.',
      },
      {
        label: 'AI and Machine Learning',
        text: 'ML models like Random Forest and XGBoost outperform traditional statistical methods in predicting health risks by analyzing non-clinical variables such as BMI, family history, and activity levels.',
      },
      {
        label: 'Technological Trends',
        text: 'Computer Vision identifies meal components from images for nutritional tracking; NLP and LLMs monitor mental health and stress through automated chatbots.',
      },
    ],
  },
  {
    id: 'gap',
    label: 'Research Gap',
    accent: '#7c3aed',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    borderColor: 'border-violet-200',
    intro:
      'The proposed system addresses several critical gaps identified in current healthcare research.',
    bullets: [
      {
        label: 'Over-Reliance on Clinical Data',
        text: 'Most existing models depend on expensive hospital-based tests (e.g., blood pressure or blood sugar tests), which are inaccessible until a disease has already manifested.',
      },
      {
        label: 'Lack of Population-Specific Adaptation',
        text: 'Predictive models trained on Western datasets fail to account for the unique genetics, lifestyle, and dietary patterns of Sri Lankans, such as high-glycemic white rice and salt-rich curries.',
      },
      {
        label: 'Limited Integration of Real-Time Data',
        text: 'There is a lack of systems that simultaneously integrate wearable sensors, automated food recognition for local meals, and conversational stress monitoring into a single preventive tool.',
      },
      {
        label: 'Reactive vs. Preventive Focus',
        text: 'Most research emphasizes identifying patients who already have a condition rather than predicting risk during pre-hypertensive or pre-diabetic stages.',
      },
    ],
  },
  {
    id: 'problem',
    label: 'Research Problem & Solution',
    accent: '#e11d48',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-700',
    borderColor: 'border-rose-200',
    intro:
      'Non-communicable diseases are rapidly increasing in Sri Lanka, yet existing strategies are predominantly reactive and lack the cultural adaptation required for early prevention.',
    bullets: [
      {
        label: 'Research Problem',
        text: 'Existing strategies are resource-intensive and lack cultural adaptation. Inconsistencies in self-reporting and absence of accessible stress monitoring further hinder early detection.',
      },
      {
        label: 'Early Risk Prediction',
        text: 'MediSense uses ML models to analyze lifestyle and wearable data and categorize hypertension and diabetes risk into Low, Moderate, or High stages.',
      },
      {
        label: 'Automated Dietary Analysis',
        text: 'A computer vision module recognizes Sri Lankan foods from meal photos and estimates calories, carbohydrates, and sodium using a localized food composition database.',
      },
      {
        label: 'Intelligent Stress Monitoring',
        text: 'A conversational AI agent assesses stress using the PSS-10 scale and sentiment analysis to provide personalized mental wellness guidance.',
      },
    ],
  },
  {
    id: 'objectives',
    label: 'Research Objectives',
    accent: '#059669',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    intro:
      'The primary goal is to develop an end-to-end intelligent system for early health risk management tailored to Sri Lankans.',
    bullets: [
      {
        label: 'Predictive Assessment',
        text: 'Train and validate interpretable ML models (XGBoost / Random Forest) for early detection of hypertension and diabetes risk.',
      },
      {
        label: 'Localized Nutritional Tracking',
        text: 'Develop an AI model capable of identifying local rice and curry combinations and estimating calories, carbohydrates, and sodium intake.',
      },
      {
        label: 'Stress and Mental Health',
        text: 'Create a domain-specific conversational chatbot that identifies stress levels and offers location-based wellness recommendations.',
      },
      {
        label: 'Integrated Intervention',
        text: 'Provide personalized, culturally relevant lifestyle modifications and wellness plans based on multi-dimensional risk analysis.',
      },
    ],
  },
  {
    id: 'methodology',
    label: 'Methodology',
    accent: '#d97706',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-700',
    borderColor: 'border-amber-200',
    intro:
      'The research follows a modular, component-based architecture designed for high scalability.',
    bullets: [
      {
        label: 'Data Collection',
        text: 'Gathers demographic, lifestyle, and medical history through surveys, physiological data from wearables, and meal images from users.',
      },
      {
        label: 'Preprocessing',
        text: 'Cleans datasets by handling missing values and engineering features like BMI, stress indices, and nutrient loads.',
      },
      {
        label: 'Core Engines',
        text: 'Prediction Engine (Random Forest + XGBoost), Food Recognition Engine (YOLO object detection), Stress Assessment Module (NLP + RAG-based LLMs).',
      },
      {
        label: 'Validation',
        text: 'Systems are validated by comparing AI predictions with real-world clinical data and standardized food composition databases.',
      },
    ],
  },
  {
    id: 'technologies',
    label: 'Technologies',
    accent: '#0d9488',
    lightBg: 'bg-teal-50',
    lightText: 'text-teal-700',
    borderColor: 'border-teal-200',
    intro:
      'The project utilizes a modern stack to ensure high performance in low-resource environments.',
    bullets: [
      { label: 'Frontend', text: 'React Native / Flutter — cross-platform mobile accessibility.' },
      { label: 'Backend', text: 'Python FastAPI / Flask — API development and model serving.' },
      { label: 'AI / ML', text: 'Scikit-Learn, TensorFlow, PyTorch — predictive modeling and computer vision.' },
      { label: 'Computer Vision', text: 'YOLO (You Only Look Once) — multi-item food recognition.' },
      { label: 'NLP & LLM', text: 'Retrieval-Augmented Generation (RAG) — localized contextual health responses.' },
      { label: 'Database', text: 'MongoDB / Firebase — secure, scalable storage for user health profiles and history.' },
    ],
  },
]

// ─── Main component ────────────────────────────────────────────────────────────

export default function ScopeSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [progress, setProgress] = useState(0)

  const outerRef = useRef<HTMLDivElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)   // overflow-hidden clip window
  const contentRef = useRef<HTMLDivElement>(null) // inner translated content
  const headingRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Small delay so layout is fully painted
      await new Promise((r) => setTimeout(r, 150))

      const clip = clipRef.current
      const content = contentRef.current
      const outer = outerRef.current
      if (!clip || !content || !outer) return

      const maxShift = content.offsetHeight - clip.offsetHeight
      if (maxShift <= 0) return // content fits without scrolling

      ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: 'top top',
            end: `+=${maxShift}`,
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onUpdate(self) {
              const shift = self.progress * maxShift
              // Move the content upward
              if (content) {
                content.style.transform = `translateY(-${shift}px)`
              }
              setProgress(self.progress)

              // Determine which section heading is in view
              const headings = headingRefs.current
              let idx = 0
              // Use a focal point ~40% down the visible scroll area
              const focalY = shift + (clip ? clip.offsetHeight * 0.4 : 100)
              
              for (let i = 0; i < headings.length; i++) {
                const el = headings[i]
                if (el && el.offsetTop <= focalY) idx = i
              }
              
              // Force last active when fully scrolled to the bottom
              if (self.progress > 0.98) {
                idx = headings.length - 1
              }
              
              setActiveIdx(idx)
            },
          },
        })
      }, outer)
    }

    init()
    return () => ctx?.revert()
  }, [])

  // Click nav → scroll page to that section's position inside the pin
  const scrollToSection = (i: number) => {
    const el = headingRefs.current[i]
    const outer = outerRef.current
    if (!el || !outer) return
    const outerScrollTop = outer.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: outerScrollTop + el.offsetTop, behavior: 'smooth' })
  }

  const current = scopeSections[activeIdx]

  return (
    <div ref={outerRef} id="scope" className="relative bg-[#f8fbff]" style={{ height: '100vh' }}>
      {/* Top progress stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e8eef8] z-30">
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: `linear-gradient(90deg, #1d4ed8, ${current.accent})`,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* ── Max-width container matching the rest of the site ── */}
      <div className="w-[min(92%,1120px)] mx-auto h-full flex flex-col lg:flex-row pt-[3px]">

        {/* ══ LEFT NAV ══ */}
        <aside className="lg:w-[260px] xl:w-[280px] shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-[#dfe7f2] flex flex-col">
          {/* Header */}
          <div className="px-6 pt-8 pb-5 border-b border-[#dfe7f2]">
            <span className="section-eyebrow">Research Focus</span>
            <h2 className="text-[1.5rem] font-bold text-[#14233b] mt-1.5 leading-snug">
              Project Scope
            </h2>
            <p className="text-[0.77rem] text-[#4f6079] mt-1.5 leading-relaxed">
              AI-driven wellness platform for early prevention of hypertension and diabetes.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-3 px-3 overflow-y-auto scrollbar-hide">
            {scopeSections.map((s, i) => {
              const isActive = i === activeIdx
              const isPast = i < activeIdx
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(i)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 ${
                    isActive ? 'bg-[#f0f5ff]' : 'hover:bg-[#f5f8ff]'
                  }`}
                >
                  {/* Badge */}
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[0.58rem] font-bold shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? s.accent : isPast ? s.accent + '25' : '#e8eaf3',
                      color: isActive ? '#fff' : isPast ? s.accent : '#9aa5b8',
                    }}
                  >
                    {isPast ? (
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      String(i + 1).padStart(2, '0')
                    )}
                  </span>
                  <span
                    className="text-[0.82rem] font-medium flex-1 text-left leading-snug"
                    style={{ color: isActive ? s.accent : isPast ? '#9aa5b8' : '#4f6079' }}
                  >
                    {s.label}
                  </span>
                  {isActive && (
                    <svg className="w-3 h-3 shrink-0" style={{ color: s.accent }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Progress */}
          <div className="px-6 py-5 border-t border-[#dfe7f2]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.66rem] font-semibold uppercase tracking-wide text-[#9aa5b8]">Progress</span>
              <span className="text-[0.66rem] font-bold" style={{ color: current.accent }}>
                {activeIdx + 1} / {scopeSections.length}
              </span>
            </div>
            <div className="h-1.5 bg-[#e8eef8] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-400"
                style={{
                  width: `${((activeIdx + 1) / scopeSections.length) * 100}%`,
                  background: `linear-gradient(90deg, #1d4ed8, ${current.accent})`,
                }}
              />
            </div>
            <p className="text-[0.66rem] text-[#b0bdd0] mt-2">
              {activeIdx < scopeSections.length - 1
                ? 'Scroll to read more'
                : '✓ All sections complete — scroll to continue'}
            </p>
          </div>
        </aside>

        {/* ══ RIGHT CONTENT — clip window ══ */}
        <div ref={clipRef} className="flex-1 overflow-hidden relative">
          {/* Faded scroll hint at the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(248,251,255,0.95))',
              opacity: progress >= 0.98 ? 0 : 1,
              transition: 'opacity 0.4s',
            }}
          />

          {/* All sections stacked — translated upward by GSAP */}
          <div
            ref={contentRef}
            className="will-change-transform px-8 md:px-12 lg:px-10 pt-8 pb-12 space-y-12"
          >
            {scopeSections.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => { headingRefs.current[i] = el }}
                className="scroll-mt-8"
              >
                {/* Section label + intro */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[0.68rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${s.lightBg} ${s.lightText}`}
                  >
                    {s.label}
                  </span>
                  <div className="h-px flex-1 bg-[#e8eef8]" />
                  <span className="text-[0.68rem] font-bold text-[#dce4ef]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p
                  className="text-[0.92rem] text-[#4f6079] leading-relaxed mb-4 border-l-4 pl-4"
                  style={{ borderColor: s.accent }}
                >
                  {s.intro}
                </p>

                {/* Bullet grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.bullets.map((b, bi) => (
                    <div
                      key={bi}
                      className={`flex gap-3 p-4 rounded-xl border ${s.borderColor} ${s.lightBg}`}
                    >
                      <span
                        className="mt-[5px] w-2 h-2 rounded-full shrink-0"
                        style={{ background: s.accent }}
                      />
                      <div>
                        <span className="font-semibold text-[0.84rem] text-[#14233b]">{b.label}: </span>
                        <span className="text-[0.84rem] text-[#4f6079]">{b.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
