import { Award, Users, TrendingUp, Target, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/cat.webp"
            alt="About NS Engineering Works"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl ">About NS Engineering Works</h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Leading the industry in generator solutions with unmatched expertise, reliability, and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
              <Target className="mb-4 h-12 w-12 text-red-700" />
              <h2 className="mb-4 text-2xl font-bold text-black">Our Mission</h2>
              <p className="text-gray-600">
                To provide reliable, efficient, and cost-effective generator solutions that empower businesses to operate without interruption. We are committed to excellence in every aspect of our service, from initial consultation to ongoing maintenance and support.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
              <TrendingUp className="mb-4 h-12 w-12 text-red-700" />
              <h2 className="mb-4 text-2xl font-bold text-black">Our Vision</h2>
              <p className="text-gray-600">
                To become the most trusted name in the generator industry, recognized for innovation, quality, and unparalleled customer service. We strive to set new standards in power generation solutions while maintaining our commitment to sustainability and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative bg-gray-50 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/building.webp"
            alt="Company Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-black md:text-4xl">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                NS Engineering Works was founded with a simple yet powerful vision: to provide comprehensive generator solutions that businesses can rely on. What started as a small operation has grown into a trusted industry leader, serving clients across various sectors.
              </p>
              <p>
                Since our establishment in 1992, we have built a reputation for excellence through our commitment to quality, innovation, and customer satisfaction. Our team of experienced professionals brings over three decades of combined expertise in generator sales, rentals, maintenance, and repair.
              </p>
              <p>
                Today, NS Engineering Works offers a complete range of services, from dealing in generators (buying and selling) ranging from 10KVA to megawatts, to providing flexible rental solutions, and delivering expert maintenance and repair services both on-site and at our state-of-the-art facility in Karachi.
              </p>
              <p>
                We work with all types of generators—diesel, petrol, and gas—ensuring that we can meet the unique needs of each client. Whether it's a small business needing a backup power solution starting from 10KVA or a large industrial facility requiring megawatt-scale generators, we have the expertise and resources to deliver reliable power solutions across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-4xl">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Shield className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises and stand behind every product and service we provide.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, maintaining the highest standards of quality.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients' success is our success. We build lasting relationships based on trust.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">24/7 Support</h3>
              <p className="text-gray-600">
                Power emergencies don't wait. Neither do we. Available round the clock for our clients.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <TrendingUp className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our services and adopt new technologies to better serve our clients.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Shield className="mx-auto mb-4 h-12 w-12 text-red-700" />
              <h3 className="mb-2 text-xl font-semibold text-black">Integrity</h3>
              <p className="text-gray-600">
                Honest communication, transparent pricing, and ethical business practices guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/map.webp"
            alt="Why Choose Us"
            fill
            className="object-cover opacity-8"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose NS Engineering Works?</h2>
            <p className="mb-8 text-lg text-red-50">
              With years of industry experience, a comprehensive range of services, and an unwavering commitment to customer satisfaction, NS Engineering Works is your trusted partner for all generator needs.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl font-bold">500+</div>
                <div className="text-red-100">Happy Clients</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">1000+</div>
                <div className="text-red-100">Projects Completed</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold">30+</div>
                <div className="text-red-100">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-black">Ready to Work With Us?</h2>
          <p className="mb-8 text-lg text-gray-600">
            Get in touch with our team to discuss your generator needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

