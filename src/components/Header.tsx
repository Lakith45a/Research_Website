'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#scope', label: 'Project Scope' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#downloads', label: 'Downloads' },
  { href: '#about', label: 'About Us' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-[0_2px_24px_rgba(29,78,216,0.09)] border-b border-[#dfe7f2]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#dfe7f2]'
      }`}
    >
      <div className="w-[min(92%,1200px)] mx-auto flex items-center justify-between gap-4 min-h-[66px] py-1">
        {/* Logo */}
        <Link href="#home" aria-label="MediSense Home" className="flex-shrink-0">
          <Image
            src="/images/medisense-logo.png"
            alt="MediSense logo"
            width={200}
            height={46}
            className="h-[44px] w-auto max-w-[230px] object-contain"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="min-w-0 hidden md:block">
          <ul className="flex items-center gap-0.5 scrollbar-hide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-[0.79rem] font-medium text-[#4f6079] hover:text-[#1d4ed8] hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1d4ed8] hover:bg-[#143da9] text-white text-[0.8rem] font-semibold transition-all shadow-[0_4px_14px_rgba(29,78,216,0.3)] hover:shadow-[0_6px_20px_rgba(29,78,216,0.4)] shrink-0"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
}
