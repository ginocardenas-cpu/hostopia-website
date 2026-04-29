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
import { HomeNativeVideoSection } from "@/components/HomeNativeVideoSection";
import { loadHomeVimeo } from "@/lib/load-home-vimeo";
import { normalizeVimeoId } from "@/lib/vimeo-id";

export default function Home() {
  const homeVimeo = loadHomeVimeo();
  const mp4Src = homeVimeo?.mp4Src?.trim();
  const vimeoId = homeVimeo?.vimeoId ? normalizeVimeoId(homeVimeo.vimeoId) : null;

  return (
    <main>
      <Hero />
      {homeVimeo && mp4Src ? (
        <HomeNativeVideoSection
          eyebrow={homeVimeo.eyebrow}
          title={homeVimeo.title}
          description={homeVimeo.description}
          mp4Src={mp4Src}
          posterSrc={homeVimeo.posterSrc}
          posterAlt={homeVimeo.posterAlt}
        />
      ) : homeVimeo && vimeoId ? (
        <VimeoVideoSection
          vimeoId={homeVimeo.vimeoId ?? ""}
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
