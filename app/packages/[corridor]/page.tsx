import type { Metadata } from 'next'
import { corridorDataMap } from '@/features/packages/corridor-data'
import CorridorPage from '@/features/packages/corridor-page'

export function generateMetadata({ params }: { params: { corridor: string } }): Metadata {
  const data = corridorDataMap[params.corridor]
  if (!data) return { title: 'Not Found' }
  return {
    title: `${data.title} | TTI Tours Ltd.`,
    description: data.description,
  }
}

export default function Corridor({ params }: { params: { corridor: string } }) {
  return <CorridorPage params={params} />
}
