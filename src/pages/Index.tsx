import InstitutionalHeader from "@/components/InstitutionalHeader";
import HeroSection from "@/components/HeroSection";
import AuthorsSection from "@/components/AuthorsSection";
import CaracSection from "@/components/CaracSection";
import DancesGrid from "@/components/DancesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <InstitutionalHeader />
      <HeroSection />
      <AuthorsSection />
      <CaracSection />
      <DancesGrid />
      <Footer />
    </div>
  );
};

export default Index;
