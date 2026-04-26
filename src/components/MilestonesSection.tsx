'use client'

import { useState } from 'react'

// ─── Data ──────────────────────────────────────────────────────────────────────

type Status = 'completed' | 'upcoming' | 'pending'

const milestones = [
  {
    id: 1,
    event: 'Project Proposal',
    date: 'September 2025',
    marks: '6%',
    status: 'completed' as Status,
    description:
      'The project proposal marks the formal beginning of the MediSense research. The team presented the problem domain, motivation, preliminary literature review, proposed AI-based solution outline, and project plan to the evaluation panel.',
    deliverables: [
      'Proposal document (≈ 10 pages)',
      'Proposal presentation slides',
      'Project charter',
      'Gantt chart & timeline',
    ],
  },
  {
    id: 2,
    event: 'Progress Presentation I',
    date: 'January 2026',
    marks: '15%',
    status: 'completed' as Status,
    description:
      'The first progress presentation demonstrated completion of the literature survey, finalized methodology, initial prototype design, and preliminary results from the hypertension and diabetes prediction models.',
    deliverables: [
      'Progress report – Volume 1',
      'PP1 presentation slides',
      'Initial ML models (v0.1)',
      'System architecture documentation',
    ],
  },
 
  {
    id: 4,
    event: 'Progress Presentation II',
    date: 'March 2026',
    marks: '18%',
    status: 'completed' as Status,
    description:
      'The second progress presentation will showcase the fully integrated MediSense platform — including wearable data integration, the food recognition engine, and the NLP-based stress assessment chatbot with end-to-end user flow.',
    deliverables: [
      'Progress report – Volume 2',
      'PP2 presentation slides',
      'Integrated prototype (v1.0)',
      'Demo video',
    ],
  },
 
  {
    id: 6,
    event: 'Final Presentation',
    date: 'May 2026',
    marks: '30%',
    status: 'upcoming' as Status,
    description:
      'The final presentation covers the complete, evaluated MediSense system. All components must be fully functional, tested, and documented. The panel evaluates innovation, technical depth, and real-world healthcare impact.',
    deliverables: [
      'Final thesis document (4 volumes + main)',
      'Final presentation slides',
      'Complete system demo',
      'Published research paper (or draft)',
    ],
  },
  {
    id: 7,
    event: 'Viva',
    date: 'May 2026',
    marks: '10%',
    status: 'pending' as Status,
    description:
      'The viva is an individual oral examination where each researcher defends their specific contribution to the project. The panel assesses depth of technical understanding, individual contribution, and ability to handle critical questions.',
    deliverables: [
      'Individual contribution summary',
      'Viva preparation notes',
      'Component-level demo',
    ],
  },
]

// ─── Status helpers ─────────────────────────────────────────────────────────

const statusConfig: Record<Status, { label: string; dotColor: string; badgeClass: string; iconBg: string }> = {
  completed: {
    label: 'Completed',
    dotColor: '#059669',
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    iconBg: 'bg-[#1d4ed8]',
  },
  upcoming: {
    label: 'Upcoming',
    dotColor: '#d97706',
    badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200',
    iconBg: 'bg-amber-500',
  },
  pending: {
    label: 'Pending',
    dotColor: '#6366f1',
    badgeClass: 'bg-violet-50 text-violet-700 border border-violet-200',
    iconBg: 'bg-[#1aa5a5]',
  },
}

// ─── Summary badges ─────────────────────────────────────────────────────────

