import About from "./components/About";
import CTA from "./components/CTA";
import Experience from "./components/Experience";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <CTA />
      <Footer />
      <FloatingButtons />
    </>
  );
}
