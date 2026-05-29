import { CATEGORIES } from "./data/catalog";
import { CategorySection } from "./components/CategorySection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BenefitsGrid } from "./components/BenefitsGrid";
import { Footer } from "./components/Footer";
import { SkipLink } from "./components/SkipLink";
import { ProcessSteps } from "./components/ProcessSteps";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { StatsBand } from "./components/StatsBand";
import { GuaranteeBand } from "./components/GuaranteeBand";
import { PageProgressBar } from "./components/PageProgressBar";
import { BentoShowcase } from "./components/BentoShowcase";
import { BackToTop } from "./components/BackToTop";
import { HorizontalCarousel } from "./components/HorizontalCarousel";
import { PaywaveSection } from "./components/PaywaveSection";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useParallax } from "./hooks/useParallax";
import { useDeviceTier } from "./hooks/useDeviceTier";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useDeviceTier();
  useSmoothScroll();
  useScrollReveal();
  useParallax();

  return (
    <div className="app-shell">
      <SkipLink />
      <PageProgressBar />
      <Header />
      <main id="main" tabIndex={-1} aria-label="Каталог IPAFILESCR">
        <Hero />
        {CATEGORIES.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <PaywaveSection />
        <StatsBand />
        <BentoShowcase />
        <HorizontalCarousel />
        <ProcessSteps />
        <GuaranteeBand />
        <BenefitsGrid />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
