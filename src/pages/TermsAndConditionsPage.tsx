import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const TermsAndConditionsPage: React.FC = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the services of Pluto Travels LLC ("we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting on our website.`
    },
    {
      title: '2. Services Description',
      content: `Pluto Travels LLC provides comprehensive travel services including but not limited to:
      • Corporate travel management and booking services
      • Personal travel planning and arrangements
      • MICE (Meetings, Incentives, Conferences, and Exhibitions) services
      • Visa processing and documentation services
      • Holiday packages and tour arrangements
      • Platinum concierge services
      • Specialized industry travel solutions
      
      All services are subject to availability and the terms and conditions of our service providers (airlines, hotels, car rental companies, etc.).`
    },
    {
      title: '3. Booking and Payment Terms',
      content: `• All bookings are subject to availability and confirmation from service providers
      • Prices are quoted in UAE Dirhams (AED) unless otherwise stated and are subject to change without notice
      • Full payment or deposit may be required at the time of booking, depending on the service type
      • Payment methods accepted include credit cards, bank transfers, and other approved payment methods
      • All prices are inclusive of applicable taxes unless otherwise stated
      • We reserve the right to refuse any booking at our discretion
      • Bookings are confirmed only upon receipt of payment and confirmation from service providers`
    },
    {
      title: '4. Cancellation and Refund Policy',
      content: `• Cancellation policies vary depending on the service provider and type of booking
      • Cancellation fees may apply as per the terms of airlines, hotels, and other service providers
      • Refunds, if applicable, will be processed according to the cancellation policy of the respective service provider
      • Processing time for refunds may take 7-14 business days
      • No-show charges may apply for unused bookings
      • Travel insurance is recommended to protect against unforeseen circumstances
      • Please review specific cancellation terms at the time of booking`
    },
    {
      title: '5. Travel Documents and Requirements',
      content: `• It is your responsibility to ensure you have valid travel documents (passport, visas, health certificates, etc.)
      • We provide visa assistance services, but final approval is subject to the relevant authorities
      • We are not responsible for visa rejections or delays by immigration authorities
      • You must comply with all entry requirements of your destination country
      • Travel insurance is strongly recommended for all international travel
      • You are responsible for checking and complying with health and vaccination requirements`
    },
    {
      title: '6. Travel Insurance',
      content: `We strongly recommend that all travelers obtain comprehensive travel insurance covering medical expenses, trip cancellation, baggage loss, and other travel-related risks. We can assist you in obtaining travel insurance, but the final decision and coverage are your responsibility.`
    },
    {
      title: '7. Limitation of Liability',
      content: `• Pluto Travels LLC acts as an intermediary between you and service providers (airlines, hotels, etc.)
      • We are not liable for any loss, damage, injury, or inconvenience caused by the acts, omissions, or negligence of service providers
      • We are not responsible for delays, cancellations, or changes made by airlines, hotels, or other service providers
      • Our liability is limited to the commission we receive for arranging the service
      • We are not liable for any indirect, consequential, or incidental damages
      • Force majeure events (natural disasters, pandemics, political unrest, etc.) are beyond our control and we are not liable for resulting disruptions
      • **WhatsApp Platform Limitations:** We are not liable for any issues, disruptions, or failures related to the WhatsApp platform, including but not limited to:
        - Service outages or technical failures of WhatsApp or Meta's services
        - Delayed or undelivered messages due to platform issues
        - Third-party misuse of the WhatsApp platform
        - Security breaches or data incidents on WhatsApp's infrastructure
        - Changes to WhatsApp's terms of service or functionality
      • We disclaim all liability for any loss or damage arising from external factors beyond our reasonable control, including issues with third-party communication platforms`
    },
    {
      title: '8. Service Provider Terms',
      content: `All bookings are subject to the terms and conditions of the respective service providers (airlines, hotels, car rental companies, etc.). These terms may include but are not limited to:
      • Check-in and check-out times
      • Baggage allowances and restrictions
      • Seat selection and meal preferences
      • Special requests and accessibility requirements
      • Age restrictions and child policies
      
      We will communicate relevant terms to you, but you are responsible for reviewing and understanding all service provider terms.`
    },
    {
      title: '9. Changes and Modifications',
      content: `• Service providers may change schedules, prices, or services without notice
      • We will notify you of any significant changes as soon as we become aware of them
      • We are not responsible for changes made by service providers
      • You may be entitled to compensation or alternatives depending on the nature of the change and the service provider's policy
      • Additional charges may apply for changes requested by you after booking confirmation`
    },
    {
      title: '10. Communication and WhatsApp Messaging',
      content: `By using our services and providing your phone number, you explicitly agree to receive communications from us via WhatsApp, including:
      • Transactional messages related to your bookings, confirmations, and order updates
      • Customer support messages and responses to your inquiries
      • Promotional and marketing messages (with your consent)
      • Important travel updates and notifications
      
      You acknowledge that standard messaging rates may apply as per your mobile service provider's terms. You can opt out of promotional WhatsApp messages at any time by replying "STOP" or contacting us directly.`
    },
    {
      title: '11. User Responsibilities',
      content: `You agree to:
      • Provide accurate and complete information when making bookings, including correct contact details (phone number, email address)
      • Ensure all travel documents are valid and in order
      • Comply with all applicable laws and regulations
      • Respect the terms and conditions of service providers
      • Behave appropriately and respectfully during travel
      • Notify us immediately of any issues or concerns
      • Review all booking confirmations and travel documents carefully
      • Arrive at airports, hotels, and other venues on time as specified
      • Not misuse the WhatsApp communication channel, including but not limited to:
        - Sending spam, abusive, or inappropriate messages
        - Attempting to circumvent our communication systems
        - Using automated tools or bots to interact with our WhatsApp service
        - Sharing false or misleading information
      
      Failure to comply with these responsibilities may result in termination of services and legal action where appropriate.`
    },
    {
      title: '12. Opt-Out and Grievance Redressal',
      content: `**Opt-Out Mechanism:**
      You have the right to opt out of receiving promotional and marketing communications via WhatsApp at any time by:
      • Replying "STOP" or "UNSUBSCRIBE" to any WhatsApp message from us
      • Contacting us via email at sapna@plutotravels.ae or phone at +971 50 911 0065
      • Clearly stating your request to stop receiving specific types of communications
      
      Please note that opting out of promotional messages does not affect our ability to send you essential transactional messages related to your active bookings or services.
      
      **Grievance Redressal:**
      If you have any complaints, concerns, or grievances regarding our services or communication practices, please contact us:
      • Email: sapna@plutotravels.ae
      • Phone: +971 50 911 0065 | 04 392 0930
      • Address: Prism Tower, Business Bay, Dubai, UAE
      
      We are committed to addressing your concerns promptly and fairly. We will acknowledge your complaint within 48 hours and work towards resolution within a reasonable timeframe.`
    },
    {
      title: '13. Intellectual Property',
      content: `All content on our website, including text, graphics, logos, images, and software, is the property of Pluto Travels LLC or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.`
    },
    {
      title: '14. Privacy and Data Protection',
      content: `Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.`
    },
    {
      title: '15. Dispute Resolution',
      content: `• Any disputes arising from these terms or our services will be governed by the laws of the United Arab Emirates
      • Disputes will be subject to the exclusive jurisdiction of the courts of Dubai, UAE
      • We encourage resolution of disputes through direct communication and negotiation
      • If a dispute cannot be resolved amicably, it may be referred to mediation or arbitration as appropriate`
    },
    {
      title: '16. Force Majeure',
      content: `We are not liable for any failure or delay in performance resulting from circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, war, terrorism, government actions, strikes, or failures of service providers.`
    },
    {
      title: '17. Severability',
      content: `If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.`
    },
    {
      title: '18. Updates to Terms and Conditions',
      content: `We reserve the right to modify, update, or amend these Terms and Conditions at any time to reflect changes in our services, legal requirements, or business practices. When we make material changes to these terms, we will notify you through:
      • Posting the updated Terms and Conditions on this page with an updated "Last Updated" date
      • Sending you a notification via email or WhatsApp (if you have provided contact information)
      • Displaying a prominent notice on our website
      
      Your continued use of our services after such changes constitutes acceptance of the updated Terms and Conditions. We encourage you to review these terms periodically to stay informed about your rights and obligations.
      
      If you do not agree with any changes to these Terms and Conditions, you should discontinue using our services and contact us to discuss your concerns.`
    },
    {
      title: '19. Entire Agreement',
      content: `These Terms and Conditions, together with our Privacy Policy and any specific terms provided at the time of booking, constitute the entire agreement between you and Pluto Travels LLC regarding the use of our services.`
    },
    {
      title: '20. Contact Information',
      content: `For questions, concerns, or inquiries regarding these Terms and Conditions, please contact us:

      Pluto Travels LLC
      Prism Tower, Business Bay
      Dubai, United Arab Emirates
      Email: sapna@plutotravels.ae
      Phone: +971 50 911 0065
      Office: 04 392 0930
      
      We are available to assist you Monday through Friday, 9:00 AM to 6:00 PM GST, and offer 24/7 emergency support for urgent travel matters.`
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
              Terms and Conditions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-6">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
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
              transition={{ duration: 0.6, delay: 1.7 }}
              className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-luxury-pearl to-luxury-silver rounded-lg sm:rounded-xl border border-primary-teal/20"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-primary-navy mb-3 sm:mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                If you have any questions about these Terms and Conditions or need clarification on any aspect, 
                please don't hesitate to reach out to us. We're here to help ensure you have a clear understanding 
                of our services and your rights and responsibilities.
              </p>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base space-y-1.5 sm:space-y-2">
                <p className="break-words"><strong className="text-primary-navy">Email:</strong> <a href="mailto:sapna@plutotravels.ae" className="text-primary-teal hover:underline">sapna@plutotravels.ae</a></p>
                <p className="break-words"><strong className="text-primary-navy">Phone:</strong> <a href="tel:+971509110065" className="text-primary-teal hover:underline">+971 50 911 0065</a> | <a href="tel:+97143920930" className="text-primary-teal hover:underline">04 392 0930</a></p>
                <p className="break-words"><strong className="text-primary-navy">Dubai Office:</strong> Prism Tower, Business Bay, Dubai, UAE</p>
                <p className="break-words"><strong className="text-primary-navy">Ras Al Khaimah Office:</strong> Shop-3, 208 Sheikh Mohamed Bin Salem Rd - Dafan Ras Al Khaimah - Ras Al Khaimah, Pluto travels and tourism</p>
                <p className="break-words"><strong className="text-primary-navy">Ahmedabad Office:</strong> SAL Hospital & Medical Institute, Maple Tree, Nr. Surdhara Circle, Road, Ahmedabad, Gujarat 380052, India</p>
                <p className="break-words"><strong className="text-primary-navy">Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM GST</p>
                <p className="break-words"><strong className="text-primary-navy">Emergency Support:</strong> 24/7 Available</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;

