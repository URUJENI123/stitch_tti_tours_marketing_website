import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

const corridorData: Record<string, { title: string; description: string; image: string; packages: { name: string; desc: string }[] }> = {
  'northern-corridor': {
    title: 'Northern Corridor — Volcanoes National Park',
    description: 'The heart of Rwanda\'s conservation efforts and the majestic home of the mountain gorillas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjINUSRFv7UittYpBJO6AAHXe3F0BQVZgbbW94jSc03juQ6_Hk20gQl-kYIK4-cWlQm7QCS1zjMzw75Ro6kZZWKAlB3-z9P-oqN_1ETtbsKB8G0YdUwSjzmxd5qJuj-zDhNKTAiklEmyeJ5C6SkvGddnafz_nokaD2P7UO4BPEzfpQmircKY934UXriV3-cwHqoKKIkDoht6ayxhfzkEDio8uVly4bhWBpP9k8MYyzt4kHA_Iwa07q_uX7hreGyFffWbqZwvildIg',
    packages: [
      { name: 'Gorilla Trekking', desc: 'Rwanda has 12 habituated gorilla families. Only 8 visitors per family per day, one-hour visits, minimum age 15.' },
      { name: 'Karisimbi Hiking', desc: 'Climb the highest Virunga volcano at 4,507m.' },
      { name: 'Bisoke Hiking', desc: 'Ascend to the stunning crater lake summit.' },
      { name: 'Gahinga Hiking', desc: 'Explore the extinct volcano\'s bamboo forest.' },
      { name: 'Sabyinyo Climbing', desc: 'Trek the "Old Man\'s Teeth" across three countries.' },
      { name: 'Iby\'Iwacu Cultural Village', desc: 'Immerse in traditional Rwandan village life.' },
      { name: 'Gorilla Museum', desc: 'Learn about conservation history at the volcanoes\' base.' },
      { name: 'Coffee Farm Tour Experience', desc: 'Visit coffee plantations for a crop-to-cup journey.' },
      { name: 'Twin Lakes', desc: 'Visit Lake Burera and Lake Ruhondo crater lakes.' },
    ],
  },
  'southern-corridor': {
    title: 'Southern Corridor',
    description: 'Rwanda\'s royal history and cultural heritage.',
    image: '',
    packages: [
      { name: 'King\'s Palace', desc: 'Visit the restored royal palace in Nyanza.' },
      { name: 'Ethnographic Museum', desc: 'Explore one of Africa\'s finest ethnographic museums in Huye.' },
      { name: 'Coffee Tour Experience', desc: 'Agrotourism in the southern coffee regions.' },
      { name: 'Murambi Genocide Memorial', desc: 'A dignified place of remembrance.' },
    ],
  },
  'nyungwe-forest': {
    title: 'Nyungwe Forest National Park',
    description: 'One of Africa\'s oldest rainforests, with 13 primate species and the famous canopy walkway.',
    image: '',
    packages: [
      { name: 'Chimpanzee Trekking', desc: 'Track habituated chimp troops.' },
      { name: 'Nyungwe Guided Nature Walks', desc: 'Explore ancient rainforest trails.' },
      { name: 'Nyungwe Bird Watching', desc: 'Spot 300+ bird species.' },
      { name: 'Nyungwe Canopy Walk', desc: 'Africa\'s highest canopy walkway at 50m.' },
      { name: 'Tropical Waterfall Guided Hike', desc: 'Hike to stunning waterfalls.' },
      { name: 'Congo Nile Divide Guided Hike', desc: 'Trek the continental divide.' },
    ],
  },
  'kivu-belt-road': {
    title: 'Kivu Belt Road',
    description: 'The most beautiful road in Rwanda, along Lake Kivu\'s sapphire waters.',
    image: '',
    packages: [
      { name: 'Boat Experience on Lake Kivu', desc: 'Sunset cruises and island-hopping from Karongi and Rubavu.' },
      { name: 'Island Visits on Lake Kivu', desc: 'Explore serene islands from Karongi.' },
    ],
  },
  'eastern-province': {
    title: 'Eastern Province — Akagera National Park',
    description: 'Big Five safaris in Rwanda\'s largest protected wetland.',
    image: '',
    packages: [
      { name: 'Akagera National Park', desc: 'Game drives and boat safaris. The Big Five await.' },
    ],
  },
  'kigali': {
    title: 'Kigali & Historical Legacies',
    description: 'Remembrance, reflection, and vibrant city culture.',
    image: '',
    packages: [
      { name: 'Kigali Genocide Memorial', desc: 'Dignified remembrance of the 1994 genocide.' },
      { name: 'Richard Kandt Museum', desc: 'Natural history in the first German resident\'s home.' },
      { name: 'Liberation Museum', desc: 'Rwanda\'s post-genocide reconstruction story.' },
      { name: 'Nyandungu Eco Park', desc: 'A restored urban wetland for nature walks.' },
      { name: 'Kigali City Tour', desc: 'Markets, galleries, and coffee scene.' },
    ],
  },
}

export function generateMetadata({ params }: { params: { corridor: string } }): Metadata {
  const data = corridorData[params.corridor]
  if (!data) return { title: 'Not Found' }
  return {
    title: `${data.title} | TTI Tours Ltd.`,
    description: data.description,
  }
}

export default function CorridorPage({ params }: { params: { corridor: string } }) {
  const data = corridorData[params.corridor]
  if (!data) notFound()

  return (
    <>
      <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
        <Link href="/packages" className="inline-flex items-center gap-2 text-teal font-bold mb-8 hover:underline">
          <span className="material-symbols-outlined">arrow_back</span>
          All Packages
        </Link>
        <div className="mb-stack-md">
          <h1 className="font-headline-xl text-headline-xl text-navy">{data.title}</h1>
          <p className="font-body-lg text-on-surface-variant mt-4 max-w-2xl">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {data.packages.map((pkg, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden tour-card p-stack-md">
              <h3 className="font-headline-md text-headline-md text-navy mb-2">{pkg.name}</h3>
              <p className="text-sm text-on-surface-variant mb-4">{pkg.desc}</p>
              <Link href={`/coffee-tour?package=${params.corridor}`} className="text-teal font-bold text-sm hover:underline">
                Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
