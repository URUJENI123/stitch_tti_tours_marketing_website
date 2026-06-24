import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-container-max mx-auto px-gutter py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 text-white mb-6">
              <img src="/ttilogo.jpeg" alt="TTI Tours" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Pioneering sustainable and transformative travel experiences across the heart of Rwanda.
              Member of the Rwanda Tour Operators Association.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/packages" className="hover:text-teal transition-colors">National Parks</Link></li>
              <li><Link href="/packages" className="hover:text-teal transition-colors">Cultural Experiences</Link></li>
              <li><Link href="/packages/northern-corridor" className="hover:text-teal transition-colors">Gorilla Trekking Guide</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition-colors">Booking Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-teal transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-teal transition-colors">Sustainability</Link></li>
              <li><Link href="/services" className="hover:text-teal transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2 opacity-70">
                <span className="material-symbols-outlined text-sm">mail</span>
                info@ttitours.rw
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <span className="material-symbols-outlined text-sm">call</span>
                +250 788 000 000
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Kigali, Rwanda
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2024 TTI Tours Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
