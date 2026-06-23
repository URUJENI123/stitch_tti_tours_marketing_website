 import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | TTI Tours Ltd.',
  description:
    'Learn about TTI Tours Ltd — our mission, vision, and commitment to sustainable tourism in Rwanda.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcFifgUkSQz87f4GF_P-ehy5EAwqOr4me0x-EP90UITp03eTdpP5h7oznlf-1WMU4wsuUxgjRpfOamAehKCNXgGTwcwyeDxsiQxJgxURhRCOboAFx_dqjPlN8epcL2lyKeS6lZ5kM0dw5afJFqn4vtDJiujHYxKBuf-FeWwMAifzZP4Vnc47Gwv0S8rKjnJnMhhmoZIkoObfEOVMquQE35KhvZcu8iSCL3UZre1jac4OsP6mk4EpYMDY3loeDtyH-dAucYhyKguC8')",
            }}
          />
          <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="relative z-10 text-center px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-white mb-4 drop-shadow-lg">
            Our Story & Commitment
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 font-body-lg text-body-lg drop-shadow">
            Pioneering sustainable and authentic East African adventures that bridge the gap between
            luxury and the raw beauty of the natural world.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-stack-lg max-w-container-max mx-auto px-gutter">
        <div className="grid md:grid-cols-2 gap-stack-md">
          <div className="group bg-white p-stack-md rounded-xl premium-shadow premium-shadow-hover transition-all duration-500 border-l-4 border-teal">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-6 text-teal">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                flag
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Our Mission</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              To provide exceptional and unforgettable travel experiences to customers, showcasing the
              beauty, culture, and diversity of destinations, while promoting sustainable tourism
              practices and supporting local communities.
            </p>
          </div>
          <div className="group bg-white p-stack-md rounded-xl premium-shadow premium-shadow-hover transition-all duration-500 border-l-4 border-navy">
            <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-6 text-navy">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                visibility
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Our Vision</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              To be the leading tourism company in Rwanda, known for excellence in customer service,
              innovation, and commitment to responsible tourism — inspiring people to explore and
              connect with the world in a meaningful way.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Our Strategic Goals</h2>
            <div className="h-1 w-20 bg-teal mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                num: '01',
                icon: 'sentiment_very_satisfied',
                title: 'Customer Satisfaction',
                desc: 'Ensuring every traveler has a memorable, satisfactory experience through personalized service and attention to detail.',
              },
              {
                num: '02',
                icon: 'public',
                title: 'Destination Promotion',
                desc: "Showcasing each destination's unique attractions and raising awareness of lesser-known places.",
              },
              {
                num: '03',
                icon: 'eco',
                title: 'Sustainable Tourism',
                desc: 'Minimizing negative impact on local environments and cultures while creating positive economic benefits.',
              },
              {
                num: '04',
                icon: 'groups',
                title: 'Employee Development',
                desc: 'Investing in staff training, career growth, and a positive work environment.',
              },
              {
                num: '05',
                icon: 'devices',
                title: 'Innovation & Technology',
                desc: 'Using technology to improve booking, communication, and tour management.',
              },
            ].map((goal, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl premium-shadow premium-shadow-hover transition-all"
              >
                <div className="mb-4 text-teal opacity-80">
                  <span className="text-label-caps font-label-caps block mb-2">
                    GOAL {goal.num}
                  </span>
                  <span className="material-symbols-outlined text-4xl">{goal.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-navy mb-2">
                  {goal.title}
                </h3>
                <p className="text-on-surface-variant text-sm">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg max-w-container-max mx-auto px-gutter">
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center p-stack-md md:p-stack-lg">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRCTHmeKb1MP6tJdIB9acg7hb50YD8FAGU7L0JrnwvAuhh3LqNFQTtG991n2BQ2UzrkqsXQhz-SD98EOigCWbslL85v4jnjXd7R6SuPJ8ZUEfFU1Uc8woMdwQdqPnUEKvIfcP5Mt0d0KoO0XsU8g3A4NjKEq3Jd4Y9PxywKg3d7e7sBFaLeAoSjXBGib5RCJAxuYDLs_F46xoBynhH2RnwXOv0pKDD0En9BE4pcGpM3NKYAI1F47Hf4py4-apPVGcT_twvA3VeDhU')",
              }}
            />
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">
              Experience the Land of a Thousand Hills Responsibly.
            </h2>
            <p className="text-white/80 font-body-lg mb-8">
              Join TTI Tours in discovering a Rwanda that goes beyond the brochures — where every cup
              of coffee and every mountain trail tells a story of resilience and rebirth.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-teal text-white px-8 py-4 rounded-full font-bold premium-shadow transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
