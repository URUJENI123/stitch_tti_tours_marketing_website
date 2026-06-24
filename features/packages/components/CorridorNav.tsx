'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface Corridor {
  id: string
  slug: string
  label: string
}

export default function CorridorNav({ corridors }: { corridors: Corridor[] }) {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 130
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }, 100)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <section className="sticky top-[72px] z-40 bg-white shadow-sm border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-gutter overflow-x-auto custom-scrollbar flex gap-stack-lg whitespace-nowrap">
        {corridors.map((corridor) => (
          <Link
            key={corridor.id}
            href={`/packages#${corridor.id}`}
            className="py-6 font-bold text-on-surface-variant hover:text-teal transition-all"
          >
            {corridor.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
