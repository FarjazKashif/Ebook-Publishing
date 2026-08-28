import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { AboutPage } from './pages/AboutPage';
import { EditingPage } from './pages/EditingPage';
import { CoverDesignPage } from './pages/CoverDesignPage';
import { ChildrensPage } from './pages/ChildrensPage';
import { FormattingPage } from './pages/FormattingPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import "./styles/infusion-publishing-cleaned.css";
import { MarketingPage } from './pages/MarketingPage';
import { ScrollToTop } from './components/ScrollToTop';
import { GhostwritingPage } from './pages/GhostwritingPage';
import { useEffect } from 'react';
import { AudiobookPage } from './pages/AudiobookPage';
import { LeadModal } from './components/ui/LeadModal';
import { LeadModalProvider, useLeadModal } from './context/LeadModalContext';

function AppContent() {
  const { openModal } = useLeadModal();
  const location = useLocation();

useEffect(() => {
    // const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
    
    // if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        openModal();
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
      }, 2000);
      
      return () => clearTimeout(timer);
    // }
  }, [location.pathname, openModal]); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/bueagjyuua2mtkxwvxql63lakos3mgw1.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/ghostwriting" element={<GhostwritingPage />} />
          <Route path="/services/editing-proofreading" element={<EditingPage />} />
          <Route path="/services/book-cover-design" element={<CoverDesignPage />} />
          <Route path="/services/childrens-book-publishing" element={<ChildrensPage />} />
          <Route path="/services/book-formatting" element={<FormattingPage />} />
          <Route path="/services/illustrations" element={<IllustrationsPage />} />
          <Route path="/services/book-marketing" element={<MarketingPage />} />
          <Route path="/services/audiobook" element={<AudiobookPage />} />
        </Routes>
      </div>
      <LeadModal />
    </>
  );
}

function App() {
  return (
    <LeadModalProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LeadModalProvider>
  );
}

export default App;