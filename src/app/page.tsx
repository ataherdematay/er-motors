import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Founder from "@/components/Founder";
import Showroom from "@/components/Showroom";
import DeliveredVehicles from "@/components/DeliveredVehicles";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BrandVision from "@/components/BrandVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <Founder />
        <Showroom />
        <DeliveredVehicles />
        <WhyUs />
        <Testimonials />
        <BrandVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
