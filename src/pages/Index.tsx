
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { StickyScrollIcon } from "@/components/StickyScrollIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <FeaturedProducts />
      <About />
      <Contact />
      <Footer />
      
      {/* Sticky Components */}
      <StickyCallButton />
      <StickyScrollIcon />
    </div>
  );
};

export default Index;
