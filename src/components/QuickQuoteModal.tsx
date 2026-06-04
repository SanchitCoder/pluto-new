import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SITE } from '../lib/siteConfig';

type QuickQuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConsult: () => void;
};

export default function QuickQuoteModal({ isOpen, onClose, onConsult }: QuickQuoteModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('corporate');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const webhookUrl =
    import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL ||
    'https://n8n.srv981435.hstgr.cloud/webhook/contact';

  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setServiceType('corporate');
    setMessage('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name and email.');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: 'Quick Quote Enquiry',
          message: message.trim() || `Quick quote request for ${serviceType}`,
          serviceType,
          source: 'quick-quote-bar',
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Could not send enquiry. Please call us or use the full contact form.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button type="button" className="absolute inset-0 bg-black/60" onClick={handleClose} aria-label="Close" />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            role="dialog"
            aria-labelledby="quick-quote-title"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 id="quick-quote-title" className="text-xl font-bold text-luxury-darkBlue">
                  Quick Enquiry
                </h2>
                <p className="mt-1 text-sm text-gray-600">We respond within 24 hours — often much faster.</p>
              </div>
              <button type="button" onClick={handleClose} className="rounded-lg p-1 text-gray-500 hover:bg-gray-100" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-6 text-center">
                <CheckCircle className="mx-auto mb-3 text-green-600" size={40} />
                <p className="font-semibold text-luxury-darkBlue">Thank you — we&apos;ll be in touch shortly.</p>
                <button type="button" onClick={handleClose} className="mt-4 text-sm font-semibold text-primary-teal hover:underline">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name *"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal"
                />
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal"
                >
                  <option value="corporate">Corporate Travel</option>
                  <option value="mice">MICE & Events</option>
                  <option value="luxury">Luxury / VIP Travel</option>
                  <option value="visa">Visa Services</option>
                  <option value="holidays">Holiday Packages</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your trip or requirements (optional)"
                  rows={3}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-primary-teal focus:outline-none focus:ring-1 focus:ring-primary-teal"
                />
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-navy py-3 text-sm font-semibold text-white hover:bg-primary-navy/90 disabled:opacity-60"
                >
                  <Send size={16} />
                  {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
                </button>
                <p className="text-center text-xs text-gray-500">
                  Or call {SITE.phoneOfficeDisplay} ·{' '}
                  <button type="button" onClick={onConsult} className="font-semibold text-primary-teal hover:underline">
                    Book a full consultation
                  </button>
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
