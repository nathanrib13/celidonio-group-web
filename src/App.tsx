import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Philosophy from "./components/Philosophy";
import Segments from "./components/Segments";
import Vision from "./components/Vision";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Segments />
        <Philosophy />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
