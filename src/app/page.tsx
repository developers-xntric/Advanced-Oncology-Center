import HeroSection from "@/components/HeroSection";
import ImagingServicesSection from "@/components/ImagingServicesSection";
import CancerTreatmentSection from "@/components/CancerTreatmentSection";
import AboutCenter from "@/components/AboutCenter";
import CancerCareServices from "@/components/CancerCareServices";
import HealingSection from "@/components/HealingSection";
import SecondOpinionSection from "@/components/SecondOpinionSection";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CancerCareServices />
      <AboutCenter />
      
      <ImagingServicesSection />
      <CancerTreatmentSection />
      <HealingSection />
      <SecondOpinionSection />
      <ContactSection />
    </div>
  );
}
