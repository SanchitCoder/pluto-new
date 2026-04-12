import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, CreditCard, Plus, Minus, ChevronRight } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import { FadeInSection } from '../components/FadeInSection';

interface VisaDetailData {
  country: string;
  region: string;
  processingTime: string;
  documentation: string;
  paymentOption: string;
  note?: string;
  clientDocuments: string[];
  assistance: string[];
  specialNotes: string[];
  faqs: { question: string; answer: string }[];
}

// Country-specific visa data
const visaDetailData: Record<string, VisaDetailData> = {
  // Africa
  morocco: {
    country: 'Morocco',
    region: 'Africa',
    processingTime: '5 to 7 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Confirmed Return air ticket and hotel voucher is required at the airport during visit to Morocco',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Morocco Visa services open to all?',
        answer: 'Yes, it is made available to all nationalities, provided the applicant is a UAE national or a UAE resident.',
      },
      {
        question: 'Do I need to apply for a Morocco Visa for my kids?',
        answer: 'Yes, children require their own visa application. The process is similar to adults, and all required documents must be submitted.',
      },
      {
        question: 'Do you guarantee the approval of my Morocco visa or is there a possibility of getting my visa rejected?',
        answer: 'We cannot guarantee visa approval as the decision is made by the Moroccan consulate. However, we ensure all documents are properly verified and submitted correctly.',
      },
      {
        question: 'What is the approximate processing time of Morocco Visa?',
        answer: 'The standard processing time is 5 to 7 working days from the date of submission, provided all documents are complete.',
      },
    ],
  },
  egypt: {
    country: 'Egypt',
    region: 'Africa',
    processingTime: '3 to 5 working days',
    documentation: 'Easy Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Bank statement (last 3 months)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 30 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Egypt Visa services open to all?',
        answer: 'Yes, our Egypt visa services are available to all nationalities who are UAE residents or UAE nationals.',
      },
      {
        question: 'Do I need to apply for an Egypt Visa for my kids?',
        answer: 'Yes, children traveling to Egypt require their own visa application regardless of age.',
      },
      {
        question: 'What is the validity period of an Egypt tourist visa?',
        answer: 'A tourist visa for Egypt is typically valid for 30 days from the date of entry.',
      },
      {
        question: 'Can I extend my Egypt visa?',
        answer: 'Yes, visa extensions are possible but must be applied for before the current visa expires. Additional fees apply.',
      },
    ],
  },
  kenya: {
    country: 'Kenya',
    region: 'Africa',
    processingTime: '4 to 6 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Yellow fever vaccination certificate',
      'Hotel booking confirmation',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Yellow fever vaccination is mandatory for entry into Kenya',
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Kenya Visa services open to all?',
        answer: 'Yes, Kenya visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need a yellow fever certificate for Kenya?',
        answer: 'Yes, a yellow fever vaccination certificate is mandatory for entry into Kenya.',
      },
      {
        question: 'What is the processing time for Kenya visa?',
        answer: 'Standard processing time is 4 to 6 working days from the date of complete document submission.',
      },
    ],
  },
  mali: {
    country: 'Mali',
    region: 'Africa',
    processingTime: '4 to 5 working days',
    documentation: 'Easy Documentation',
    paymentOption: 'Online Payment Option',
    note: 'Currently we are not assisting for the Mali visa, will come back soon.',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Invitation letter required for Business visa',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Confirmed Return air ticket and hotel voucher is required at the airport during visit to Mali',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Mali Visa services open to all?',
        answer: 'Yes, it is made available to all nationalities, provided the applicant is a UAE national or a UAE resident.',
      },
      {
        question: 'Do I need to apply for a Mali Visa for my kids?',
        answer: 'Yes, children require their own visa application. The process is similar to adults.',
      },
      {
        question: 'Do you guarantee the approval of my Mali visa or is there a possibility of getting my visa rejected?',
        answer: 'We cannot guarantee visa approval as the decision is made by the Malian consulate. However, we ensure all documents are properly verified.',
      },
      {
        question: 'What is the approximate processing time of Mali Visa?',
        answer: 'The standard processing time is 4 to 5 working days from the date of submission, provided all documents are complete.',
      },
    ],
  },
  // Latin America
  brazil: {
    country: 'Brazil',
    region: 'Latin America',
    processingTime: '7 to 10 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 3 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 90 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Brazil Visa services open to all?',
        answer: 'Yes, Brazil visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the validity period of a Brazil tourist visa?',
        answer: 'A tourist visa for Brazil is typically valid for 90 days and can be extended for another 90 days.',
      },
      {
        question: 'Do I need a visa for Brazil if I have a US visa?',
        answer: 'US visa holders may be eligible for visa-free entry or expedited processing. Please contact us for details.',
      },
    ],
  },
  // Middle East
  uae: {
    country: 'United Arab Emirates',
    region: 'Middle East',
    processingTime: '3 to 5 working days',
    documentation: 'Easy Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Flight reservation',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Visa on arrival available for certain nationalities',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' UAE Visa services open to all?',
        answer: 'Yes, UAE visa services are available to all nationalities.',
      },
      {
        question: 'What is the processing time for UAE visa?',
        answer: 'Standard processing time is 3 to 5 working days, with express options available.',
      },
    ],
  },
  // Europe
  uk: {
    country: 'United Kingdom',
    region: 'Europe',
    processingTime: '10 to 15 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 6 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Employment letter',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Biometric appointment required at visa application center',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' UK Visa services open to all?',
        answer: 'Yes, UK visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need to provide biometrics for UK visa?',
        answer: 'Yes, biometric data (fingerprints and photograph) is required at the visa application center.',
      },
      {
        question: 'What is the processing time for UK visa?',
        answer: 'Standard processing time is 10 to 15 working days. Priority and super priority services are available.',
      },
    ],
  },
  // Asia
  japan: {
    country: 'Japan',
    region: 'Asia',
    processingTime: '5 to 7 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 3 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Travel itinerary',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 90 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Japan Visa services open to all?',
        answer: 'Yes, Japan visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the validity period of a Japan tourist visa?',
        answer: 'A tourist visa for Japan is typically valid for 90 days from the date of issue.',
      },
      {
        question: 'Do I need an invitation letter for Japan visa?',
        answer: 'An invitation letter is not mandatory for tourist visas but may be required for certain cases.',
      },
    ],
  },
  // More Africa countries
  'south-africa': {
    country: 'South Africa',
    region: 'Africa',
    processingTime: '7 to 10 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 3 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Yellow fever vaccination certificate',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Yellow fever vaccination required if traveling from affected areas',
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 90 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' South Africa Visa services open to all?',
        answer: 'Yes, South Africa visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need a yellow fever certificate for South Africa?',
        answer: 'Yellow fever vaccination is required if you are traveling from or have transited through a yellow fever endemic country.',
      },
      {
        question: 'What is the validity period of a South Africa tourist visa?',
        answer: 'A tourist visa for South Africa is typically valid for 90 days from the date of entry.',
      },
    ],
  },
  tanzania: {
    country: 'Tanzania',
    region: 'Africa',
    processingTime: '5 to 7 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Yellow fever vaccination certificate',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Yellow fever vaccination is mandatory',
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Tanzania Visa services open to all?',
        answer: 'Yes, Tanzania visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Can I get a visa on arrival for Tanzania?',
        answer: 'Yes, visa on arrival is available at major entry points, but pre-arranged visas are recommended for smoother entry.',
      },
    ],
  },
  // More Latin America
  argentina: {
    country: 'Argentina',
    region: 'Latin America',
    processingTime: '10 to 15 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 6 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Travel insurance',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 90 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Argentina Visa services open to all?',
        answer: 'Yes, Argentina visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the processing time for Argentina visa?',
        answer: 'Standard processing time is 10 to 15 working days. Express processing may be available.',
      },
    ],
  },
  // More Middle East
  'saudi-arabia': {
    country: 'Saudi Arabia',
    region: 'Middle East',
    processingTime: '3 to 5 working days',
    documentation: 'Easy Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Flight reservation',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows multiple entries',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Saudi Arabia Visa services open to all?',
        answer: 'Yes, Saudi Arabia visa services are available to all nationalities.',
      },
      {
        question: 'What is the validity period of a Saudi Arabia tourist visa?',
        answer: 'Tourist visas are typically valid for 90 days with multiple entry options available.',
      },
    ],
  },
  // More Europe
  france: {
    country: 'France',
    region: 'Europe',
    processingTime: '7 to 10 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 3 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Travel insurance',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Schengen visa allows travel within Schengen area',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' France Visa services open to all?',
        answer: 'Yes, France visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Can I travel to other countries with a France visa?',
        answer: 'Yes, a France Schengen visa allows you to travel to all Schengen area countries.',
      },
    ],
  },
  // More Asia
  china: {
    country: 'China',
    region: 'Asia',
    processingTime: '7 to 10 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 3 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Travel itinerary',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 30 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' China Visa services open to all?',
        answer: 'Yes, China visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the validity period of a China tourist visa?',
        answer: 'Tourist visas are typically valid for 30 days from the date of entry.',
      },
    ],
  },
  // Australia
  australia: {
    country: 'Australia',
    region: 'Australia',
    processingTime: '10 to 15 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 6 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Employment letter',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 12 months',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Australia Visa services open to all?',
        answer: 'Yes, Australia visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the processing time for Australia visa?',
        answer: 'Standard processing time is 10 to 15 working days. Priority processing is available.',
      },
    ],
  },
  // Canada
  canada: {
    country: 'Canada',
    region: 'Canada',
    processingTime: '15 to 20 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Bank statement (last 6 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Employment letter',
      'Travel history',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Biometric appointment required',
      'Tourist visa allows stay up to 6 months',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Canada Visa services open to all?',
        answer: 'Yes, Canada visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need to provide biometrics for Canada visa?',
        answer: 'Yes, biometric data (fingerprints and photograph) is required at the visa application center.',
      },
    ],
  },
  // USA
  usa: {
    country: 'United States',
    region: 'USA',
    processingTime: '15 to 20 working days',
    documentation: 'Comprehensive Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (5*5 CM)',
      'Bank statement (last 6 months)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Employment letter',
      'Travel history',
      'DS-160 confirmation page',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
      'Interview preparation assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Interview required at US consulate',
      'Tourist visa allows stay up to 6 months',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' USA Visa services open to all?',
        answer: 'Yes, USA visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need to attend an interview for USA visa?',
        answer: 'Yes, an interview at the US consulate is mandatory for most visa applicants.',
      },
      {
        question: 'What is the processing time for USA visa?',
        answer: 'Standard processing time is 15 to 20 working days, excluding interview wait times.',
      },
    ],
  },
  // CIS
  russia: {
    country: 'Russia',
    region: 'CIS',
    processingTime: '7 to 10 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
      'Invitation letter (for tourist visa)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
      'Tourist visa allows stay up to 30 days',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' Russia Visa services open to all?',
        answer: 'Yes, Russia visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'Do I need an invitation letter for Russia visa?',
        answer: 'Yes, an invitation letter from a Russian travel agency or hotel is required for tourist visas.',
      },
    ],
  },
  // Default fallback
  default: {
    country: 'Country',
    region: 'Region',
    processingTime: '5 to 7 working days',
    documentation: 'Standard Documentation',
    paymentOption: 'Online Payment Option',
    clientDocuments: [
      'Passport Copy (6 months validity with at least two blank pages)',
      '2 Recent Digital Photographs with White Background (3.5*4.5 CM)',
      'Hotel booking confirmation',
      'Flight reservation (return ticket)',
    ],
    assistance: [
      'Application Filling',
      'Verification of Documents',
      'Flight & Hotel Booking assistance',
    ],
    specialNotes: [
      'Holiday Packages available including flight, hotel, sightseeing & transfers',
      'Service Fees & Visa fees is non-refundable in case of rejection',
    ],
    faqs: [
      {
        question: 'Is Pluto Travels\' visa services open to all?',
        answer: 'Yes, our visa services are available to all UAE residents and nationals.',
      },
      {
        question: 'What is the processing time?',
        answer: 'Standard processing time is 5 to 7 working days from the date of submission.',
      },
    ],
  },
};

