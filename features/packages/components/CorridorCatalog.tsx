'use client'
import { useState } from 'react'
import Link from 'next/link'
import { corridors } from '../corridor-data'

const corridorImages: Record<string, string> = {
  northern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjINUSRFv7UittYpBJO6AAHXe3F0BQVZgbbW94jSc03juQ6_Hk20gQl-kYIK4-cWlQm7QCS1zjMzw75Ro6kZZWKAlB3-z9P-oqN_1ETtbsKB8G0YdUwSjzmxd5qJuj-zDhNKTAiklEmyeJ5C6SkvGddnafz_nokaD2P7UO4BPEzfpQmircKY934UXriV3-cwHqoKKIkDoht6ayxhfzkEDio8uVly4bhWBpP9k8MYyzt4kHA_Iwa07q_uX7hreGyFffWbqZwvildIg',
  southern: '/kigali-05.jpg',
  nyungwe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oiIbxWa_jyKmiiLmyah1RRIgP64Ahq3KB9CdcAe6pXzaMZS02tnsAmXfCPOHeQJLKY_qB8_QZCJNNqWAlKq1N8lOWOAjFRvH3MDmvazU-Cw1PhVXnnFn6h3SBMM66U5ZpiUrlnBARm1mKKbnl0yQZ8uCI0mvsiOPRplPw_6sBLQFKFpmZazw9Le8b9DYiavVs4tonTneeTWilVSxID2oGzJCvrTu_kfnGzpVXJCKauQ2gYkx-dRZ3rlE3u18o0KYv6KbVfv4FAU',
  kivu: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSZp3LUPi1I2JRXXtV_7TlEk82vtEA2u1ajjBQfLomfDkS1nu792Ax7vT68w8geR88tpai8BLD7gVPel_MdIldmHJY0Uonx3NDcfFFSvuUJgjd-h4qQWrKg5xGnSKrvZtgtWDMILIIgYYYrUtRL3WiR6LdZOoeYbNhq2Y2XDxm8Azz8XyWm-KyCr_OKvAm3B_aUwphymdlW5A78MZPPewTeuN4z_kkocRXcVng8NpP7LPT0QWCknZPkOtjtlqVf9s_zJsToffidOU',
  eastern: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvWFiNc_hwTe79j0BMh7L5hmCeNo1Sgc05I_opjiP6zTGIANb_QJeh5GQPKQckj7mJhUZ8IXBq4RYg2WjCYB69NsJF2V1qBuqjazkUwLZ8fhoKOZ_HDQrKG_Ta5-f7N_g8gFaa1dy6FKrvS4hOIgmvfq3la0NaEtRoBRl99CrIEh8xHt8cRZJ4briF89TRFE6bdstoh_MBBG5ksmxgdDOQg0eqluOJoOOSj8EOBLaL9bA7tU2yqGfWrd2T4pX3w2NOvuH6o18RWo',
  kigali: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
}

const corridorIcons: Record<string, string> = {
  northern: 'terrain',
  southern: 'museum',
  nyungwe: 'forest',
  kivu: 'sailing',
  eastern: 'safari',
  kigali: 'location_city',
}

export default function CorridorCatalog() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section className="py-stack-lg bg-offwhite">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12">
          <span className="font-label-caps text-label-caps text-teal uppercase tracking-widest">Explore by Region</span>
          <h2 className="font-headline-lg text-headline-lg text-navy mt-3">
            A Land of a Thousand Hills — Six Distinct Worlds
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Each corridor tells a different story. Open one and step into its world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((corridor) => {
            const image = corridorImages[corridor.id]
            const icon = corridorIcons[corridor.id]
            const isOpen = expanded === corridor.id
            const featuredPkg = corridor.packages.find((p: any) => p.featured)
            const regularPkgs = corridor.packages.filter((p: any) => !p.featured)

            return (
              <div
                key={corridor.id}
                id={corridor.id}
                className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500 ${
                  isOpen ? 'lg:col-span-3 md:col-span-2 col-span-1' : 'hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Cover */}
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    isOpen ? 'h-64' : 'h-72'
                  } transition-all duration-500`}
                  onClick={() => toggle(corridor.id)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={image}
                    alt={corridor.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex items-center gap-2 text-teal text-sm font-bold uppercase tracking-widest mb-2">
                      <span className="material-symbols-outlined text-lg">{icon}</span>
                      {corridor.tagline}
                    </span>
                    <h3 className="text-white text-2xl font-bold">{corridor.title}</h3>
                    <p className="text-white/70 text-sm mt-1 max-w-lg">{corridor.subtitle}</p>
                  </div>
                  <div className={`absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}>
                    <span className="material-symbols-outlined text-white">add</span>
                  </div>
                </div>

                {/* Expanded Packages */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 border-t border-outline-variant/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {featuredPkg && (
                        <div className="lg:col-span-2 bg-surface-container-low rounded-xl overflow-hidden flex flex-col md:flex-row">
                          <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={featuredPkg.image || image}
                              alt={featuredPkg.name}
                            />
                          </div>
                          <div className="md:w-3/5 p-5 flex flex-col justify-between">
                            <div>
                              <span className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                Iconic Experience
                              </span>
                              <h4 className="font-headline-md text-headline-md text-navy mb-2">{featuredPkg.name}</h4>
                              <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{featuredPkg.desc}</p>
                              {(featuredPkg as any).rules && (
                                <ul className="space-y-1 text-sm text-on-surface-variant mb-3 border-t border-outline-variant/30 pt-3">
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
                              className="mt-3 inline-block bg-navy text-white text-center py-3 px-6 rounded-lg font-bold hover:bg-teal transition-colors text-sm"
                            >
                              Book This Expedition
                            </Link>
                          </div>
                        </div>
                      )}
                      {regularPkgs.map((pkg, i) => (
                        <div key={i} className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                          <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-navy font-bold mb-1.5">{pkg.name}</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">{pkg.desc}</p>
                          </div>
                          <div className="px-4 pb-4">
                            <Link
                              href={`/coffee-tour?package=${corridor.slug}`}
                              className="text-teal font-bold text-xs hover:underline inline-flex items-center gap-1"
                            >
                              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        href={`/packages/${corridor.slug}`}
                        className="inline-block bg-navy/10 text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-lg font-bold transition-all text-sm"
                      >
                        View All {corridor.label} Packages &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
