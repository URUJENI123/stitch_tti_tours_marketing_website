import nodemailer from 'nodemailer'

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
} = process.env

if (!SMTP_HOST) {
  console.error('SMTP_HOST is not set — check your .env file and restart the server')
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST || 'smtp.gmail.com',
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER as string,
      pass: SMTP_PASS as string,
    },
  })
}

export async function sendContactNotification(data: {
  name: string
  email: string
  phone?: string | null
  message: string
  to?: string
}) {
  const transporter = createTransporter()
  return transporter.sendMail({
    to: data.to || process.env.SMTP_USER as string,
    replyTo: data.email,
    subject: `New Contact Inquiry from ${data.name}`,
    html: `
      <h2 style="color:#1a2b4a;">New Contact Inquiry</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Name:</td><td>${data.name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Email:</td><td>${data.email}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Phone:</td><td>${data.phone || 'N/A'}</td></tr>
      </table>
      <h3 style="color:#1a2b4a;">Message</h3>
      <p style="white-space:pre-wrap;">${data.message}</p>
    `.trim(),
  })
}

export async function sendBookingNotification(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  visitorCategory: string
  numVisitors: number
  arrivalDate: string
  shortNote?: string | null
  to?: string
}) {
  const transporter = createTransporter()
  return transporter.sendMail({
    to: data.to || process.env.SMTP_USER as string,
    replyTo: data.email,
    subject: `New Booking from ${data.firstName} ${data.lastName}`,
    html: `
      <h2 style="color:#1a2b4a;">New Booking Request</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Name:</td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Email:</td><td>${data.email}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Phone:</td><td>${data.phone}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Country:</td><td>${data.country}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Visitor Category:</td><td>${data.visitorCategory}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Number of Visitors:</td><td>${data.numVisitors}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold;color:#1a2b4a;">Arrival Date:</td><td>${data.arrivalDate}</td></tr>
      </table>
      ${data.shortNote ? `<h3 style="color:#1a2b4a;">Note</h3><p>${data.shortNote}</p>` : ''}
    `.trim(),
  })
}
