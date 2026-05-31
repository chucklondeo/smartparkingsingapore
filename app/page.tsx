import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import PlatformFeatures from "@/components/PlatformFeatures";
import Dashboard from "@/components/Dashboard";
import Hardware from "@/components/Hardware";
import WhySingapore from "@/components/WhySingapore";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Solutions />
      <PlatformFeatures />
      <Dashboard />
      <Hardware />
      <WhySingapore />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
}
