import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Zap, MessageCircle, MapPinned } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/95 text-gray-300 border-red-600 border-t-2">
      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700 p-2">
                <Zap className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">NS Engineering Works</span>
            </div>
            <p className="text-md leading-relaxed text-gray-400">
              Your trusted partner for all generator solutions. From sales to maintenance, we power your success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-red-600" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-red-600" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-red-600" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-red-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-md text-gray-400 transition-colors hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-md text-gray-400 transition-colors hover:text-red-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-md text-gray-400 transition-colors hover:text-red-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-md text-gray-400 transition-colors hover:text-red-600">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-md text-gray-400 transition-colors hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-md text-gray-400">
              <li>Dealing in Generators</li>
              <li>Generator Rentals</li>
              <li>Maintenance & Repair</li>
              <li>Generator Overhaul</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-md text-gray-400">
              <li className="flex items-start space-x-3">
                <MessageCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                <span>+92 3332133959</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                <span>+92 3002946601</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                <span>nsengineringworks@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPinned className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                <span>Plot 15A, Row A, Block 1, Kaneez Fatima Society, Scheme 41, Surjani town.</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NS Engineering Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

