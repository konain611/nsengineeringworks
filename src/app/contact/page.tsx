"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

const WHATSAPP_NUMBER = "923152133959"
const MAP_LAT = 24.9726
const MAP_LNG = 67.0917

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    other: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     const whatsappMessage = `
// New Inquiry from Website

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Service: ${formData.service}

// Message:
// ${formData.message}
//     `.trim()

//     const encodedMessage = encodeURIComponent(whatsappMessage)

//     window.open(
//       `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
//       "_blank"
//     )

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      other: ""
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Share your requirements and connect with us instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <Info icon={<Phone />} title="Phone" text="+92 333 2133959" />
            <Info icon={<Mail />} title="Email" text="nsengineringworks@gmail.com" />
            <Info
              icon={<MapPin />}
              title="Address"
              text="Kaneez Fatima Society, Scheme 41, Surjani, Karachi"
            />
            <Info
              icon={<Clock />}
              title="Business Hours"
              text="Mon–Sat: 9:00 AM – 9:00 PM"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border bg-gray-50 p-8 space-y-4"
          >
            <Input name="name" label="Full Name" value={formData.name} onChange={handleChange} />
            <Input name="email" label="Email" value={formData.email} onChange={handleChange} type="email" />
            <Input name="phone" label="Phone" value={formData.phone} onChange={handleChange} />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            >
              <option value="">Select Service</option>
              <option value="Generator Dealing">Dealing in Generators</option>
              <option value="Rental">Generator Rental</option>
              <option value="Maintenance">Maintenance & Repair</option>
              <option value="Overhaul">Generator Overhaul</option>
              <option value="Parts">Parts & Accessories</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your requirement..."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded border px-4 py-2"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Send via WhatsApp <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Exact Location Map */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold">Our Location</h2>

          <div className="overflow-hidden rounded-lg border shadow">
            <iframe
              title="NS Engineering Works Location"
              src={`https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&output=embed`}
              width="100%"
              height="400"
              loading="lazy"
              className="w-full"
            />
          </div>

          <div className="mt-4 text-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`}
              target="_blank"
              className="text-red-600 font-semibold hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ---------- Helpers ---------- */

function Info({ icon, title, text }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-900 text-white">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        {...props}
        required
        className="w-full rounded border px-4 py-2"
      />
    </div>
  )
}
