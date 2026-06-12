'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-warm-white">
              Ewa Świerzak Kosmetologia
            </h3>
            <p className="font-body text-sm text-champagne leading-relaxed">
              Luksusowy salon kosmetyczny oferujący profesjonalne zabiegi pielęgnacyjne dla wymagających klientek.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-primary-gold hover:opacity-80 transition-opacity"
                aria-label="Instagram zostanie dodany wkrótce"
              >
                <RiInstagramLine className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-primary-gold hover:opacity-80 transition-opacity"
              >
                <RiFacebookLine className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-4 text-warm-white">Szybkie linki</h4>
            <ul className="space-y-2">
              {[
                { href: '/services', label: 'Nasze usługi' },
                { href: '/about', label: 'O nas' },
                { href: '/gallery', label: 'Galeria' },
                { href: '/contact', label: 'Kontakt' },
                { href: '/appointment', label: 'Umów wizytę' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-ui text-sm text-champagne hover:text-primary-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-4 text-warm-white">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <RiMapPin2Line className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <span className="font-ui text-sm text-champagne">
                  Dokładny adres zostanie podany wkrótce
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneLine className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a href="tel:+48000000000" className="font-ui text-sm text-champagne hover:text-primary-gold transition-colors">
                  +48 000 000 000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailLine className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a href="mailto:kontakt@ewaswierzak.pl" className="font-ui text-sm text-champagne hover:text-primary-gold transition-colors">
                  kontakt@ewaswierzak.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-beige/20">
          <p className="text-center text-sm font-ui text-champagne/70">
            © {currentYear} Ewa Świerzak Kosmetologia. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
