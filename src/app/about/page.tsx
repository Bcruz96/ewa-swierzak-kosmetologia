'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { RiAwardLine, RiSparkling2Line, RiUserHeartLine, RiLightbulbLine } from 'react-icons/ri';

const values = [
  {
    title: "Doskonałość",
    description: "Dbamy o najwyższą jakość każdego zabiegu, korzystając z najnowocześniejszych metod i sprawdzonych preparatów.",
    Icon: RiAwardLine,
  },
  {
    title: "Luksusowe doznania",
    description: "Każda wizyta w naszym salonie to wyjątkowe przeżycie — zadbamy o Twój komfort i relaks na każdym kroku.",
    Icon: RiSparkling2Line,
  },
  {
    title: "Indywidualne podejście",
    description: "Twoje unikalne potrzeby i oczekiwania są dla nas priorytetem. Każdy zabieg dobieramy indywidualnie.",
    Icon: RiUserHeartLine,
  },
  {
    title: "Innowacje",
    description: "Nieustannie śledzimy trendy i inwestujemy w nowoczesne technologie, by zapewnić Ci najlepsze efekty.",
    Icon: RiLightbulbLine,
  },
];

const team = [
  {
    name: "Ewa Świerzak",
    role: "Kosmetolog dyplomowany / Właścicielka",
    description: "Pasjonatka kosmetologii z wieloletnim doświadczeniem. Specjalizuje się w zabiegach pielęgnacyjnych twarzy i makijażu permanentnym. Stale podnosi swoje kwalifikacje na szkoleniach krajowych i zagranicznych.",
    initials: "EŚ",
    credentials: "Dyplomowany kosmetolog",
  },
  {
    name: "Marta Kowalczyk",
    role: "Specjalistka makijażu permanentnego",
    description: "Ekspertka w dziedzinie makijażu permanentnego brwi i ust. Jej precyzja i artystyczne oko gwarantują naturalny, perfekcyjny efekt dopasowany do rysów twarzy każdej klientki.",
    initials: "MK",
    credentials: "Certyfikowana techniczka PMU",
  },
  {
    name: "Joanna Lewandowska",
    role: "Stylistka rzęs i brwi",
    description: "Specjalistka przedłużania rzęs, liftingu oraz stylizacji brwi. Jej zabiegi podkreślają naturalną urodę klientek i nadają spojrzeniu wyrazistości przez długie tygodnie.",
    initials: "JL",
    credentials: "Certyfikowana stylistka rzęs",
  },
];

const facilityPlaceholders = [
  "Recepcja salonu",
  "Gabinet zabiegowy",
  "Nowoczesny sprzęt",
  "Strefa relaksu",
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-charcoal flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white mb-6">
              Piękno i
              <span className="block">Ekspertyza</span>
            </h1>
            <p className="font-body text-lg text-champagne mb-8 leading-relaxed">
              W Ewa Świerzak Kosmetologia łączymy pasję do piękna z profesjonalną wiedzą, tworząc wyjątkowe miejsce dla wymagających klientek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-6">Nasza historia</h2>
              <div className="space-y-6">
                <p className="font-body text-charcoal">
                  Ewa Świerzak Kosmetologia to salon stworzony z pasji do piękna i głębokiego przekonania, że każda kobieta zasługuje na profesjonalną, luksusową pielęgnację. Od pierwszego dnia naszą misją jest dostarczanie zabiegów na najwyższym poziomie.
                </p>
                <p className="font-body text-charcoal">
                  Przez lata nieustannie inwestowałyśmy w wiedzę, sprzęt i sprawdzone preparaty, budując zespół ekspertek gotowych sprostać każdemu wyzwaniu kosmetologicznemu.
                </p>
                <p className="font-body text-charcoal">
                  Dziś jesteśmy dumne z grona zaufanych klientek, które wracają do nas regularnie — bo wiedzą, że są tu w najlepszych rękach.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[600px] rounded-lg bg-beige flex items-center justify-center"
            >
              <div className="text-center px-8">
                <div className="w-20 h-px bg-primary-gold/40 mx-auto mb-8" />
                <div className="text-primary-gold/30 text-6xl mb-4 font-heading leading-none">◇</div>
                <p className="font-heading text-xl text-muted/60 mb-2">Zdjęcie salonu</p>
                <p className="font-ui text-[10px] text-muted/40 tracking-[0.25em] uppercase">Wkrótce dostępne</p>
                <div className="w-20 h-px bg-primary-gold/40 mx-auto mt-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-warm-white mb-6">Nasze wartości</h2>
            <p className="font-body text-lg text-champagne max-w-2xl mx-auto">
              Te zasady kierują każdym aspektem naszej pracy i gwarantują, że zawsze otrzymasz obsługę najwyższej klasy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-8 rounded-lg text-center shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-primary-gold">
                  <value.Icon className="w-9 h-9" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-4">{value.title}</h3>
                <p className="font-body text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-6">Nasz zespół</h2>
            <p className="font-body text-lg text-muted max-w-2xl mx-auto">
              Zgrany zespół ekspertek, dla których piękno i satysfakcja klientek to najważniejsze priorytety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white border border-beige rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-80 bg-beige flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full border border-primary-gold/40 flex items-center justify-center mx-auto mb-3">
                      <span className="font-heading text-3xl text-primary-gold/70">{member.initials}</span>
                    </div>
                    <p className="font-ui text-[9px] text-muted/50 tracking-[0.2em] uppercase">Zdjęcie wkrótce</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-charcoal mb-2">{member.name}</h3>
                  <p className="font-ui text-primary-gold mb-2">{member.role}</p>
                  <p className="font-ui text-muted text-sm mb-4">{member.credentials}</p>
                  <p className="font-body text-charcoal">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-warm-white mb-6">Nowoczesny salon</h2>
              <div className="space-y-6">
                <p className="font-body text-champagne">
                  Nasz salon wyposażony jest w najnowocześniejszy sprzęt kosmetologiczny i zaprojektowany tak, aby każda wizyta była prawdziwą przyjemnością. Od eleganckiej recepcji po profesjonalne gabinety — każde miejsce stworzone jest z myślą o Twoim komforcie.
                </p>
                <p className="font-body text-champagne">
                  Przestrzegamy najwyższych standardów higieny i sterylizacji, dbając o Twoje bezpieczeństwo podczas każdego zabiegu.
                </p>
                <Link
                  href="/gallery"
                  className="inline-block bg-primary-gold hover:opacity-80 text-charcoal font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 mt-4"
                >
                  Zobacz galerię
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {facilityPlaceholders.map((label) => (
                <div
                  key={label}
                  className="h-48 rounded-lg bg-beige/20 border border-beige/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-primary-gold/30 text-2xl mb-1 font-heading leading-none">◇</div>
                    <p className="font-ui text-[9px] text-champagne/40 tracking-[0.15em] uppercase">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-6">
            Poczuj różnicę Ewa Świerzak Kosmetologia
          </h2>
          <p className="font-body text-lg text-muted mb-8 max-w-2xl mx-auto">
            Umów się na konsultację i odkryj, dlaczego nasze klientki wracają do nas z uśmiechem.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-charcoal hover:opacity-80 text-warm-white font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Umów wizytę
          </Link>
        </div>
      </section>
    </main>
  );
}
