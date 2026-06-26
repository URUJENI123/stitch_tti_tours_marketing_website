import Link from 'next/link'

const featuredPackages = [
  {
    title: 'Volcanoes & Gorilla Trekking',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkuRveiZWCNf71vHvpGOoWp5gg35DAmuuMV3SOrIvoonFGl9r6_NvKXOgulOZX02a74OIeSGh1XpKqBNnoGqdIFXnR2XivUDCamUXK0lr5_IXfF4P6zJ46jgQuqf_7_r-H_ZfzIe150UOXJtHy9G_wHzLCQGQFbpZXiqKMxXgk6lO97Qk8xiK_meKt74HpqViuaRlLjRXAQi6zXCYnHnaeJE3B2ooQb179sx9hjbyXO2oheaH3griFhXi8lMvb2R7liMaYIFtAPrw',
    description:
      'A life-changing encounter with the mountain gorillas in their natural habitat within the misty volcanic peaks.',
    href: '/packages/northern-corridor',
    badge: 'POPULAR',
  },
  {
    title: 'Nyungwe Forest Canopy',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oiIbxWa_jyKmiiLmyah1RRIgP64Ahq3KB9CdcAe6pXzaMZS02tnsAmXfCPOHeQJLKY_qB8_QZCJNNqWAlKq1N8lOWOAjFRvH3MDmvazU-Cw1PhVXnnFn6h3SBMM66U5ZpiUrlnBARm1mKKbnl0yQZ8uCI0mvsiOPRplPw_6sBLQFKFpmZazw9Le8b9DYiavVs4tonTneeTWilVSxID2oGzJCvrTu_kfnGzpVXJCKauQ2gYkx-dRZ3rlE3u18o0KYv6KbVfv4FAU',
    description:
      "Walk among the clouds on Africa's highest canopy walkway and discover chimpanzees in an ancient rainforest.",
    href: '/packages#nyungwe',
    badge: null,
  },
  {
    title: 'Lake Kivu Serenity',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSZp3LUPi1I2JRXXtV_7TlEk82vtEA2u1ajjBQfLomfDkS1nu792Ax7vT68w8geR88tpai8BLD7gVPel_MdIldmHJY0Uonx3NDcfFFSvuUJgjd-h4qQWrKg5xGnSKrvZtgtWDMILIIgYYYrUtRL3WiR6LdZOoeYbNhq2Y2XDxm8Azz8XyWm-KyCr_OKvAm3B_aUwphymdlW5A78MZPPewTeuN4z_kkocRXcVng8NpP7LPT0QWCknZPkOtjtlqVf9s_zJsToffidOU',
    description:
      'Experience the tranquil beauty of Rwanda\'s largest lake with sunset cruises and boutique lakeside stays.',
    href: '/packages#kivu',
    badge: null,
  },
  {
    title: 'Akagera Savannah Safari',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvWFiNc_hwTe79j0BMh7L5hmCeNo1Sgc05I_opjiP6zTGIANb_QJeh5GQPKQckj7mJhUZ8IXBq4RYg2WjCYB69NsJF2V1qBuqjazkUwLZ8fhoKOZ_HDQrKG_Ta5-f7N_g8gFaa1dy6FKrvS4hOIgmvfq3la0NaEtRoBRl99CrIEh8xHt8cRZJ4briF89TRFE6bdstoh_MBBG5ksmxgdDOQg0eqluOJoOOSj8EOBLaL9bA7tU2yqGfWrd2T4pX3w2NOvuH6o18RWo',
    description:
      "Witness the Big Five in Central Africa's largest protected wetland. A classic savannah experience redefined.",
    href: '/packages#eastern',
    badge: null,
  },
  {
    title: 'Kigali City Heritage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
    description:
      'Discover the resilient heart of Rwanda. Visit the Memorial, artisan markets, and world-class coffee houses.',
    href: '/packages#kigali',
    badge: null,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[921px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdcpREW5gG_oJyw_vlxi5_WEZLM_GBH0Ny_z5RWt-WtAIk_FdlO4mZ5ZPtmM9fAOexDmJXx-afwSosl2Lj7t88JFxw0GX7wwyWdK3qzWJ0HZ4_Ff7u6tePIAyx3qDvoeOiHYZyJujwJhG66ahGRWT-WNCQ3wWjAPt_5gqMcXANgsKV0RZt6OplE6KxrFPOCv9oAV40ZaCFB5bXODXAKdvmhrHqSdDsl98r1gX4-jgeM03N5u9R3_rNdlRPYMSpj-7XbPUInR8eGA4')",
            }}
          />
          <div className="absolute inset-0 bg-navy/20 backdrop-brightness-75" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 text-center text-white">
          <h1 className="font-headline-xl text-headline-xl font-bold mb-6 max-w-4xl mx-auto drop-shadow-md">
            Welcome to TTI Tour Company
          </h1>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-95">
            Discover the heart of Rwanda with curated, sustainable travel experiences that connect you
            to the soul of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              Explore Packages
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl">
            keyboard_double_arrow_down
          </span>
        </div>
      </section>

      {/* Intro */}
      <section className="py-stack-lg bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-teal mb-4 block">
                PREMIUM EXPEDITIONS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-navy mb-8 leading-tight">
                Crafting Lifelong Memories Through Authentic Discovery
              </h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
                <p>
                  TTI Tours Ltd believes travel is about creating lifelong memories, not just visiting
                  new places. We offer a wide range of carefully curated tours and excursions across
                  Rwanda — from relaxing getaways to adventurous safaris and cultural tours — tailored
                  to each traveler&apos;s preferences.
                </p>
                <p>
                  Our team of experienced travel consultants builds personalized, tailor-made
                  itineraries, backed by strong local partnerships for accommodations, transportation,
                  and guiding. We champion sustainable, responsible tourism — minimizing environmental
                  impact while maximizing benefits for local communities.
                </p>
              </div>
              <div className="mt-10 flex gap-12 border-t border-surface-container-high pt-10">
                <div className="text-center">
                  <span className="material-symbols-outlined text-teal text-3xl mb-1 block">calendar_month</span>
                  <span className="block font-headline-md text-headline-md font-bold text-navy">
                    15+
                  </span>
                  <span className="text-sm font-label-caps text-on-surface-variant">
                    YEARS EXPERIENCE
                  </span>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-teal text-3xl mb-1 block">groups</span>
                  <span className="block font-headline-md text-headline-md font-bold text-navy">
                    100%
                  </span>
                  <span className="text-sm font-label-caps text-on-surface-variant">
                    LOCAL GUIDES
                  </span>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-teal text-3xl mb-1 block">support_agent</span>
                  <span className="block font-headline-md text-headline-md font-bold text-navy">
                    24/7
                  </span>
                  <span className="text-sm font-label-caps text-on-surface-variant">
                    CONCIERGE SUPPORT
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full aspect-[4/5] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzarn5X9zJKMsQChT-WJ1RUJsXnnTZmr7ZhUdT6pwwHBdSxMQNBYu6uTK1Cz_2vf77eE1u35KgwVT2Np7ZURVn7oKVP9HE_6mjqDpsg6YE6jNP8KF4_5VoqE28wMtu_xLZdH5bgRAhhMoBx5M7IYeBsALuIjEwqc6-PKzJJGZqhsZcrK1te8DWtbOTkFyW5EohoCQvVUOXKcX3epOYujctkUWRBUoO0-5bTYKd81ThV3mYW45X4zNB8lZwgKmzFQHzaL2A0M0VRiw"
                  alt="Rwandan community tourism"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal p-8 rounded-xl text-white shadow-xl max-w-[240px] hidden sm:block">
                <span className="material-symbols-outlined text-4xl mb-4">verified</span>
                <p className="font-bold text-lg leading-snug">
                  Certified Sustainable Tourism Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-stack-lg bg-offwhite" id="packages">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-teal mb-4 block">
                EXPLORE THE LAND OF A THOUSAND HILLS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-navy">
                Featured Expedition Packages
              </h2>
            </div>
            <Link
              href="/packages"
              className="text-navy font-bold flex items-center gap-2 hover:underline"
            >
              View All Packages{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.slice(0, 4).map((pkg, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm card-hover transition-all flex flex-col group h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={pkg.image}
                    alt={pkg.title}
                  />
                  {pkg.badge && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-navy tracking-wider">
                      {pkg.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-navy mb-3">{pkg.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-1">
                    {pkg.description}
                  </p>
                  <Link
                    href={pkg.href}
                    className="inline-flex items-center gap-2 font-bold text-navy hover:text-teal transition-colors group/link"
                  >
                    Learn More{' '}
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            {/* Kigali City card spans 2 cols */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm card-hover transition-all flex flex-col group h-full lg:col-span-2">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={featuredPackages[4].image}
                    alt={featuredPackages[4].title}
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {featuredPackages[4].title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-8">
                    {featuredPackages[4].description}
                  </p>
                  <Link
                    href="/packages#kigali"
                    className="inline-flex items-center gap-2 font-bold text-navy hover:text-teal transition-colors group/link"
                  >
                    Learn More{' '}
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TTI */}
      <section className="py-stack-lg bg-navy text-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-teal mb-4 block">
              THE TTI ADVANTAGE
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold">Why Travel With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: 'route',
                title: 'Personalized Itineraries',
                desc: 'Tailored journeys designed around your pace, interests, and curiosity.',
              },
              {
                icon: 'diversity_3',
                title: 'Local Expertise',
                desc: 'Guided by Rwandans who know every hill, story, and hidden trail by heart.',
              },
              {
                icon: 'forest',
                title: 'Sustainable Travel',
                desc: 'We invest back into local communities and conservation projects.',
              },
              {
                icon: 'handshake',
                title: 'Trusted Partnerships',
                desc: 'Access to exclusive lodges and premium logistics through our network.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all border border-white/20">
                  <span className="material-symbols-outlined text-4xl text-teal">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-stack-lg bg-surface-container-high relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 relative z-10 text-center">
          <div className="bg-white p-12 lg:p-20 rounded-3xl shadow-xl max-w-5xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-navy mb-6">
              Your Rwandan adventure starts with a single conversation.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Thank you for considering TTI Tours Ltd for your travel plans — let&apos;s start your
              journey today. Our travel specialists are ready to design your perfect escape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg min-w-[200px]"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-4 text-navy">
                <div className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-label-caps text-on-surface-variant">
                    WHATSAPP US
                  </span>
                  <span className="font-bold">+250 788 123 456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-navy/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </section>
    </>
  )
}
