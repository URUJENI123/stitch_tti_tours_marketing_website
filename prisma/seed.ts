import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.galleryItem.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.package.deleteMany()
  await prisma.corridor.deleteMany()
  await prisma.contactMessage.deleteMany()

  // Seed Corridors
  const northern = await prisma.corridor.create({
    data: {
      slug: 'northern-corridor',
      name: 'Northern Corridor — Volcanoes National Park',
      description:
        'The heart of Rwanda\'s conservation efforts and the majestic home of the mountain gorillas.',
      heroImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCkuRveiZWCNf71vHvpGOoWp5gg35DAmuuMV3SOrIvoonFGl9r6_NvKXOgulOZX02a74OIeSGh1XpKqBNnoGqdIFXnR2XivUDCamUXK0lr5_IXfF4P6zJ46jgQuqf_7_r-H_ZfzIe150UOXJtHy9G_wHzLCQGQFbpZXiqKMxXgk6lO97Qk8xiK_meKt74HpqViuaRlLjRXAQi6zXCYnHnaeJE3B2ooQb179sx9hjbyXO2oheaH3griFhXi8lMvb2R7liMaYIFtAPrw',
    },
  })

  const southern = await prisma.corridor.create({
    data: {
      slug: 'southern-corridor',
      name: 'Southern Corridor',
      description:
        'A deep dive into Rwanda\'s royal history, cultural heritage, and the somber lessons of Murambi.',
    },
  })

  const nyungwe = await prisma.corridor.create({
    data: {
      slug: 'nyungwe-forest',
      name: 'Nyungwe Forest National Park',
      description:
        'One of Africa\'s oldest rainforests, home to 13 primate species and the famous canopy walkway.',
    },
  })

  const kivu = await prisma.corridor.create({
    data: {
      slug: 'kivu-belt-road',
      name: 'Kivu Belt Road',
      description:
        'The most beautiful road in Rwanda, winding along the sapphire waters and emerald islands of Lake Kivu.',
    },
  })

  const eastern = await prisma.corridor.create({
    data: {
      slug: 'eastern-province',
      name: 'Eastern Province — Akagera National Park',
      description:
        'Savannah safaris in Rwanda\'s Big Five national park. Boat trips on Lake Ihema.',
    },
  })

  const kigali = await prisma.corridor.create({
    data: {
      slug: 'kigali',
      name: 'Kigali & Historical Legacies',
      description:
        'Remembrance, reflection, and the vibrant culture of Africa\'s cleanest city.',
    },
  })

  // Seed Packages for Northern Corridor
  await prisma.package.createMany({
    data: [
      {
        title: 'Gorilla Trekking',
        description:
          'Rwanda has 12 habituated gorilla families. Only 8 visitors per family per day, one-hour visits, minimum age 15.',
        corridorId: northern.id,
      },
      {
        title: 'Karisimbi Hiking',
        description: 'Climb the highest Virunga volcano at 4,507m.',
        corridorId: northern.id,
      },
      {
        title: 'Bisoke Hiking',
        description: 'Ascend to the stunning crater lake summit.',
        corridorId: northern.id,
      },
      {
        title: 'Gahinga Hiking',
        description: 'Explore the extinct volcano\'s bamboo forest.',
        corridorId: northern.id,
      },
      {
        title: 'Sabyinyo Climbing',
        description: 'Trek the "Old Man\'s Teeth" across three countries.',
        corridorId: northern.id,
      },
      {
        title: 'Iby\'Iwacu Cultural Village',
        description: 'Immerse in traditional Rwandan village life.',
        corridorId: northern.id,
      },
      {
        title: 'Gorilla Museum',
        description: 'Learn about conservation history at the volcanoes\' base.',
        corridorId: northern.id,
      },
      {
        title: 'Coffee Farm Tour Experience',
        description: 'Visit coffee plantations for a crop-to-cup journey.',
        corridorId: northern.id,
      },
      {
        title: 'Twin Lakes',
        description: 'Visit Lake Burera and Lake Ruhondo crater lakes.',
        corridorId: northern.id,
      },
    ],
  })

  // Seed Packages for Southern Corridor
  await prisma.package.createMany({
    data: [
      {
        title: 'King\'s Palace',
        description: 'Visit the restored royal palace in Nyanza.',
        corridorId: southern.id,
      },
      {
        title: 'Ethnographic Museum',
        description: 'One of Africa\'s finest ethnographic museums in Huye.',
        corridorId: southern.id,
      },
      {
        title: 'Coffee Tour Experience',
        description: 'Agrotourism in the southern coffee regions.',
        corridorId: southern.id,
      },
      {
        title: 'Murambi Genocide Memorial',
        description: 'A dignified place of remembrance.',
        corridorId: southern.id,
      },
    ],
  })

  // Seed Packages for Nyungwe
  await prisma.package.createMany({
    data: [
      {
        title: 'Chimpanzee Trekking',
        description: 'Track habituated chimp troops.',
        corridorId: nyungwe.id,
      },
      {
        title: 'Nyungwe Guided Nature Walks',
        description: 'Explore ancient rainforest trails.',
        corridorId: nyungwe.id,
      },
      {
        title: 'Nyungwe Bird Watching',
        description: 'Spot 300+ bird species.',
        corridorId: nyungwe.id,
      },
      {
        title: 'Nyungwe Canopy Walk',
        description: 'Africa\'s highest canopy walkway at 50m.',
        corridorId: nyungwe.id,
      },
      {
        title: 'Tropical Waterfall Guided Hike',
        description: 'Hike to stunning waterfalls.',
        corridorId: nyungwe.id,
      },
      {
        title: 'Congo Nile Divide Guided Hike',
        description: 'Trek the continental divide.',
        corridorId: nyungwe.id,
      },
    ],
  })

  // Seed Packages for Kivu
  await prisma.package.createMany({
    data: [
      {
        title: 'Boat Experience on Lake Kivu',
        description: 'Sunset cruises and island-hopping from Karongi and Rubavu.',
        corridorId: kivu.id,
      },
      {
        title: 'Island Visits on Lake Kivu',
        description: 'Explore serene islands from Karongi.',
        corridorId: kivu.id,
      },
    ],
  })

  // Seed Packages for Eastern Province
  await prisma.package.createMany({
    data: [
      {
        title: 'Akagera National Park',
        description: 'Game drives and boat safaris. The Big Five await.',
        corridorId: eastern.id,
      },
    ],
  })

  // Seed Packages for Kigali
  await prisma.package.createMany({
    data: [
      {
        title: 'Kigali Genocide Memorial',
        description: 'Dignified remembrance of the 1994 genocide.',
        corridorId: kigali.id,
      },
      {
        title: 'Richard Kandt Museum',
        description: 'Natural history in the first German resident\'s home.',
        corridorId: kigali.id,
      },
      {
        title: 'Liberation Museum',
        description: 'Rwanda\'s post-genocide reconstruction story.',
        corridorId: kigali.id,
      },
      {
        title: 'Nyandungu Eco Park',
        description: 'A restored urban wetland for nature walks.',
        corridorId: kigali.id,
      },
      {
        title: 'Kigali City Tour',
        description: 'Markets, galleries, and coffee scene.',
        corridorId: kigali.id,
      },
    ],
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
