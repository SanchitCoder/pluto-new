import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FileText, Phone, X } from 'lucide-react';
import ConsultationModal from './ConsultationModal';
import QuickQuoteModal from './QuickQuoteModal';
import { SITE } from '../lib/siteConfig';

/** Persistent site-wide conversion CTAs per SEO audit. */
export default function RequestQuoteBar() {
  const { pathname } = useLocation();
  const [consultOpen, setConsultOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const hiddenPaths = ['/crisis', '/crisis/form', '/thank-you'];
  if (hiddenPaths.some((p) => pathname.startsWith(p))) {
    return null;
  }

  if (dismissed) {
    return (
      <>
        <button
          type="button"
          onClick={() => setQuoteOpen(true)}
          className="fixed bottom-24 right-4 z-40 hidden rounded-full bg-gradient-to-r from-primary-teal to-primary-navy px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl md:flex md:items-center md:gap-2"
          aria-label="Request a travel quote"
        >
          <FileText size={16} />
          Request a Quote
        </button>
        <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
        <QuickQuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} onConsult={() => { setQuoteOpen(false); setConsultOpen(true); }} />
      </>
    );
  }

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-gradient-to-r from-luxury-darkBlue via-primary-navy to-primary-teal shadow-[0_-8px_32px_rgba(0,0,0,0.25)]"
        role="region"
        aria-label="Request a quote"
      >
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <p className="text-sm text-white/90 sm:text-base">
            <span className="font-semibold text-white">Plan corporate, MICE, or luxury travel?</span>
            {' '}Get a quote in minutes — IATA-accredited, 4.6★ on Google.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE.phoneOffice}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <Phone size={15} />
              {SITE.phoneOfficeDisplay}
            </a>
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="rounded-lg bg-accent-gold px-4 py-2 text-sm font-semibold text-luxury-darkBlue hover:bg-accent-gold/90"
            >
              Quick Enquiry
            </button>
            <button
              type="button"
              onClick={() => setConsultOpen(true)}
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-navy hover:bg-white/90"
            >
              Request a Quote
            </button>
            <Link
              to="/contact"
              className="hidden rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 sm:inline-block"
            >
              Contact Us
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
              aria-label="Minimize quote bar"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
      <QuickQuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        onConsult={() => {
          setQuoteOpen(false);
          setConsultOpen(true);
        }}
      />
    </>
  );
}
