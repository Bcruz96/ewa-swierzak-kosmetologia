'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import BrandLogo from './brand-logo';

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/services', label: 'Usługi' },
  { href: '/about', label: 'O nas' },
  { href: '/gallery', label: 'Galeria' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full bg-warm-white border-b border-beige"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.02 }}>
              <BrandLogo />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="font-ui text-sm text-charcoal hover:text-primary-gold transition-all duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} className="ml-4">
              <Link
                href="/appointment"
                className="font-ui text-sm px-6 py-3 bg-charcoal text-warm-white hover:bg-primary-gold hover:text-charcoal transition-all duration-300 rounded-full tracking-wide"
              >
                Umów wizytę
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-beige transition-all duration-300"
            >
              {isOpen ? (
                <RiCloseLine className="w-7 h-7 text-primary-gold" />
              ) : (
                <RiMenu4Line className="w-7 h-7 text-primary-gold" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-6 bg-warm-white border-t border-beige">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ x: 4 }}>
              <Link
                href={link.href}
                className="block py-4 font-ui text-sm text-charcoal hover:text-primary-gold transition-all duration-300 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.02 }} className="mt-4">
            <Link
              href="/appointment"
              className="block w-full text-center font-ui text-sm px-6 py-3 bg-charcoal text-warm-white hover:bg-primary-gold hover:text-charcoal transition-all duration-300 rounded-full tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Umów wizytę
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
