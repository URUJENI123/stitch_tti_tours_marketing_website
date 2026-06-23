'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/packages', label: 'Tour Packages' },
  { href: '/coffee-tour', label: 'Coffee Experience' },
  { href: '/services', label: 'Our Services' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0px_4px_20px_rgba(14,69,115,0.08)]'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 text-navy">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-headline-md text-headline-md font-bold text-navy tracking-tight">
            TTI Tours
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-md text-body-md transition-colors duration-300 ${
                  isActive
                    ? 'text-teal border-b-2 border-teal'
                    : 'text-on-surface-variant hover:text-teal'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="bg-navy text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-200 active:scale-95 hover:bg-navy/90"
          >
            Plan Your Trip
          </Link>
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/10 px-gutter py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-body-md text-body-md ${
                  isActive ? 'text-teal font-bold' : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-navy text-white px-6 py-3 rounded-xl font-bold"
          >
            Plan Your Trip
          </Link>
        </div>
      )}
    </header>
  )
}
