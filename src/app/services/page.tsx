import { ShoppingCart, Calendar, Wrench, Zap, Truck, Clock, Shield, DollarSign, Settings, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Dealing in Generators",
      description: "We buy and sell generators from 10KVA to megawatts. We offer diesel, petrol, and gas generators from leading manufacturers.",
      features: [
        "Range: 10KVA to Megawatts",
        "Diesel, Petrol, and Gas options",
        "New and used generators",
        "Trade-in programs available",
        "Financing options",
      ],
      color: "gray",
    },
    {
      icon: Calendar,
      title: "Generator Rentals",
      description: "Flexible rental solutions for short-term projects, events, or long-term operations. Fast delivery and professional setup.",
      features: [
        "Daily, weekly, monthly rates",
        "Emergency rental services",
        "Full installation and setup",
        "Fuel delivery available",
        "24/7 support included",
      ],
      color: "gray",
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      description: "Expert repair services at your location or our facility. Preventive maintenance programs to keep your generators running smoothly.",
      features: [
        "On-site repair services",
        "In-house repair facility",
        "Preventive maintenance programs",
        "Scheduled service visits",
        "Emergency repair response",
      ],
      color: "gray",
    },
    {
      icon: Zap,
      title: "Generator Overhaul",
      description: "Complete generator overhaul services to restore your equipment to peak performance and extend its operational life.",
      features: [
        "Engine overhaul",
        "Alternator rebuild",
        "Control panel upgrades",
        "Performance optimization",
        "Warranty on overhaul work",
      ],
      color: "gray",
    },
    {
      icon: Truck,
      title: "Transportation & Installation",
      description: "Professional transportation and installation services for generators of all sizes. We handle everything from planning to execution.",
      features: [
        "Safe transportation",
        "Professional installation",
        "Site preparation",
        "Connection and testing",
        "Training for operators",
      ],
      color: "gray",
    },
    {
      icon: Settings,
      title: "Parts & Accessories",
      description: "Genuine parts and accessories for all major generator brands. Quick delivery and competitive pricing.",
      features: [
        "Genuine OEM parts",
        "Aftermarket alternatives",
        "Fast order processing",
        "Bulk order discounts",
        "Technical support",
      ],
      color: "gray",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/cat.webp"
            alt="Industrial Generator"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl">Our Services</h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Comprehensive generator solutions for every need. From dealing in generators to maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative bg-white py-16 overflow-hidden">
        {/* <div className="absolute inset-0 opacity-100">
          <Image
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80"
            alt="Generator Services"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              const isRed = index % 2 === 0
              const iconBg = isRed ? "bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/25" : "bg-gradient-to-br from-gray-900 to-gray-800"
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-200"
                >
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl  text-white transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-10 w-10 text-red-600" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-black">{service.title}</h2>
                  <p className="mb-6 text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className={`mr-2.5 font-bold ${isRed ? 'text-red-600' : 'text-gray-900'}`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mechanical.webp"
            alt="Emergency Generator Service"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-red-600/20 p-4 border border-red-500/30">
              <Clock className="h-12 w-12 text-red-400" />
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">24/7 Emergency Services</h2>
            <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
              Power outages don't wait for business hours. Our emergency response team is available around the clock to handle urgent generator repairs, rentals, and technical support.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-1"
              >
                Emergency Contact
              </Link>
              <div className="text-xl font-semibold text-gray-200">Or Call: <span className="text-red-600">+92 3332133959</span></div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">Our Service Process</h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { icon: AlertCircle, title: "Consultation", desc: "Understand your requirements" },
                { icon: DollarSign, title: "Quote", desc: "Transparent pricing" },
                { icon: Settings, title: "Service", desc: "Professional execution" },
                { icon: Shield, title: "Support", desc: "Ongoing assistance" },
              ].map((step, index) => {
                const StepIcon = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${index === 0 ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/25' : 'bg-gradient-to-br from-gray-900 to-gray-800'} text-white transition-transform hover:scale-110`}>
                      <StepIcon className="h-8 w-8" />
                    </div>
                    <div className={`mb-2 text-2xl font-bold ${index === 0 ? 'text-red-600' : 'text-gray-900'}`}>{index + 1}</div>
                    <h3 className="mb-2 text-lg font-semibold text-black">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>


     

    </main>
  )
}

