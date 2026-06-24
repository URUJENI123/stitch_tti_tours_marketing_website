'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { X } from 'lucide-react'

interface GalleryItem {
  type: 'photo' | 'video'
  title: string
  caption?: string
  url: string
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  const openItem = (item: GalleryItem) => {
    setSelected(item)
    setOpen(true)
  }

  return (
    <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Photo & Video Gallery</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Moments captured during our tours — from the plantation to the cup.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => openItem(item)}
            className="group relative rounded-xl overflow-hidden aspect-square bg-surface-container-highest card-hover text-left"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
              <h4 className="font-bold text-sm">{item.title}</h4>
              {item.caption && <p className="text-xs opacity-80 mt-1">{item.caption}</p>}
            </div>
            {item.type === 'video' && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <span className="material-symbols-outlined text-navy">play_arrow</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-black/95 max-w-5xl">
          {selected && (
            <div className="relative">
              <img
                src={selected.url}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-headline-md text-headline-md">{selected.title}</h3>
                {selected.caption && (
                  <p className="text-white/70 mt-1">{selected.caption}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