const VisaDetailPage: React.FC = () => {
  const { region, countryId } = useParams<{ region: string; countryId: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    adults: 1,
    children: 0,
    infants: 0,
    nationality: '',
    referralSource: 'Google',
    message: '',
  });

  const visaInfo = visaDetailData[countryId || 'default'] || visaDetailData.default;
  const regionName = region?.replace('-', ' ') || 'Region';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your enquiry! We will contact you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'adults' || name === 'children' || name === 'infants' ? parseInt(value) || 0 : value,
    }));
  };

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Breadcrumb */}
      <FadeInSection className="bg-gray-50 py-4 border-b">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-gold transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link to="/visa" className="hover:text-primary-gold transition-colors">Visa</Link>
            <ChevronRight size={16} />
            <Link to={`/visa/${region}`} className="hover:text-primary-gold transition-colors capitalize">{regionName}</Link>
            <ChevronRight size={16} />
            <span className="text-primary-navy font-semibold">{visaInfo.country} Visa</span>
          </div>
        </Container>
      </FadeInSection>

      {/* Hero Section */}
      <FadeInSection className="relative bg-gradient-to-b from-luxury-darkBlue via-primary-navy to-luxury-darkBlue text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/90 to-luxury-darkBlue/95"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {visaInfo.country} Visa Services from Dubai, UAE
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-body">
              Professional visa processing services for seamless travel experiences
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Main Content */}
      <FadeInSection className="py-12">
        <Container>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Visa Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Features Bar */}
              <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary-teal" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Processing Time</p>
                    <p className="font-semibold text-primary-navy">Normal {visaInfo.processingTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="text-primary-teal" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Documentation</p>
                    <p className="font-semibold text-primary-navy">{visaInfo.documentation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="text-primary-teal" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">Payment</p>
                    <p className="font-semibold text-primary-navy">{visaInfo.paymentOption}</p>
                  </div>
                </div>
              </div>

              {/* Note Section */}
              {visaInfo.note && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h3 className="font-semibold text-primary-navy mb-2 underline">Note</h3>
                  <p className="text-gray-700">{visaInfo.note}</p>
                </div>
              )}

              {/* Client Documents */}
              <div>
                <h3 className="text-xl font-semibold text-primary-navy mb-4 underline">Client Documents</h3>
                <ul className="space-y-2">
                  {visaInfo.clientDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-gold mt-1">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pluto Assistance */}
              <div>
                <h3 className="text-xl font-semibold text-primary-navy mb-4 underline">Pluto Assistance</h3>
                <ul className="space-y-2">
                  {visaInfo.assistance.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-gold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Notes */}
              <div>
                <h3 className="text-xl font-semibold text-primary-navy mb-4 underline">Special Note</h3>
                <ul className="space-y-2">
                  {visaInfo.specialNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-gold mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-xl font-semibold text-primary-navy mb-4 underline">FAQ's</h3>
                <div className="space-y-2">
                  {visaInfo.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-medium text-primary-navy">
                          {openFaqIndex === index ? '–' : '+'} {faq.question}
                        </span>
                        {openFaqIndex === index ? (
                          <Minus className="text-primary-coral" size={20} />
                        ) : (
                          <Plus className="text-primary-teal" size={20} />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-gray-50 text-gray-700">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-green-600 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-semibold text-center">Enquiry Form</h2>
              </div>
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-b-lg p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adult</label>
                    <input
                      type="number"
                      name="adults"
                      min="0"
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Child</label>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      value={formData.children}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Infant</label>
                    <input
                      type="number"
                      name="infants"
                      min="0"
                      value={formData.infants}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    value={formData.nationality}
                    onChange={handleInputChange}
                    placeholder="Select nationality"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Where did you hear about us?
                  </label>
                  <select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  >
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    required
                    className="w-4 h-4 text-primary-teal border-gray-300 rounded focus:ring-primary-teal"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700">
                    I'm not a robot
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Container>
      </FadeInSection>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
    </div>
  );
};

export default VisaDetailPage;

