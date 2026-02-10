import HeroSection from './HeroSection';
import PracticeAreasSection from './PracticeAreasSection';
import ActiveLawsuitsSection from './ActiveLawsuitsSection';
import HowItWorksSection from './HowItWorksSection';
import Footer from './Footer';
import TopNav from './TopNav';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="practice-areas">
          <PracticeAreasSection />
        </section>
        <section id="active-lawsuits">
          <ActiveLawsuitsSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="contact" className="scroll-mt-16">
          <div className="py-8" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
