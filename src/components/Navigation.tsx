import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown, Plane, Hotel, FileText, Sparkles, Briefcase, Calendar, Award, Ship, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import ConsultationModal from './ConsultationModal';
import CorporateAuditModal from './CorporateAuditModal';
import BookingDiscoveryModal from './BookingDiscoveryModal';
// Image moved to public folder

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const linkUnderline =
    'relative after:pointer-events-none after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-accent-gold after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100';

  return (
    <>
      {/* Floating bar — original gradient; border + shadow */}
      <div className="pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4 lg:px-6">
        <motion.nav
          layout
          className={`pointer-events-auto relative w-full max-w-[1600px] overflow-visible rounded-2xl border border-white/15 bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral shadow-[0_12px_44px_-8px_rgba(0,0,0,0.42)] transition-shadow duration-300 sm:rounded-[1.35rem] ${
            isScrolled ? 'shadow-[0_16px_48px_-6px_rgba(0,0,0,0.5)]' : ''
          }`}
          initial={{ y: -10, opacity: 0.92 }}
          animate={{ y: isScrolled ? 1 : 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="mx-auto w-full max-w-full px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex h-12 items-center justify-between gap-2 sm:h-14 lg:gap-1 xl:h-14">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img src="/Pluto_Final_logo.png" alt="Pluto Travels" className="h-8 sm:h-9 lg:h-9 xl:h-10 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 flex-1 justify-center min-w-0">
              <div
                className="relative flex-shrink-0"
                onMouseEnter={() => setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center gap-1 text-white/95 hover:text-white transition-colors font-medium whitespace-nowrap text-xs xl:text-sm tracking-tight px-3 xl:px-4 py-2.5 rounded-lg hover:bg-white/5 ${linkUnderline}`}>
                  Services <ChevronDown size={14} className="opacity-80" />
                </button>
              </div>
              <div
                className="relative flex-shrink-0"
                onMouseEnter={() => setActiveMenu('visa')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center gap-1 text-white/95 hover:text-white transition-colors font-medium whitespace-nowrap text-xs xl:text-sm tracking-tight px-3 xl:px-4 py-2.5 rounded-lg hover:bg-white/5 ${linkUnderline}`}>
                  VISA <ChevronDown size={14} className="opacity-80" />
                </button>
              </div>
              <div
                className="relative flex-shrink-0"
                onMouseEnter={() => setActiveMenu('corporates')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={`flex items-center gap-1 text-white/95 hover:text-white transition-colors font-medium whitespace-nowrap text-xs xl:text-sm tracking-tight px-3 xl:px-4 py-2.5 rounded-lg hover:bg-white/5 ${linkUnderline}`}>
                  For Corporates <ChevronDown size={14} className="opacity-80" />
                </button>
              </div>
              <Link 
                to="/corporate-travel" 
                className={`${linkUnderline} transition-colors font-medium whitespace-nowrap text-xs xl:text-sm flex-shrink-0 px-3 xl:px-4 py-2.5 rounded-lg tracking-tight ${
                  location.pathname === '/corporate-travel' 
                    ? 'text-accent-gold after:scale-x-100' 
                    : 'text-white/95 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="hidden 2xl:inline">Corporate Travel Management</span>
                <span className="2xl:hidden">Corporate Travel</span>
              </Link>
              <Link 
                to="/mice" 
                className={`${linkUnderline} transition-colors font-medium whitespace-nowrap text-xs xl:text-sm flex-shrink-0 px-3 xl:px-4 py-2.5 rounded-lg tracking-tight ${
                  location.pathname === '/mice' 
                    ? 'text-accent-gold after:scale-x-100' 
                    : 'text-white/95 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="hidden xl:inline">MICE & Group Events</span>
                <span className="xl:hidden">MICE</span>
              </Link>
              <Link 
                to="/luxury-travel" 
                className={`${linkUnderline} transition-colors font-medium whitespace-nowrap text-xs xl:text-sm flex-shrink-0 px-3 xl:px-4 py-2.5 rounded-lg tracking-tight ${
                  location.pathname === '/luxury-travel' 
                    ? 'text-accent-gold after:scale-x-100' 
                    : 'text-white/95 hover:text-white hover:bg-white/5'
                }`}
              >
                Luxury Travel
              </Link>
              <Link 
                to="/contact" 
                className={`${linkUnderline} transition-colors font-medium whitespace-nowrap text-xs xl:text-sm flex-shrink-0 px-3 xl:px-4 py-2.5 rounded-lg tracking-tight ${
                  location.pathname === '/contact' 
                    ? 'text-accent-gold after:scale-x-100' 
                    : 'text-white/95 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-2 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="inline-block rounded-full shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_24px_-4px_rgba(212,175,55,0.45)]"
              >
                <Button variant="gold" size="sm" onClick={() => setBookingDiscoveryOpen(true)} className="rounded-full px-4 xl:px-5 py-2 text-xs xl:text-sm font-semibold shadow-md hover:shadow-lg transition-shadow whitespace-nowrap">
                  <span className="hidden xl:inline">Open An Account</span>
                  <span className="xl:hidden">Open Account</span>
                </Button>
              </motion.div>
              <button
                onClick={() => setBookingDiscoveryOpen(true)}
                className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
              >
                <Phone size={18} />
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button onClick={() => setBookingDiscoveryOpen(true)} className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all">
                <Phone size={20} />
              </button>
              <a href="https://wa.me/971509110065" className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all">
                <MessageCircle size={20} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all"
              >
                {mobileMenuOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 overflow-hidden rounded-t-2xl rounded-b-2xl sm:rounded-t-[1.35rem] sm:rounded-b-[1.35rem] bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral border-t border-white/15 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.35)]"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-2">
                  <Link 
                    to="/luxury-travel" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Luxury Travel
                  </Link>
                  <Link 
                    to="/platinum" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Platinum Concierge
                  </Link>
                  <Link 
                    to="/corporate" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Corporate Travel
                  </Link>
                  <Link 
                    to="/business-landing" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Business Travel Excellence
                  </Link>
                  <Link 
                    to="/mice" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    MICE & Events
                  </Link>
                  <Link 
                    to="/holidays" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Holiday Packages
                  </Link>
                  <Link 
                    to="/visa/africa" 
                    className="block text-white/90 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Visa Services
                  </Link>
                  <Link 
                    to="/industries" 
                    className="block text-white/70 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Marine Travel
                  </Link>
                  <Link 
                    to="/industries" 
                    className="block text-white/70 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5 -mx-3"
                    onClick={() => setActiveMenu(null)}
                  >
                    Energy Travel
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          {activeMenu === 'visa' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 overflow-hidden rounded-t-2xl rounded-b-2xl sm:rounded-t-[1.35rem] sm:rounded-b-[1.35rem] bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral border-t border-white/15 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.35)]"
              onMouseEnter={() => setActiveMenu('visa')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <Link to="/visa/africa" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    AFRICA
                  </Link>
                  <Link to="/visa/middle-east" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    MIDDLE EAST
                  </Link>
                  <Link to="/visa/europe" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    EUROPE
                  </Link>
                  <Link to="/visa/asia" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    ASIA
                  </Link>
                  <Link to="/visa/canada" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    CANADA
                  </Link>
                  <Link to="/visa/usa" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    USA
                  </Link>
                  <Link to="/visa/cis" className="block p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-center font-semibold text-white/95 hover:text-white uppercase text-xs sm:text-sm tracking-wide">
                    CIS
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          {activeMenu === 'corporates' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 overflow-hidden rounded-t-2xl rounded-b-2xl sm:rounded-t-[1.35rem] sm:rounded-b-[1.35rem] bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral border-t border-white/15 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.35)]"
              onMouseEnter={() => setActiveMenu('corporates')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
                    <div className="space-y-4">
                      <Link to="/business-landing" className="block text-white/90 hover:text-white transition-colors text-sm py-1.5 rounded-lg hover:bg-white/5 -ml-2 pl-2">
                        Business Travel Excellence
                      </Link>
                      <Link to="/corporate" className="block text-white/90 hover:text-white transition-colors text-sm py-1.5 rounded-lg hover:bg-white/5 -ml-2 pl-2">
                        Corporate Travel Overview
                      </Link>
                      <Link to="/industries" className="block text-white/90 hover:text-white transition-colors text-sm py-1.5 rounded-lg hover:bg-white/5 -ml-2 pl-2">
                        Specialized Industries
                      </Link>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">Featured</span>
                    <h4 className="font-semibold text-lg mt-2 mb-2 text-white">
                      How We Saved Companies Over AED 320K
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Discover our proven corporate travel optimization strategies
                    </p>
                    <Button variant="primary" size="sm" onClick={() => setAuditOpen(true)}>Request Corporate Audit</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-primary-navy/10 backdrop-blur-xl lg:hidden"
          >
            <div className="p-4 sm:p-6 pb-8">
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <div className="flex items-center gap-2">
                  <img src="/Pluto_Final_logo.png" alt="Pluto Travels" className="h-8 sm:h-9 w-auto" />
                  <span className="text-sm sm:text-base font-semibold text-white/95 tracking-tight">PLUTO TRAVELS</span>
                </div>
                <button onClick={closeMobileMenu} className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  <X size={20} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="mb-5 sm:mb-6">
                <Button variant="gold" size="md" fullWidth onClick={() => setBookingDiscoveryOpen(true)} className="text-sm rounded-full font-semibold">
                  Schedule Consultation
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
                <a href="tel:+971509110065" className="flex flex-col items-center gap-1.5 p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/10 text-white/95 hover:bg-white/15 hover:text-white transition-all">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-medium">Call</span>
                </a>
                <a href="https://wa.me/971509110065" className="flex flex-col items-center gap-1.5 p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/10 text-white/95 hover:bg-white/15 hover:text-white transition-all">
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-medium">WhatsApp</span>
                </a>
                <a href="mailto:sales@plutotravels.ae" className="flex flex-col items-center gap-1.5 p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/10 text-white/95 hover:bg-white/15 hover:text-white transition-all">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-medium">Email</span>
                </a>
              </div>

              <nav className="space-y-2 sm:space-y-3 md:space-y-4">
                {/* Services Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('services')}
                    className="flex items-center justify-between w-full text-base sm:text-lg font-medium text-white py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Plane size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>Services</span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 flex-shrink-0 sm:w-5 sm:h-5 ${
                        mobileDropdownOpen === 'services' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 sm:pl-4 pt-1.5 sm:pt-2 space-y-1.5 sm:space-y-2">
                          <Link 
                            to="/luxury-travel" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Award size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Luxury Travel</span>
                          </Link>
                          <Link 
                            to="/platinum" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Award size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Platinum Concierge</span>
                          </Link>
                          <Link 
                            to="/corporate" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Corporate Travel</span>
                          </Link>
                          <Link 
                            to="/business-landing" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Business Travel Excellence</span>
                          </Link>
                          <Link 
                            to="/mice" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Calendar size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>MICE & Events</span>
                          </Link>
                          <Link 
                            to="/holidays" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Holiday Packages</span>
                          </Link>
                          <Link 
                            to="/visa/africa" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Visa Services</span>
                          </Link>
                          <Link 
                            to="/industries" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Ship size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Marine Travel</span>
                          </Link>
                          <Link 
                            to="/industries" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Zap size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Energy Travel</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* VISA Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('visa')}
                    className="flex items-center justify-between w-full text-base sm:text-lg font-medium text-white py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FileText size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>VISA</span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 flex-shrink-0 sm:w-5 sm:h-5 ${
                        mobileDropdownOpen === 'visa' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'visa' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 sm:pl-4 pt-1.5 sm:pt-2 space-y-1.5 sm:space-y-2">
                          <Link 
                            to="/visa/africa" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>AFRICA</span>
                          </Link>
                          <Link 
                            to="/visa/middle-east" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>MIDDLE EAST</span>
                          </Link>
                          <Link 
                            to="/visa/europe" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>EUROPE</span>
                          </Link>
                          <Link 
                            to="/visa/asia" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>ASIA</span>
                          </Link>
                          <Link 
                            to="/visa/canada" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>CANADA</span>
                          </Link>
                          <Link 
                            to="/visa/usa" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>USA</span>
                          </Link>
                          <Link 
                            to="/visa/cis" 
                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 hover:text-accent-gold transition-colors font-semibold uppercase py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <FileText size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>CIS</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* For Corporates Dropdown */}
                <div>
                  <button 
                    onClick={() => toggleMobileDropdown('corporates')}
                    className="flex items-center justify-between w-full text-base sm:text-lg font-medium text-white py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Briefcase size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>For Corporates</span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 flex-shrink-0 sm:w-5 sm:h-5 ${
                        mobileDropdownOpen === 'corporates' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'corporates' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 sm:pl-4 pt-1.5 sm:pt-2 space-y-2 sm:space-y-3">
                          <Link 
                            to="/business-landing" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Business Travel Excellence</span>
                          </Link>
                          <Link 
                            to="/corporate" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Corporate Travel Overview</span>
                          </Link>
                          <Link 
                            to="/industries" 
                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90 hover:text-accent-gold transition-colors py-1.5 sm:py-2 px-2 rounded-md hover:bg-white/10"
                            onClick={closeMobileMenu}
                          >
                            <Briefcase size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            <span>Specialized Industries</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/corporate-travel" 
                  className={`flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors ${
                    location.pathname === '/corporate-travel' 
                      ? 'text-accent-gold' 
                      : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Briefcase size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Corporate Travel Management</span>
                </Link>
                <Link 
                  to="/mice" 
                  className={`flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors ${
                    location.pathname === '/mice' 
                      ? 'text-accent-gold' 
                      : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Calendar size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>MICE & Group Events</span>
                </Link>
                <Link 
                  to="/luxury-travel" 
                  className={`flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors ${
                    location.pathname === '/luxury-travel' 
                      ? 'text-accent-gold' 
                      : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Award size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Luxury Travel</span>
                </Link>
                <Link 
                  to="/contact" 
                  className={`flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium py-2 sm:py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors ${
                    location.pathname === '/contact' 
                      ? 'text-accent-gold' 
                      : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Contact</span>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
      <CorporateAuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
      <BookingDiscoveryModal isOpen={bookingDiscoveryOpen} onClose={() => setBookingDiscoveryOpen(false)} />
    </>
  );
};

export default Navigation;
