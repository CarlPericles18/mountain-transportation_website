import type { Metadata } from 'next'
import Script from 'next/script' // Import Script component
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mountain Transportation | Premium Travel Services',
  description: 'Licensed and insured transport company providing reliable travel services in Atlanta, GA and surrounding areas.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />

        {/* Botpress Chatbot Scripts */}
        <Script src="https://cdn.botpress.cloud/webchat/v3.5/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2025/12/06/02/20251206020509-3EQ022CC.js" defer strategy="lazyOnload" />
      </body>
    </html>
  )
}
