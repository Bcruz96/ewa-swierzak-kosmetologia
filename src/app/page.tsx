'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-ewa-swierzak-kosmetologia.png"
            alt="Ewa Świerzak Kosmetologia - gabinet kosmetologiczny"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-warm-white leading-tight mb-6"
            >
              Luksusowa
              <span className="block">Kosmetologia</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-champagne mb-8 leading-relaxed"
            >
              Gdzie sztuka spotyka pielęgnację. Odkryj nowy standard piękna i doskonałej kosmetologii.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/appointment"
                className="inline-block bg-primary-gold hover:opacity-80 text-charcoal font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Umów wizytę
              </Link>
              <Link
                href="/services"
                className="inline-block bg-warm-white/10 hover:bg-warm-white/20 text-warm-white border border-warm-white/40 font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300"
              >
                Nasze usługi
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl text-charcoal mb-6">Witamy w Ewa Świerzak Kosmetologia</h2>
              <p className="font-body text-lg text-charcoal mb-8 leading-relaxed">
                W naszym salonie wierzymy, że prawdziwe piękno bierze się z troski i dbałości o każdy detal. Łączymy luksusową atmosferę z najnowocześniejszymi zabiegami kosmetologicznymi, aby zapewnić Ci wyjątkowe doznania i widoczne rezultaty.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-charcoal font-ui text-sm tracking-wide px-8 py-3 transition-all duration-300"
              >
                Poznaj nas bliżej
              </Link>
            </div>
            <div className="relative h-[600px] bg-beige rounded-lg flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-px bg-primary-gold/40 mx-auto mb-8" />
                <div className="text-primary-gold/30 text-5xl mb-4 font-heading leading-none">◇</div>
                <p className="font-heading text-xl text-muted/60 mb-2">Zdjęcie salonu</p>
                <p className="font-ui text-[10px] text-muted/40 tracking-[0.25em] uppercase">Wkrótce dostępne</p>
                <div className="w-20 h-px bg-primary-gold/40 mx-auto mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-charcoal mb-4">Nasze zabiegi</h2>
            <p className="font-body text-lg text-muted max-w-2xl mx-auto">
              Szeroki wybór profesjonalnych zabiegów kosmetologicznych dopasowanych do Twoich potrzeb
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pielęgnacja twarzy",
                description: "Profesjonalne zabiegi pielęgnacyjne przywracające skórze blask i młodość",
              },
              {
                title: "Makijaż permanentny",
                description: "Trwały makijaż ust i brwi dla perfekcyjnego wyglądu każdego dnia",
              },
              {
                title: "Stylizacja rzęs",
                description: "Przedłużanie i lifting rzęs dla głębokiego, wyrazistego spojrzenia",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-ivory rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-beige"
              >
                <div className="h-64 bg-beige flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary-gold/30 text-3xl mb-2 font-heading leading-none">◇</div>
                    <p className="font-ui text-[9px] text-muted/50 tracking-[0.2em] uppercase">Zdjęcie wkrótce</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-charcoal mb-2">{service.title}</h3>
                  <p className="font-body text-muted mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-primary-gold hover:opacity-80 font-ui text-sm tracking-wide transition-opacity duration-300"
                  >
                    Dowiedz się więcej →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Lat doświadczenia" },
              { number: "500+", label: "Zadowolonych klientek" },
              { number: "20+", label: "Rodzajów zabiegów" },
              { number: "100%", label: "Satysfakcja klientek" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-4xl text-primary-gold mb-2">{stat.number}</div>
                <div className="font-ui text-sm tracking-wide text-champagne">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-charcoal mb-4">Opinie klientek</h2>
            <p className="font-body text-lg text-muted max-w-2xl mx-auto">
              Przeczytaj, co mówią nasze klientki o swoich doświadczeniach w salonie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anna Kowalska",
                text: "Poziom obsługi i dbałość o każdy detal są wyjątkowe. Jestem zachwycona efektami i na pewno wrócę!",
                role: "Menadżerka"
              },
              {
                name: "Marta Wiśniewska",
                text: "Prawdziwie luksusowe doświadczenie. Zespół sprawił, że poczułam się komfortowo i zadbana od pierwszej chwili.",
                role: "Przedsiębiorczyni"
              },
              {
                name: "Karolina Nowak",
                text: "Od momentu wejścia czujesz, że jesteś w dobrych rękach. Efekty przerosły moje oczekiwania!",
                role: "Artystka"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-warm-white p-8 rounded-lg border border-beige shadow-sm"
              >
                <div className="text-primary-gold mb-6">★★★★★</div>
                <p className="text-lg font-body text-charcoal mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <div className="font-heading text-lg text-charcoal">{testimonial.name}</div>
                  <div className="font-ui text-sm text-muted">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-warm-white mb-6">Gotowa na wyjątkową pielęgnację?</h2>
          <p className="font-body text-lg text-champagne mb-8 max-w-2xl mx-auto">
            Umów się na konsultację i zrób pierwszy krok w kierunku piękna, na jakie zasługujesz.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-primary-gold hover:opacity-80 text-charcoal font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Umów wizytę
          </Link>
        </div>
      </section>
    </main>
  );
}
