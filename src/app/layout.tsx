import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ewa Świerzak Kosmetologia",
  description: "Luksusowy salon kosmetyczny Ewa Świerzak Kosmetologia. Profesjonalne zabiegi pielęgnacyjne, makijaż permanentny, stylizacja rzęs i wiele więcej.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${nunito.variable} antialiased bg-ivory`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
