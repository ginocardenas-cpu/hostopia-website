import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import PartnerTypes from "@/components/PartnerTypes";
import Services from "@/components/Services";
import Migrations from "@/components/Migrations";
import BilingualSupport from "@/components/BilingualSupport";
import GoToMarket from "@/components/GoToMarket";
import WhyHostopia from "@/components/WhyHostopia";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { VimeoVideoSection } from "@/components/VimeoVideoSection";
import { loadHomeVimeo } from "@/lib/load-home-vimeo";

export default function Home() {
  const homeVimeo = loadHomeVimeo();

  return (
    <main>
      <Hero />
      {homeVimeo ? (
        <VimeoVideoSection
          vimeoId={homeVimeo.vimeoId}
          eyebrow={homeVimeo.eyebrow}
          title={homeVimeo.title}
          description={homeVimeo.description}
          posterSrc={homeVimeo.posterSrc}
          posterAlt={homeVimeo.posterAlt}
          playLabel={homeVimeo.playLabel}
        />
      ) : null}
      <Pillars />
      <PartnerTypes />
      <Services />
      <Migrations />
      <BilingualSupport />
      <GoToMarket />
      <WhyHostopia />
      <CTA />
      <FAQ />
    </main>
  );
}
