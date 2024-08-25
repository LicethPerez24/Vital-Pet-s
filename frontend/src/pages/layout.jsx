import Hero from "../components/hero";
import { Component } from "../components/slider";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Hero />
      <Component />
      {children}
      <Footer />
    </>
  );
}
