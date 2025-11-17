import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ListenSection } from "@/components/ListenSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ListenSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
