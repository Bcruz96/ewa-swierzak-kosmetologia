'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "Wszystkie" },
  { id: "twarz", name: "Twarz" },
  { id: "cialo", name: "Ciało" },
  { id: "makijaz", name: "Makijaż permanentny" },
  { id: "rzesy", name: "Rzęsy i brwi" },
  { id: "paznokcie", name: "Paznokcie" },
  { id: "depilacja", name: "Depilacja" },
];

const services = [
  {
    id: 1,
    title: "Oczyszczanie twarzy",
    description: "Głębokie oczyszczanie skóry usuwające zanieczyszczenia, nadmiar sebum i martwe komórki naskórka.",
    category: "twarz",
    features: [
      "Analiza skóry przed zabiegiem",
      "Oczyszczanie manualne i ultradźwiękowe",
      "Odpowiednia dla każdego typu cery",
      "Natychmiastowy efekt świeżości"
    ],
  },
  {
    id: 2,
    title: "Peeling chemiczny",
    description: "Zabieg złuszczający wyrównujący koloryt, redukujący przebarwienia i wygładzający skórę twarzy.",
    category: "twarz",
    features: [
      "Peeling kwasowy dopasowany do cery",
      "Redukcja przebarwień i blizn",
      "Stymulacja produkcji kolagenu",
      "Widoczne efekty już po pierwszym zabiegu"
    ],
  },
  {
    id: 3,
    title: "Mikrodermabrazja",
    description: "Mechaniczne złuszczanie skóry diamentową głowicą dla głębokiej odnowy i wygładzenia cery.",
    category: "twarz",
    features: [
      "Wygładzenie tekstury skóry",
      "Redukcja drobnych zmarszczek",
      "Poprawa owalu twarzy",
      "Bez okresu rekonwalescencji"
    ],
  },
  {
    id: 4,
    title: "Mezoterapia igłowa",
    description: "Podanie koktajlu witaminowego bezpośrednio w skórę dla jej głębokiego nawilżenia i odmłodzenia.",
    category: "twarz",
    features: [
      "Intensywne nawilżenie skóry",
      "Redukcja zmarszczek",
      "Poprawa elastyczności cery",
      "Indywidualny dobór koktajlu"
    ],
  },
  {
    id: 5,
    title: "Masaż relaksacyjny ciała",
    description: "Profesjonalny masaż całego ciała redukujący napięcia i przywracający równowagę.",
    category: "cialo",
    features: [
      "Redukcja stresu i napięcia mięśniowego",
      "Poprawa krążenia",
      "Aromaterapia w cenie",
      "60 lub 90 minut"
    ],
  },
  {
    id: 6,
    title: "Zabieg antycellulitowy",
    description: "Intensywny zabieg modelujący sylwetkę i redukujący cellulit na udach, brzuchu i pośladkach.",
    category: "cialo",
    features: [
      "Widoczna redukcja cellulitu",
      "Modelowanie sylwetki",
      "Drenaż limfatyczny",
      "Seria 6–10 zabiegów"
    ],
  },
  {
    id: 7,
    title: "Makijaż permanentny brwi",
    description: "Trwałe wypełnienie i nadanie kształtu brwiom metodą pudrową lub ombre dla naturalnego efektu.",
    category: "makijaz",
    features: [
      "Metoda pudrowa lub ombre",
      "Trwałość 1–2 lata",
      "Indywidualny dobór kształtu",
      "Korekcja w cenie zabiegu"
    ],
  },
  {
    id: 8,
    title: "Makijaż permanentny ust",
    description: "Trwałe podkreślenie konturu i koloru ust dla perfekcyjnego uśmiechu bez codziennego makijażu.",
    category: "makijaz",
    features: [
      "Korekcja asymetrii ust",
      "Naturalny lub wyraźny kontur",
      "Trwałość 1–2 lata",
      "Szeroki wybór kolorów"
    ],
  },
  {
    id: 9,
    title: "Przedłużanie rzęs",
    description: "Aplikacja sztucznych rzęs metodą 1:1 lub objętościową dla głębokiego i wyrazistego spojrzenia.",
    category: "rzesy",
    features: [
      "Metoda klasyczna lub objętościowa",
      "Trwałość 3–4 tygodnie",
      "Dobór długości i krzywizny",
      "Delikatny klej hypoalergiczny"
    ],
  },
  {
    id: 10,
    title: "Lifting i laminacja rzęs",
    description: "Trwałe podkręcenie własnych rzęs z farbowaniem dla efektu otwartego, intensywnego spojrzenia.",
    category: "rzesy",
    features: [
      "Utrwalone podkręcenie na 6–8 tygodni",
      "Farbowanie w cenie",
      "Bez sztucznych rzęs",
      "Naturalny i wyrazisty efekt"
    ],
  },
  {
    id: 11,
    title: "Manicure hybrydowy",
    description: "Profesjonalna pielęgnacja dłoni z aplikacją lakieru hybrydowego o długotrwałym efekcie.",
    category: "paznokcie",
    features: [
      "Pielęgnacja skórek i płytki",
      "Trwałość 3–4 tygodnie",
      "Szeroka paleta kolorów",
      "Wzmocnienie i odbudowa paznokci"
    ],
  },
  {
    id: 12,
    title: "Pedicure klasyczny",
    description: "Kompleksowa pielęgnacja stóp i paznokci przywracająca komfort i zadbany wygląd.",
    category: "paznokcie",
    features: [
      "Usuwanie naskórka i odcisków",
      "Pielęgnacja płytki i skórek",
      "Peeling i masaż stóp",
      "Lakierowanie w cenie"
    ],
  },
  {
    id: 13,
    title: "Depilacja woskiem",
    description: "Skuteczne usuwanie owłosienia z dowolnych partii ciała ciepłym lub zimnym woskiem.",
    category: "depilacja",
    features: [
      "Nogi, pachy, bikini i więcej",
      "Wosk ciepły lub taśmowy",
      "Gładka skóra na 3–4 tygodnie",
      "Stopniowe osłabianie owłosienia"
    ],
  },
  {
    id: 14,
    title: "Depilacja laserowa",
    description: "Trwałe ograniczenie wzrostu owłosienia przy użyciu nowoczesnego lasera diodowego.",
    category: "depilacja",
    features: [
      "Skuteczna na większości typów skóry",
      "Seria 6–8 zabiegów",
      "Bezbolesna i precyzyjna",
      "Trwałe efekty"
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-warm-white mb-6"
            >
              Nasze usługi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-champagne max-w-3xl mx-auto mb-12"
            >
              Profesjonalne zabiegi kosmetologiczne wykonywane z najwyższą starannością i dbałością o Twoje piękno.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-10 sm:py-12 bg-warm-white border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-ui text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary-gold text-charcoal"
                    : "bg-ivory text-charcoal border-2 border-beige hover:bg-primary-gold hover:text-charcoal"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-warm-white border border-beige rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-52 sm:h-56 lg:h-64 overflow-hidden bg-beige">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-primary-gold/30 text-3xl mb-2 font-heading leading-none">◇</div>
                      <p className="font-ui text-[9px] text-muted/50 tracking-[0.2em] uppercase">Zdjęcie wkrótce</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 bg-primary-gold text-charcoal text-xs font-ui tracking-wider rounded-full">
                      {categories.find(cat => cat.id === service.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  <h2 className="font-heading text-xl lg:text-2xl text-charcoal mb-4">{service.title}</h2>
                  <p className="font-body text-muted mb-6">{service.description}</p>
                  <div className="space-y-3 mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-gold rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        <span className="font-ui text-charcoal text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-warm-white mb-6">
            Gotowa na zabieg?
          </h2>
          <p className="font-body text-lg text-champagne mb-8 max-w-2xl mx-auto">
            Umów się na konsultację i razem dobierzemy idealne zabiegi dopasowane do Twoich potrzeb.
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
