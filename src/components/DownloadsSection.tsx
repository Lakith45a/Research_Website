const documents = [
  
  { name: 'TAF Document', href: '/files/TAF_Document.placeholder.docx' },
  { name: 'Project Proposal', href: '#' },
  { name: 'Research Paper', href: '/files/AI_Driven_Diabetes_Hypertension_Prevention_2026.pdf' },
  { name: 'Final Report', href: '#' },
]

const presentations = [
  { name: 'Proposal Presentation', href: '#' },
  { name: 'Progress Presentation I', href: '/files/pp1_Presentation.pptx' },
  { name: 'Progress Presentation II', href: '/files/pp2_Presentation.pptx' },
  { name: 'Final Presentation', href: '#' },
]

function DownloadCard({
  title,
  items,
  badge,
  badgeClass,
}: {
  title: string
  items: { name: string; href: string }[]
  badge: string
  badgeClass: string
}) {
  return (
    <div className="bg-white border border-[#dfe7f2] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover-lift flex flex-col">
      {/* Card header */}
      <div className="px-6 py-4 border-b border-[#dfe7f2] flex items-center gap-3 bg-[#f8fbff]">
        <span className={`text-[0.6rem] font-black px-2.5 py-1 rounded-lg ${badgeClass}`}>
          {badge}
        </span>
        <h3 className="font-semibold text-[#14233b] text-[0.97rem]">{title}</h3>
      </div>
      {/* Items */}
      <ul className="divide-y divide-[#f0f4fb] flex-1">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex justify-between items-center gap-3 px-6 py-3.5 hover:bg-[#f8fbff] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
              <span className="text-[0.88rem] text-[#4f6079]">{item.name}</span>
            </div>
            <a
              href={item.href}
              download
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#1d4ed8] hover:text-[#143da9] transition-colors shrink-0"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DownloadsSection() {
  return (
    <section id="downloads" className="py-[78px] bg-[#f8fbff]">
      <div className="w-[min(92%,1120px)] mx-auto">
        <div className="flex items-end gap-4 mb-12">
          <div>
            <span className="section-eyebrow">Resources</span>
            <h2 className="text-[2rem] font-bold text-[#14233b] mt-1">Downloads</h2>
            <p className="text-[#4f6079] mt-1 text-[0.88rem]">Documents and presentations for evaluators.</p>
          </div>
          <div className="mb-2 h-px flex-1 bg-gradient-to-r from-[#dfe7f2] to-transparent hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DownloadCard
            title="Documents"
            items={documents}
            badge="PDF"
            badgeClass="bg-red-100 text-red-600"
          />
          <DownloadCard
            title="Presentations"
            items={presentations}
            badge="PPTX"
            badgeClass="bg-blue-100 text-blue-700"
          />
        </div>
      </div>
    </section>
  )
}
