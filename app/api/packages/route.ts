import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const corridors = await prisma.corridor.findMany({
      include: { packages: true },
      orderBy: { createdAt: 'asc' },
    })
    return NextResponse.json(corridors)
  } catch (error) {
    console.error('Corridors fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
