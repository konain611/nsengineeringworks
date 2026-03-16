import { Building2, Briefcase, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ClientsPage() {
  const featuredClients = [
    {
      name: "Paragon Constructors (Pvt.) Ltd.",
      description: "Paragon Constructors continuously strives to be one of the premier construction service providers in Pakistan. N-S Engineering Works has supported Paragon on several notable projects.",
      projects: [
        "EMAAR",
        "Hoshang Tower",
        "Hyperstar",
        "Creek View",
        "UBL Tower",
        "Bahria Town Karachi",
      ],
    },
    {
      name: "Waste Buster International",
      description: "Waste Buster International is an independent waste management and janitorial services contractor with a strong focus on sustainable and effective waste management solutions. The company is driven by quality, service excellence, value, and innovation.",
      projects: [],
    },
    {
      name: "Bahria Town Karachi",
      description: "Bahria Town is a Rawalpindi-based, privately owned real estate development company that owns, develops, and manages properties across Pakistan. It is recognized as one of the largest private real estate developers in the region.",
      projects: [
        "Ali Villa",
        "Apartments I & II",
        "Stadium",
        "Bahria Grand Mosque",
        "Bahria Homes",
        "Bahria Heights",
        "Theme Park",
      ],
    },
  ]

  const otherClients = [
    "K Electric (Third Party Contract)",
    "China Port (Third Party Contract)",
    "Oil Field Services (Third Party Contract)",
    "Gharoo Site (Wind Thermal)",
    "Jhampir Sites (Wind Thermal) – Hydro China",
    "Frontier Works Organization (Third Party Contract)",
    "Golden Technical (Pvt.) Ltd.",
    "Best Power Systems",
    "Binary Vibes",
    "Creative Bench",
    "3G Construction",
    "Malik International",
    "Hangzhou Jinjiang Group Sanitation Pakistan (Pvt.) Ltd.",
    "Banquets & Lawns",
    "Xiang Chu International (Pvt.) Ltd.",
    "Park View City Islamabad",
    "Retailo",
    "Deal Cart",
    "Work More",
    "QMobile",
    "PAF Museum",
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/cat.webp"
            alt="Our Clients"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl">Our Clients</h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Trusted by leading organizations across Pakistan for reliable power and engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-center">
              <Briefcase className="h-12 w-12 text-gray-900" />
            </div>
            <div className="space-y-6 text-center text-lg text-gray-700">
              <p>
                NS Engineering Works Works has extensive experience in delivering efficient, reliable, and cost-effective power and engineering solutions across Pakistan. We tailor our scope of work, delivery approach, and project timelines to meet each client's specific requirements, without compromising on quality or engineering excellence.
              </p>
              <p>
                Over the years, we have successfully completed projects for a diverse range of clients across multiple industries, establishing long-term professional relationships built on trust and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="bg-gray-50 py-16">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Valuable Clients</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We are proud to serve industry leaders and innovative organizations
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-12">
            {featuredClients.map((client, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
              >
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-black md:text-3xl">{client.name}</h3>
                    <p className="leading-relaxed text-gray-700">{client.description}</p>
                  </div>
                </div>

                {client.projects.length > 0 && (
                  <div className="ml-18 mt-6 border-t border-gray-200 pt-6">
                    <h4 className="mb-4 text-lg font-semibold text-black">Projects Executed:</h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {client.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="flex items-center space-x-2 rounded-md bg-gray-50 px-4 py-2"
                        >
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gray-900" />
                          <span className="text-gray-700">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Esteemed Clients Section */}
      <section className="bg-white py-16">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">Other Esteemed Clients</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We are honored to serve a diverse portfolio of respected organizations
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherClients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 transition-colors hover:border-red-600 hover:bg-red-50"
                >
                  <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  <span className="text-gray-700">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/map.webp"
            alt="Our Track Record"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Track Record</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="mb-2 text-5xl font-bold">30+</div>
                <div className="text-lg text-gray-300">Active Clients</div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">100+</div>
                <div className="text-lg text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">30+</div>
                <div className="text-lg text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-black">Join Our Growing List of Satisfied Clients</h2>
          <p className="mb-8 text-lg text-gray-600">
            Experience the same quality and reliability that our clients trust. Contact us today to discuss your power generation needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}

