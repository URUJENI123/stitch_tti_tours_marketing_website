'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import { corridors } from '../corridor-data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const corridorImages: Record<string, string> = {
  northern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjINUSRFv7UittYpBJO6AAHXe3F0BQVZgbbW94jSc03juQ6_Hk20gQl-kYIK4-cWlQm7QCS1zjMzw75Ro6kZZWKAlB3-z9P-oqN_1ETtbsKB8G0YdUwSjzmxd5qJuj-zDhNKTAiklEmyeJ5C6SkvGddnafz_nokaD2P7UO4BPEzfpQmircKY934UXriV3-cwHqoKKIkDoht6ayxhfzkEDio8uVly4bhWBpP9k8MYyzt4kHA_Iwa07q_uX7hreGyFffWbqZwvildIg',
  southern: '/kigali-05.jpg',
  nyungwe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oiIbxWa_jyKmiiLmyah1RRIgP64Ahq3KB9CdcAe6pXzaMZS02tnsAmXfCPOHeQJLKY_qB8_QZCJNNqWAlKq1N8lOWOAjFRvH3MDmvazU-Cw1PhVXnnFn6h3SBMM66U5ZpiUrlnBARm1mKKbnl0yQZ8uCI0mvsiOPRplPw_6sBLQFKFpmZazw9Le8b9DYiavVs4tonTneeTWilVSxID2oGzJCvrTu_kfnGzpVXJCKauQ2gYkx-dRZ3rlE3u18o0KYv6KbVfv4FAU',
  kivu: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSZp3LUPi1I2JRXXtV_7TlEk82vtEA2u1ajjBQfLomfDkS1nu792Ax7vT68w8geR88tpai8BLD7gVPel_MdIldmHJY0Uonx3NDcfFFSvuUJgjd-h4qQWrKg5xGnSKrvZtgtWDMILIIgYYYrUtRL3WiR6LdZOoeYbNhq2Y2XDxm8Azz8XyWm-KyCr_OKvAm3B_aUwphymdlW5A78MZPPewTeuN4z_kkocRXcVng8NpP7LPT0QWCknZPkOtjtlqVf9s_zJsToffidOU',
  eastern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvWFiNc_hwTe79j0BMh7L5hmCeNo1Sgc05I_opjiP6zTGIANb_QJeh5GQPKQckj7mJhUZ8IXBq4RYg2WjCYB69NsJF2V1qBuqjazkUwLZ8fhoKOZ_HDQrKG_Ta5-f7N_g8gFaa1dy6FKrvS4hOIgmvfq3la0NaEtRoBRl99CrIEh8xHt8cRZJ4briF89TRFE6bdstoh_MBBG5ksmxgdDOQg0eqluOJoOOSj8EOBLaL9bA7tU2yqGfWrd2T4pX3w2NOvuH6o18RWo',
  kigali: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
}

export default function CorridorSlider() {
  const sliderRef = useRef<Slider>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
  }

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <section className="relative">
      {/* Tab Bar */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter overflow-x-auto custom-scrollbar">
          <div className="flex gap-1 min-w-max py-3">
            {corridors.map((corridor, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={corridor.id}
                  onClick={() => goToSlide(i)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-teal text-white shadow-md'
                      : 'text-on-surface-variant hover:text-navy hover:bg-surface-container-high'
                  }`}
                >
                  {corridor.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {corridors.map((corridor) => {
          const image = corridorImages[corridor.id]
          const featuredPkg = corridor.packages.find((p: any) => p.featured)
          const regularPkgs = corridor.packages.filter((p: any) => !p.featured)
          return (
            <div key={corridor.id} id={corridor.id}>
              <div className="relative min-h-[700px] flex items-center overflow-hidden">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
                <div className="relative z-20 w-full py-20 px-gutter">
                  <div className="max-w-container-max mx-auto">
                    <div className="mb-10 max-w-3xl">
                      <span className="inline-block text-teal font-bold text-sm uppercase tracking-[0.2em] mb-3 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        {corridor.tagline}
                      </span>
                      <h2 className="text-white font-headline-xl text-headline-xl mb-4 leading-tight">
                        {corridor.title}
                      </h2>
                      <p className="text-white/80 font-body-lg text-body-lg max-w-2xl">
                        {corridor.subtitle}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {featuredPkg && (
                        <div className="lg:col-span-2 bg-white/95 backdrop-blur-md rounded-xl overflow-hidden flex flex-col md:flex-row">
                          <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={featuredPkg.image || image}
                              alt={featuredPkg.name}
                            />
                          </div>
                          <div className="md:w-3/5 p-6 flex flex-col justify-between">
                            <div>
                              <span className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                Iconic Experience
                              </span>
                              <h3 className="text-navy font-headline-md text-headline-md mb-2">
                                {featuredPkg.name}
                              </h3>
                              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                {featuredPkg.desc}
                              </p>
                              {(featuredPkg as any).rules && (
                                <ul className="space-y-1 text-sm text-on-surface-variant mb-4 border-t border-outline-variant/30 pt-4">
                                  {(featuredPkg as any).rules.map((rule: string, ri: number) => (
                                    <li key={ri} className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-[16px] text-teal">check_circle</span>
                                      {rule}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            <Link
                              href={`/coffee-tour?package=${corridor.slug}`}
                              className="inline-block bg-navy text-white text-center py-3 px-6 rounded-lg font-bold hover:bg-teal transition-colors"
                            >
                              Book This Expedition
                            </Link>
                          </div>
                        </div>
                      )}
                      {regularPkgs.slice(0, 5).map((pkg, i) => (
                        <div key={i} className="bg-white/95 backdrop-blur-md rounded-xl overflow-hidden flex flex-col">
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-navy font-bold text-lg mb-2">{pkg.name}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">
                              {pkg.desc}
                            </p>
                          </div>
                          <div className="px-5 pb-5">
                            <Link
                              href={`/coffee-tour?package=${corridor.slug}`}
                              className="text-teal font-bold text-sm hover:underline inline-flex items-center gap-1"
                            >
                              Learn More
                              <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Link
                        href={`/packages/${corridor.slug}`}
                        className="inline-block bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all"
                      >
                        View All {corridor.label} Packages
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}
