import HeroSection from "@/components/HeroSection";
import ImagingServicesSection from "@/components/ImagingServicesSection";
import CancerTreatmentSection from "@/components/CancerTreatmentSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ImagingServicesSection />
      <CancerTreatmentSection />
    </div>
  );
}
