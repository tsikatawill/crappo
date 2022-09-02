import CryptoCurrencySection from './components/CryptoCurrencySection';
import DemographicsSection from './components/DemographicsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HashCalculatorSection from './components/HashCalculatorSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsletterSection from './components/NewsletterSection';
import WhySection from './components/WhySection';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <DemographicsSection />
        <WhySection />
        <HashCalculatorSection />
        <CryptoCurrencySection />
        <FeaturesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
