'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TimelineStep {
  number: number
  title: string
  desc: string
}

const steps: TimelineStep[] = [
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

export default function CoffeeTourTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const prev = () => setActiveStep(Math.max(0, activeStep - 1))
  const next = () => setActiveStep(Math.min(steps.length - 1, activeStep + 1))

  return (
    <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Farm-to-Cup Journey</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Follow the 10-step journey from the volcanic soil to your cup — a hands-on, start-to-finish experience.
        </p>
      </div>

      {/* Desktop: Horizontal connected steps */}
      <div className="hidden md:block overflow-x-auto custom-scrollbar pb-4">
        <div className="flex gap-4 min-w-max">
          {steps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(i)}
              className={`flex-shrink-0 w-44 p-4 rounded-xl text-left transition-all ${
                i === activeStep
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white border border-outline-variant/30 hover:border-teal'
              }`}
            >
              <span className={`text-xs font-bold ${i === activeStep ? 'text-teal' : 'text-teal'}`}>
                STEP {String(step.number).padStart(2, '0')}
              </span>
              <h3 className={`font-headline-md text-headline-md mt-1 ${i === activeStep ? 'text-white' : 'text-navy'}`}>
                {step.title}
              </h3>
            </button>
          ))}
        </div>
        {/* Connector line */}
        <div className="relative h-1 mt-4 mx-2">
          <div className="absolute inset-0 bg-outline-variant/30 rounded-full" />
          <div
            className="absolute h-full bg-teal rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Active step detail */}
      <div className="mt-8 bg-white rounded-2xl p-8 premium-shadow">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <span className="text-label-caps text-teal font-bold">
              STEP {String(steps[activeStep].number).padStart(2, '0')}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-navy mt-2 mb-4">
              {steps[activeStep].title}
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {steps[activeStep].desc}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeStep === 0}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-offwhite transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activeStep === steps.length - 1}
              className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy/90 transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden mt-8 space-y-4">
        {steps.map((step, i) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(i)}
            className={`w-full text-left p-4 rounded-xl transition-all ${
              i === activeStep
                ? 'bg-navy text-white shadow-lg'
                : 'bg-white border border-outline-variant/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                i === activeStep ? 'bg-teal text-white' : 'bg-teal/10 text-teal'
              }`}>
                {step.number}
              </div>
              <div>
                <span className={`text-xs font-bold ${i === activeStep ? 'text-teal' : 'text-teal'}`}>
                  STEP {String(step.number).padStart(2, '0')}
                </span>
                <h3 className={`font-headline-md text-headline-md ${i === activeStep ? 'text-white' : 'text-navy'}`}>
                  {step.title}
                </h3>
              </div>
            </div>
            {i === activeStep && (
              <p className="mt-3 text-sm opacity-80 pl-11">{step.desc}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
