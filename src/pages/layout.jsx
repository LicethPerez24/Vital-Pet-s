import Footer from "../components/footer";
import Hero from "../components/hero";
import Products from "../components/products";
import EmblaCarousel from "../components/slider";

export default function Layout() {
  return (
    <>
      <Hero />
      <EmblaCarousel />
      <Products />
      <Footer />
    </>
  );
}
