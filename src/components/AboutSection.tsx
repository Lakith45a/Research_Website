'use client'

import React from 'react'


const supervisors = [
  {
    name: 'Ms. Anjalie Gamage',
    role: 'Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    photo: '/images/supervisor-anjali.webp',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/anjalie-gamage/' }],
    gradientFrom: '#1d4ed8',
    gradientTo: '#3b82f6',
  },
  {
    name: 'Ms. Manori Gamage',
    role: 'Co-Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    photo: '/images/manori_gamage.webp',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/manori-gamage-a95b3a177/' }],
    gradientFrom: '#7c3aed',
    gradientTo: '#a78bfa',
  },
  {
    name: 'Professor Lakmal Fonseka',
    role: 'External Supervisor',
    institution: 'University of Ruhuna',
    department: 'Medicine',
    photo: '/images/external_sup.jpeg',
    links: [{ label: 'LinkedIn', href: '#' }],
    gradientFrom: '#0d9488',
    gradientTo: '#1aa5a5',
  },
]

const members = [
  {
    name: 'Ravindu S.L',
    photo: '/images/team_member1.jpeg',
    gradientFrom: '#1d4ed8',
    gradientTo: '#3b82f6',
  },
  {
    name: 'Rathnayaka L.P.N.K.',
    photo: '/images/team_member2.jpg',
    gradientFrom: '#7c3aed',
    gradientTo: '#a78bfa',
  },
  {
    name: 'Jayanath M.I.T',
    photo: '/images/team_member3.jpg',
    gradientFrom: '#0d9488',
    gradientTo: '#1aa5a5',
  },
  {
    name: 'Jayawardhana N.S.G',
    photo: '/images/team_member4.jpg',
    gradientFrom: '#d97706',
    gradientTo: '#f59e0b',
  },
]

// ─── Shared card shell ────────────────────────────────────────────────────────
// Blue gradient top with circular avatar overlapping into the white body below

function CardShell({
  photo,
  gradientFrom,
  gradientTo,
  children,
}: {
  photo: string
  gradientFrom: string
  gradientTo: string
  children: React.ReactNode
}) {
  return (
    <article className="bg-white rounded-3xl shadow-[0_8px_32px_rgba(15,23,42,0.12)] overflow-visible hover-lift flex flex-col text-center">
      {/* Blue gradient top */}
      <div
        className="rounded-t-3xl px-6 pt-8 pb-12 relative"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
      >
        {/* Decorative dots */}
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />
      </div>

      {/* Avatar — overlapping the two halves */}
      <div className="relative flex justify-center" style={{ marginTop: '-54px' }}>
        <div
          className="w-[108px] h-[108px] rounded-full border-4 border-white shadow-[0_4px_20px_rgba(15,23,42,0.18)] bg-white"
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
      </div>

      {/* White body */}
      <div className="flex-1 flex flex-col px-5 pt-4 pb-5">
        {children}
      </div>
    </article>
  )
}

// ─── Supervisor card ─────────────────────────────────────────────────────────

function SupervisorCard({ m }: { m: typeof supervisors[0] }) {
  return (
    <CardShell photo={m.photo} gradientFrom={m.gradientFrom} gradientTo={m.gradientTo}>
      <h4 className="font-bold text-[1rem] text-[#14233b] mb-1">{m.name}</h4>
      <span
        className="self-center text-[0.62rem] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full text-white mb-3"
        style={{ background: `linear-gradient(90deg, ${m.gradientFrom}, ${m.gradientTo})` }}
      >
        {m.role}
      </span>
      <p className="text-[0.82rem] text-[#4f6079] leading-snug mb-1">{m.institution}</p>
      <p className="text-[0.82rem] text-[#4f6079] leading-snug mb-4">
        <strong className="text-[#14233b]">Department</strong><br />{m.department}
      </p>

      {/* Links styled as button row */}
      <div className="mt-auto flex justify-center gap-3">
        {m.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-1.5 rounded-xl text-[0.78rem] font-semibold border transition-all"
            style={{
              borderColor: m.gradientFrom,
              color: m.gradientFrom,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = m.gradientFrom
              el.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = ''
              el.style.color = m.gradientFrom
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </CardShell>
  )
}

// ─── Member card ─────────────────────────────────────────────────────────────

function MemberCard({ m }: { m: typeof members[0] }) {
  return (
    <CardShell photo={m.photo} gradientFrom={m.gradientFrom} gradientTo={m.gradientTo}>
      <h4 className="font-bold text-[1rem] text-[#14233b] mb-1">{m.name}</h4>
      <span
        className="self-center text-[0.62rem] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full text-white mb-3"
        style={{ background: `linear-gradient(90deg, ${m.gradientFrom}, ${m.gradientTo})` }}
      >
        Researcher
      </span>
      <p className="text-[0.82rem] text-[#4f6079] leading-snug mb-1">Undergraduate</p>
      <p className="text-[0.82rem] text-[#4f6079] leading-snug mb-4">
        Sri Lanka Institute of Information Technology<br />
        <strong className="text-[#14233b]">Dept.</strong> Information Technology
      </p>
    </CardShell>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section id="about" className="py-[78px] bg-[#f2f6fc]">
      <div className="w-[min(92%,1200px)] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow">The People Behind It</span>
          <h2 className="text-[2.05rem] font-bold text-[#14233b] mt-2">Meet Our Team</h2>
        </div>

        {/* Supervisors */}
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#9aa5b8] mb-8">Supervisors</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {supervisors.map((m) => <SupervisorCard key={m.name} m={m} />)}
        </div>

        {/* Members */}
        <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#9aa5b8] mb-8">Group Members</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => <MemberCard key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  )
}
