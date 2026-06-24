import type { Metadata } from 'next'
import AboutPage from '@/features/about/page'

export const metadata: Metadata = {
  title: 'About Us | TTI Tours Ltd.',
  description:
    'Learn about TTI Tours Ltd — our mission, vision, and commitment to sustainable tourism in Rwanda.',
}

export default function About() {
  return <AboutPage />
}
