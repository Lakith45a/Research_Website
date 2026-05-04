'use client'

import { FormEvent } from 'react'

export default function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const mailtoLink = `mailto:lakithravindu55@gmail.com?subject=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
      email
    )}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-[78px] bg-[#09132b] relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-24 -right-20 w-[380px] h-[380px] rounded-full bg-[#1d4ed8]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full bg-[#1aa5a5]/15 blur-3xl pointer-events-none" />

      <div className="relative w-[min(92%,1120px)] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow" style={{ color: '#1aa5a5' }}>Get in Touch</span>
          <h2 className="text-[2rem] font-bold text-white mt-2">Contact Us</h2>
          <p className="text-[#93aed8] mt-2 text-[0.88rem]">For further details, send a message.</p>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#1aa5a5] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#4f8fc0]">Email</p>
                <a href="mailto:lakithravindu55@gmail.com" className="text-[0.9rem] text-white hover:text-[#1aa5a5] transition-colors mt-0.5 block break-all">
                  lakithravindu55@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#1aa5a5] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#4f8fc0]">Institution</p>
                <p className="text-[0.9rem] text-white mt-0.5">Sri Lanka Institute of Information Technology (SLIIT)</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-[0.82rem] text-[#93aed8] leading-relaxed">
                MediSense is a research project by a dedicated team at SLIIT focused on AI-powered preventive
                healthcare for Sri Lankans. We welcome partnerships and feedback.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.72rem] font-semibold text-[#4f6079] mb-1.5 uppercase tracking-wide">Name</label>
                <input type="text" name="name" placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label className="block text-[0.72rem] font-semibold text-[#4f6079] mb-1.5 uppercase tracking-wide">Email</label>
                <input type="email" name="email" placeholder="your@email.com" className="form-input" />
              </div>
            </div>
            <div>
              <label className="block text-[0.72rem] font-semibold text-[#4f6079] mb-1.5 uppercase tracking-wide">Message</label>
              <textarea name="message" placeholder="Message or Query" rows={5} className="form-input resize-y min-h-[120px]" />
            </div>
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1d4ed8] hover:bg-[#143da9] text-white font-semibold transition-all shadow-[0_4px_16px_rgba(29,78,216,0.35)] hover:-translate-y-0.5"
            >
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
