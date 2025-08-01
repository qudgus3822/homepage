import { AppProvider, useApp } from "./components/AppContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { CompanyCultureSection } from "./components/CompanyCultureSection";
import { TalentSection } from "./components/TalentSection";
import { PartnershipsSection } from "./components/PartnershipsSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { ContactModal } from "./components/ContactModal";
import { BarCodePage } from "./components/pages/BarCodePage";
import { CodeLearnPage } from "./components/pages/CodeLearnPage";
import { CodeJourneyPage } from "./components/pages/CodeJourneyPage";

function MainHomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <CompanyCultureSection />
      <TalentSection />
      <PartnershipsSection />
      <FinalCTASection />
    </>
  );
}

function AppContent() {
  const { state } = useApp();

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case "barcode":
        return <BarCodePage />;
      case "codelearn":
        return <CodeLearnPage />;
      case "codejourney":
        return <CodeJourneyPage />;
      case "home":
      default:
        return <MainHomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderCurrentPage()}</main>
      <ContactModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}