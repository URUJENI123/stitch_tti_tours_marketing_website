import type { Metadata } from 'next'
import PackagesPage from '@/features/packages/page'

export const metadata: Metadata = {
  title: 'Tour Packages | TTI Tours Ltd.',
  description:
    'Explore Rwanda with TTI Tours. Gorilla trekking, Nyungwe canopy walk, Lake Kivu cruises, Akagera safaris, and cultural tours.',
}

export default function Packages() {
  return <PackagesPage />
}
