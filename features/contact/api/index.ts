import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/shared/lib/prisma'
import { contactSchema } from '@/shared/lib/validations/contact'
import { sendContactNotification } from '@/shared/lib/email'

export async function createContactMessage(request: NextRequest) {
  const body = await request.json()
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { name, email, phone, message } = parsed.data

  const contact = await prisma.contactMessage.create({
    data: { name, email, phone: phone || null, message },
  })

  try {
    await sendContactNotification({ name, email, phone, message })
  } catch (error) {
    console.error('Failed to send email notification:', error)
  }

  return NextResponse.json({ success: true, id: contact.id }, { status: 201 })
}
