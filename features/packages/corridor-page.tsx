import { notFound } from 'next/navigation'
import Link from 'next/link'
import { corridorDataMap } from './corridor-data'

export default function CorridorPage({ params }: { params: { corridor: string } }) {
  const data = corridorDataMap[params.corridor]
  if (!data) notFound()

  return (
    <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
      <Link href="/packages" className="inline-flex items-center gap-2 text-teal font-bold mb-8 hover:underline">
        <span className="material-symbols-outlined">arrow_back</span>
        All Packages
      </Link>
      <div className="mb-stack-md">
        <h1 className="font-headline-xl text-headline-xl text-navy">{data.title}</h1>
        <p className="font-body-lg text-on-surface-variant mt-4 max-w-2xl">{data.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        {data.packages.map((pkg, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden tour-card p-stack-md">
            <h3 className="font-headline-md text-headline-md text-navy mb-2">{pkg.name}</h3>
            <p className="text-sm text-on-surface-variant mb-4">{pkg.desc}</p>
            <Link href={`/coffee-tour?package=${params.corridor}`} className="text-teal font-bold text-sm hover:underline">
              Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
