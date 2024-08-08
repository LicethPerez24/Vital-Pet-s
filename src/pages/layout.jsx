import Hero from "../components/hero";
import EmblaCarousel from "../components/slider";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Layout() {
  return (
    <>
      <Hero />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
