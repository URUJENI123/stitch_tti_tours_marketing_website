import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { contactSchema } from '@/lib/validations/contact'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const { name, email, phone, message } = parsed.data

    const contact = await prisma.contactMessage.create({
      data: { name, email, phone: phone || null, message },
    })

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 })
  } catch (error) {
    console.error('Contact message error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
