import Link from 'next/link'
import type { Metadata } from 'next'
import CorridorNav from '@/components/CorridorNav'

export const metadata: Metadata = {
  title: 'Tour Packages | TTI Tours Ltd.',
  description:
    'Explore Rwanda with TTI Tours. Gorilla trekking, Nyungwe canopy walk, Lake Kivu cruises, Akagera safaris, and cultural tours.',
}

const corridors = [
  {
    id: 'northern',
    slug: 'northern-corridor',
    label: 'Northern Corridor',
    title: 'Northern Corridor — Volcanoes National Park',
    subtitle: 'The heart of Rwanda\'s conservation efforts and the majestic home of the mountain gorillas.',
    tagline: 'Explore the Highlands',
    packages: [
      { name: 'Gorilla Trekking', featured: true,
        desc: 'Witness the legendary Mountain Gorillas in their natural habitat. Rwanda currently has 12 habituated gorilla families available to visit. The annual "Kwita Izina" baby gorilla naming ceremony, held since 2005, is rooted in a centuries-old Rwandan tradition. Only 8 people per gorilla family per day, visits capped at one hour, minimum age of 15.',
        rules: ['Maintain 10m distance', 'Maximum 1 hour observation', 'No flash photography'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjINUSRFv7UittYpBJO6AAHXe3F0BQVZgbbW94jSc03juQ6_Hk20gQl-kYIK4-cWlQm7QCS1zjMzw75Ro6kZZWKAlB3-z9P-oqN_1ETtbsKB8G0YdUwSjzmxd5qJuj-zDhNKTAiklEmyeJ5C6SkvGddnafz_nokaD2P7UO4BPEzfpQmircKY934UXriV3-cwHqoKKIkDoht6ayxhfzkEDio8uVly4bhWBpP9k8MYyzt4kHA_Iwa07q_uX7hreGyFffWbqZwvildIg',
        price: 'From $1,500' },
      { name: 'Karisimbi Hiking', desc: 'Climb the highest of the Virunga volcanoes at 4,507m for a challenging multi-day trek.', image: '' },
      { name: 'Bisoke Hiking', desc: 'Ascend to the stunning crater lake at the summit of Mount Bisoke.', image: '' },
      { name: 'Gahinga Hiking', desc: 'Explore the extinct volcano with its unique bamboo forest ecosystem.', image: '' },
      { name: 'Sabyinyo Climbing', desc: 'Trek to the "Old Man\'s Teeth" — a challenging climb across three countries.', image: '' },
      { name: 'Iby\'Iwacu Cultural Village', desc: 'Immerse yourself in traditional Rwandan village life and customs.', image: '' },
      { name: 'Gorilla Museum', desc: 'Learn about conservation history and gorilla research at the base of the volcanoes.', image: '', featured: false },
      { name: 'Coffee Farm Tour Experience', desc: 'Visit local coffee plantations and learn the crop-to-cup process.', image: '', featured: false },
      { name: 'Twin Lakes', desc: 'Visit Lake Burera and Lake Ruhondo — two stunning crater lakes with breathtaking views.', image: '', featured: false },
    ],
  },
  {
    id: 'southern',
    slug: 'southern-corridor',
    label: 'Southern Corridor',
    title: 'Southern Corridor',
    subtitle: 'A deep dive into Rwanda\'s royal history, cultural heritage, and the somber lessons of Murambi.',
    tagline: 'Southern History',
    packages: [
      { name: 'King\'s Palace', desc: 'Visit the restored royal palace in Nyanza, the seat of the ancient Rwandan monarchy.', image: '', featured: false },
      { name: 'Ethnographic Museum', desc: 'Explore one of Africa\'s finest ethnographic museums in Huye, showcasing Rwandan cultural artifacts.', image: '', featured: false },
      { name: 'Coffee Tour Experience', desc: 'Travel to the southern coffee-growing regions for a unique agrotourism experience.', image: '', featured: false },
      { name: 'Murambi Genocide Memorial', desc: 'A dignified place of remembrance. We approach this visit with profound respect, allowing travelers to understand Rwanda\'s journey of healing.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwf3PRg9j3IC02mQskZkza73URTjSTfDZUcV4z3V2cAVXGunWLxCO1Y3pQmfdWr2vs4MMiHF4ScchzEE5Z-HE4L9rt2Mo9AwCwUbTN2trAW54-cRziYHlf7xBgzzveYGNQr7GKgA_foeN-9ahqQrvDKqJhKtLDtM2upZtbQ7us1om5Big279t2K4AjbLcC4AsQ5zAlYlR-mTvuxw0xd6BTtg9vtoqK_NTJcF90JBi7Q40Xss11ae0ky6VZfqh4s_l1L92f6uSPdM8', memorial: true },
    ],
  },
  {
    id: 'nyungwe',
    slug: 'nyungwe-forest',
    label: 'Nyungwe Forest',
    title: 'Nyungwe Forest National Park',
    subtitle: 'One of Africa\'s oldest rainforests, home to 13 primate species and the famous canopy walkway.',
    tagline: 'Ancient Rainforest',
    packages: [
      { name: 'Chimpanzee Trekking', desc: 'Track habituated chimpanzee troops through the ancient rainforest.', image: '' },
      { name: 'Nyungwe Guided Nature Walks', desc: 'Explore diverse trails through one of Africa\'s oldest rainforests.', image: '' },
      { name: 'Nyungwe Bird Watching', desc: 'Spot over 300 bird species, including 26 endemics to the Albertine Rift.', image: '' },
      { name: 'Nyungwe Canopy Walk', desc: 'Walk among the clouds on Africa\'s highest canopy walkway, suspended 50m above the forest floor.', image: '' },
      { name: 'Tropical Waterfall Guided Hike', desc: 'Hike through dense forest to discover stunning waterfalls.', image: '' },
      { name: 'Congo Nile Divide Guided Hike', desc: 'Trek along the continental divide separating the Congo and Nile basins.', image: '' },
    ],
  },
  {
    id: 'kivu',
    slug: 'kivu-belt-road',
    label: 'Kivu Belt Road',
    title: 'Kivu Belt Road',
    subtitle: 'The most beautiful road in Rwanda, winding along the sapphire waters and emerald islands of Lake Kivu.',
    tagline: 'Scenic Drive',
    packages: [
      { name: 'Boat Experience on Lake Kivu', desc: 'Sunset cruises and island-hopping adventures from Karongi and Rubavu.', image: '' },
      { name: 'Island Visits on Lake Kivu', desc: 'Explore the serene islands of Lake Kivu from Karongi.', image: '' },
    ],
  },
  {
    id: 'eastern',
    slug: 'eastern-province',
    label: 'Eastern Province',
    title: 'Eastern Province — Akagera National Park',
    subtitle: 'Savannah safaris in Rwanda\'s Big Five national park. Boat trips on Lake Ihema.',
    tagline: 'Savannah Wilderness',
    packages: [
      { name: 'Akagera National Park', desc: 'Witness the Big Five in Central Africa\'s largest protected wetland. Game drives and boat safaris available.', image: '' },
    ],
  },
  {
    id: 'kigali',
    slug: 'kigali',
    label: 'Kigali City',
    title: 'Kigali & Historical Legacies',
    subtitle: 'Remembrance, reflection, and the vibrant culture of Africa\'s cleanest city.',
    tagline: 'Remembrance & Reflection',
    packages: [
      { name: 'Kigali Genocide Memorial', desc: 'A place of dignified remembrance. Guided tours are conducted respectfully. Photography is restricted in sacred areas.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj6aIoBAgt21Bbyc-9-RFFE7UYTkUoJS8d8xrWKxmRPvySWjMpYF_TmEpQBk-M7j12Fkb-X9cJxmGiCwxpKY6SEq8dqEGvrdXZHbqb22zpryiWe9vk6hXSeuT-wKzeGwYQTlme8T9Tn4aZHpsDJZzEmRJNVgerrGWGD0Fs3SU6Ccsecd73yn1Axq28XdeJl5BnnHy_xgAhYx9R8tljcsAYvSGoGG9DkPyUfz8XnxQxIycJRzMBweOg3p8ag5_mUy78hoxpA2ayb9c', memorial: true },
      { name: 'Richard Kandt Museum', desc: 'The former home of Rwanda\'s first German resident, now a natural history museum.', image: '' },
      { name: 'Liberation Museum', desc: 'Learn about Rwanda\'s post-genocide reconstruction and reconciliation journey.', image: '' },
      { name: 'Nyandungu Eco Park', desc: 'A restored urban wetland and eco-park perfect for nature walks within Kigali.', image: '' },
      { name: 'Kigali City Tour', desc: 'Explore Kigali\'s vibrant markets, art galleries, and world-class coffee scene.', image: '' },
    ],
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU5sTK7ta6-hb_-LV6g1vE6JoBAO3sZX1xWp_wSHN-bnMqEYWGGhSW5-LbI03n2nXzka5PrYTm2K0EVpcoobu8kovlSsbN1EAeilLCCKxS-ZqYpOimBI65L-GzfmqSiAuGk8WyOBIchGF3lvWkeJN-O63KPkfgaHiZeT5LvXkFBI5oHyOIbmmtI5Mx6ttuaEpZuIru8UV7S5QUG5hI1T6pxQACVAJHd59nEHC0qDlO28xLHTv_uiWUYPWzs34ee52OW6elL_fpLiU')",
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

      {/* Sticky Corridor Nav */}
      <CorridorNav corridors={corridors} />

      {/* Corridor Sections */}
      {corridors.map((corridor) => (
        <section key={corridor.id} className="py-stack-lg px-gutter max-w-container-max mx-auto" id={corridor.id}>
          <div className="mb-stack-md flex flex-col md:flex-row md:items-end justify-between gap-stack-sm">
            <div>
              <span className="font-label-caps text-label-caps text-teal uppercase tracking-widest">{corridor.tagline}</span>
              <h2 className="font-headline-lg text-headline-lg text-navy mt-2">{corridor.title}</h2>
            </div>
            <p className="max-w-md text-on-surface-variant italic">{corridor.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
            {corridor.packages.map((pkg: any, i) => (
              pkg.featured ? (
                <div key={i} className="lg:col-span-2 bg-white rounded-xl overflow-hidden tour-card flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={pkg.image} alt={pkg.name} />
                  </div>
                  <div className="md:w-1/2 p-stack-md flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Iconic Experience</span>
                        <div className="text-navy font-bold">{pkg.price}</div>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-navy mb-2">{pkg.name}</h3>
                      <p className="text-on-surface-variant mb-4">{pkg.desc}</p>
                      {pkg.rules && (
                        <div className="space-y-2 border-t border-outline-variant/30 pt-4 mb-4">
                          <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider">Visitor Rules & Ethics</h4>
                          <ul className="text-sm space-y-1 text-on-surface-variant">
                            {pkg.rules.map((rule: string, ri: number) => (
                              <li key={ri} className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">check_circle</span> {rule}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <Link href={`/coffee-tour?package=${corridor.slug}`} className="w-full bg-navy text-white py-3 rounded font-bold hover:bg-teal transition-colors text-center block">
                      Book This Expedition
                    </Link>
                  </div>
                </div>
              ) : (
                <div key={i} className="bg-white rounded-xl overflow-hidden tour-card flex flex-col">
                  {pkg.image && !pkg.memorial && (
                    <div className="h-48 overflow-hidden">
                      <img className="w-full h-full object-cover" src={pkg.image} alt={pkg.name} />
                    </div>
                  )}
                  {pkg.memorial && (
                    <div className="h-48 overflow-hidden">
                      <img className="w-full h-full object-cover" src={pkg.image} alt={pkg.name} />
                    </div>
                  )}
                  <div className="p-stack-md flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-navy mb-2">{pkg.name}</h3>
                      <p className="text-sm text-on-surface-variant mb-4">{pkg.desc}</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
                      <Link href={`/coffee-tour?package=${corridor.slug}`} className="text-teal font-bold text-sm hover:underline">Learn More</Link>
                      <span className="material-symbols-outlined text-teal">arrow_forward</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      ))}

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
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant uppercase">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant uppercase">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">Interested In</label>
                  <select className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all">
                    <option>Mountain Gorilla Trekking</option>
                    <option>Kigali & Historical Legacies</option>
                    <option>Southern Corridor & Murambi</option>
                    <option>Nyungwe Forest Expedition</option>
                    <option>Kivu Belt Scenic Drive</option>
                    <option>Akagera Safari (Eastern Province)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase">Message</label>
                  <textarea rows={4} placeholder="Tell us about your group size and preferred dates..." className="w-full p-3 rounded border border-outline-variant/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />
                </div>
                <button type="submit" className="w-full bg-navy text-white py-4 rounded-lg font-bold hover:bg-teal transition-colors active:scale-95">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
