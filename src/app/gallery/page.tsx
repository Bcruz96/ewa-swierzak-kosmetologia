'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const galleryCategories = [
  {
    id: "gabinet",
    title: "Gabinet Kosmetologiczny",
    description: "Wnętrza naszego salonu i stanowiska zabiegowe.",
    placeholders: ["Recepcja", "Gabinet główny", "Strefa relaksu"],
  },
  {
    id: "zabiegi",
    title: "Zabiegi i Pielęgnacja",
    description: "Dokumentacja przeprowadzanych zabiegów kosmetologicznych.",
    placeholders: ["Pielęgnacja twarzy", "Makijaż permanentny", "Stylizacja rzęs", "Zabiegi ciała"],
  },
  {
    id: "efekty",
    title: "Efekty — Przed i Po",
    description: "Metamorfozy naszych klientek — efekty mówią same za siebie.",
    placeholders: ["Brwi — przed i po", "Rzęsy — przed i po", "Cera — przed i po"],
  },
  {
    id: "produkty",
    title: "Produkty i Kosmetyki",
    description: "Profesjonalne preparaty i kosmetyki używane w salonie.",
    placeholders: ["Kosmetyki do zabiegów", "Pielęgnacja domowa", "Nowości w ofercie"],
  },
];

function PlaceholderCard({ label, bg = "bg-ivory" }: { label: string; bg?: string }) {
  return (
    <div className={`${bg} border border-beige rounded-lg overflow-hidden shadow-sm`}>
      <div className="h-48 bg-beige flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border border-primary-gold/30 flex items-center justify-center mx-auto mb-2">
            <span className="text-primary-gold/40 font-heading text-lg leading-none">◇</span>
          </div>
          <p className="font-ui text-[9px] text-muted/50 tracking-[0.2em] uppercase">Zdjęcie wkrótce</p>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-beige/60">
        <p className="font-ui text-xs text-muted text-center tracking-wide">{label}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white mb-6"
            >
              Galeria
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-champagne max-w-3xl mx-auto"
            >
              Poznaj efekty naszych zabiegów i atmosferę salonu. Zdjęcia wkrótce dostępne.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={`py-16 ${catIndex % 2 === 0 ? "bg-ivory" : "bg-warm-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-px bg-primary-gold flex-shrink-0" />
                <h2 className="font-heading text-2xl lg:text-3xl text-charcoal">{category.title}</h2>
              </div>
              <p className="font-body text-muted ml-12">{category.description}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.placeholders.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PlaceholderCard
                    label={label}
                    bg={catIndex % 2 === 0 ? "bg-warm-white" : "bg-ivory"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-warm-white mb-6">
            Chcesz zobaczyć nasze efekty?
          </h2>
          <p className="font-body text-lg text-champagne mb-8 max-w-2xl mx-auto">
            Umów się na bezpłatną konsultację i przekonaj się osobiście, co możemy dla Ciebie zrobić.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-gold hover:opacity-80 text-charcoal font-ui text-sm tracking-wide px-12 py-4 rounded-full transition-all duration-300"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </main>
  );
}
