import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { FadeInFooter } from './FadeInSection';
// Image moved to public folder

const Footer: React.FC = () => {
  const services = [
    { name: 'Platinum Concierge', href: '/platinum' },
    { name: 'Corporate Travel', href: '/corporate' },
    { name: 'MICE & Events', href: '/mice' },
    { name: 'Holiday Packages', href: '/holidays' },
    { name: 'Visa Services', href: '/visa/africa' },
    { name: 'Marine Travel', href: '/industries' },
    { name: 'Energy Travel', href: '/industries' },
  ];

  const company = [
    { name: 'About Us', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <FadeInFooter className="bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-luxury-slate text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/Pluto_Final_logo.png" alt="Pluto Travels" className="h-10 sm:h-12 md:h-14 w-auto" />
              <div className="h-8 w-px bg-white/30"></div>
              <img src="/Banner-Pluto.jpeg" alt="Banner" className="h-8 w-auto max-w-[120px] object-contain" />
            </div>
            <p className="text-sm text-white/70 mb-6">
              Dubai's premier travel concierge for executives and discerning
              travelers since 2007.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/luxurytravellerdubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/Plutotravelsdubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@plutotravelsdubai9722/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/plutotravelsdubai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://www.quora.com/profile/Pluto-Travels-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Quora"
                  title="Quora"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12.738 18.701c-2.154 0-3.794-1.175-3.794-2.709 0-.83.601-1.543 1.453-1.943-.495-.608-.795-1.346-.795-2.155 0-2.01 1.72-3.64 3.837-3.64s3.837 1.63 3.837 3.64c0 .809-.3 1.547-.795 2.155.852.4 1.453 1.113 1.453 1.943 0 1.534-1.64 2.709-3.794 2.709m-4.493-2.709c0 1.475 1.508 2.601 3.494 2.601s3.494-1.126 3.494-2.601c0-.713-.5-1.32-1.2-1.615l-.3-.12c-.3-.12-.6-.24-.6-.48v-.12c0-.24.3-.36.6-.48l.3-.12c.7-.295 1.2-.902 1.2-1.615 0-1.475-1.508-2.601-3.494-2.601s-3.494 1.126-3.494 2.601c0 .713.5 1.32 1.2 1.615l.3.12c.3.12.6.24.6.48v.12c0 .24-.3.36-.6.48l-.3.12c-.7.295-1.2.902-1.2 1.615M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"/>
                  </svg>
                </a>
                <a
                  href="https://www.reddit.com/user/plutotravelsdubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Reddit"
                  title="Reddit"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm text-white/70 hover:text-accent-coral transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-accent-coral transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-gold flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-white">Dubai Office</p>
                    <p>Prism Tower, Business Bay</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-gold flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-white">Ras Al Khaimah Office</p>
                    <p>Shop-3, 208 Sheikh Mohamed Bin Salem Rd</p>
                    <p>Dafan Ras Al Khaimah - Ras Al Khaimah</p>
                    <p>Pluto travels and tourism</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-gold flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="font-semibold text-white">Ahmedabad Office</p>
                    <p>SAL Hospital & Medical Institute, Maple Tree</p>
                    <p>Nr. Surdhara Circle, Road</p>
                    <p>Ahmedabad, Gujarat 380052, India</p>
                  </div>
                </div>
              </div>
              <a href="tel:+971509110065" className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Phone className="text-primary-gold flex-shrink-0" size={18} />
                <span> 04 392 0930</span>
              </a>
              <a href="mailto:sapna@plutotravels.ae" className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Mail className="text-primary-gold flex-shrink-0" size={18} />
                <span>sapna@plutotravels.ae</span>
              </a>
              <a href="mailto:sales@plutotravels.ae" className="flex items-center gap-3 hover:text-primary-gold transition-colors">
                <Mail className="text-primary-gold flex-shrink-0" size={18} />
                <span>sales@plutotravels.ae</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="text-primary-gold flex-shrink-0" size={18} />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 Pluto Travels LLC, Prism Tower, Business Bay, Dubai, UAE. All rights reserved.
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
