import Hero from "../components/hero";
import EmblaCarousel from "../components/slider";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Hero />
      <EmblaCarousel />
      {children}
      <Footer />
    </>
  );
}
