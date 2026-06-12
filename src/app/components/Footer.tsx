'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Salon Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">
              Ewa Świerżak Kosmetologia
            </h3>
            <p className="font-body text-sm text-white">
              Luksusowy salon kosmetyczny oferujący profesjonalne zabiegi pielęgnacyjne dla wymagających klientek.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:opacity-80 transition-opacity"
                aria-label="Instagram zostanie dodany wkrótce"
              >
                <RiInstagramLine className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:opacity-80 transition-opacity"
              >
                <RiFacebookLine className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Nasze usługi
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  Umów wizytę
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <RiMapPin2Line className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <span className="font-ui text-sm text-white">
                  Dokładny adres zostanie podany wkrótce
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneLine className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a href="tel:+48000000000" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  +48 000 000 000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailLine className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a href="mailto:kontakt@ewaswierzak.pl" className="font-ui text-sm text-white hover:text-primary-gold transition-colors">
                  kontakt@ewaswierzak.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-gold/20">
          <p className="text-center text-sm font-ui text-white">
            © {currentYear} Ewa Świerżak Kosmetologia. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
