import { NextRequest, NextResponse } from 'next/server'
import { getBooking } from '@/features/bookings/api'

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    return await getBooking(params.id)
  } catch (error) {
    console.error('Booking fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
