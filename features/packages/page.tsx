'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import PackagesSlider from './components/PackagesSlider'
import CorridorCatalog from './components/CorridorCatalog'

export default function PackagesPage() {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formInterest, setFormInterest] = useState('Mountain Gorilla Trekking')
  const [formMessage, setFormMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const [formLoading, setFormLoading] = useState(false)

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      setFormError('Please fill in all required fields.')
      return
    }
    setFormLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: `Interested in: ${formInterest}\n\n${formMessage}`,
        }),
      })
      if (res.ok) {
        setFormSubmitted(true)
      } else {
        const data = await res.json()
        setFormError(data.error || 'Submission failed.')
      }
    } catch {
      setFormError('Network error. Please try again.')
    } finally {
      setFormLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <header className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU5sTK7ta6-hb_-LV6g1vE6JoBAO3sZX1xWp_wSHN-bnMqEYWGGhSW5-LbI03n2nXzka5PrYTm2K0EVpcoobu8kovlSsbN1EAeilLCCKxS-ZqYpOimBI65L-GzfmqSiAuGk8WyOBIchGF3lvWkeJN-O63KPkfgaHiZeT5LvXkFBI5oHyOIbmmtI5Mx6ttuaEpZuIru8UV7S5QUG5hI1T6pxQACVAJHd59nEHC0qDlO28xLHTv_uiWUYPWzs34ee52OW6elL_fpLiU')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-navy/30" />
        </div>
        <div className="relative z-20 px-gutter max-w-container-max mx-auto w-full text-white">
          <h1 className="font-headline-xl text-headline-xl mb-4 max-w-2xl">Discover Rwanda Through Local Eyes</h1>
          <p className="font-body-lg text-body-lg max-w-xl opacity-90">
            Curated expeditions across the Land of a Thousand Hills, from the mist-covered volcanoes to the serene shores of Lake Kivu.
          </p>
        </div>
      </header>

      {/* Featured Carousel */}
      <PackagesSlider />

      {/* Corridor Catalog — all corridors visible like a brochure, expand to see packages */}
      <CorridorCatalog />

      {/* Footer CTA */}
      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            <div className="space-y-6">
              <span className="font-label-caps text-label-caps text-teal uppercase tracking-widest">Ready to Explore?</span>
              <h2 className="font-headline-lg text-headline-lg text-navy">Tell Us About Your Visit</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Whether you&apos;re interested in gorilla trekking, historical memorials, or a scenic drive along the Kivu Belt, our team is here to curate your perfect Rwandan journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-teal bg-white p-3 rounded-full shadow-sm">mail</span>
                  <div>
                    <div className="font-bold text-navy">Email Us</div>
                    <div className="text-sm text-on-surface-variant">bookings@ttitours.rw</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-teal bg-white p-3 rounded-full shadow-sm">call</span>
                  <div>
                    <div className="font-bold text-navy">Call Us</div>
                    <div className="text-sm text-on-surface-variant">+250 788 000 000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/30">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-teal text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-navy mb-2">Thank You!</h3>
                  <p className="text-on-surface-variant">Your inquiry has been received. We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-on-surface-variant uppercase">Full Name *</label>
                      <input type="text" placeholder="John Doe" value={formName} onChange={(e) => setFormName(e.target.value)} className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-on-surface-variant uppercase">Email Address *</label>
                      <input type="email" placeholder="john@example.com" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant uppercase">Interested In</label>
                    <select value={formInterest} onChange={(e) => setFormInterest(e.target.value)} className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all">
                      <option>Mountain Gorilla Trekking</option>
                      <option>Kigali & Historical Legacies</option>
                      <option>Southern Corridor & Murambi</option>
                      <option>Nyungwe Forest Expedition</option>
                      <option>Kivu Belt Scenic Drive</option>
                      <option>Akagera Safari (Eastern Province)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant uppercase">Message *</label>
                    <textarea rows={4} placeholder="Tell us about your group size and preferred dates..." value={formMessage} onChange={(e) => setFormMessage(e.target.value)} className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                  </div>
                  {formError && <p className="text-sm text-red-600">{formError}</p>}
                  <button type="submit" disabled={formLoading} className="w-full bg-navy text-white py-4 rounded-lg font-bold hover:bg-teal transition-colors active:scale-95 disabled:opacity-50">
                    {formLoading ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
