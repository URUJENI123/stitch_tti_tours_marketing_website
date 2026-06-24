import type { Metadata } from 'next'
import ContactPage from '@/features/contact/page'

export const metadata: Metadata = {
  title: 'Contact Us | TTI Tours Ltd.',
  description:
    'Get in touch with TTI Tours Ltd to start planning your Rwandan adventure. Contact our travel experts today.',
}

export default function Contact() {
  return <ContactPage />
}
