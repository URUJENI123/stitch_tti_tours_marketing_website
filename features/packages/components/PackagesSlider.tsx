'use client'
import Slider from 'react-slick'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    title: 'Gorilla Trekking',
    subtitle: 'Northern Corridor — Volcanoes National Park',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjINUSRFv7UittYpBJO6AAHXe3F0BQVZgbbW94jSc03juQ6_Hk20gQl-kYIK4-cWlQm7QCS1zjMzw75Ro6kZZWKAlB3-z9P-oqN_1ETtbsKB8G0YdUwSjzmxd5qJuj-zDhNKTAiklEmyeJ5C6SkvGddnafz_nokaD2P7UO4BPEzfpQmircKY934UXriV3-cwHqoKKIkDoht6ayxhfzkEDio8uVly4bhWBpP9k8MYyzt4kHA_Iwa07q_uX7hreGyFffWbqZwvildIg',
    href: '/packages/northern-corridor',
  },
  {
    title: 'Nyungwe Forest',
    subtitle: 'Ancient Rainforest & Canopy Walkway',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oiIbxWa_jyKmiiLmyah1RRIgP64Ahq3KB9CdcAe6pXzaMZS02tnsAmXfCPOHeQJLKY_qB8_QZCJNNqWAlKq1N8lOWOAjFRvH3MDmvazU-Cw1PhVXnnFn6h3SBMM66U5ZpiUrlnBARm1mKKbnl0yQZ8uCI0mvsiOPRplPw_6sBLQFKFpmZazw9Le8b9DYiavVs4tonTneeTWilVSxID2oGzJCvrTu_kfnGzpVXJCKauQ2gYkx-dRZ3rlE3u18o0KYv6KbVfv4FAU',
    href: '/packages/nyungwe-forest',
  },
  {
    title: 'Lake Kivu Serenity',
    subtitle: 'Kivu Belt Road — Scenic Drive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSZp3LUPi1I2JRXXtV_7TlEk82vtEA2u1ajjBQfLomfDkS1nu792Ax7vT68w8geR88tpai8BLD7gVPel_MdIldmHJY0Uonx3NDcfFFSvuUJgjd-h4qQWrKg5xGnSKrvZtgtWDMILIIgYYYrUtRL3WiR6LdZOoeYbNhq2Y2XDxm8Azz8XyWm-KyCr_OKvAm3B_aUwphymdlW5A78MZPPewTeuN4z_kkocRXcVng8NpP7LPT0QWCknZPkOtjtlqVf9s_zJsToffidOU',
    href: '/packages/kivu-belt-road',
  },
  {
    title: 'Akagera Savannah Safari',
    subtitle: 'Eastern Province — Big Five Country',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvWFiNc_hwTe79j0BMh7L5hmCeNo1Sgc05I_opjiP6zTGIANb_QJeh5GQPKQckj7mJhUZ8IXBq4RYg2WjCYB69NsJF2V1qBuqjazkUwLZ8fhoKOZ_HDQrKG_Ta5-f7N_g8gFaa1dy6FKrvS4hOIgmvfq3la0NaEtRoBRl99CrIEh8xHt8cRZJ4briF89TRFE6bdstoh_MBBG5ksmxgdDOQg0eqluOJoOOSj8EOBLaL9bA7tU2yqGfWrd2T4pX3w2NOvuH6o18RWo',
    href: '/packages/eastern-province',
  },
  {
    title: 'Kigali City Heritage',
    subtitle: 'Remembrance, Culture & Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNSPsPO48VWeKptm0f7WkUp0Cmx41FrEfJKnOnQ7A9TqDNe5BSUHcQRqLDm50bbiGxT3AGoalvML--b0WLYglFj4p6haH96-q2pnw_GufBEOPSmcpxPGB770o-mGmv2tKslF8ur0ynW3PeZHPpCTaf-RzpuZa20jSgY6QOuSqks73_oH2U2OIsaRprBDtRy-MftmowIp1G4hB2PZxvp7RjP_uHCIwxFWIPPvR8vJFHCsC82qUST0M7a6S3m-0blFURe0iS3UfnUY',
    href: '/packages/kigali',
  },
]

export default function PackagesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }
  return (
    <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
      <div className="mb-stack-md">
        <span className="font-label-caps text-label-caps text-teal uppercase tracking-widest">Curated Experiences</span>
        <h2 className="font-headline-lg text-headline-lg text-navy mt-2">Featured Expeditions</h2>
      </div>
      <div className="slider-container -mx-2">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="px-2">
              <Link href={slide.href} className="block group">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={slide.image}
                    alt={slide.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-bold mb-1">{slide.title}</h3>
                    <p className="text-white/80 text-sm">{slide.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
