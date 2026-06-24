import Link from 'next/link'

const services = [
  { icon: 'airport_shuttle', title: 'Transport', desc: 'Seamless luxury transfers and rugged 4x4 vehicles for any terrain.' },
  { icon: 'apartment', title: 'Hotel Booking', desc: "Exclusive partnerships with Rwanda's finest boutique lodges and hotels." },
  { icon: 'confirmation_number', title: 'Attraction Booking', desc: 'Priority access to national parks, gorilla permits, and cultural sites.' },
  { icon: 'explore', title: 'Guiding', desc: 'Expert local storytellers and naturalists who know the hidden trails.' },
  { icon: 'cottage', title: 'Home Staying', desc: 'Authentic community immersion with carefully vetted local families.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[409px] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfUpENixeZiGicHF21-x7L9MPlLG1bddWI9yLDr2qidOEABPWmLp9zPotIATpCdUmh26PztGdQS0CpAdMR5zzgIWvGtXjVhUTEuqMPVFTr_2KKySFgivMaAOTvNk-jy1dQismlDfUIVYk-dvsqZEIHhAHGmSnP-QoL7yOPOhJD9KIo_oYbFOzEWyQ7kNks4EZIltmDnWLYI8AQgEI3CfuYikELRUAkGSBRqg0BHua35BQ104w7BECcjBwZnXgJS2r82GNJMNZn7dU')",
            }}
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl text-white">
            <span className="font-label-caps text-label-caps uppercase tracking-widest mb-4 block">
              Bespoke Experiences
            </span>
            <h1 className="font-headline-xl text-headline-xl mb-6">Our Premium Services</h1>
            <p className="font-body-lg text-body-lg opacity-90">
              Beyond the horizon, we orchestrate every detail of your East African expedition with
              surgical precision and Rwandan heart.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-stack-lg max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-stack-md">
          {services.map((svc) => (
            <div key={svc.title} className="group bg-white p-stack-md rounded-xl premium-shadow premium-shadow-hover transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-teal text-[40px]">{svc.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-navy mb-3">{svc.title}</h3>
              <p className="font-body-md text-on-surface-variant">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Section */}
      <section className="bg-surface-container py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-8 relative overflow-hidden rounded-xl premium-shadow h-[300px] md:h-auto">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6YoTIgNSivGL7kcVx6Ow7sjnPGG_puK3UgrTrZJBM6Hakgx2H2vGd6j69n8BbTSlJIDE1nF6euUvDr7xgHOP_6UYdw3gFqh_1UzsXPqpAB01jJ2uEwc62FG11D5Rsoj7us3glP-0lDwlrexe9imBxsly_Fc9zUeuHJB-US-VQrkpp0M-etECFDq2XdvlYgo5LVnWDik7oL0e7Ifc7MrXsRPiiQCNxfhwA4P2ps6f1BAzRSqAhRjfAsMrJ3V6wIGA8QiCz_LBpIec')",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
                <h4 className="font-headline-md text-headline-md mb-2">The TTI Standard</h4>
                <p className="font-body-md opacity-90 max-w-lg">
                  Every transfer is more than just a ride — it&apos;s the first chapter of your story.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6 h-[400px] md:h-auto">
              <div className="relative overflow-hidden rounded-xl premium-shadow">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB6mSUeYdxyX5L6Dqs9uoXxIkCVB5X4sGp8HD5mCJy-g0-bAWcFjrJ5P3fx4CYZ5653OL6ViChLFikjxmezDXIXRAxs6rMsO02oXMeyIehNbmRCdSnbH2M3_49o5AkwDRmvZTd1OYSHojmSMwAKR7L612nhgZKGRngmVmUqlaUNmJObhTzj55kTPOFKO28iEpOYmavIx1EwE64wlvdUEu_ycNfAROiudBief5fTwRzcjqJFLbLUUZkNNkqABKWF_IArrxgvKAQ3Fo')",
                  }}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl premium-shadow bg-navy p-8 flex flex-col justify-center items-center text-center">
                <h4 className="font-headline-md text-headline-md text-white mb-4">Ready for Adventure?</h4>
                <Link
                  href="/contact"
                  className="inline-block bg-teal text-white px-8 py-3 rounded-xl font-body-md font-bold hover:bg-teal/90 transition-all"
                >
                  Tailor Your Trip
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service List */}
      <section className="py-stack-lg max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col gap-stack-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <span className="text-teal font-label-caps uppercase tracking-widest mb-4 block">01 / Accommodation</span>
              <h2 className="font-headline-lg text-headline-lg text-navy mb-6">World-Class Lodging Selection</h2>
              <p className="font-body-lg text-on-surface-variant mb-6">
                From the cloud-shrouded peaks of Volcanoes National Park to the serene shores of Lake
                Kivu, we handpick accommodations that balance ecological responsibility with
                uncompromising comfort.
              </p>
              <ul className="space-y-3">
                {['Preferred rates at luxury eco-lodges', 'Verified sanitation and safety standards', '24/7 concierge support during your stay'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body-md text-on-surface">
                    <span className="material-symbols-outlined text-teal">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden premium-shadow">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkE2KKB5HG3QhZy5lbvlpGf1JIzyXSTsM87Eh_Vfe-fc7F54xC_uamsErt0fnbpjz6mQij8hPHH33ZczrAH_1Dtr567XMd4BGudDDoQduwJ5yNTBtOtcp_QXexWZiqio39XO3bbRGXdN5QW9Gr3TgnSlQUgXUE-aNAQ7Kqj1mDM1doxFhbcfuJd5o8uxV8isHoQKSgd2I3kHy-JlL6xT4J2BXjqF70viaWfYTvsbTQvSmrh8h4fVH-uh8Q68VieHXcqL2yM2xfShw')",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden premium-shadow">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4UZKSEetV8yaoo0kMI4ci9mEIVbUZftgOBGjgxQN0tuUr0-b23XEoGrsnS1hhvJN5X9S7LLxNpTcXXampWeV5jKAkU2XaIh06i2H2PUZ55Ksc2_ugaAuitLXCB2XJLTM5ATY9hIWiSnGxdcL6kbAlqweVTQX3beC8uLFI5C7CNWKwWHdlBDvToBjJ7wmtAH7-VFfktjW3O8oXSPtIO7do3F-Vrxs1grcQ0MRTpBsWQXcoUbtjxKHT2ZyDE8yrUcBUmfVaCCI7kpE')",
                }}
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-teal font-label-caps uppercase tracking-widest mb-4 block">02 / Community</span>
              <h2 className="font-headline-lg text-headline-lg text-navy mb-6">Authentic Local Connections</h2>
              <p className="font-body-lg text-on-surface-variant mb-6">
                Experience Rwanda through the eyes of its people. Our home-stay and community tourism
                programs are designed to benefit local families directly while providing you with an
                unforgettable, heart-to-heart experience.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-navy font-bold hover:text-teal transition-colors group"
              >
                Learn about our impact
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-stack-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-teal mb-4 block">Reservations</span>
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Ready to Start Your Journey?</h2>
            <p className="font-body-md text-on-surface-variant">
              Contact our travel designers today to craft a bespoke Rwandan experience tailored perfectly to your interests and pace.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-stack-md">
            <Link href="/contact" className="bg-teal text-white px-10 py-4 rounded-xl font-body-md font-bold premium-shadow hover:bg-teal/90 transition-all">
              Tailor Your Trip
            </Link>
            <Link href="/packages" className="border-2 border-navy text-navy px-10 py-4 rounded-xl font-body-md font-bold hover:bg-navy hover:text-white transition-all">
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
