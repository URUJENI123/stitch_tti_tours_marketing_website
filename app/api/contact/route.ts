import { NextRequest, NextResponse } from 'next/server'
import { createContactMessage } from '@/features/contact/api'

export async function POST(request: NextRequest) {
  try {
    return await createContactMessage(request)
  } catch (error) {
    console.error('Contact message error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
