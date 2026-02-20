import InstitutionalHeader from "@/components/InstitutionalHeader";
import HeroSection from "@/components/HeroSection";
import AuthorsSection from "@/components/AuthorsSection";
import DancesGrid from "@/components/DancesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <InstitutionalHeader />
      <HeroSection />
      <AuthorsSection />
      <DancesGrid />
      <Footer />
    </div>
  );
};

export default Index;
