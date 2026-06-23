import type { Metadata } from 'next'
import Link from 'next/link'
import CoffeeTourTimeline from '@/components/CoffeeTourTimeline'
import Gallery from '@/components/Gallery'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Ibirunga Coffee Tour Experience | TTI Tours Ltd.',
  description:
    'Discover the journey of Rwandan coffee from crop to cup at the foothills of the Volcanoes National Park with TTI Tours.',
}

const steps = [
  { number: 1, title: 'Farm & Soil', desc: 'The volcanic Virunga soil and high-altitude growing conditions create the perfect environment for specialty Arabica coffee.' },
  { number: 2, title: 'Planting & Varieties', desc: 'The coffee varieties grown here include Red Bourbon Arabica, nurtured with organic fertilizing practices.' },
  { number: 3, title: 'Plant Care', desc: 'Disease management and crop care using natural, sustainable methods passed down through generations.' },
  { number: 4, title: 'Harvesting', desc: 'Hand-picking only the ripest red cherries with surgical precision to ensure maximum quality.' },
  { number: 5, title: 'Pulping', desc: 'Removing the outer cherry skin to reveal the beans inside, using traditional wet mills.' },
  { number: 6, title: 'Fermentation', desc: 'Breaking down the mucilage layer through natural fermentation in mountain-spring water.' },
  { number: 7, title: 'Sorting & Drying', desc: 'Sorting beans by density and sun-drying on raised beds until the perfect moisture content is reached.' },
  { number: 8, title: 'Milling', desc: 'Hulling and final cleaning of the dried beans to prepare them for roasting.' },
  { number: 9, title: 'Roasting', desc: 'Traditional roasting over fire — the aroma and transformation of green to deep brown is the sensory highlight.' },
  { number: 10, title: 'Cupping & Drinking', desc: 'Guests taste the coffee they helped process, fresh from the pot — a true farm-to-cup experience.' },
]

