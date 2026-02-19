import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import PartnerTypes from "@/components/PartnerTypes";
import Services from "@/components/Services";
import Migrations from "@/components/Migrations";
import BilingualSupport from "@/components/BilingualSupport";
import GoToMarket from "@/components/GoToMarket";
import WhyHostopia from "@/components/WhyHostopia";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pillars />
      <PartnerTypes />
      <Services />
      <Migrations />
      <BilingualSupport />
      <GoToMarket />
      <WhyHostopia />
      <CTA />
      <Footer />
    </main>
  );
}
