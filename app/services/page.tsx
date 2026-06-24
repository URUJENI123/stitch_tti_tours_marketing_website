import type { Metadata } from 'next'
import ServicesPage from '@/features/services/page'

export const metadata: Metadata = {
  title: 'Our Services | TTI Tours Ltd.',
  description:
    'Explore Rwanda with TTI Tours Ltd. Bespoke travel services including transport, hotel booking, and authentic coffee experiences.',
}

export default function Services() {
  return <ServicesPage />
}
