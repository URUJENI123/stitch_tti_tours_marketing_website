'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Textarea } from '@/shared/components/ui/textarea'
import { Button } from '@/shared/components/ui/button'

const COUNTRY_LIST = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
  'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
  'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
  'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
  'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
  'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
  'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
  'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
  'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan',
  'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
  'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
  'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
]

const VISITOR_CATEGORIES = [
  { value: 'foreigner', label: 'Foreigner', rate: 150 },
  { value: 'foreign_resident', label: 'Foreign Resident', rate: 100 },
  { value: 'eac_citizen', label: 'EAC Citizen', rate: 80 },
  { value: 'foreign_student', label: 'Foreign Student', rate: 60 },
  { value: 'rwandan_citizen', label: 'Rwandan Citizen', rate: 30 },
  { value: 'rwandan_student', label: 'Rwandan Student', rate: 20 },
]

export default function BookingForm() {
  const [visitType, setVisitType] = useState<'individual' | 'group'>('individual')
  const [numVisitors, setNumVisitors] = useState(1)
  const [visitorCategory, setVisitorCategory] = useState('foreigner')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const rate = VISITOR_CATEGORIES.find((c) => c.value === visitorCategory)?.rate || 0
  const totalCost = useMemo(() => rate * numVisitors, [rate, numVisitors])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!firstName.trim()) newErrors.firstName = 'This field is required. Please input your first name.'
    if (!lastName.trim()) newErrors.lastName = 'This field is required. Please input your last name.'
    if (!email.trim()) newErrors.email = 'This field is required. Please input your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email address.'
    if (!phone.trim()) newErrors.phone = 'This field is required. Please input your phone number.'
    if (!country) newErrors.country = 'This field is required. Please select your country.'
    if (!arrivalDate) newErrors.arrivalDate = 'This field is required. Please select your arrival date.'
    if (numVisitors < 1) newErrors.numVisitors = 'Number of visitors must be at least 1.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [stateProvince, setStateProvince] = useState('')
  const [country, setCountry] = useState('')
  const [shortNote, setShortNote] = useState('')
  const [arrivalDate, setArrivalDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
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
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setErrors({ form: data.error || 'Submission failed. Please try again.' })
      }
    } catch {
      setErrors({ form: 'Network error. Please try again.' })
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl premium-shadow p-stack-md md:p-stack-lg text-center">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-teal text-4xl">check_circle</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Thank You!</h2>
        <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto">
          Your booking request has been submitted successfully. Our team will contact you within 24 hours
          to confirm your experience.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-3xl premium-shadow p-stack-md md:p-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Tell Us About Your Visit</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Ready to experience the heights of Rwanda? Book your private or group coffee tour today.
              Duration: 4-6 hours. Includes transportation from Musanze and a fresh bag of Ibirunga Coffee.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-teal">check_circle</span>
                <span className="font-body-md">Expert Local Guide</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-teal">check_circle</span>
                <span className="font-body-md">Roasting & Tasting Workshop</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-teal">check_circle</span>
                <span className="font-body-md">Traditional Rwandan Lunch Included</span>
              </li>
            </ul>
          </div>

          <div className="bg-offwhite p-stack-md rounded-2xl space-y-5">
            <div className="space-y-2">
              <Label>How would you like to visit?*</Label>
              <div className="flex gap-4">
                {(['individual', 'group'] as const).map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="visit_type"
                      value={type}
                      checked={visitType === type}
                      onChange={() => setVisitType(type)}
                      className="text-teal focus:ring-teal"
                    />
                    <span className="font-body-md capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Number of Visitors*</Label>
              <Input
                type="number"
                min={1}
                value={numVisitors}
                onChange={(e) => setNumVisitors(Number(e.target.value))}
              />
              <p className="text-xs text-on-surface-variant opacity-70">
                The number entered here will allow you to book for people in your group. e.g. if you are
                3 people, enter 3 and you&apos;ll be able to book for 3 people only.
              </p>
              {errors.numVisitors && (
                <p className="text-xs text-red-600">{errors.numVisitors}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>First Name*</Label>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <p className="text-xs text-red-600">{errors.firstName}</p>}
              </div>
              <div className="space-y-1">
                <Label>Middle Name</Label>
                <Input value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label>Last Name*</Label>
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <p className="text-xs text-red-600">{errors.lastName}</p>}
              </div>
              <div className="space-y-1">
                <Label>Email Address*</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
              </div>
              <div className="space-y-1">
                <Label>Phone*</Label>
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div className="space-y-1">
                <Label>Street Address</Label>
                <Input value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label>City</Label>
                <Input value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label>State/Province</Label>
                <Input value={stateProvince} onChange={(e) => setStateProvince(e.target.value)} />
              </div>
            </div>

            <div className="space-y-1">
              <Label>Country*</Label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="flex h-12 w-full rounded-xl border border-outline-variant/30 bg-white px-4 py-3 text-sm font-body-md text-on-surface focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
              >
                <option value="">Select your country</option>
                {COUNTRY_LIST.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="text-xs text-red-600">{errors.country}</p>}
            </div>

            <div className="space-y-1">
              <Label>Select Who You Are*</Label>
              <select
                value={visitorCategory}
                onChange={(e) => setVisitorCategory(e.target.value)}
                className="flex h-12 w-full rounded-xl border border-outline-variant/30 bg-white px-4 py-3 text-sm font-body-md text-on-surface focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
              >
                {VISITOR_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <Label>Short Note</Label>
              <Textarea
                placeholder="Any special requests..."
                value={shortNote}
                onChange={(e) => setShortNote(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label>Arrival Date*</Label>
              <Input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.arrivalDate && <p className="text-xs text-red-600">{errors.arrivalDate}</p>}
            </div>

            <div className="bg-navy/5 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-label-caps text-navy">Total Cost</span>
                <span className="font-headline-md text-headline-md text-navy font-bold">
                  ${totalCost.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">
                Rate: ${rate}/visitor × {numVisitors} visitor{numVisitors > 1 ? 's' : ''}
              </p>
            </div>

            {errors.form && (
              <p className="text-sm text-red-600">{errors.form}</p>
            )}

            <Button type="submit" size="xl" className="w-full">
              Submit Booking Request
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
