import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Home } from 'lucide-react';

const CALL_NUMBER = '+971509110065';
const WHATSAPP_URL = `https://wa.me/${CALL_NUMBER}`;
const META_PIXEL_ID = '2840110662803341';

export default function ThankYouPage() {
  // Meta Pixel: load script, init, and track Lead on thank you page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as any;
    if (!w.fbq) {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      w.fbq('init', META_PIXEL_ID);
      w.fbq('track', 'Lead');
    } else {
      w.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen bg-luxury-pearl flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-2">
          Thank You
        </h1>
        <p className="text-luxury-slate mb-8">
          We have received your request. Our team will get back to you shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:${CALL_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 bg-primary-teal hover:bg-primary-navy text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 border-2 border-primary-teal text-primary-navy hover:bg-primary-teal hover:text-white font-semibold px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