function SummaryBadges() {
  const counts = milestones.reduce(
    (acc, m) => { acc[m.status]++; return acc },
    { completed: 0, upcoming: 0, pending: 0 } as Record<Status, number>
  )

  const badges: { status: Status; icon: string }[] = [
    { status: 'completed', icon: '✓' },
    { status: 'upcoming', icon: '⏰' },
    { status: 'pending', icon: '📅' },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {badges.map(({ status, icon }) => {
        const cfg = statusConfig[status]
        return (
          <span key={status} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.78rem] font-semibold ${cfg.badgeClass}`}>
            <span>{icon}</span>
            {counts[status]} {cfg.label}
          </span>
        )
      })}
    </div>
  )
}

// ─── Trophy icon ────────────────────────────────────────────────────────────

function TrophyIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.998 1.5a.75.75 0 0 1 .75.75v.75h4.5a.75.75 0 0 1 0 1.5h-.628l-.565 4.524a4.503 4.503 0 0 1-3.307 3.706v.77a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 1 0 1.5h-.75a3.75 3.75 0 0 1-3-1.5 3.75 3.75 0 0 1-3 1.5h-.75a.75.75 0 0 1 0-1.5h.75a2.25 2.25 0 0 0 2.25-2.25v-.77a4.503 4.503 0 0 1-3.307-3.706L7.378 4.5H6.748a.75.75 0 1 1 0-1.5h4.5v-.75a.75.75 0 0 1 .75-.75Zm-4.122 3 .513 4.104A3.003 3.003 0 0 0 11.998 11.25a3.003 3.003 0 0 0 2.61-2.646L15.12 4.5H8.876Z" />
    </svg>
  )
}

// ─── Calendar icon ───────────────────────────────────────────────────────────

function CalIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

// ─── Check icon ─────────────────────────────────────────────────────────────

function CheckIcon({ done }: { done: boolean }) {
  return (
    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${done ? 'bg-emerald-500' : 'bg-[#dfe7f2]'}`}>
      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </span>
  )
}

// ─── Milestone accordion item ────────────────────────────────────────────────

function MilestoneItem({ m, isOpen, onToggle }: {
  m: typeof milestones[0]
  isOpen: boolean
  onToggle: () => void
}) {
  const cfg = statusConfig[m.status]
  const done = m.status === 'completed'

  return (
    <div className={`flex gap-4 group`}>
      {/* Left icon */}
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-10 h-10 rounded-full ${cfg.iconBg} flex items-center justify-center shadow-md z-10`}>
          <TrophyIcon />
        </div>
        <div className="w-0.5 flex-1 bg-[#e2e8f4] mt-1" />
      </div>

      {/* Card */}
      <div className={`flex-1 mb-4 rounded-2xl border shadow-[0_2px_16px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-[#1d4ed8]/30 shadow-[0_4px_24px_rgba(29,78,216,0.1)]' : 'border-[#dfe7f2]'
      }`}>
        {/* Header (always visible, clickable) */}
        <button
          onClick={onToggle}
          className="w-full text-left bg-white px-6 py-4 flex items-center gap-4 hover:bg-[#f8fbff] transition-colors"
        >
          {/* Status badge */}
          <span className={`inline-flex items-center gap-1.5 text-[0.7rem] font-bold px-3 py-1 rounded-full shrink-0 ${cfg.badgeClass}`}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: cfg.dotColor }} />
            {cfg.label}
          </span>

          {/* Title + meta */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[0.97rem] text-[#14233b] leading-snug">{m.event}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-[0.78rem] text-[#4f6079]">
              <span className={`flex items-center gap-1.5 ${done ? 'text-[#1d4ed8]' : ''}`}>
                <CalIcon />
                {m.date}
              </span>
              <span className="text-[#c0cfe4]">·</span>
              <span className="font-semibold">Marks Allocated: {m.marks}</span>
            </div>
          </div>

          {/* Chevron */}
          <svg
            className={`w-4 h-4 text-[#9aa5b8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Expanded body */}
        <div
          className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
          style={{ transitionDuration: '350ms' }}
        >
          <div className="bg-[#fafcff] border-t border-[#dfe7f2] px-6 py-5">
            <p className="text-[0.88rem] text-[#4f6079] leading-relaxed mb-5">
              {m.description}
            </p>

            {/* Deliverables */}
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1d4ed8] mb-3">
              Key Deliverables
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {m.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-2.5">
                  <CheckIcon done={done} />
                  <span className="text-[0.84rem] text-[#4f6079]">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function MilestonesSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="milestones" className="py-[78px] bg-[#f2f6fc]">
      <div className="w-[min(92%,1120px)] mx-auto">
        {/* Header */}
        <div className="mb-4">
          <span className="section-eyebrow">Progress</span>
          <h2 className="text-[2rem] font-bold text-[#14233b] mt-1">Timeline in Brief</h2>
          <p className="text-[#4f6079] mt-2 text-[0.88rem] max-w-[560px]">
            A structured timeline of all research assessments — including dates, marks allocation,
            deliverables, and current status. Click any milestone to expand details.
          </p>
        </div>

        <SummaryBadges />

        {/* Accordion list */}
        <div>
          {milestones.map((m) => (
            <MilestoneItem
              key={m.id}
              m={m}
              isOpen={openId === m.id}
              onToggle={() => toggle(m.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
