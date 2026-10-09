import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Services from './components/Services.jsx';
import TwoSides from './components/TwoSides.jsx';
import Vacancies from './components/Vacancies.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Logos from './components/Logos.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  // Lets buttons anywhere on the page preselect the contact form
  // (role + message) before scrolling to it.
  const [prefill, setPrefill] = useState({ role: 'professional', message: '', key: 0 });

  const openContact = useCallback((role, message = '') => {
    setPrefill((p) => ({ role, message, key: p.key + 1 }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useReveal();

  return (
    <>
      <a className="skip" href="#main">Naar inhoud</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <TwoSides onContact={openContact} />
        <Vacancies onContact={openContact} />
        <Process />
        <About />
        <Logos />
        <Testimonials />
        <Contact prefill={prefill} />
      </main>
      <Footer />
    </>
  );
}
