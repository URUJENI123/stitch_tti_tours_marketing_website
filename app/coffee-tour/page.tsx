import type { Metadata } from 'next'
import CoffeeTourPage from '@/features/coffee-tour/page'

export const metadata: Metadata = {
  title: 'Ibirunga Coffee Tour Experience | TTI Tours Ltd.',
  description:
    'Discover the journey of Rwandan coffee from crop to cup at the foothills of the Volcanoes National Park with TTI Tours.',
}

export default function CoffeeTour() {
  return <CoffeeTourPage />
}
