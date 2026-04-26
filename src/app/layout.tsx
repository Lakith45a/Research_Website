import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MediSense | AI Wellness Research',
  description:
    'MediSense Wellness Surveillance Platform — AI-driven hypertension and diabetes prevention research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#f8fbff] text-[#14233b] leading-relaxed">
        {children}
      </body>
    </html>
  )
}
