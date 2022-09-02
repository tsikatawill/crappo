import CryptoCurrencySection from './components/CryptoCurrencySection';
import DemographicsSection from './components/DemographicsSection';
import HashCalculatorSection from './components/HashCalculatorSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhySection from './components/WhySection';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <DemographicsSection />
        <WhySection />
        <HashCalculatorSection />
        <CryptoCurrencySection />
        <div className="space h-96"></div>
      </header>
    </>
  );
}
