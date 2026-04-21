
import './styles/globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import Services from './components/sections/Services';
import Materials from './components/sections/Materials';
import Sectors from './components/sections/Sectors';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import FinalCTA from './components/sections/FinalCTA';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Materials />
        <Sectors />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App
