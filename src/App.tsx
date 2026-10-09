import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntroTransition } from './components/IntroTransition';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { MaterialsPage } from './pages/MaterialsPage';
import { MaterialDetailPage } from './pages/MaterialDetailPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { QualityPage } from './pages/QualityPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically when location changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState<boolean>(false);
  const [selectedMaterialSlug, setSelectedMaterialSlug] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (materialSlug?: string) => {
    setSelectedMaterialSlug(materialSlug);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink selection:bg-bronze selection:text-white">
      <ScrollToTop />
      <IntroTransition />

      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/materials" element={<MaterialsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/materials/:slug" element={<MaterialDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/applications" element={<ApplicationsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        initialMaterialSlug={selectedMaterialSlug}
      />
    </div>
  );
};

export default App;
