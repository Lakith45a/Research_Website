const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Project Scope', href: '#scope' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060e22] text-[#7a95be]">
      <div className="w-[min(92%,1200px)] mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1d4ed8] to-[#1aa5a5] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-bold text-white text-[1.05rem]">MediSense</span>
          </div>
          <p className="text-[0.82rem] leading-relaxed max-w-[260px]">
            AI-powered wellness surveillance platform for early prevention of hypertension and diabetes in Sri Lanka.
          </p>
          <a href="mailto:researchmedisense@gmail.com" className="inline-block mt-4 text-[0.82rem] text-[#1aa5a5] hover:text-white transition-colors">
            researchmedisense@gmail.com
          </a>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-white font-semibold text-[0.82rem] uppercase tracking-wider mb-4">Quick Links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.82rem] hover:text-white transition-colors inline-block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Research info */}
        <div>
          <p className="text-white font-semibold text-[0.82rem] uppercase tracking-wider mb-4">Research Group</p>
          <ul className="space-y-2 text-[0.82rem]">
            <li>Sri Lanka Institute of Information Technology</li>
            <li className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-[0.7rem] font-medium">
                Final Year Research 2025 / 2026
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="w-[min(92%,1200px)] mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.76rem]">
          <p>&copy; 2026 MediSense Research Team. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1aa5a5]" />
            <span>Empowering Preventive Healthcare with AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
