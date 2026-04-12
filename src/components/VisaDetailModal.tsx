import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface VisaDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  visaType: 'canada' | 'usa' | 'uk' | 'schengen' | null;
}

const visaDetails: Record<string, { title: string; price: string; requirements: string[]; services?: string[]; processingTime?: string; disclaimer: string }> = {
  canada: {
    title: 'Canada Tourist Visa',
    price: 'Starting from 1200 AED',
    requirements: [
      'Original passport, valid for 6 months or more',
      'UAE residence visa, valid for 4 months or more',
      'No Objection Certificate (Addressed to Embassy of Canada to the United Arab Emirates)',
      'Original bank statement for the last 3 months with bank stamp',
      'Recent 2 passport size photo in white background (Photoshoot available in our office)',
      'Previous visa copy of your travel history',
      'Additional requirements for company owners or partners:',
      'Trade licenses copy with your name on it'
    ],
    services: [
      'Expert advice on documentation needed for Canada visa application',
      'Cover letter',
      'Book tickets & hotels',
      'Fill online visa application',
      'Sort your application and booking of appointment for biometrics'
    ],
    processingTime: '2-3 months processing time',
    disclaimer: 'Visa fees, requirements, documentation, and processing timelines are subject to change without prior notice and vary based on embassy/consulate regulations and applicant profile. Approval, validity, and processing time of visas are solely at the discretion of the respective embassy or immigration authority. Service charges are non-refundable once the application process has begun. Additional charges may apply if required by the embassy or due to changes in government fees. Terms & Conditions apply.'
  },
  usa: {
    title: 'US Visa',
    price: 'Starting from 1200 AED',
    requirements: [
      'Scanned Colored passport copy',
      'Scanned Colored visa page',
      'Scanned passport size photo with white background',
      'Scanned copy of previous US Visa (if any)',
      'Scanned copy of the Emirates ID',
      'Online Appointment Charges: AED 1200 per applicant, inclusive of service charges. Note: Please be informed that, effective July 11, 2025, the government fees have been revised and have increased. The updated cost will be provided at the time of completing the final form submission.',
      'Note: Kindly note that preparation and completion of the application will take at least 2 working days. So the sooner you complete all the details needed the better.',
      'The below documents has to be submitted at the time of interview:',
      '- Original passport with 6 months validity upon return from United States',
      '- 1 recent passport-sized photograph (45mm x 35mm) color photograph of your face',
      '- Original previous 6 months Bank statement with Bank Stamp',
      '- NOC letter from the Company',
      '- Invitation from any organization in USA (If any) in case of Business application',
      'Both letter should specify the duration of Visa and number of entries, purpose of visit (details), Description about the company and passport details of the applicant like Name, Nationality, and Passport number.',
      '- Passport copy of the USA Signatory-in case of business application',
      '- Details of applicant\'s last visit to USA',
      '- Tenancy contact in the UAE',
      '- Emirates ID copy',
      '- UAE residence visa copy',
      '- Copies of other valid visas',
      '- Copy of previous USA visa if issued in last 10 years',
      '- Passport copy-bio page and last page',
      '- For any medical emergency/business meeting-letter stating your situation by the USA medical institute/or business organization',
      'Note: Visa processing can vary greatly in length, from a few days to a few months. It is recommended that applicants apply at least four months before their intended date of travel. The consulate strongly recommends against purchasing non-refundable airline tickets until the visa is approved and stamped in your passport. Additional charges might occur upon submission of the application. Additional charges will be there upon submission of application.'
    ],
    disclaimer: 'Visa fees, requirements, documentation, and processing timelines are subject to change without prior notice and vary based on embassy/consulate regulations and applicant profile. Approval, validity, and processing time of visas are solely at the discretion of the respective embassy or immigration authority. Service charges are non-refundable once the application process has begun. Additional charges may apply if required by the embassy or due to changes in government fees. Terms & Conditions apply.'
  },
  uk: {
    title: 'UK Visa',
    price: 'Starting from 1200 AED',
    requirements: [
      '* Original Passport with a validity of 6 months (must have 2 blank pages), valid Residence Visa, EID copies.',
      '* Photograph in white background, 45x35mm',
      '* NOC letter with Salary from company/Sponsor with pay slips for last 6 months, if salary varies',
      '* 6 months bank statement in original with bank stamped; sufficient funds (Should not be 1 week old during submission day) Please note, cash deposits and other transfers (except salary) are not acceptable.',
      '* Student ID & Bonafide (leave) certificate from School',
      '* Copy of the old visas/travel history for any country (if any)',
      '* Invitation letter, accommodation proof, Employment letter/Bank statement and',
      '* Passport/UK visa copy of the inviting person in UK (If any relatives)',
      '* Ticket & Hotel itinerary (we can assist)',
      '* Marriage certificate / Birth Certificate (for dependent)',
      '* Tenancy contract in English',
      '* Any other proof of income or savings in residence or home country or any country',
      '* Invitation letter & registration certificate from company in UK, for Business visa',
      '* Company Trade License, for Business visa or Self Employed',
      'Processing time for the visa would be around 15-20 Working Days after the submission, with a cost of 1199 AED per person (visa fee for 6 months validity, uploading/scanning docs and assistance charges). All Applicant must visit VFS on the appointment date for biometric and Passport submission.'
    ],
    disclaimer: 'Visa fees, requirements, documentation, and processing timelines are subject to change without prior notice and vary based on embassy/consulate regulations and applicant profile. Approval, validity, and processing time of visas are solely at the discretion of the respective embassy or immigration authority. Service charges are non-refundable once the application process has begun. Additional charges may apply if required by the embassy or due to changes in government fees. Terms & Conditions apply.'
  },
  schengen: {
    title: 'Schengen Visa',
    price: 'From 350 AED',
    requirements: [],
    disclaimer: 'Visa fees, requirements, documentation, and processing timelines are subject to change without prior notice and vary based on embassy/consulate regulations and applicant profile. Approval, validity, and processing time of visas are solely at the discretion of the respective embassy or immigration authority. Service charges are non-refundable once the application process has begun. Additional charges may apply if required by the embassy or due to changes in government fees. Terms & Conditions apply.'
  }
};

const VisaDetailModal: React.FC<VisaDetailModalProps> = ({ isOpen, onClose, visaType }) => {
  const detail = visaType ? visaDetails[visaType] : null;

  if (!detail) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-4xl bg-white rounded-lg sm:rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700 touch-manipulation"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-4 pr-8">
                {detail.title}
              </h2>
              
              <div className="mb-6">
                <p className="text-xl sm:text-2xl font-semibold text-primary-gold">
                  {detail.price}
                </p>
              </div>

              {detail.requirements.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-navy mb-3">Requirements</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    {detail.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary-gold">•</span>
                        <span className={req.startsWith('*') ? 'font-medium' : req.startsWith('-') ? 'ml-4' : ''}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detail.services && detail.services.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-navy mb-3">Our service for Canada visa documentation:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    {detail.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary-gold">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detail.processingTime && (
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-navy mb-2">Processing time:</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{detail.processingTime}</p>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-navy mb-3">Disclaimer:</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{detail.disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisaDetailModal;








