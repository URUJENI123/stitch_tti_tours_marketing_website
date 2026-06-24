import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'

export async function GET(
  _request: NextRequest,
  { params }: { params: { corridor: string } }
) {
  try {
    const corridor = await prisma.corridor.findUnique({
      where: { slug: params.corridor },
      include: { packages: true },
    })
    if (!corridor) {
      return NextResponse.json({ error: 'Corridor not found' }, { status: 404 })
    }
    return NextResponse.json(corridor)
  } catch (error) {
    console.error('Corridor fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
