import { NextResponse } from 'next/server'
import { listGalleryItems } from '@/features/gallery/api'

export async function GET() {
  try {
    return await listGalleryItems()
  } catch (error) {
    console.error('Gallery fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
