import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { bookingSchema } from '@/lib/validations/booking'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = bookingSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const {
      visitType,
      numVisitors,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      streetAddress,
      city,
      stateProvince,
      country,
      visitorCategory,
      shortNote,
      arrivalDate,
      totalCost,
      packageId,
      groupMembers,
    } = parsed.data

    const booking = await prisma.booking.create({
      data: {
        visitType,
        numVisitors,
        firstName,
        middleName: middleName || null,
        lastName,
        email,
        phone,
        streetAddress: streetAddress || null,
        city: city || null,
        stateProvince: stateProvince || null,
        country,
        visitorCategory,
        shortNote: shortNote || null,
        arrivalDate: new Date(arrivalDate),
        totalCost,
        packageId: packageId || null,
        groupMembers: groupMembers || undefined,
      },
    })

    return NextResponse.json({ success: true, id: booking.id }, { status: 201 })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Booking fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
