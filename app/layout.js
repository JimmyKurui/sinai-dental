import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import BootstrapClient from './components/BootstrapClient';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from './components/ui/FloatingButton';
import './globals.scss';

config.autoAddCss = false

export const metadata = {
  title: "Home | Sinai Dental Practice",
  description: "A Dental practice located in Kampala, Uganda that offers routine family oral care, orthodontics: traditional and clear aligners, implant work and Cosmetic dentistry",
  keywords: "dental, dentistry, orthodontics, implants, cosmetic dentistry, family dental care, Kampala, Uganda",
  authors: [{ name: "Jimmy Chepkurui", url: "https://kuruiportolio.pages.dev" }],
  creator: "Jimmy Chepkurui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/jpeg" href="@img/sinai-dental-logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, noimagefollow" />
        <meta name="geo.region" content="UG-KA" /> 
        <meta name="geo.placename" content="Kampala" />
      </head>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <FloatingButton />
        <Footer />
        <Script>
          import 'bootstrap/dist/js/bootstrap.bundle.min.js';
        </Script>
      </body>
      <GoogleAnalytics gaId="G-4ZCGYGJZEY" />
    </html>
  );
}
