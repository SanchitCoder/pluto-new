import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { FadeInSection } from '../components/FadeInSection';

const POPULAR_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/corporate-travel', label: 'Corporate Travel Management' },
  { href: '/mice', label: 'MICE & Group Events' },
  { href: '/luxury-travel', label: 'Luxury Travel' },
  { href: '/visa/africa', label: 'Visa Services' },
  { href: '/holidays', label: 'Holiday Packages' },
  { href: '/blog', label: 'Travel Guides & Blog' },
  { href: '/contact', label: 'Contact Us' },
];

/**
 * Client-side catch-all for unmatched in-app routes (e.g. a stale internal link clicked while the
 * SPA is already running). Direct requests to unknown URLs are handled server-side by /404.html —
 * see vercel.json — so crawlers get a real HTTP 404 status; this component is for in-app UX and sets
 * noindex for the rare case a bot does reach it via client-side navigation.
 */
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-canvas">
      <SEOHead
        pathname={typeof window !== 'undefined' ? window.location.pathname : '/404'}
        override={{ title: 'Page Not Found | Pluto Travels', description: 'The page you are looking for could not be found.', noindex: true }}
      />
      <Navigation />
      <FadeInSection className="flex min-h-[70vh] items-center py-20">
        <Container maxWidth="md">
          <div className="text-center">
            <Compass className="mx-auto mb-6 text-primary-teal" size={56} />
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-coral">404</p>
            <h1 className="mb-4 text-3xl font-bold text-luxury-darkBlue sm:text-4xl">We couldn't find that page</h1>
            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600">
              The page you're looking for may have moved or no longer exists. Try one of these instead, or head back
              to the homepage.
            </p>
            <div className="mb-10">
              <Button variant="gold" size="lg" href="/">
                Back to Home
              </Button>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {POPULAR_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3.5 font-semibold text-luxury-darkBlue shadow-sm transition-colors hover:border-primary-teal hover:text-primary-teal"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
