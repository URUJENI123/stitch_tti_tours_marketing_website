import { NextRequest, NextResponse } from 'next/server'
import { createBooking, listBookings } from '@/features/bookings/api'

export async function POST(request: NextRequest) {
  try {
    return await createBooking(request)
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    return await listBookings()
  } catch (error) {
    console.error('Booking fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
