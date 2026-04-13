import CancerCareServices from "@/components/CancerCareServices";
import AboutCenter from "@/components/AboutCenter";

export default function Home() {
  return (
    <div className="flex flex-col"> 
      <CancerCareServices />
      <AboutCenter />
    </div>
  );
}
