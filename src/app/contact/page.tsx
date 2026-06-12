'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

const businessHours = [
  { day: "Poniedziałek", hours: "9:00 – 18:00" },
  { day: "Wtorek", hours: "9:00 – 18:00" },
  { day: "Środa", hours: "9:00 – 18:00" },
  { day: "Czwartek", hours: "9:00 – 18:00" },
  { day: "Piątek", hours: "9:00 – 16:00" },
  { day: "Sobota", hours: "Na umówienie" },
  { day: "Niedziela", hours: "Nieczynne" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/contact-hero.jpg"
            alt="Kontakt Ewa Świerżak Kosmetologia"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Skontaktuj się z nami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-white max-w-3xl mx-auto"
            >
              Chętnie odpowiemy na Twoje pytania dotyczące naszych zabiegów i usług.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border border-primary-gold"
            >
              <h2 className="font-heading text-3xl text-black mb-6">Napisz do nas</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-ui text-sm text-black mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-sm text-black mb-2">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-ui text-sm text-black mb-2">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-ui text-sm text-black mb-2">
                    Temat
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  >
                    <option value="">Wybierz temat</option>
                    <option value="appointment">Umów wizytę</option>
                    <option value="consultation">Zapytanie o zabieg</option>
                    <option value="inquiry">Ogólne pytanie</option>
                    <option value="feedback">Opinia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-ui text-sm text-black mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-gold rounded-lg font-body text-black focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary-gold transition-all duration-300"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Location & Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">Dane kontaktowe</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <RiMapPin2Line className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">Adres</p>
                      <p className="font-body text-black">Dokładny adres zostanie podany wkrótce</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RiPhoneLine className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">Telefon</p>
                      <a href="tel:+48000000000" className="font-body text-black hover:text-primary-gold transition-colors">
                        +48 000 000 000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RiMailLine className="w-6 h-6 text-primary-gold flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <p className="font-ui text-sm text-black font-medium mb-1">E-mail</p>
                      <a href="mailto:kontakt@ewaswierzak.pl" className="font-body text-black hover:text-primary-gold transition-colors">
                        kontakt@ewaswierzak.pl
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <div className="flex items-center mb-6">
                  <RiTimeLine className="w-6 h-6 text-primary-gold" />
                  <h3 className="font-heading text-2xl text-black ml-3">Godziny otwarcia</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="font-ui text-black">{schedule.day}</span>
                      <span className="font-ui text-black">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-primary-gold"
              >
                <h3 className="font-heading text-2xl text-black mb-6">Obserwuj nas</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:opacity-80 transition-opacity"
                    aria-label="Instagram zostanie dodany wkrótce"
                  >
                    <RiInstagramLine className="w-8 h-8" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-gold hover:opacity-80 transition-opacity"
                  >
                    <RiFacebookLine className="w-8 h-8" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-white mb-4">Znajdź nas</h2>
            <p className="font-body text-white">
              Dokładna lokalizacja salonu zostanie podana wkrótce.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
