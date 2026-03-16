import { Zap, Fuel, Gauge, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const categories = [
    {
      title: "Small Industrial Generator Solutions",
      range: "10KVA – 500KVA",
      description:
        "Requirement-driven generator solutions sourced from reputable global manufacturers for offices, retail outlets, and small businesses.",
      features: [
        "OEM-sourced equipment",
        "Diesel & Petrol options",
        "Space-efficient configurations",
        "Installed based on site assessment",
      ],
    },
    {
      title: "Medium Industrial Generator Solutions",
      range: "500KVA – 2MW",
      description:
        "Carefully selected generator systems for factories, hospitals, and commercial facilities after detailed load and usage analysis.",
      features: [
        "Manufacturer-neutral sourcing",
        "Diesel, Gas & Hybrid options",
        "Redundancy & reliability planning",
        "Professional commissioning",
      ],
    },
    {
      title: "Large Industrial Generator Solutions",
      range: "2MW – 10MW",
      description:
        "High-capacity power solutions sourced internationally for data centers and heavy industrial operations.",
      features: [
        "Multi-brand OEM sourcing",
        "Paralleling-ready systems",
        "Remote monitoring support",
        "Turnkey project execution",
      ],
    },
    {
      title: "Utility & Megawatt Power Projects",
      range: "10MW+",
      description:
        "Utility-scale and infrastructure power projects designed around your technical, operational, and regulatory requirements.",
      features: [
        "Custom-engineered solutions",
        "Independent OEM selection",
        "Peak shaving & load management",
        "Long-term support agreements",
      ],
    },
  ]

  const generatorTypes = [
    {
      type: "Diesel Generators",
      icon: Fuel,
      description:
        "A widely adopted and dependable power solution, sourced from leading manufacturers for standby and continuous operations.",
      advantages: [
        "High fuel efficiency",
        "Long operational lifespan",
        "Suitable for heavy loads",
        "Globally supported technology",
      ],
    },
    {
      type: "Petrol Generators",
      icon: Zap,
      description:
        "Compact and portable generator options selected for light-duty and short-duration power requirements.",
      advantages: [
        "Portable configurations",
        "Quick startup capability",
        "Lower initial investment",
        "Simplified maintenance",
      ],
    },
    {
      type: "Gas Generators",
      icon: Gauge,
      description:
        "Cleaner power generation solutions sourced for operations prioritizing emissions control and fuel economy.",
      advantages: [
        "Lower emissions",
        "Quieter operation",
        "Cost-effective fuel options",
        "Suitable for continuous use",
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/cat.webp"
            alt="Industrial Generator Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl">
              Generator Solutions
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              We do not manufacture generators. We listen to your requirements,
              evaluate your operational needs, and source the most suitable
              generator solutions from trusted global manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Generator Categories */}
      <section className="relative bg-gray-100 py-16 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Generator Solution Categories
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative rounded-lg border-2 border-gray-200 bg-gray-50 p-8 shadow-sm transition-all hover:border-red-600 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Zap className="h-10 w-10 text-gray-900" />
                  <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700">
                    {category.range}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-black">
                  {category.title}
                </h3>
                <p className="mb-6 text-gray-600">{category.description}</p>

                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle2 className="mr-2 h-5 w-5 text-gray-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator Types */}
      <section className="relative bg-gray-50 py-16 overflow-hidden">
      

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Generator Technologies We Source
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {generatorTypes.map((genType, index) => {
              const Icon = genType.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-900 text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-black">
                    {genType.type}
                  </h3>
                  <p className="mb-6 text-gray-600">{genType.description}</p>

                  <ul className="space-y-2">
                    {genType.advantages.map((advantage, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="mr-2 text-gray-900">•</span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Requirement-First Approach",
                desc: "We begin by understanding your load profile, usage pattern, and site conditions.",
              },
              {
                title: "Global OEM Sourcing",
                desc: "We source generators from established international manufacturers best suited to your needs.",
              },
              {
                title: "Independent Recommendations",
                desc: "Manufacturer-neutral advice focused purely on technical and operational fit.",
              },
              {
                title: "End-to-End Support",
                desc: "From consultation and sourcing to installation, commissioning, and after-sales support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-gray-900" />
                <h3 className="mb-2 font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
            alt="Power Solutions"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Looking for the Right Generator for Your Requirement?
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Share your technical and operational requirements with us, and we
            will source the most suitable generator solution from trusted global
            manufacturers.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
