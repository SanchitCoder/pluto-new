import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: `Pluto Travels LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. By using our services, you agree to the collection and use of information in accordance with this policy.`
    },
    {
      title: '2. Information We Collect',
      content: `We collect information that you provide directly to us, including but not limited to:
      • Personal identification information (name, email address, phone number, passport details)
      • Travel preferences and requirements
      • Payment information (processed securely through third-party payment processors)
      • Communication records and correspondence, including WhatsApp messages and conversations
      • Information automatically collected when you visit our website (IP address, browser type, device information, usage patterns)
      
      By providing your phone number and engaging with us via WhatsApp, you acknowledge that we collect and process your contact information and message content for the purposes outlined in this policy.`
    },
    {
      title: '3. How We Use Your Information',
      content: `We use the information we collect to:
      • Provide, maintain, and improve our travel services
      • Process bookings, reservations, and transactions
      • Communicate with you about your travel arrangements, inquiries, and updates via email, phone, and WhatsApp
      • Send you transactional messages via WhatsApp regarding your bookings, order updates, confirmations, and customer support
      • Send you promotional materials, newsletters, and marketing communications via WhatsApp (with your explicit consent)
      • Respond to your questions, comments, and requests through various communication channels including WhatsApp
      • Provide customer support and assistance through WhatsApp messaging
      • Monitor and analyze usage patterns and trends
      • Detect, prevent, and address technical issues and security threats
      • Comply with legal obligations, including Meta's data handling requirements, and enforce our terms and conditions`
    },
    {
      title: '4. Information Sharing and Disclosure',
      content: `We do not sell your personal information. We may share your information with:
      • Service providers and business partners who assist us in operating our business and providing services (airlines, hotels, car rental companies, visa processing agencies)
      • Third-party platforms and service providers, including:
        - WhatsApp API providers and messaging service platforms that facilitate our WhatsApp communication
        - CRM (Customer Relationship Management) tools and systems for managing customer interactions
        - Analytics platforms and tools for analyzing website usage and customer behavior
        - Cloud storage and hosting providers for secure data storage
      • Legal authorities when required by law or to protect our rights
      • Business transfers in the event of a merger, acquisition, or sale of assets
      • With your explicit consent for any other purpose
      
      All third-party service providers are contractually obligated to protect your information and use it only for the purposes we specify.`
    },
    {
      title: '5. Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      • Encryption of data in transit and at rest
      • Secure storage systems with restricted access controls
      • Regular security assessments and updates
      • Employee training on data protection and privacy
      • Compliance with industry-standard security protocols
      
      Your personal information, including WhatsApp messages and contact details, is stored securely using industry-standard encryption and access controls. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      title: '6. Data Retention',
      content: `We retain your personal information, including WhatsApp messages and contact details, for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
      • Customer data and communication records are typically retained for the duration of our business relationship and for a reasonable period thereafter (typically 3-5 years) for legal and business purposes
      • Transaction records and booking information are retained as required by law and for accounting purposes
      • Marketing consent records are retained until you withdraw consent or request deletion
      
      When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.`
    },
    {
      title: '7. Your Rights and Opt-Out Options',
      content: `Depending on your location, you may have certain rights regarding your personal information, including:
      • The right to access, update, or delete your personal information
      • The right to object to or restrict certain processing activities
      • The right to data portability
      • The right to withdraw consent where processing is based on consent
      • The right to lodge a complaint with a data protection authority
      
      **WhatsApp Opt-Out/Unsubscribe Mechanism:**
      You have the right to opt out of receiving WhatsApp messages from us at any time. To unsubscribe:
      • Reply "STOP" or "UNSUBSCRIBE" to any WhatsApp message from us
      • Contact us directly via email at sapna@plutotravels.ae or phone at +971 50 911 0065
      • Clearly state your request to stop receiving WhatsApp communications
      
      Once you opt out, we will stop sending you promotional and marketing messages via WhatsApp. However, we may still send you essential transactional messages related to your active bookings or services, as these are necessary for the fulfillment of our contractual obligations.
      
      To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.`
    },
    {
      title: '8. Cookies and Tracking Technologies',
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings, though disabling cookies may affect website functionality.`
    },
    {
      title: '9. Third-Party Links',
      content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`
    },
    {
      title: '10. Children\'s Privacy',
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.`
    },
    {
      title: '11. International Data Transfers',
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries.
      
      We ensure that appropriate safeguards are in place for international data transfers, including compliance with Meta's data handling requirements and applicable data protection regulations.`
    },
    {
      title: '12. Compliance with Legal Obligations',
      content: `We are committed to complying with all applicable data protection laws and regulations, including:
      • UAE Federal Law on Data Protection
      • General Data Protection Regulation (GDPR) for EU residents
      • Meta's data handling requirements and WhatsApp Business Policy
      • Other relevant local and international data protection legislation
      
      We regularly review and update our practices to ensure ongoing compliance with these legal obligations and industry standards.`
    },
    {
      title: '13. Changes to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
      • Posting the new Privacy Policy on this page and updating the "Last Updated" date
      • Sending you a notification via email or WhatsApp (if you have provided consent)
      • Displaying a prominent notice on our website
      
      Your continued use of our services after such changes constitutes acceptance of the updated policy. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.`
    },
    {
      title: '14. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

      Pluto Travels LLC
      Prism Tower, Business Bay
      Dubai, United Arab Emirates
      Email: sapna@plutotravels.ae
      Phone: +971 50 911 0065
      Office: 04 392 0930`
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-6">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/70 mt-3 sm:mt-4">
              Last Updated: January 2025
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Content Section */}
      <FadeInSection className="py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 sm:mb-10 md:mb-12"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-primary-navy mb-3 sm:mb-4 md:mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <div className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed md:leading-relaxed whitespace-pre-line break-words">
                    {section.content.split('\n').map((line, idx) => {
                      // Check if line starts with bullet point or is a nested item
                      const isBullet = line.trim().startsWith('•');
                      const isNested = line.trim().startsWith('-');
                      const isBold = line.trim().startsWith('**') && line.trim().endsWith('**');
                      
                      if (isBold) {
                        const boldText = line.replace(/\*\*/g, '');
                        return (
                          <p key={idx} className="mb-2 sm:mb-3 font-semibold text-primary-navy text-sm sm:text-base md:text-lg">
                            {boldText}
                          </p>
                        );
                      }
                      
                      if (isBullet) {
                        return (
                          <p key={idx} className="mb-1.5 sm:mb-2 md:mb-2.5 pl-4 sm:pl-5 md:pl-6 text-xs sm:text-sm md:text-base lg:text-lg">
                            {line}
                          </p>
                        );
                      }
                      
                      if (isNested) {
                        return (
                          <p key={idx} className="mb-1 sm:mb-1.5 md:mb-2 pl-8 sm:pl-10 md:pl-12 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                            {line}
                          </p>
                        );
                      }
                      
                      if (line.trim() === '') {
                        return <br key={idx} />;
                      }
                      
                      return (
                        <p key={idx} className="mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-luxury-pearl to-luxury-silver rounded-lg sm:rounded-xl border border-primary-teal/20"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-3 sm:mb-4">
                Questions About Your Privacy?
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                If you have any questions or concerns about how we handle your personal information, 
                or if you wish to exercise your privacy rights, please don't hesitate to contact us. 
                We are committed to addressing your concerns promptly and transparently.
              </p>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-1.5 sm:space-y-2">
                <p className="break-words"><strong className="text-primary-navy">Email:</strong> <a href="mailto:sapna@plutotravels.ae" className="text-primary-teal hover:underline">sapna@plutotravels.ae</a></p>
                <p className="break-words"><strong className="text-primary-navy">Phone:</strong> <a href="tel:+971509110065" className="text-primary-teal hover:underline">+971 50 911 0065</a> | <a href="tel:+97143920930" className="text-primary-teal hover:underline">04 392 0930</a></p>
                <p className="break-words"><strong className="text-primary-navy">Dubai Office:</strong> Prism Tower, Business Bay, Dubai, UAE</p>
                <p className="break-words"><strong className="text-primary-navy">Ras Al Khaimah Office:</strong> Shop-3, 208 Sheikh Mohamed Bin Salem Rd - Dafan Ras Al Khaimah - Ras Al Khaimah, Pluto travels and tourism</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

