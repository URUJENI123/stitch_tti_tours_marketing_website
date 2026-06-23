import { z } from 'zod'

export const bookingSchema = z.object({
  visitType: z.enum(['individual', 'group']),
  numVisitors: z.number().int().min(1),
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Invalid phone number'),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  stateProvince: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  visitorCategory: z.enum([
    'foreigner',
    'foreign_resident',
    'eac_citizen',
    'foreign_student',
    'rwandan_citizen',
    'rwandan_student',
  ]),
  shortNote: z.string().optional(),
  arrivalDate: z.string().min(1, 'Arrival date is required'),
  totalCost: z.number().min(0),
  packageId: z.string().optional(),
  groupMembers: z
    .array(
      z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email().optional(),
      })
    )
    .optional(),
})

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})
