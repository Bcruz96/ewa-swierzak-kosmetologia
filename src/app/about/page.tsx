'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  {
    title: "Doskonałość",
    description: "Dbamy o najwyższą jakość każdego zabiegu, korzystając z najnowocześniejszych metod i sprawdzonych preparatów.",
    icon: "/assets/icons/excellence.svg"
  },
  {
    title: "Luksusowe doznania",
    description: "Każda wizyta w naszym salonie to wyjątkowe przeżycie — zadbamy o Twój komfort i relaks na każdym kroku.",
    icon: "/assets/icons/luxury.svg"
  },
  {
    title: "Indywidualne podejście",
    description: "Twoje unikalne potrzeby i oczekiwania są dla nas priorytetem. Każdy zabieg dobieramy indywidualnie.",
    icon: "/assets/icons/patient.svg"
  },
  {
    title: "Innowacje",
    description: "Nieustannie śledzimy trendy i inwestujemy w nowoczesne technologie, by zapewnić Ci najlepsze efekty.",
    icon: "/assets/icons/innovation.svg"
  }
];

const team = [
  {
    name: "Ewa Świerżak",
    role: "Kosmetolog dyplomowany / Właścicielka",
    description: "Pasjonatka kosmetologii z wieloletnim doświadczeniem. Specjalizuje się w zabiegach pielęgnacyjnych twarzy i makijażu permanentnym. Stale podnosi swoje kwalifikacje na szkoleniach krajowych i zagranicznych.",
    image: "/assets/images/team/dr-mitchell.jpg",
    credentials: "Dyplomowany kosmetolog"
  },
  {
    name: "Marta Kowalczyk",
    role: "Specjalistka makijażu permanentnego",
    description: "Ekspertka w dziedzinie makijażu permanentnego brwi i ust. Jej precyzja i artystyczne oko gwarantują naturalny, perfekcyjny efekt dopasowany do rysów twarzy każdej klientki.",
    image: "/assets/images/team/dr-chen.jpg",
    credentials: "Certyfikowana techniczka PMU"
  },
  {
    name: "Joanna Lewandowska",
    role: "Stylistka rzęs i brwi",
    description: "Specjalistka przedłużania rzęs, liftingu oraz stylizacji brwi. Jej zabiegi podkreślają naturalną urodę klientek i nadają spojrzeniu wyrazistości przez długie tygodnie.",
    image: "/assets/images/team/dr-parker.jpg",
    credentials: "Certyfikowana stylistka rzęs"
  }
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/about-hero.jpg"
            alt="Ewa Świerżak Kosmetologia"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Piękno i
              <span className="block">Ekspertyza</span>
            </h1>
            <p className="font-body text-lg text-white mb-8 leading-relaxed">
              W Ewa Świerżak Kosmetologia łączymy pasję do piękna z profesjonalną wiedzą, tworząc wyjątkowe miejsce dla wymagających klientek.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">Nasza historia</h2>
              <div className="space-y-6">
                <p className="font-body text-black">
                  Ewa Świerżak Kosmetologia to salon stworzony z pasji do piękna i głębokiego przekonania, że każda kobieta zasługuje na profesjonalną, luksusową pielęgnację. Od pierwszego dnia naszą misją jest dostarczanie zabiegów na najwyższym poziomie.
                </p>
                <p className="font-body text-black">
                  Przez lata nieustannie inwestowałyśmy w wiedzę, sprzęt i sprawdzone preparaty, budując zespół ekspertek gotowych sprostać każdemu wyzwaniu kosmetologicznemu.
                </p>
                <p className="font-body text-black">
                  Dziś jesteśmy dumne z grona zaufanych klientek, które wracają do nas regularnie — bo wiedzą, że są tu w najlepszych rękach.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="/assets/images/clinic-exterior.jpg"
                alt="Salon Ewa Świerżak Kosmetologia"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-white mb-6">Nasze wartości</h2>
            <p className="font-body text-lg text-white max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="font-heading text-xl text-black mb-4">{value.title}</h3>
                <p className="font-body text-black">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">Nasz zespół</h2>
            <p className="font-body text-lg text-black max-w-2xl mx-auto">
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
                className="bg-white border border-primary-gold rounded-lg overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-black mb-2">{member.name}</h3>
                  <p className="font-ui text-primary-gold mb-2">{member.role}</p>
                  <p className="font-ui text-black text-sm mb-4">{member.credentials}</p>
                  <p className="font-body text-black">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-white mb-6">Nowoczesny salon</h2>
              <div className="space-y-6">
                <p className="font-body text-white">
                  Nasz salon wyposażony jest w najnowocześniejszy sprzęt kosmetologiczny i zaprojektowany tak, aby każda wizyta była prawdziwą przyjemnością. Od eleganckiej recepcji po profesjonalne gabinety — każde miejsce stworzone jest z myślą o Twoim komforcie.
                </p>
                <p className="font-body text-white">
                  Przestrzegamy najwyższych standardów higieny i sterylizacji, dbając o Twoje bezpieczeństwo podczas każdego zabiegu.
                </p>
                <Link
                  href="/gallery"
                  className="inline-block bg-primary-gold hover:bg-primary-gold text-black font-ui text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 mt-4"
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
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-1.jpg"
                  alt="Recepcja salonu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-2.jpg"
                  alt="Gabinet zabiegowy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-3.jpg"
                  alt="Nowoczesny sprzęt"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/facility-4.jpg"
                  alt="Pokój konsultacyjny"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl text-black mb-6">
            Poczuj różnicę Ewa Świerżak Kosmetologia
          </h2>
          <p className="font-body text-lg text-black mb-8 max-w-2xl mx-auto">
            Umów się na konsultację i odkryj, dlaczego nasze klientki wracają do nas z uśmiechem.
          </p>
          <Link
            href="/appointment"
            className="inline-block bg-black hover:bg-black text-white font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Umów wizytę
          </Link>
        </div>
      </section>
    </main>
  );
}
