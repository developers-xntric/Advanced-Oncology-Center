import HeroSection from "@/components/HeroSection";
import ImagingServicesSection from "@/components/ImagingServicesSection";
import CancerTreatmentSection from "@/components/CancerTreatmentSection";
import HealingSection from "@/components/HealingSection";
import SecondOpinionSection from "@/components/SecondOpinionSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ImagingServicesSection />
      <CancerTreatmentSection />
      <HealingSection />
      <SecondOpinionSection />
    </div>
  );
}
