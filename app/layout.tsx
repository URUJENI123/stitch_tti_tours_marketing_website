import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TTI Tours | Premium Rwanda Expeditions',
  description:
    'Discover the heart of Rwanda with curated, sustainable travel experiences. Gorilla trekking, national park tours, lake excursions, and coffee tourism.',
  openGraph: {
    title: 'TTI Tours | Premium Rwanda Expeditions',
    description:
      'Discover the heart of Rwanda with curated, sustainable travel experiences.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-on-surface font-body-md">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
