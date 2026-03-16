import Link from "next/link"
import Image from "next/image"
import { Zap, Wrench, ShoppingCart, Calendar, CheckCircle2, ArrowRight, ChevronRight, Shield, Truck } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-10 md:py-6 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute inset-0  opacity-100"></div>
          <Image
            src="/cat.webp"
            alt="Industrial Generator"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <span className="text-sm font-medium text-gray-700">Powering Industries Since 1992</span>
              </div> */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Power Solutions
                <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Engineered for Excellence</span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-2xl">
                From 10KVA to megawatts, we deliver comprehensive generator solutions including sales, rentals, maintenance, and repair services. Powering your success with reliability and expertise since 1992.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02]"
                >
                  <span className="relative">Get a Free Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/products"
                    className="group inline-flex items-center text-base font-medium text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Explore Products
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-red-600/5 via-blue-500/5 to-gray-200/20 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/10"></div>
                  <div className="relative p-8">
                    <div className="space-y-6">
                      <div className="group flex items-start space-x-4 rounded-xl bg-white/50 p-5 backdrop-blur-sm border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-red-600 transition-colors group-hover:bg-red-50 group-hover:border-red-100">
                          <Zap className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">10KVA to Megawatts</h3>
                          <p className="mt-1 text-sm text-gray-600">Complete range of power solutions for every need</p>
                        </div>
                      </div>
                      <div className="group flex items-start space-x-4 rounded-xl bg-white/50 p-5 backdrop-blur-sm border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-gray-800 transition-colors group-hover:bg-gray-100 group-hover:border-gray-300">
                          <Wrench className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Expert Maintenance</h3>
                          <p className="mt-1 text-sm text-gray-600">24/7 expert support and maintenance services</p>
                        </div>
                      </div>
                      <div className="group flex items-start space-x-4 rounded-xl bg-white/50 p-5 backdrop-blur-sm border border-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-gray-800 transition-colors group-hover:bg-gray-100 group-hover:border-gray-300">
                          <Shield className="h-6 w-6 text-[#003366]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Reliable Service</h3>
                          <p className="mt-1 text-sm text-gray-600">Trusted by leading businesses nationwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gray-100 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Comprehensive Generator Solutions</h2>
            <div className="mx-auto mt-4 max-w-2xl">
              <p className="text-lg leading-8 text-gray-600">
                Tailored power solutions designed to meet your specific requirements with unmatched reliability and efficiency.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingCart,
                title: "Dealing in Generators",
                description: "We buy and sell generators from 10KVA to megawatts. Diesel, petrol, and gas options available.",
                color: "red"
              },
              {
                icon: Calendar,
                title: "Rental Services",
                description: "Flexible rental options for short-term and long-term projects. Fast delivery and setup.",
                color: "blue"
              },
              {
                icon: Wrench,
                title: "Repair & Maintenance",
                description: "Expert repair services at your location or our facility. Preventive maintenance programs available.",
                color: "red"
              },
              {
                icon: Zap,
                title: "Overhaul Services",
                description: "Complete generator overhaul services to restore your equipment to peak performance.",
                color: "blue"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              const isRed = service.color === 'red';
              const gradient = isRed
                ? 'from-red-600 to-red-700 shadow-red-500/20'
                : 'from-blue-900 to-blue-950 shadow-blue-900/20';
              const hoverGradient = isRed
                ? 'hover:shadow-red-500/30 hover:border-red-200'
                : 'hover:shadow-blue-500/30 hover:border-blue-200';

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${hoverGradient}`}
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white border border-gray-200 ${isRed ? 'text-red-600 group-hover:bg-red-50 group-hover:border-red-100' : 'text-gray-800 group-hover:bg-gray-50 group-hover:border-gray-300'} transition-all duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-4">
                      <a
                        href="#"
                        className={`inline-flex items-center text-sm font-medium ${isRed ? 'text-red-600 hover:text-red-700' : 'text-blue-700 hover:text-blue-800'
                          } group-hover:translate-x-1 transition-transform`}
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cat.webp"
            alt="Industrial Generator"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Power Your Business?
          </h2>
          <p className="mb-10 text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-1"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-gray-100 py-20 overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10">
          <Image
            src="/mechanical.webp"
            alt="Generator Maintenance"
            fill
            className="object-cover"
          />
        </div> */}
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">Why Choose NS Engineering Works?</h2>
              <p className="mb-8 text-lg text-gray-600">
                With years of experience in the generator industry, we provide reliable, efficient, and cost-effective solutions for all your power generation needs.
              </p>
              <div className="space-y-4">
                {[
                  "Wide range of generators (10KVA to megawatts)",
                  "Diesel, petrol, and gas options",
                  "Expert maintenance and repair services",
                  "24/7 emergency support",
                  "Flexible rental solutions",
                  "On-site and facility-based services",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-xl border border-gray-200">
              <h3 className="mb-8 text-2xl font-bold text-black">Our Expertise</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">500+</div>
                  <div className="text-sm font-semibold text-gray-700">Projects Completed</div>
                </div>
                <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold text-gray-900 mb-3">30+</div>
                  <div className="text-sm font-semibold text-gray-700">Active Clients</div>
                </div>
                <div className="group text-center p-8 rounded-xl bg-gradient-to-br from-blue-50/50 to-blue-100/30 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-950 bg-clip-text text-transparent mb-3">30+</div>
                  <div className="text-sm font-semibold text-gray-700">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-black">Need a Custom Solution?</h2>
          <p className="mb-8 text-lg text-gray-600">
            Our team can create a tailored solution for your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>
      </section>

    </main>
  )
}
