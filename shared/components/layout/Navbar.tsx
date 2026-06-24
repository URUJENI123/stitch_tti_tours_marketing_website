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
          <img src="/ttilogo.jpeg" alt="TTI Tours" className="h-10 w-auto" />
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
