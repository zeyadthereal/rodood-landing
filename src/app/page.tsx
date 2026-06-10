import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ChannelsSection from "@/components/landing/ChannelsSection";
import AgentsSection from "@/components/landing/AgentsSection";
import HandoffSection from "@/components/landing/HandoffSection";
import ComplaintsSection from "@/components/landing/ComplaintsSection";
import DashboardSection from "@/components/landing/DashboardSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ChannelsSection />
        <AgentsSection />
        <HandoffSection />
        <ComplaintsSection />
        <DashboardSection />
        <UseCasesSection />
        <HowItWorksSection />
        <PricingSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
