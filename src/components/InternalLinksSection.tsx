import { Link } from 'react-router-dom';
import Container from './Container';
import { FadeInSection } from './FadeInSection';

const SERVICE_LINKS = [
  { href: '/corporate-travel', label: 'Corporate Travel Management Dubai' },
  { href: '/mice', label: 'MICE Company Dubai' },
  { href: '/luxury-travel', label: 'Luxury Travel Agency Dubai' },
  { href: '/visa/africa', label: 'Visa Services Dubai' },
  { href: '/holidays', label: 'Holiday Packages from Dubai' },
];

const SECTOR_LINKS = [
  { href: '/corporate-travel-energy', label: 'Energy & Oil/Gas Travel' },
  { href: '/marine-crew-travel-dubai', label: 'Marine Crew Travel' },
  { href: '/mining-sector-travel', label: 'Mining Sector Travel' },
  { href: '/sports-team-travel', label: 'Sports Team Travel' },
];

const LOCAL_AND_DEALS = [
  { href: '/travel-agency-business-bay-dubai', label: 'Travel Agency Business Bay' },
  { href: '/qatar-visa-from-dubai', label: 'Qatar Visa from Dubai' },
  { href: '/bishkek-holiday-packages-dubai', label: 'Bishkek Packages' },
  { href: '/group-travel-booking-dubai', label: 'Group Travel Booking' },
];

/** Internal linking hub for SEO — use on homepage and landing pages. */
export default function InternalLinksSection() {
  return (
    <FadeInSection className="border-t border-gray-200 bg-luxury-canvas py-12">
      <Container>
        <h2 className="mb-2 text-2xl font-bold text-luxury-darkBlue">Explore Our Travel Services</h2>
        <p className="mb-8 max-w-2xl text-gray-600">
          IATA-accredited since 2007 — corporate travel, MICE, luxury concierge, visas, and sector specialists across the UAE.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary-teal">Core Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-luxury-darkBlue hover:text-primary-coral hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary-teal">Sector Specialists</h3>
            <ul className="space-y-2">
              {SECTOR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-luxury-darkBlue hover:text-primary-coral hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary-teal">Local & Popular</h3>
            <ul className="space-y-2">
              {LOCAL_AND_DEALS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-luxury-darkBlue hover:text-primary-coral hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </FadeInSection>
  );
}
