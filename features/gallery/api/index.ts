import { NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'

export async function listGalleryItems() {
  const items = await prisma.galleryItem.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(items)
}
