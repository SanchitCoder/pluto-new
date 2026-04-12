import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [webhookUrl] = useState(import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL || 'https://n8n.srv981435.hstgr.cloud/webhook/contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          serviceType: formData.serviceType,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will be contacting you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: 'general'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 50 911 0065', ' 04 392 0930'],
      action: 'tel:+971509110065'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sapna@plutotravels.ae', 'sales@plutotravels.ae'],
      action: 'mailto:sapna@plutotravels.ae'
    },
    {
      icon: MapPin,
      title: 'Dubai Office',
      details: ['Prism Tower, Business Bay', 'Dubai, UAE'],
      action: 'https://maps.google.com/?q=Business+Bay+Dubai'
    },
    {
      icon: MapPin,
      title: 'Ras Al Khaimah Office',
      details: ['Shop-3, 208 Sheikh Mohamed Bin Salem Rd', 'Dafan Ras Al Khaimah - Ras Al Khaimah', 'Pluto travels and tourism'],
      action: 'https://maps.google.com/?q=208+Sheikh+Mohamed+Bin+Salem+Rd+Ras+Al+Khaimah'
    },
    {
      icon: MapPin,
      title: 'Ahmedabad Office',
      details: ['SAL Hospital & Medical Institute, Maple Tree', 'Nr. Surdhara Circle, Road', 'Ahmedabad, Gujarat 380052, India'],
      action: 'https://maps.google.com/?q=SAL+Hospital+Medical+Institute+Ahmedabad+Gujarat+380052'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative py-20 bg-gradient-to-br from-primary-navy via-primary-darkBlue to-primary-teal">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to plan your next extraordinary journey? We're here to make it happen.
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Contact Form & Info Section */}
      <FadeInSection className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-heading text-primary-navy mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="personal">Personal Travel</option>
                      <option value="mice">MICE & Events</option>
                      <option value="platinum">Platinum Concierge</option>
                      <option value="holidays">Holiday Packages</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your travel needs, questions, or how we can help you..."
                  />
                </div>

                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : formStatus.type === 'error'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}
                  >
                    {formStatus.type === 'success' && <CheckCircle size={20} />}
                    {formStatus.type === 'error' && <AlertCircle size={20} />}
                    {formStatus.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span className="text-sm font-medium">{formStatus.message}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-gradient-to-r from-primary-teal to-primary-navy text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading text-primary-navy mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help you create unforgettable travel experiences. 
                  Reach out to us through any of the channels below, and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-300 ${
                      info.action 
                        ? 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg cursor-pointer' 
                        : 'bg-gray-50'
                    }`}
                    onClick={info.action ? () => window.open(info.action, '_blank') : undefined}
                  >
                    <div className={`p-3 rounded-lg ${
                      info.action 
                        ? 'bg-primary-teal text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      <info.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary-navy mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-accent-orange to-accent-coral p-6 rounded-xl text-white"
              >
                <h3 className="font-semibold text-lg mb-2">24/7 Emergency Support</h3>
                <p className="text-white/90 mb-4">
                  For urgent travel assistance or emergencies, our dedicated support team is available around the clock.
                </p>
                <a 
                  href="tel:+971509110065" 
                  className="inline-flex items-center gap-2 bg-white text-accent-orange font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={16} />
                  Call Emergency Line
                </a>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </FadeInSection>

      {/* Map Section */}
      <FadeInSection className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading text-primary-navy mb-4">Visit Our Office</h2>
            <p className="text-gray-600 text-lg">
              Located in the heart of Dubai's Business Bay, we welcome you to visit our office for a personal consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Business Bay, Dubai, UAE</p>
                <a 
                  href="https://maps.google.com/?q=Business+Bay+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-primary-teal text-white px-6 py-2 rounded-lg hover:bg-primary-navy transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>
    </div>
  );
};

export default ContactPage;
