import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import { SmoothScrolling } from './components/SmoothScrolling';
import GlobalSEO from './components/GlobalSEO';
import NewHomePage from './pages/NewHomePage';
import { getLandingPageConfig, LANDING_PAGE_SLUGS } from './data/landingPages';
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CorporateTravelPage = lazy(() => import('./pages/CorporateTravelPage'));
const CorporateTravelManagementPage = lazy(() => import('./pages/CorporateTravelManagementPage'));
const MICEAndEventsPage = lazy(() => import('./pages/MICEAndEventsPage'));
const MICEEventDetailPage = lazy(() => import('./pages/MICEEventDetailPage'));
const SpecializedIndustriesPage = lazy(() => import('./pages/SpecializedIndustriesPage'));
const PersonalTravelPage = lazy(() => import('./pages/PersonalTravelPage'));
const PlatinumConciergePage = lazy(() => import('./pages/PlatinumConciergePage'));
const HolidayPackagesPage = lazy(() => import('./pages/HolidayPackagesPage'));
const EssentialServicesPage = lazy(() => import('./pages/EssentialServicesPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const BusinessTravelPage = lazy(() => import('./pages/BusinessTravelPage'));
const CorporateEventsPage = lazy(() => import('./pages/CorporateEventsPage'));
const FirstClassTravelPage = lazy(() => import('./pages/FirstClassTravelPage'));
const VisaPage = lazy(() => import('./pages/VisaPage'));
const VisaDetailPage = lazy(() => import('./pages/VisaDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'));
const BusinessLandingPage = lazy(() => import('./pages/BusinessLandingPage'));
const TravelConsultationLandingPage = lazy(() => import('./pages/TravelConsultationLandingPage'));
const LuxuryTravelPage = lazy(() => import('./pages/LuxuryTravelPage'));
const CrisisLandingPage = lazy(() => import('./pages/CrisisLandingPage'));
const CrisisFormPage = lazy(() => import('./pages/CrisisFormPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const SEOLandingPage = lazy(() => import('./components/SEOLandingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function LandingRoute({ slug }: { slug: string }) {
  const config = getLandingPageConfig(slug);
  if (!config) return null;
  return <SEOLandingPage config={config} />;
}

function AppContent() {
  return (
    <>
      <GlobalSEO />
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-luxury-canvas pt-0 mt-0">
        <Suspense fallback={<div className="min-h-screen bg-luxury-canvas" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<NewHomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/corporate" element={<CorporateTravelPage />} />
          <Route path="/corporate-travel" element={<CorporateTravelManagementPage />} />
          <Route path="/corporate-travel-dubai" element={<Navigate to="/corporate-travel" replace />} />
          <Route path="/mice" element={<MICEAndEventsPage />} />
          <Route path="/mice-dubai" element={<Navigate to="/mice" replace />} />
          <Route path="/mice/:eventType" element={<MICEEventDetailPage />} />
          <Route path="/industries" element={<SpecializedIndustriesPage />} />
          <Route path="/personal" element={<PersonalTravelPage />} />
          <Route path="/platinum" element={<PlatinumConciergePage />} />
          <Route path="/luxury-travel" element={<LuxuryTravelPage />} />
          <Route path="/luxury-travel-dubai" element={<Navigate to="/luxury-travel" replace />} />
          <Route path="/holidays" element={<HolidayPackagesPage />} />
          <Route path="/services" element={<EssentialServicesPage />} />
          <Route path="/package/:packageId" element={<PackageDetailPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          <Route path="/business-travel" element={<BusinessTravelPage />} />
          <Route path="/corporate-events" element={<CorporateEventsPage />} />
          <Route path="/first-class-travel" element={<FirstClassTravelPage />} />
          <Route path="/visa" element={<Navigate to="/visa/africa" replace />} />
          <Route path="/visa/:region" element={<VisaPage />} />
          <Route path="/visa/:region/:countryId" element={<VisaDetailPage />} />
          <Route path="/visa-services-dubai" element={<Navigate to="/visa/africa" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/business-landing" element={<BusinessLandingPage />} />
          <Route path="/travel-consultation" element={<TravelConsultationLandingPage />} />
          <Route path="/crisis" element={<CrisisLandingPage />} />
          <Route path="/crisis/form" element={<CrisisFormPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          {LANDING_PAGE_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LandingRoute slug={slug} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SmoothScrolling>
          <AppContent />
        </SmoothScrolling>
      </Router>
    </HelmetProvider>
  );
}

export default App;
