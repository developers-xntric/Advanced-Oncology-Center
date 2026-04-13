import HeroSection from "@/components/HeroSection";
import ImagingServicesSection from "@/components/ImagingServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ImagingServicesSection />
    </div>
  );
}
