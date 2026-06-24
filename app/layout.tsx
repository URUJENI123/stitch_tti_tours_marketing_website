import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/shared/components/layout/Navbar'
import Footer from '@/shared/components/layout/Footer'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..900&family=Hanken+Grotesk:wght@100..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
