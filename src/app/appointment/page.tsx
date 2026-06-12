'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { RiCalendarLine, RiTimeLine, RiUserLine, RiPhoneLine, RiMailLine, RiFileTextLine } from 'react-icons/ri';

const services = [
  { id: "twarz", name: "Pielęgnacja twarzy" },
  { id: "peeling", name: "Peeling chemiczny" },
  { id: "makijaz-brwi", name: "Makijaż permanentny brwi" },
  { id: "makijaz-usta", name: "Makijaż permanentny ust" },
  { id: "rzesy", name: "Przedłużanie rzęs" },
  { id: "lifting-rzesy", name: "Lifting i laminacja rzęs" },
  { id: "manicure", name: "Manicure hybrydowy" },
  { id: "pedicure", name: "Pedicure" },
  { id: "depilacja", name: "Depilacja woskiem" },
  { id: "inne", name: "Inne / konsultacja" },
];

const timeSlots = [
  "09:00", "10:00", "11:00",
  "12:00", "14:00", "15:00",
  "16:00", "17:00"
];

const inputClass = "w-full px-4 py-3 border border-beige rounded-lg font-body text-charcoal bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-colors";
const inputWithIconClass = "w-full pl-12 pr-4 py-3 border border-beige rounded-lg font-body text-charcoal bg-warm-white focus:outline-none focus:ring-2 focus:ring-primary-gold transition-colors";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
    isNewClient: "yes"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white mb-6"
            >
              Umów wizytę
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-champagne max-w-3xl mx-auto"
            >
              Zarezerwuj termin i pozwól nam zadbać o Twoje piękno w wyjątkowej atmosferze.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-white p-8 rounded-lg border border-beige shadow-md"
            >
              <h2 className="font-heading text-3xl text-charcoal mb-6">Zarezerwuj termin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-ui text-sm text-charcoal mb-2">
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <RiUserLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputWithIconClass}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-sm text-charcoal mb-2">
                      Adres e-mail
                    </label>
                    <div className="relative">
                      <RiMailLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputWithIconClass}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-ui text-sm text-charcoal mb-2">
                      Numer telefonu
                    </label>
                    <div className="relative">
                      <RiPhoneLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputWithIconClass}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="service" className="block font-ui text-sm text-charcoal mb-2">
                      Rodzaj zabiegu
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Wybierz zabieg</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block font-ui text-sm text-charcoal mb-2">
                        Preferowana data
                      </label>
                      <div className="relative">
                        <RiCalendarLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={inputWithIconClass}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block font-ui text-sm text-charcoal mb-2">
                        Preferowana godzina
                      </label>
                      <div className="relative">
                        <RiTimeLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-gold" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={inputWithIconClass}
                          required
                        >
                          <option value="">Wybierz godzinę</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block font-ui text-sm text-charcoal mb-2">
                      Czy jesteś nową klientką?
                    </label>
                    <div className="flex space-x-6">
                      {[{ value: "yes", label: "Tak" }, { value: "no", label: "Nie" }].map((opt) => (
                        <label key={opt.value} className="flex items-center">
                          <input
                            type="radio"
                            name="isNewClient"
                            value={opt.value}
                            checked={formData.isNewClient === opt.value}
                            onChange={handleChange}
                            className="form-radio text-primary-gold focus:ring-primary-gold"
                          />
                          <span className="ml-2 font-body text-charcoal">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block font-ui text-sm text-charcoal mb-2">
                      Dodatkowe uwagi
                    </label>
                    <div className="relative">
                      <RiFileTextLine className="absolute left-4 top-4 text-primary-gold" />
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className={`${inputWithIconClass} resize-none`}
                        placeholder="Wszelkie uwagi lub pytania dotyczące zabiegu..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-warm-white font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-primary-gold hover:text-charcoal transition-all duration-300"
                >
                  Umów wizytę
                </button>
              </form>
            </motion.div>

            {/* Booking Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border border-beige shadow-md"
              >
                <h3 className="font-heading text-2xl text-charcoal mb-6">Czego możesz się spodziewać</h3>
                <div className="space-y-4">
                  <p className="font-body text-charcoal">
                    Twoja wizyta rozpocznie się od indywidualnej konsultacji. Nasz zespół:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Przeprowadzi szczegółową analizę skóry lub potrzeb",
                      "Omówi Twoje oczekiwania i cele",
                      "Zaproponuje indywidualny plan zabiegów",
                      "Odpowie na wszystkie Twoje pytania",
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-body text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-charcoal p-8 rounded-lg"
              >
                <h3 className="font-heading text-2xl text-warm-white mb-6">Nowa klientka? Specjalna oferta</h3>
                <p className="font-body text-champagne mb-6">
                  Podczas pierwszej wizyty otrzymasz bezpłatną konsultację kosmetologiczną i analizę skóry.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dokładna analiza skóry i potrzeb",
                    "Dobór odpowiednich zabiegów",
                    "Indywidualny plan pielęgnacji",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-body text-champagne">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg border border-beige shadow-md"
              >
                <h3 className="font-heading text-2xl text-charcoal mb-6">Formy płatności</h3>
                <p className="font-body text-muted mb-4">
                  Akceptujemy płatności gotówką oraz kartą płatniczą.
                </p>
                <p className="font-body text-muted">
                  W razie konieczności odwołania wizyty prosimy o kontakt z co najmniej 24-godzinnym wyprzedzeniem.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
