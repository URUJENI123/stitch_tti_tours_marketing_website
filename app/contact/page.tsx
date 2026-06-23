import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | TTI Tours Ltd.',
  description:
    'Get in touch with TTI Tours Ltd to start planning your Rwandan adventure. Contact our travel experts today.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCldpvSYWNkCV3bhligG4Q04S9VziuI0OBnJfzSCjIFIgVdD43uN01wF1oNk5QaJoyUra7QMwEokWiNVF9XgLxOzFByll_9F03oodaVi0SaJI86X8O3CgyUdc1sBdtClkccabn9hA36x_mlJOXXr-zU9waw-hRUOLYlbYbwXwp9neuVh6GwEqctZSAfDKMWmR3Ysc_aw3r_27vt0_Kz15pXj51VfhviSZURYfxOvWk9kp9ke6Moz28BVt91X9is7PZCUVpJd3_NEtA')",
        }}>
          <div className="absolute inset-0 bg-navy/20 backdrop-brightness-90" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-white mb-4 drop-shadow-md">
              Start Your Journey
            </h1>
            <div className="w-24 h-1 bg-teal mb-6" />
            <p className="font-body-lg text-body-lg text-white/90 max-w-lg">
              Connect with our expedition experts to craft your bespoke Rwandan adventure. We&apos;re here
              to turn your travel dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-stack-lg max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 premium-shadow">
              <h2 className="font-headline-lg text-headline-lg text-navy mb-stack-md">
                Inquire About a Tour
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="border-b border-outline-variant focus:border-teal focus:ring-0 py-2 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="border-b border-outline-variant focus:border-teal focus:ring-0 py-2 outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+250 000 000 000"
                    className="border-b border-outline-variant focus:border-teal focus:ring-0 py-2 outline-none transition-colors bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    Message or Trip Interest
                  </label>
                  <textarea
                    placeholder="Tell us about the experiences you are looking for..."
                    rows={4}
                    className="border-b border-outline-variant focus:border-teal focus:ring-0 py-2 outline-none transition-colors bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-white py-4 font-bold hover:bg-teal transition-all duration-300 shadow-md active:scale-[0.98]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-stack-md">
            <div className="bg-surface-container-low p-8 border-l-4 border-teal">
              <h3 className="font-headline-md text-headline-md text-navy mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">call</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-teal mb-1">Phone</p>
                    <p className="font-body-md text-body-md font-bold text-on-surface">+250 788 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-teal mb-1">Email</p>
                    <p className="font-body-md text-body-md font-bold text-on-surface">expeditions@ttitours.rw</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-teal">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-teal mb-1">Physical Address</p>
                    <p className="font-body-md text-body-md font-bold text-on-surface">
                      Kigali Business Center, 4th Floor<br />
                      KN 5 Rd, Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-widest text-center">
                  Follow Our Adventures
                </p>
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-navy hover:text-teal transition-colors">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                  <a href="#" className="text-navy hover:text-teal transition-colors">
                    <span className="material-symbols-outlined">camera</span>
                  </a>
                  <a href="#" className="text-navy hover:text-teal transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[300px] bg-surface-container-highest overflow-hidden premium-shadow">
              <div
                className="absolute inset-0 grayscale opacity-60"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdSKCmsX7orZB3qv1serd6XV0nwaTv_43_Zy9SfcOZd5o4kmj1aNqjrHD2x8QSyR7BY8-v417rWSufl-gzkZM1xtlmM3fU1Htzg6uEBtxmHSSnwprBWh_8z62R8OdZpR3IKSvO4S0mkhu_8KuvcQTYc2IHgENjUVtCea6agLCOwvnCsJuDgQGBpu2Qlc0b6s02RLAaXuBdKkQv_-Kk0CLKVYqq9Dq0EsZOHqQXlfjHLIRkfNTx8YbWUIFAOM4sxFg0ryO-loSCs8c')",
                }}
              />
              <div className="absolute inset-0 bg-teal/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                  </div>
                  <div className="mt-2 bg-white px-4 py-1.5 shadow-sm text-sm font-bold text-navy">
                    TTI Tours HQ
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 p-2 text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
                Kigali, Rwanda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-navy py-stack-lg relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h4 className="font-headline-lg text-headline-lg text-white mb-6 max-w-3xl mx-auto">
            Once you&apos;ve found the perfect trip, contact us and let our travel experts take care of
            the rest.
          </h4>
          <div className="inline-block h-1 w-20 bg-teal" />
        </div>
      </section>
    </>
  )
}
