import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { bookingSchema } from '@/shared/lib/validations/booking'
import { sendBookingNotification } from '@/shared/lib/email'

export async function createBooking(request: NextRequest) {
  const body = await request.json()
  const parsed = bookingSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const {
    visitType, numVisitors, firstName, middleName, lastName, email, phone,
    streetAddress, city, stateProvince, country, visitorCategory, shortNote,
    arrivalDate, packageId, groupMembers,
  } = parsed.data

  const booking = await prisma.booking.create({
    data: {
      visitType, numVisitors, firstName,
      middleName: middleName || null, lastName, email, phone,
      streetAddress: streetAddress || null, city: city || null,
      stateProvince: stateProvince || null, country, visitorCategory,
      shortNote: shortNote || null, arrivalDate: new Date(arrivalDate),
      packageId: packageId || null, groupMembers: groupMembers || undefined,
    },
  })

  try {
    await sendBookingNotification({
      firstName, lastName, email, phone, country,
      visitorCategory, numVisitors,
      arrivalDate: arrivalDate.toString(),
      shortNote: shortNote || null,
    })
  } catch (error) {
    console.error('Failed to send booking email notification:', error)
  }

  return NextResponse.json({ success: true, id: booking.id }, { status: 201 })
}

export async function listBookings() {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(bookings)
}

export async function getBooking(id: string) {
  const booking = await prisma.booking.findUnique({ where: { id } })
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }
  return NextResponse.json(booking)
}
