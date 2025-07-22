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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
      </head>
      <body>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <FloatingButton />
        <Footer />
        <GoogleAnalytics gaId="G-4ZCGYGJZEY" />
        <BootstrapClient />
      </body>
    </html>
  );
}
