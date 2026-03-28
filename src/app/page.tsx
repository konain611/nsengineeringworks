import Link from "next/link"
import Image from "next/image"
import { Zap, Wrench, ShoppingCart, Calendar, ArrowRight, CheckCircle2, TrendingUp, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="relative pt-8 pb-24 md:pt-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/cat.webp"
            alt="Industrial Generator"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/85"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">Power Solutions for Enterprise</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Reliable Generator Solutions for Every Scale
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  From 10KVA to megawatts, we deliver turnkey power solutions. Sales, rentals, maintenance, and expert support—everything your business needs for uninterrupted power.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600 mt-1">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">30+</p>
                  <p className="text-sm text-gray-600 mt-1">Years of Expertise</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">30+</p>
                  <p className="text-sm text-gray-600 mt-1">Active Clients</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-red-100 to-gray-100 opacity-40 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-10 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                      <Zap className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Broad Power Range</h3>
                      <p className="text-gray-600 text-sm mt-1">Complete solutions from small to industrial-scale generators</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                      <Wrench className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Maintenance & Support</h3>
                      <p className="text-gray-600 text-sm mt-1">24/7 expert support and proactive maintenance programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                      <ShoppingCart className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Flexible Options</h3>
                      <p className="text-gray-600 text-sm mt-1">Buy, rent, or maintain with customized solutions for your needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Power Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete generator solutions tailored to your operational requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Sales",
                description: "Purchase generators from 10KVA to megawatts with diesel, petrol, and gas options",
              },
              {
                icon: Calendar,
                title: "Rentals",
                description: "Flexible rental programs for short and long-term project requirements",
              },
              {
                icon: Wrench,
                title: "Maintenance",
                description: "Preventive and corrective maintenance with on-site and facility-based options",
              },
              {
                icon: Zap,
                title: "Overhaul",
                description: "Complete generator overhaul services restoring equipment to specification",
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 hover:border-red-300 hover:shadow-lg hover:shadow-red-100/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Industry Leadership with Proven Expertise
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Comprehensive Range", desc: "Generators from 10KVA to megawatts covering all power requirements" },
                  { title: "Expert Support", desc: "24/7 technical support and maintenance from industry professionals" },
                  { title: "Flexible Solutions", desc: "Sales, rentals, and service options tailored to your timeline" },
                  { title: "Quality Assurance", desc: "Rigorous testing and maintenance standards ensure reliability" },
                  { title: "Rapid Response", desc: "Emergency support and expedited service for critical situations" },
                  { title: "Partnership Approach", desc: "Long-term relationships focused on your operational success" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
              <div className="space-y-8">
                <div>
                  <p className="text-red-600 text-sm font-semibold uppercase tracking-wide">Proven Track Record</p>
                </div>

                <div className="space-y-8">
                  <div className="border-b border-gray-300 pb-8">
                    <p className="text-5xl md:text-6xl font-bold text-gray-900">500+</p>
                    <p className="text-gray-700 font-medium mt-3">Projects Completed Nationwide</p>
                  </div>

                  <div className="border-b border-gray-300 pb-8">
                    <p className="text-5xl md:text-6xl font-bold text-gray-900">30+</p>
                    <p className="text-gray-700 font-medium mt-3">Years of Continuous Operation</p>
                  </div>

                  <div>
                    <p className="text-5xl md:text-6xl font-bold text-gray-900">30+</p>
                    <p className="text-gray-700 font-medium mt-3">Enterprise & Commercial Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              { icon: TrendingUp, label: "Reliability", desc: "Industry-leading uptime and performance standards" },
              { icon: Users, label: "Support", desc: "Dedicated account management and 24/7 assistance" },
              { icon: Award, label: "Excellence", desc: "Certified maintenance and quality assurance protocols" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-red-600/20 text-red-400 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-800 pt-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Transform Your Power Infrastructure?</h2>
              <p className="text-gray-400 max-w-xl">Contact our team for a consultation and custom solution designed for your operations.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-10 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 whitespace-nowrap flex-shrink-0"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-4">Need Something Specific?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Power Solutions Available</h2>
            <p className="text-lg text-gray-600 mb-8">Our engineering team designs tailored solutions for unique operational requirements. Contact us to discuss your specific needs.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
