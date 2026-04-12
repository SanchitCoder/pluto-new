import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScrolling } from './components/SmoothScrolling';
import NewHomePage from './pages/NewHomePage';
import DestinationsPage from './pages/DestinationsPage';
import ContactPage from './pages/ContactPage';
import CorporateTravelPage from './pages/CorporateTravelPage';
import CorporateTravelManagementPage from './pages/CorporateTravelManagementPage';
import MICEAndEventsPage from './pages/MICEAndEventsPage';
import MICEEventDetailPage from './pages/MICEEventDetailPage';
import SpecializedIndustriesPage from './pages/SpecializedIndustriesPage';
import PersonalTravelPage from './pages/PersonalTravelPage';
import PlatinumConciergePage from './pages/PlatinumConciergePage';
import HolidayPackagesPage from './pages/HolidayPackagesPage';
import EssentialServicesPage from './pages/EssentialServicesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BusinessTravelPage from './pages/BusinessTravelPage';
import CorporateEventsPage from './pages/CorporateEventsPage';
import FirstClassTravelPage from './pages/FirstClassTravelPage';
import VisaPage from './pages/VisaPage';
import VisaDetailPage from './pages/VisaDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import BusinessLandingPage from './pages/BusinessLandingPage';
import LuxuryTravelPage from './pages/LuxuryTravelPage';
import CrisisLandingPage from './pages/CrisisLandingPage';
import CrisisFormPage from './pages/CrisisFormPage';
import ThankYouPage from './pages/ThankYouPage';

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-luxury-canvas pt-0 mt-0">
        <Routes>
          <Route path="/" element={<NewHomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/corporate" element={<CorporateTravelPage />} />
          <Route path="/corporate-travel" element={<CorporateTravelManagementPage />} />
          <Route path="/mice" element={<MICEAndEventsPage />} />
          <Route path="/mice/:eventType" element={<MICEEventDetailPage />} />
          <Route path="/industries" element={<SpecializedIndustriesPage />} />
          <Route path="/personal" element={<PersonalTravelPage />} />
          <Route path="/platinum" element={<PlatinumConciergePage />} />
          <Route path="/holidays" element={<HolidayPackagesPage />} />
          <Route path="/services" element={<EssentialServicesPage />} />
          <Route path="/package/:packageId" element={<PackageDetailPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="/business-travel" element={<BusinessTravelPage />} />
          <Route path="/corporate-events" element={<CorporateEventsPage />} />
          <Route path="/first-class-travel" element={<FirstClassTravelPage />} />
          <Route path="/visa/:region" element={<VisaPage />} />
          <Route path="/visa/:region/:countryId" element={<VisaDetailPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/business-landing" element={<BusinessLandingPage />} />
          <Route path="/luxury-travel" element={<LuxuryTravelPage />} />
          <Route path="/crisis" element={<CrisisLandingPage />} />
          <Route path="/crisis/form" element={<CrisisFormPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <SmoothScrolling>
        <AppContent />
      </SmoothScrolling>
    </Router>
  );
}

export default App;