const galleryItems = [
  { type: 'photo' as const, title: 'Roasting Day at Kinigi', caption: 'Traditional coffee roasting over an open fire in the misty hills of Kinigi.', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoWmbt6d9GgVUGj13vZN-Zm-JjKdvZnKgg9jT9K_6HVirgZLdnkcCW6sZfiJy_Dalkw69H4yGT29vqRLrP3bJCkPmkH8vi-CqQ2jcWeEnT-EkcRvCoetd2ILVtriezy6QRmfRpjuWII1UW5EBrXWDs-iOSH7unUXydvu_blmBTeJqTbi060_iX3NZb3TM5xtgzVRYV5mYTc1YeTMNvG1Vun1rWDRtMot5qv7Xd9IG5tdzMNXPty1rxVZ8PHmSIP0imxzAjm7JAUMo' },
  { type: 'photo' as const, title: 'The Coffee Cherry Harvest', caption: 'Bright red Arabica cherries ready for picking.', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3yu2vSwmIVKZifp-wzO8b0h8ZDMRElyaKAJjv0GnydYUPVuEljJp90UJRFJHUKXwOkVU0g-VsPLxmxtI5SayBXMcJpGDtCcKPqJ6dRGL41VMrc0wBcEV3w1td0ZyFZHqK994k4kfWQXXxlAGlmxey1cIragynoOEd7MmvXyWZ0jNl_orPYKvzgifZ2v9A6XpCiCp48XLbWVwimhGvTZCL-wo0-YultH4ICX_2DbxDMPN48qxmzGksB0Z9V8YXJquwytxhsKJDDxI' },
  { type: 'photo' as const, title: 'Volcanic Plantations', caption: 'Coffee plants thriving in the mineral-rich volcanic soil of the Virunga Massif.', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_uEPwdK_CftSuds6emYKo_kT6chs01xZYNH69H_lIJEkggfZ2FzEkMrQgwzuSE9AyaTKoU1lVqT_AfK7Ixc4L9Qx8P0WR-ZQmVfCcSFtCwSi0If9wCK2yY8NxecAib2bqdrQf3cqxStkmlq1Wn9iciAZCJJfq4TJxgB3M7hH8jnD4XtnwxgOQQyf1ipNGpawXNj922JL4jZAPDs427f-E5vwAz8qLHFlQupoH7bFFgulMQVy9TcDUXFy_K1NNHyriUZapTKe-Jjs' },
  { type: 'photo' as const, title: 'Sun-Drying on Raised Beds', caption: 'Beans drying under the equatorial sun on traditional raised beds.', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcFifgUkSQz87f4GF_P-ehy5EAwqOr4me0x-EP90UITp03eTdpP5h7oznlf-1WMU4wsuUxgjRpfOamAehKCNXgGTwcwyeDxsiQxJgxURhRCOboAFx_dqjPlN8epcL2lyKeS6lZ5kM0dw5afJFqn4vtDJiujHYxKBuf-FeWwMAifzZP4Vnc47Gwv0S8rKjnJnMhhmoZIkoObfEOVMquQE35KhvZcu8iSCL3UZre1jac4OsP6mk4EpYMDY3loeDtyH-dAucYhyKguC8' },
]

const learnItems = [
  { icon: 'history_edu', title: 'History', desc: 'Discover how coffee first arrived in Rwanda in 1904 and its evolution into a premium national treasure.' },
  { icon: 'terrain', title: 'Regions & Soil', desc: 'Learn why volcanic nitrogen-rich soil and high altitude are the secrets to the unique acidity profile.' },
  { icon: 'potted_plant', title: 'Varieties', desc: 'Specializing in the rare Arabica Red Bourbon variety, known for sweet, citrusy floral notes.' },
  { icon: 'compost', title: 'Fertilizing', desc: 'Organic techniques using recycled coffee pulp and local minerals to maintain ecological balance.' },
  { icon: 'health_and_safety', title: 'Disease Control', desc: 'Natural, sustainable pest management strategies used by the cooperative to protect every harvest.' },
  { icon: 'pan_tool', title: 'Harvesting', desc: 'Hand-picking only the ripest "cherries" with surgical precision to ensure maximum quality.' },
  { icon: 'factory', title: 'Processing', desc: 'Washing, pulping, and fermenting in mountain-spring water before sun-drying on raised beds.' },
  { icon: 'local_cafe', title: 'Roasting & Tasting', desc: 'The finale: roasting on-site and a professional cupping session with the cooperative baristas.' },
]

export default function CoffeeTourPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_uEPwdK_CftSuds6emYKo_kT6chs01xZYNH69H_lIJEkggfZ2FzEkMrQgwzuSE9AyaTKoU1lVqT_AfK7Ixc4L9Qx8P0WR-ZQmVfCcSFtCwSi0If9wCK2yY8NxecAib2bqdrQf3cqxStkmlq1Wn9iciAZCJJfq4TJxgB3M7hH8jnD4XtnwxgOQQyf1ipNGpawXNj922JL4jZAPDs427f-E5vwAz8qLHFlQupoH7bFFgulMQVy9TcDUXFy_K1NNHyriUZapTKe-Jjs')",
          }} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
        </div>
        <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
          <div className="max-w-2xl text-white">
            <span className="font-label-caps text-label-caps bg-teal text-white px-3 py-1 rounded-full mb-6 inline-block">
              Agrotourism Discovery
            </span>
            <h1 className="font-headline-xl text-headline-xl mb-6">Ibirunga Coffee: From Crop to Cup</h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90">
              Journey through the mist-covered foothills of Kinigi. Discover the meticulous craft behind
              Rwanda&apos;s world-class specialty coffee while supporting local farming cooperatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#booking"
                className="bg-white text-navy px-8 py-4 rounded-full font-headline-md text-headline-md flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Book the Experience
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-navy">A Legacy of Soil and Community</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              At the heart of Musanze, the volcanic soil of the Ibirunga region provides a unique mineral
              richness that breathes life into every Arabica bean. Our coffee tour isn&apos;t just a walk — it&apos;s
              an immersive narrative of resilience and heritage.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Working hand-in-hand with the{' '}
              <span className="font-bold text-teal">Kinigi Farmers Cooperative</span>, we offer travelers
              a rare glimpse into the life of the people who have mastered the art of high-altitude
              cultivation. Every sip you take supports sustainable agriculture and empowers local families
              through fair-trade practices.
            </p>
            <div className="flex gap-stack-md py-4">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-teal">2,500m</span>
                <span className="font-label-caps text-label-caps">Elevation</span>
              </div>
              <div className="w-px h-12 bg-outline-variant" />
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-teal">100%</span>
                <span className="font-label-caps text-label-caps">Red Bourbon</span>
              </div>
              <div className="w-px h-12 bg-outline-variant" />
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-teal">88+</span>
                <span className="font-label-caps text-label-caps">Cupping Score</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal/10 rounded-full blur-3xl group-hover:bg-teal/20 transition-all duration-700" />
            <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3yu2vSwmIVKZifp-wzO8b0h8ZDMRElyaKAJjv0GnydYUPVuEljJp90UJRFJHUKXwOkVU0g-VsPLxmxtI5SayBXMcJpGDtCcKPqJ6dRGL41VMrc0wBcEV3w1td0ZyFZHqK994k4kfWQXXxlAGlmxey1cIragynoOEd7MmvXyWZ0jNl_orPYKvzgifZ2v9A6XpCiCp48XLbWVwimhGvTZCL-wo0-YultH4ICX_2DbxDMPN48qxmzGksB0Z9V8YXJquwytxhsKJDDxI"
                alt="Rwandan coffee farmer with cherries"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Guests Learn */}
      <section className="bg-surface-container py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">What You Will Learn</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Master the critical stages that transform a humble cherry into liquid gold.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md">
            {learnItems.map((item, i) => (
              <div
                key={i}
                className="glass-card p-stack-md rounded-xl shadow-sm border border-outline-variant/30 hover-lift flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-teal">Step {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-headline-md text-headline-md text-navy mt-1">{item.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm-to-Cup Timeline */}
      <CoffeeTourTimeline />

      {/* Sensory Section */}
      <section className="py-stack-lg px-gutter">
        <div className="max-w-container-max mx-auto overflow-hidden rounded-2xl relative">
          <div className="absolute inset-0 bg-navy/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoWmbt6d9GgVUGj13vZN-Zm-JjKdvZnKgg9jT9K_6HVirgZLdnkcCW6sZfiJy_Dalkw69H4yGT29vqRLrP3bJCkPmkH8vi-CqQ2jcWeEnT-EkcRvCoetd2ILVtriezy6QRmfRpjuWII1UW5EBrXWDs-iOSH7unUXydvu_blmBTeJqTbi060_iX3NZb3TM5xtgzVRYV5mYTc1YeTMNvG1Vun1rWDRtMot5qv7Xd9IG5tdzMNXPty1rxVZ8PHmSIP0imxzAjm7JAUMo"
              alt="Coffee roasting"
            />
          </div>
          <div className="relative z-20 p-stack-lg md:p-24 text-white text-center">
            <h2 className="font-headline-lg text-headline-lg mb-6">Awaken Your Senses</h2>
            <p className="font-body-lg text-body-lg max-w-3xl mx-auto mb-10 opacity-80">
              There is no substitute for the aroma of freshly roasted Kinigi coffee in the crisp mountain
              air. Our tours provide a full sensory education — smell the jasmine notes, see the vibrant
              cherry hues, and touch the coarse volcanic soil.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: 'psychology', label: 'Educational' },
                { icon: 'eco', label: 'Eco-Friendly' },
                { icon: 'groups', label: 'Community Driven' },
                { icon: 'workspace_premium', label: 'Gourmet Quality' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-4xl mb-2 text-teal">{item.icon}</span>
                  <p className="font-label-caps text-label-caps">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <Gallery items={galleryItems} />

      {/* Booking Form */}
      <section id="booking" className="py-stack-lg bg-offwhite">
        <div className="max-w-container-max mx-auto px-gutter">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
