import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { FadeInFooter } from './FadeInSection';
import { SITE } from '../lib/siteConfig';

const Footer: React.FC = () => {
  const services = [
    { name: 'Corporate Travel Management', href: '/corporate-travel' },
    { name: 'MICE & Events', href: '/mice' },
    { name: 'Luxury Travel', href: '/luxury-travel' },
    { name: 'Platinum Concierge', href: '/platinum' },
    { name: 'Holiday Packages', href: '/holidays' },
    { name: 'Visa Services', href: '/visa/africa' },
    { name: 'Business Bay Office', href: '/travel-agency-business-bay-dubai' },
  ];

  const sectors = [
    { name: 'Energy & Oil/Gas Travel', href: '/corporate-travel-energy' },
    { name: 'Marine Crew Travel', href: '/marine-crew-travel-dubai' },
    { name: 'Mining Sector Travel', href: '/mining-sector-travel' },
    { name: 'Sports Team Travel', href: '/sports-team-travel' },
    { name: 'All Industries', href: '/industries' },
  ];

  const popular = [
    { name: 'Qatar Visa from Dubai', href: '/qatar-visa-from-dubai' },
    { name: 'Bishkek Packages', href: '/bishkek-holiday-packages-dubai' },
    { name: 'Group Travel Booking', href: '/group-travel-booking-dubai' },
    { name: 'Contact & Quote', href: '/contact' },
  ];

  const company = [
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <FadeInFooter className="bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-luxury-slate text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/Pluto_Final_logo.png"
                alt="Pluto Travels LLC — IATA travel agency Dubai"
                className="h-10 sm:h-12 md:h-14 w-auto"
                loading="lazy"
              />
              <div className="h-8 w-px bg-white/30" />
              <img
                src="/Banner-Pluto.jpeg"
                alt="Pluto Travels Dubai corporate and luxury travel"
                className="h-8 w-auto max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-white/70 mb-4">
              IATA-accredited travel agency in Business Bay, Dubai since 2007. Corporate travel, MICE, luxury
              concierge & visa services — {SITE.aggregateRating.reviewCount} Google reviews at {SITE.aggregateRating.ratingValue}★.
            </p>
            <p className="text-xs text-white/50">
              {SITE.address.streetAddress}, {SITE.address.addressLocality}, UAE
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/70 hover:text-primary-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Sectors</h4>
            <ul className="space-y-2 text-sm">
              {sectors.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/70 hover:text-primary-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/70 hover:text-primary-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-3 text-sm text-primary-gold">Popular</h4>
            <ul className="space-y-2 text-sm">
              {popular.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/70 hover:text-primary-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us — Dubai HQ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-gold flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-semibold text-white">Business Bay Office</p>
                  <p>{SITE.address.streetAddress}</p>
                  <p>{SITE.address.addressLocality}, UAE</p>
                  <Link to="/travel-agency-business-bay-dubai" className="text-primary-gold hover:underline text-xs mt-1 inline-block">
                    Directions & local info →
                  </Link>
                </div>
              </div>
              <a href={`tel:${SITE.phoneOffice}`} className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Phone className="text-primary-gold flex-shrink-0" size={18} />
                <span>
                  Office: <strong>{SITE.phoneOfficeDisplay}</strong>
                </span>
              </a>
              <a href={`tel:${SITE.phoneMobile}`} className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Phone className="text-primary-gold flex-shrink-0" size={18} />
                <span>
                  Mobile / WhatsApp: <strong>{SITE.phoneMobileDisplay}</strong>
                </span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Mail className="text-primary-gold flex-shrink-0" size={18} />
                <span>{SITE.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="text-primary-gold flex-shrink-0" size={18} />
                <span>24/7 Travel Support</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-white/70">
            <p className="mb-2">
              <strong className="text-white">Pluto Travels LLC</strong> — corporate travel management, MICE event
              planning, luxury VIP concierge, visa assistance, and holiday packages from Dubai.
            </p>
            <p>
              Request a quote for corporate travel, marine crew logistics, energy sector rotations, or sports team
              travel. IATA accredited · Est. {SITE.foundingDate} · {SITE.aggregateRating.ratingValue}★ Google rating.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {SITE.name}, {SITE.address.streetAddress}, {SITE.address.addressLocality}, UAE.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-white/60 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </FadeInFooter>
  );
};

export default Footer;
