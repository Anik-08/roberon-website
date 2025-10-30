'use client'
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Products from "../components/Products";
// import Brands from "../components/Brands";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <div className="absolute top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      <section id='hero' className="relative w-full -z-10">
        <HeroPage />
      </section>
      <section id='products' className="-z-50">
        <Products />
      </section>
      <section id='services'>
        <Services />
      </section>
      {/* <section id='brands'>
        <Brands />
      </section> */}

        <Footer />
    </main>
  );
}
